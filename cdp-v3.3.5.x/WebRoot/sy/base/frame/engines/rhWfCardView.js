GLOBAL.namespace("rh.vi");

rh.vi.wfCardView = function(options) {
	var defaults = {
		"id" : options.sId + "-viWfCardView",
		"sId" : "",// 服务ID
		"pId" : options.sId,
		"parHandler" : null,// 主卡片的句柄
		"pkCode" : ""
	};
	var _self = this;
	this.opts = jQuery.extend(defaults, options);
	this._parHandler = this.opts.parHandler;
	this._nextStepNodeCode = "";

	this.procInstId = this._parHandler.itemValue("S_WF_INST");
	this.wfState = this._parHandler.itemValue("S_WF_STATE");

	this.reqdata = {}
	this.reqdata["PI_ID"] = this.procInstId; // 流程实例ID
	this.reqdata["INST_IF_RUNNING"] = this.wfState; // 流程是否在运行
	if (!(this.getNodeInstBean() == undefined)) {
		this.reqdata["NI_ID"] = this.getNodeInstBean().NI_ID;
	}
	this.wfBtns = {};
	this.wfNextBtns = {};
	this.wfNextBtnNames = {};
	this.isSendState = false; // 按钮状态/发送状态(已经点了完成并发送了)
	var penRefresh = jQuery(
			"<a id='parent-refresh' style='display:none;' href='javascript:void(0);'>刷新列表</a>")
			.appendTo(this._parHandler.btnBar);
	penRefresh.bind("click", function() {
		_self._parHandler.refreshFile();
	});

	// 刷新首页，解决保存之后，首页不刷新
	this._refreshMainPage();

	return this;
};

/**
 * 获取卡片对象
 */
rh.vi.wfCardView.prototype.getParHandler = function() {
	return this._parHandler;
};

/**
* 是否流程已启动
**/
rh.vi.wfCardView.prototype.isWorkflow = function(){
	var _self = this; 
	if (typeof(_self._parHandler.getItem("S_WF_INST")) != "undefined" 
			&& _self._parHandler.getItem("S_WF_INST").getValue().length >0 ) {
		return true;
	}
	return false;
}

rh.vi.wfCardView.prototype.render = function() {
	var _self = this;
	//如果存在忽略流程参数，则不加载流程信息。
	if(_self._parHandler.params && _self._parHandler.params["_IGNORE_WF_INFO_"]){
		return;
	}
	
	//判断是否挂了流程
	if (typeof(_self._parHandler.getItem("S_WF_INST")) != "undefined" 
		&& _self._parHandler.getItem("S_WF_INST").getValue().length >0 ) {
		this._btnBar = this._parHandler.btnBar;

		this._bldBtnBar();

		this.nextBtnBar = jQuery("<div id='nextBtnBarDiv'></div>");
		this.nextBtnBar.appendTo(this._btnBar);

		// 一开始就显示所有的按钮
		this.nextStepVar = System.getVar("@NEXT_STEP@");
		if (this.nextStepVar != "saveAndSend") {
			this._bldNextBtnBar(this.getNextStepBean());
		}

		this._doFiledControl();
		// 显示相关文件
		if (this.getAuthBean().isShowRelate == "true") {
			this._bldRelateList();
		}
		Load.scriptJS("/sy/base/frame/engines/rhRealteFiles.js");
		var opts = {};
		opts["wfHandler"] = this;
		//this.wfRelate = new rh.vi.relateFiles(opts);

		/** 显示分发列表
		if (this.getDisplayMode() != "MODE_BASE"
				&& this.getAuthBean().isShowFenfaList == "true") {
			this._bldSendList();
		}
		*/

		// 判断是否锁定 1,锁定，2正常 ， 锁定的文件，全部只读
		if (this.getAuthBean().lockState == "1") {
			this._parHandler.form.disabledAll();

			this._parHandler.headMsg("文件已锁定!");
		}

		if (this._parHandler.itemValue("S_FLAG") == "2") { // 废止
			this._parHandler.headMsg("流程已终止，需在废件箱中恢复");
		}
		
		//初始化意见
		_self.initMind();
		
		//设置文件权限
	    jQuery(_self.getAuthBean().nodeFileControl).each(function(index, fileDef){
	    	var fileItem = _self._parHandler.getItem(fileDef.ID);
	    	if (fileItem) {
	    		if (_self.isLocked()) {
	    			fileItem.setAcl && fileItem.setAcl(1);
	    		} else {
	    			fileItem.setAcl && fileItem.setAcl(fileDef.VALUE);
	    		}
	    	}
	    });	
	    
	    //card页面返回时，默认刷新list页面
	    _self._parHandler._parentRefreshFlag = true;			
	}
};

/**
 * 初始化意见
 */
rh.vi.wfCardView.prototype.initMind = function() {
	var _self = this;
	
	// 动态装载意见代码
	Load.scriptJS("/sy/comm/mind/mind.js");
	var param = {"viewer":_self._parHandler,"id":"rh.cm.mind","servId":_self._parHandler._data["SERV_SRC_ID"]
			,"dataId":_self._parHandler._pkCode,"wfCard":this};
	
	_self.mind = new rh.cm.mind(param);	
	
	if (!_self._parHandler.existSubServ("MINDLIST")) { //没有意见的关联服务
		_self.mind.render();
	} else { //关联了意见，如果定义了意见分组框，将其隐藏
		var mindFieldset = UIConst.MIND_FIELDSET;
		
		var mindGroup = _self._parHandler.form.getGroup(mindFieldset);
		if (!mindGroup) {
			mindGroup = _self._parHandler.form.getGroup(null, UIConst.FITEM_ELEMENT_MIND);
		}
		
		if (mindGroup) {
			mindGroup.hide();
		}
	}
}


/*
 * 意见Code Bean
 */
rh.vi.wfCardView.prototype.getMindCodeBean = function() {
	var _self = this;

	return _self._parHandler.byIdData.mindCodeBean;
};

/*
 * 最终 意见Code Bean
 */
rh.vi.wfCardView.prototype.getTerminalMind = function() {
	var _self = this;

	return _self._parHandler.byIdData.mindTerminal || {};
};

/**
 * 取得固定意见
 */
rh.vi.wfCardView.prototype.getRegularMind = function() {
	var _self = this;
	var result = jQuery.extend({}, _self._parHandler.byIdData.regularMind);
	return result;
}


/**
 * 取得意见类型的对象
 */
rh.vi.wfCardView.prototype.getNodeMindObj = function() {
	var _self = this;
	
	var nodeMind = {};
	
	nodeMind.REGULAR = JsonToStr(_self.getRegularMind());
	nodeMind.TERMINAL = JsonToStr(_self.getTerminalMind());
	nodeMind.GENERAL = JsonToStr(_self.getMindCodeBean());	
	
	return nodeMind;
}



/**
 * 是否能填写最终意见
 */
rh.vi.wfCardView.prototype.canWriteTerminalMind = function() {
	var mindCodeBean = this.getTerminalMind();
	if (mindCodeBean && mindCodeBean.READ_ONLY) {
		if (mindCodeBean.READ_ONLY == "true") {
			return false;
		}
	}

	return true;
}

/**
 * 是否能填写最终意见
 */
rh.vi.wfCardView.prototype.canWriteRegularMind = function() {
	var mindCodeBean = this.getRegularMind();
	if (mindCodeBean && mindCodeBean.READ_ONLY) {
		if (mindCodeBean.READ_ONLY == "true") {
			return false;
		}
	}

	return true;
}

/*
 * 节点实例bean
 */
rh.vi.wfCardView.prototype.getNodeInstBean = function() {
	var _self = this;

	return _self._parHandler.byIdData.nodeInstBean;
};

/**
 * 是否是起草节点，启动工作流的节点 ， 第一次绑定工作流的时候
 */
rh.vi.wfCardView.prototype.isFirstNode = function() {
	var _self = this;
	var nodeInstBean = _self.getNodeInstBean();
	if (nodeInstBean.PRE_NI_ID == "") { // 前节点没有，
		return true;
	}

	return false;
};

/**
 * 是否是起草节点，送出去回来的也算
 */
rh.vi.wfCardView.prototype.isDraftNode = function() {
	var _self = this;
	if (_self.getAuthBean().isDraftNode == "true") {
		return true;
	}

	return false;
};

/**
 * 流程表单是否点了锁定
 */
rh.vi.wfCardView.prototype.isLocked = function() {
	var _self = this;
	var authBean = _self.getAuthBean();
	if (authBean.lockState == "1") { // 锁定了
		return true;
	}

	return false;
};

/*
 * 相关权限 比如能否手写意见， 当前人是否正在处理当前的流程
 */
rh.vi.wfCardView.prototype.getAuthBean = function() {
	var _self = this;
	return _self._parHandler.byIdData.authBean;
};

/*
 * 获取按钮
 */
rh.vi.wfCardView.prototype.getButtonBean = function() {
	var _self = this;
	return _self._parHandler.byIdData.buttonBean;
};

/*
 * 获取页面field控制的数据
 */
rh.vi.wfCardView.prototype.getFieldControlBean = function() {
	var _self = this;
	return _self._parHandler.byIdData.fieldControlBean;
};

/*
 * 获取页面field控制的数据
 */
rh.vi.wfCardView.prototype.getBindTitle = function() {
	var _self = this;
	return _self._parHandler.byIdData.bindTitle;
};

/*
 * 获取下一步的节点列表数据
 */
rh.vi.wfCardView.prototype.getNextStepBean = function() {
	var _self = this;

	if (_self._parHandler.byIdData.nextSteps == undefined
			|| _self._parHandler.byIdData.nextSteps == "undefined") {
		return "";
	}

	return _self._parHandler.byIdData.nextSteps;
};

/*
 * 对页面字段进行控制 , 如隐藏， 必填等控制
 */
rh.vi.wfCardView.prototype._doFiledControl = function() {
	var _self = this;
	var _fileControlData = _self.getFieldControlBean();

	var entirelyControl = _fileControlData.FIELD_CONTROL;
	var exceptionFiledStr = _fileControlData.FIELD_EXCEPTION;
	var updateFiledStr = _fileControlData.FIELD_UPDATE;
	var hiddenFiledStr = _fileControlData.FIELD_HIDDEN;
	var mustFiledStr = _fileControlData.FIELD_MUST;
	var displayFieldStr = _fileControlData.FIELD_DISPLAY;

	var parServID = _self.opts.pId;
	// 可编辑字段
	if (entirelyControl == "false") {
		_self._parHandler.form.disabledAll();
		if (exceptionFiledStr.length > 0) {
			jQuery.each(exceptionFiledStr.split(','), function(i, item) {
				if (_self._parHandler.getItem(item)) {
					_self._parHandler.getItem(item).enabled();
				}
			});
		}
	}

	// 显示字段
	if (displayFieldStr && displayFieldStr.length > 0) {

		var disps = displayFieldStr.split(',');
		jQuery.each(disps, function(i, item) {
			var field = _self._parHandler.getItem(item);
			if (field) {
				field.show();
			}
		});
	}

	// 隐藏字段
	if (hiddenFiledStr.length > 0) {
		jQuery.each(hiddenFiledStr.split(','), function(i, item) {
			var field = _self._parHandler.getItem(item);
			if (field) {
				field.hide();
			}
		});
	}

	// 必填字段
	if (mustFiledStr.length > 0) {
		jQuery.each(mustFiledStr.split(','), function(i, item) {
			_self._parHandler.form.setNotNull(item, true);
		});
	}

	// 显示分组
	var groupDis = _fileControlData.GROUP_DISPLAY || "";
	if (groupDis.length > 0) {
		var groupArr = groupDis.split(',');
		jQuery.each(groupArr, function(i, item) {
			_self._parHandler.showGroup(item);
		});
	}

	// 隐藏分组
	var groupHide = _fileControlData.GROUP_HIDE || "";
	if (groupHide.length > 0) {
		var groupArr = groupHide.split(',');
		jQuery.each(groupArr, function(i, item) {
			_self._parHandler.hideGroup(item);
		});
	}

	// 折叠分组
	var groupExpand = _fileControlData.GROUP_EXPAND || "";
	if (groupExpand.length > 0) {
		var groupArr = groupExpand.split(',');
		jQuery.each(groupArr, function(i, item) {
			_self._parHandler.expandGroup(item);
		});
	}

	// 展开分组
	var groupCollapse = _fileControlData.GROUP_COLLAPSE || "";
	if (groupCollapse.length > 0) {
		var groupArr = groupCollapse.split(',');
		jQuery.each(groupArr, function(i, item) {
			_self._parHandler.collapseGroup(item);
		});
	}
};

/**
 * 刷新下一步的按钮
 */
rh.vi.wfCardView.prototype._refreshNextBtn = function() {
	this._destroyNextBtn();
	this._reloadNextBtn();
}

/**
 * 销毁下一步的按钮
 */
rh.vi.wfCardView.prototype._destroyNextBtn = function() {
	var _self = this;
	jQuery("#nextBtnBarDivCon").remove();
	jQuery(".rhCard-btnBar-bottom").remove();

	_self.wfNextBtns = [];

	_self.wfNextBtnNames = [];
}

/**
 * 重新加载下一步的按钮
 */
rh.vi.wfCardView.prototype._reloadNextBtn = function() {
	var _self = this;
	_self._destroyNextBtn();

	var result = rh_processData(WfActConst.SERV_PROC + ".getNextSteps.do",
			_self.reqdata);

	if (result.rtnStr = "success") {
		_self._bldNextBtnBar(result.nextSteps);
	}
}

/**
 * 保存并发送
 */
rh.vi.wfCardView.prototype.cmSaveAndSend = function() {
	var _self = this;

	// 完成并发送之前所做操作
	if (_self._beforeSaveAndSend() === false) {
		return false;
	}

	// 验证通过
	if (!_self._parHandler.form.validate()) {
		Tip.showError("校验未通过");
		return false;
	}

	// 保存
	var changeData = _self._parHandler.getChangeData();
	if (!jQuery.isEmptyObject(changeData)) {
		_self._parHandler.modifySave(changeData, false);
	}

	if (!_self.mind.saveMind()) { // 保存意见，如果返回true,继续下一步
		return false;
	}

	// 清除功能性按钮
	// jQuery("#funcBtnDivCon").remove();
	// jQuery("#" + GLOBAL.getUnId("save",_self.opts.pId)).hide();
	// jQuery(".rhCard-btnBar-bottom").remove();

	// 循环功能按钮，将其隐藏
	for ( var wfbtn in _self.wfBtns) {
		_self.wfBtns[wfbtn].layoutObj.hide();
	}

	// 显示下一步的按钮
	_self._reloadNextBtn();

	// 构造页面下面的按钮
	_self._parHandler._bldBtnBarBottom();

	_self.isSendState = true;

	// 完成并发送之后所做操作
	_self._afterSaveAndSend();
}

/**
 * 点击完成并发送之前所做的逻辑操作
 */
rh.vi.wfCardView.prototype._beforeSaveAndSend = function() {
	return true;
};

/**
 * 点击完成并发送之后所做的逻辑操作
 */
rh.vi.wfCardView.prototype._afterSaveAndSend = function() {
};

/*
 * 构建下一步卡片按钮条
 */
rh.vi.wfCardView.prototype._bldNextBtnBar = function(_nextData) {
	var _self = this;

	var nextBtnBarCon = jQuery("<div id='nextBtnBarDivCon'></div>");
	nextBtnBarCon.appendTo(_self.nextBtnBar);

	// var _nextData = _self.getNextStepBean();

	jQuery.each(_nextData, function(i, actItem) {
		var temp = jQuery("<a></a>").addClass("rh-icon").addClass(
				"rhGrid-btnBar-a rhCard-btnBar-wfNext");
		temp.attr("id", GLOBAL.getUnId(actItem.NODE_CODE, _self.opts.sId));
		temp.attr("actcode", actItem.NODE_CODE);
		var labelName = jQuery("<span></span>").addClass("rh-icon-inner").text(
				actItem.NODE_NAME);
		temp.append(labelName);
		var icon = jQuery("<span></span>").addClass("rh-icon-img").addClass(
				"btn-deliver");
		temp.append(icon);
		temp.appendTo(nextBtnBarCon);

		if (typeof (actItem.NODE_USER) != "undefined") { // 如果是返回XX的按钮，取得返回人的CODE
			var nextBtnObj = {};
			nextBtnObj.layoutObj = temp;
			nextBtnObj.dataObj = actItem;
			_self.wfNextBtns[actItem.NODE_CODE] = nextBtnObj;

			_self.wfNextBtnNames[actItem.NODE_NAME] = nextBtnObj;

			temp.bind("click", function() {
				var idArray = [ "usr:" + actItem.NODE_USER ];
				var nameArray = [ actItem.NODE_NAME ];
				_self.binderType = "USER";
				if (_self._beforeSongjiao() == false
						|| _self._mindMust() == false
						|| _self.callback(idArray, nameArray) == false) { // 先执行送交前的代码，比如必填意见
					return false;
				}
				_self.reqdata["NODE_CODE"] = actItem.NODE_CODE;
				_self.reqdata["TO_USERS"] = actItem.NODE_USER;
				_self.reqdata["TO_TYPE"] = "3";
				var newActInst = rh_processData("SY_WFE_PROC_DEF.toNext.do",
						_self.reqdata);

				// Tip.show("送交成功",true); IE7 有问题
				alert("已经成功 " + actItem.NODE_NAME);
				_self._parHandler.refresh();
				// 关闭当前页面
				_self._pretendClickBack();
			});

		} else {
			temp.bind("click", function(event) {
				var ifConfirm = true;
				if (actItem.CONFIRM_MSG) {
					ifConfirm = confirm(actItem.CONFIRM_MSG);
				}

				if (!ifConfirm)
					return;
				// 如果条件表达式没有通过则不能送交，且弹出提示
				if (actItem.COND_MSG && actItem.NOT_MEET_COND
						&& actItem.NOT_MEET_COND == "true") {
					alert(actItem.COND_MSG);
					return;
				}

				_self._openSelectOrg(actItem.NODE_CODE, temp, event);
			});

			if (actItem.COND_MSG && actItem.NOT_MEET_COND
					&& actItem.NOT_MEET_COND == "true") {
				temp.attr("disabled", "true");
				temp.attr("title", actItem.COND_MSG);
				temp.removeClass("rh-icon");
				temp.addClass("rh-icon-disable");
			}

			var nextBtnObj = {};
			nextBtnObj.layoutObj = temp;
			nextBtnObj.dataObj = actItem;
			_self.wfNextBtns[actItem.NODE_CODE] = nextBtnObj;

			_self.wfNextBtnNames[actItem.NODE_NAME] = nextBtnObj;
		}
	});

	// 如果是 完成并发送模式， 添加返回按钮
	if (_self.nextStepVar == "saveAndSend") {
		var actItem = {};
		actItem.NODE_CODE = "saveSendBack";
		actItem.NODE_NAME = "返回上一步";

		var temp = jQuery("<a></a>").addClass("rh-icon").addClass(
				"rhGrid-btnBar-a rhCard-btnBar-wfNext");
		temp.attr("id", GLOBAL.getUnId(actItem.NODE_CODE, _self.opts.sId));
		temp.attr("actcode", actItem.NODE_CODE);
		var labelName = jQuery("<span></span>").addClass("rh-icon-inner").text(
				actItem.NODE_NAME);
		temp.append(labelName);
		var icon = jQuery("<span></span>").addClass("rh-icon-img").addClass(
				"btn-sync");
		temp.append(icon);
		temp.appendTo(nextBtnBarCon);

		temp.bind("click", function(event) {
			_self._saveSendBackToWfBtn();
			_self.afterSaveSendBackToWfBtn();
		});

		var nextBtnObj = {};
		nextBtnObj.layoutObj = temp;
		nextBtnObj.dataObj = actItem;
		_self.wfNextBtns[actItem.NODE_CODE] = nextBtnObj;

		_self.wfNextBtnNames[actItem.NODE_NAME] = nextBtnObj;
	}
};

/**
 * 返回上一步之后的操作
 */
rh.vi.wfCardView.prototype.afterSaveSendBackToWfBtn = function() {
};

/**
 * 如果是 完成并发送模式， 重新回到流程按钮
 */
rh.vi.wfCardView.prototype._saveSendBackToWfBtn = function() {
	var _self = this;

	_self.isSendState = false;

	// 销毁下一步的按钮
	_self._destroyNextBtn();

	// 销毁之前的流程按钮数组
	// _self.wfBtns = [];
	// _self._bldBtnBar();

	// 循环功能按钮，将其显示
	for ( var wfbtn in _self.wfBtns) {
		_self.wfBtns[wfbtn].layoutObj.show();
	}

	// 构造下面的一排按钮
	_self._parHandler._bldBtnBarBottom();
}

/**
 * 模拟点击返回的按钮
 */
rh.vi.wfCardView.prototype._pretendClickBack = function() {
	this._parHandler.backClick();
}

/**
 * 刷新首页待办
 */
rh.vi.wfCardView.prototype._refreshMainPage = function() {
	// 刷新首页的待办，主办等区块
	if (parent.Portal.getBlock("SY_COMM_TODO")) {
		parent.Portal.getBlock("SY_COMM_TODO").refresh(); // 刷新待办
	}
	if (parent.Portal.getBlock("SY_COMM_ENTITY")) {
		parent.Portal.getBlock("SY_COMM_ENTITY").refresh(); // 刷新主办
	}
}

/*
 * 构建卡片按钮条, 表单按钮 节点定义转换之后的按钮
 */
rh.vi.wfCardView.prototype._bldBtnBar = function() {
	var _self = this;

	var funcBtnDivCon = jQuery("<div id='funcBtnDivCon'></div>");
	funcBtnDivCon.appendTo(_self._btnBar);

	_self._buttonData = _self.getButtonBean();

	jQuery("#" + GLOBAL.getUnId("save", this.opts.pId)).hide();

	jQuery.each(this._buttonData, function(i, actItem) {
		if (actItem.ACT_CODE == "delete") {
			actItem.ACT_CODE = "deleteDoc";
		}

		var temp = jQuery("<a></a>").addClass("rh-icon").addClass(
				"rhGrid-btnBar-a rhCard-btnBar-wf");
		temp.attr("id", GLOBAL.getUnId(actItem.ACT_CODE, _self.opts.sId));
		temp.attr("actcode", actItem.ACT_CODE);
		var labelName = jQuery("<span></span>").addClass("rh-icon-inner").text(
				actItem.ACT_NAME);
		temp.append(labelName);
		var icon = jQuery("<span></span>").addClass("rh-icon-img").addClass(
				"btn-" + actItem.ACT_CSS);
		temp.append(icon);
		temp.appendTo(funcBtnDivCon);

		_self._act(actItem.ACT_CODE, actItem.SERV_ID, temp, actItem);

		if (actItem.ACT_CODE == "stopParallelWf") {
			_self._parHandler.headMsg("会商尚未完成，不能进行流转操作，可视情况手动选择中止会商，继续流转。");
		}
	});

	if (_self.afterLoadBtn && typeof (_self.afterLoadBtn) == "function") {
		_self.afterLoadBtn();
	}
};

/**
 * 判断返回的组织资源树，是否只有一个人
 */
rh.vi.wfCardView.prototype.treeDataHaseOneMan = function(treeData) {
	if (treeData == "[]") {
		return "multi";
	}

	if (treeData.split("usr:").length == "2") {//
		// 取到这个人，然后直接送这个人，
		var end = treeData.indexOf("}");
		var start = treeData.lastIndexOf("{");
		var userCode = treeData.substring(start + 1, end)

		return userCode;
	}

	return "multi";
};

/**
 * 送交之前执行,业务代码可覆盖此方法
 */
rh.vi.wfCardView.prototype._beforeSongjiao = function() {
};

/**
 * 必填意见的判断，不通过mind去判断了 , 写到这里，直接查数据库
 */
rh.vi.wfCardView.prototype._mindMust = function() {
	var _self = this;
	
	var mindMustReq = _self.getNodeMindObj();
	
	mindMustReq.NI_ID = _self.getNodeInstBean().NI_ID;
	mindMustReq.DATA_ID = _self._parHandler._pkCode;
	
	var rtnData = FireFly.doAct("SY_COMM_MIND", "checkFillMind", mindMustReq, false);	
	
	if (rtnData.pass == "NO") { //没通过检查
		
		alert(rtnData.reason);
		
		return false;
	} else {
		return true;
	}
};

/*
 * 根据 节点信息， 打开人员选择窗口 ，也就是送交人 @param aId 动作ID
 */
rh.vi.wfCardView.prototype._openSelectOrg = function(aId, aObj, event) {
	var _self = this;
	if (_self._beforeSongjiao() == false || _self._mindMust() == false) {
		return false;
	}

	var taObj = aObj;
	var nodeCode = aId;
	_self._nextStepNodeCode = nodeCode;
	var inputName = GLOBAL.getUnId("wfToUser", _self.opts.sId);

	_self.reqdata["NI_ID"] = _self.getNodeInstBean().NI_ID;
	_self.reqdata["NODE_CODE"] = nodeCode;

	var rtnTreeData = rh_processData(
			"SY_WFE_PROC_DEF.getNextStepUsersForSelect.do", _self.reqdata);
	
	if(rtnTreeData.TO_USERS != undefined) {
		if(rtnTreeData.TO_USERS){
			alert("已经成功送交给" + rtnTreeData.TO_USERS);
			// 刷新页面
			_self._parHandler.refresh();
			// 关闭当前页面
			_self._pretendClickBack();
		}else{
			alert("没有找到送交人，请检查流程配置");
		}
		return;
	}

	var treeData = rtnTreeData.treeData;

	if (treeData == "[]") {
		alert("当前节点没有可供选择的人员，请检查工作流配置！");
		return false;
	}

	var sendDirectFlag = System.getVar("@C_SY_WF_DIRECT_SEND@") == "true" ? true : false;
	var oneUserCodes = "";

	var bindTreeTitle = "人员选择";
	this.binderType = rtnTreeData.binderType; // 送交类型

	if (_self.binderType == "ROLE") {
		// 如果是角色，取到角色的CODE
		this._binderRoleCode = rtnTreeData.roleCode;
		bindTreeTitle = "角色选择";
		sendDirectFlag = false;
	} else { // 送人
		var rtnOneValue = _self.treeDataHaseOneMan(treeData);

		if (rtnOneValue == "multi") {
			sendDirectFlag = false;
		} else {
			oneUserCodes = rtnOneValue;
		}
	}

	if (sendDirectFlag) { // 直接送人
		var oneUserObj = StrToJson("{" + oneUserCodes + "}");

		var userCodeArray = new Array();
		userCodeArray.push(oneUserObj.ID);
		var userNameArray = new Array();
		userNameArray.push(oneUserObj.NAME);

		_self._confirmSend(userCodeArray, userNameArray);
	} else { // 显示组织机构树
		treeData = eval("(" + treeData + ")");

		var multiSelect = rtnTreeData.multiSelect; // 是否能多选

		var extendTreeSetting = "{'rhexpand':false,'expandLevel':1,";

		var selectType = "single";
		if (multiSelect == "true") {
			selectType = "multi";
			extendTreeSetting += "'cascadecheck':false,'checkParent':false,'showcheck':true,'childOnly':true";
		} else {
			extendTreeSetting += "'cascadecheck':false,'checkParent':false,'showcheck':false";
		}

		extendTreeSetting += "}";
		extendTreeSetting = StrToJson(extendTreeSetting);

		var configStr = "SY_ORG_USER" + ",{'TYPE':'" + selectType + "'}"; // multi
		// ,
		// single
		var options = {
			"itemCode" : inputName,
			"config" : configStr,
			"hide" : "explode",
			"show" : "blind",
			"rebackCodes" : inputName,
			"replaceData" : treeData,
			"replaceCallBack" : _self._confirmSend,
			"extendDicSetting" : extendTreeSetting,
			"dialogName" : bindTreeTitle,
			"parHandler" : _self
		};

		var dictView = new rh.vi.rhDictTreeView(options);
		dictView.show(event);

		// 是否自动选择最终用户
		if (rtnTreeData.autoSelect == 'true') {
			var users = _findAllUsers(treeData);
			var userIds = new Array();
			jQuery(users).each(function(index, obj) {
				userIds.push(obj.ID);
			});

			dictView.tree.selectNodes(userIds);
			dictView.tree.expandParent();
		}
	}

	/**
	 * 从树数据中取得最终用户
	 */
	function _findAllUsers(treeData) {
		var users = new Array();
		jQuery(treeData).each(function(index, obj) {
			if (obj.CHILD) {
				users = users.concat(_findAllUsers(obj.CHILD));
			} else {
				if (obj.NODETYPE == "usr") {
					users.push(obj);
				}
			}
		});
		return users;
	}
	;
};

/**
 * 将流程送下个节点的人
 */
rh.vi.wfCardView.prototype._confirmSend = function(idArray, nameArray) {
	var _self = this;
	if (_self.callback.call(_self, idArray, nameArray)) { // 判断有没有出部门
		_self._parHandler.shield();
		// 送交的类型 1 送部门+角色 ， 3 送用户
		var toType = "3";

		if (_self.binderType == "ROLE") {
			toType = "1";
			_self.reqdata["TO_DEPT"] = idArray[0].replace("dept:", ""); // 送交部门
			_self.reqdata["TO_ROLE"] = _self._binderRoleCode; // 送交角色
		} else {
			var userArray = new Array();
			jQuery(idArray).each(function(indextrty, intrty) {
				if (intrty.indexOf("usr:") == 0) {
					userArray.push(intrty);
				}
			});

			var userNameStr = userArray.toString().replace(
					new RegExp("usr:", "gm"), "");

			if (userNameStr.length <= 0) {
				alert("没有选中人员，请重新选择送交人员");
				_self._parHandler.shieldHide(); // 清除锁定页面

				return false;
			}
			_self.reqdata["TO_USERS"] = userNameStr; // 送交人 替换掉所有的usr:
		}

		_self.reqdata["TO_TYPE"] = toType; // 类别
		_self.reqdata["NI_ID"] = _self.getNodeInstBean().NI_ID; // 当前节点实例ID
		_self.reqdata["NODE_CODE"] = _self._nextStepNodeCode; // 下个节点CODE

		var result = rh_processData("SY_WFE_PROC_DEF.toNext.do", _self.reqdata);
		// alert(idArray.join(",") + nameArray.join(","));
		// 刷新页面
		_self._parHandler.refresh();
		_self._parHandler.shieldHide(); // 清除锁定页面
		// Tip.show("送交成功",true); //IE7 里有问题

		alert("已经成功送交给" + nameArray.join(","));

		// 关闭当前页面
		_self._pretendClickBack();
	}
};

/**
 * 判断当前发送的人有没出部门
 * 
 * @param idArray
 *            树回写的id数组
 * @param nameArray
 *            树回写的name数组
 */
rh.vi.wfCardView.prototype.callback = function(idArray, nameArray) {
	return true;
}

/*
 * 根据动作绑定相应的方法 @param actId 动作ID
 * 
 */
rh.vi.wfCardView.prototype._act = function(actId, servId, aObj, actItem) {
	var _self = this;
	var taObj = aObj;

	taObj.bind("click", function(event) {

		if (actItem.ACT_MEMO.length > 1 && actItem.ACT_MEMO != "null") {
			var func = new Function(actItem.ACT_MEMO);
			func.apply(_self);
		} else {
			eval("_self." + actItem.ACT_CODE + "(event,actItem)");
		}
	});

	var wfBtnObj = {};
	wfBtnObj.layoutObj = taObj;
	wfBtnObj.dataObj = actItem;

	_self.wfBtns[actItem.ACT_CODE] = wfBtnObj;
};

/**
 * 根据actCode 获取按钮对象
 * @return 按钮对象wfBtnObj,  包含 按钮在页面上的jquery对象 和 act定义数据
 * 	var wfBtnObj = {};
 *	wfBtnObj.layoutObj  页面上的jquery对象
 *	wfBtnObj.dataObj  act定义数据
 *  用法示例
 *  if (_viewer.wfCard) { //卡片页面中需要获取到wfCard的句柄
 *      var actCodeBtnObj = _viewer.wfCard._getBtn('actCode');	
 *      if(actCodeBtnObj){ //需要获取到该按钮
 *              //actCodeBtnObj.layoutObj 即获取到了页面上该按钮的 jquery对象，能直接对其绑定事件
 *   	        var actCodeBtn = actCodeBtnObj.layoutObj;
 *	            actCodeBtn.unbind("click").bind("click",function(event) {...});
 *
 *              //actCodeBtnObj.dataObj 即获取到了页面上该按钮 ACT定义数据对象，能直接获取相应的值
 *              var actCodeBtnData = actCodeBtnObj.dataObj;
 *	            var actCodeBtnMemo = actCodeBtnData.ACT_EXPRESSION; //即得到定义上的操作表达式
 *              var actCodeBtnMemo = actCodeBtnData.ACT_NAME; //即得到按钮名称
 *              ...
 *          }
 *      }
 *  }
 */
rh.vi.wfCardView.prototype._getBtn = function(actCode) {
	return this.wfBtns[actCode];
};

/**
 * 获取送下一步的按钮对象 根据ACT_CODE
 * @return 按钮对象nextBtnObj,  包含 按钮在页面上的jquery对象 和 act定义数据
 * 	var nextBtnObj = {};
 *	nextBtnObj.layoutObj  页面上的jquery对象
 *	nextBtnObj.dataObj  act定义数据
 */
rh.vi.wfCardView.prototype._getWfNextBtn = function(actCode) {
	return this.wfNextBtns[actCode];
};

/**
 * 获取按钮 根据名称
 */
rh.vi.wfCardView.prototype._getNextBtnByName = function(actName) {
	return this.wfNextBtnNames[actName];
};

/**
 * 点击流程按钮 前执行 funName 函数
 */
rh.vi.wfCardView.prototype._doWfBtnBeforeClick = function(funName, btnObj) {
	var _self = this;

	var layoutObj = btnObj.layoutObj;
	var actItem = btnObj.dataObj;
	
	if(!layoutObj){
		return;
	}

	layoutObj.unbind("click").bind("click", function(event) {
		var rtnValue = funName.call();

		if (rtnValue) {
			if (actItem.ACT_MEMO.length > 1 && actItem.ACT_MEMO != "null") {
				eval(actItem.ACT_MEMO);
			} else {
				eval("_self." + actItem.ACT_CODE + "(event,actItem)");
			}
		}
	});
};

/**
 * 点击流程按钮 后执行 funName 函数
 */
rh.vi.wfCardView.prototype._doWfBtnAfterClick = function(funName, btnObj) {
	var _self = this;

	var layoutObj = btnObj.layoutObj;
	var actItem = btnObj.dataObj;
	
	if(!layoutObj){
		return;
	}	

	layoutObj.unbind("click").bind("click", function(event) {
		if (actItem.ACT_MEMO.length > 1 && actItem.ACT_MEMO != "null") {
			eval(actItem.ACT_MEMO);
		} else {
			eval("_self." + actItem.ACT_CODE + "(event,actItem)");
		}
		// 之后执行
		funName.call();
	});
};

/**
 * 点击下一步节点前执行 funName 函数
 */
rh.vi.wfCardView.prototype._doNextStepBeforeClick = function(funName, btnObj) {
	var _self = this;

	var layoutObj = btnObj.layoutObj;
	var actItem = btnObj.dataObj;
	
	if(!layoutObj){
		return;
	}

	layoutObj.unbind("click").bind("click", function(event) {
		var rtnValue = funName.call();

		if (rtnValue) {
			_self._openSelectOrg(actItem.NODE_CODE, layoutObj, event);
		}
	});
};

/**
 * 打开组织结构选择
 */
rh.vi.wfCardView.prototype._doOpenOrgSelect = function(event, btnObj) {
	var _self = this;

	var layoutObj = btnObj.layoutObj;
	var actItem = btnObj.dataObj;

	_self._openSelectOrg(actItem.NODE_CODE, layoutObj, event);
};

/**
 * 点击流程按钮按钮之前执行
 */
rh.vi.wfCardView.prototype._doNextStepBeforeClick = function(funName, btnObj) {
	var _self = this;

	var layoutObj = btnObj.layoutObj;
	var actItem = btnObj.dataObj;
	
	if(!layoutObj){
		return;
	}

	layoutObj.unbind("click").bind("click", function(event) {
		var rtnValue = funName.call();

		if (rtnValue) {
			_self._openSelectOrg(actItem.NODE_CODE, layoutObj, event);
		}
	});
};

/**
 * 送起草人
 */
rh.vi.wfCardView.prototype.cmSendDrafter = function(event) {
	var _self = this;

	var resultData = rh_processData("SY_WFE_PROC_DEF.cmSendDrafter.do",
			_self.reqdata);

	alert("已经成功送交起草人 " + resultData.rtnstr);
	_self._parHandler.refresh();

	_self._pretendClickBack(); // 关闭当前页面
}

/**
 * 相关文件 , 出查询选择，选择关联的文件 TODO 这里的查询条件，需要是当前人能查到的，
 */
rh.vi.wfCardView.prototype.cmRelate = function(event) {
	var _self = this;

	//this.wfRelate.chooseRelateWay(event);
}



/**
 * 退回 ， 填写退回说明 -> 添加退回的待办 -> 完成分发（设置返回的字段值） -> 待办变成已办
 * 
 */
rh.vi.wfCardView.prototype.cmTuiHui = function(event, actItem) {
	var _self = this;
	var sendId = actItem.SEND_ID;
	// 退回回执
	var winDialog = jQuery("<div></div>").attr("id", "tuiHuiDiv")
		.attr("title","请填写退回原因");

	var huiZhiContent = jQuery("<div></div>").appendTo(winDialog);
	jQuery("<textarea type='textarea' style='width:95%;height:200px;margin-left:1%;padding:5px' id ='huiZhiContent' name ='huiZhiContent'/>")
			.appendTo(huiZhiContent);

	var posArray = [];
	if (event) {
		var cy = event.clientY;
		posArray[0] = "";
		posArray[1] = cy + 120;
	}
	winDialog.appendTo(jQuery("body"));
	jQuery("#tuiHuiDiv").dialog({
		autoOpen : false,
		width : 400,
		height : 260,
		modal : true,
		resizable : false,
		position : posArray,
		close : function() {
			winDialog.remove();
		},buttons:{"确定":function(){
			var params = {};
			params["TODO_CONTENT"] = jQuery("#huiZhiContent").val();
			params["SEND_ID"] = sendId;
			var result = rh_processData(WfActConst.SERV_PROC + ".cmTuiHui.do",
					params);
			if (result.rtnstr == "success") {
				Tip.show("退回成功", true);
				if (parent.Portal.getBlock("SY_COMM_TODO")) {
					parent.Portal.getBlock("SY_COMM_TODO").refresh();
				}
				_self._parHandler.backClick();
				setTimeout(function() {
					jQuery("a.rhCard-refresh").click();
				}, 100);
			} else {
				Tip.show("退回失败", true);
			}
		},"取消":function(){
			winDialog.remove();
		}}
	});
	jQuery("#tuiHuiDiv").dialog("open");
	jQuery(".ui-dialog-titlebar").last().css("display", "block");
}

/**
 * 转发 弹出选人的页面，确定即分发出去
 */
rh.vi.wfCardView.prototype.cmZhuanFa = function(event, actItem) {
	var _self = this;
	// 分发ID
	var sendId = actItem.SEND_ID;
	_self.reqdata.SEND_ID = sendId;

	var inputName = "zhuanfaUsers";

	//
	var configStr = "SY_ORG_DEPT_USER,{'TYPE':'multi'}";
	var extendTreeSetting = {
		'cascadecheck' : false,
		'checkParent' : false
	};
	var options = {
		"itemCode" : inputName,
		"config" : configStr,
		"hide" : "explode",
		"show" : "blind",
		"extendDicSetting" : extendTreeSetting,
		"replaceCallBack" : _self._zhuanFa,
		"parHandler" : _self
	};
	var dictView = new rh.vi.rhDictTreeView(options);
	dictView.show(event);
}

/**
 * 转发
 */
rh.vi.wfCardView.prototype._zhuanFa = function(idArray, nameArray) {
	var _self = this;
	_self.reqdata["TARGET_USERS"] = idArray.join(",");

	_self.reqdata["SERV_ID"] = _self._parHandler.servId;
	_self.reqdata["DATA_ID"] = _self._parHandler._pkCode;
	_self.reqdata["DATA_TITLE"] = _self.getBindTitle() + "(分发)"; // _self._parHandler.itemValue("GW_TITLE");
	// 是否转发
	_self.reqdata["isZF"] = "yes"; // _self._parHandler.itemValue("GW_TITLE");
	var result = rh_processData(WfActConst.SERV_PROC + ".cmZhuanFa.do",
			_self.reqdata);

	if (result.rtnstr == "success") {
		Tip.show("转发成功", true);
	} else {
		Tip.show("转发失败", true);
	}
	_self._parHandler.refresh();
}

/**
 * 阅件签收
 */
rh.vi.wfCardView.prototype.cmQianShou = function(event, actItem) {
	var _self = this;
	// 分发ID
	var sendId = actItem.SEND_ID;
	_self.reqdata.SEND_ID = sendId;
	var result = rh_processData(WfActConst.SERV_PROC + ".cmQianShou.do",
			_self.reqdata);
	if (result.rtnstr == "success") {
		Tip.show("操作成功", true);
	} else {
		Tip.show("操作失败", true);
	}
	_self._parHandler.refresh();
}

/**
 * 删除流程，会同时删除业务数据及流程运行数据信息
 */
rh.vi.wfCardView.prototype.cmToTrash = function() {
	this.deleteDoc();
}

/**
 * 锁定文件
 */
rh.vi.wfCardView.prototype.cmLockFile = function() {
	var _self = this;

	var result = rh_processData(WfActConst.SERV_PROC + ".cmLockFile.do",
			_self.reqdata);

	if (result.rtnstr == "success") {
		_self._parHandler.refresh();
		alert("锁定成功");
	} else {
		Tip.show("操作失败", true);
	}
}

/**
 * 解锁文件
 */
rh.vi.wfCardView.prototype.cmUnLockFile = function() {
	var _self = this;

	var result = rh_processData(WfActConst.SERV_PROC + ".cmUnLockFile.do",
			_self.reqdata);

	if (result.rtnstr == "success") {
		_self._parHandler.refresh();
		alert("解锁成功");
	} else {
		Tip.show("操作失败", true);
	}
}

/**
 * 分发
 */
rh.vi.wfCardView.prototype.cmFenFa = function(event,actItem) {
	var _self = this;
	var servDataId = _self._parHandler._pkCode;
	
	var fenfaObj = {};
	fenfaObj.SERV_ID = _self._parHandler.servId;
	fenfaObj.DATA_ID = servDataId;
	fenfaObj.DATA_TITLE = _self.getBindTitle() + "(分发)";

	//如果有分发操作
	if ("" != (actItem["WFE_PARAM"] || "")) {
		var fenFaNoteObj = "";
		try {
			fenFaNoteObj = jQuery.parseJSON(actItem["WFE_PARAM"]);
		}catch(exception){
			Tip.showError("请确定节点json串格式是否正确，格式为{\"\":\"\"}",null);
			return false;
		}finally {}
		//获取按某个字段分发的节点code值
		var fenFaItemCodes = fenFaNoteObj["SEND_ITEM_CODE"] || "";
		var fenFaCodesArr = fenFaItemCodes.split(",");
		if (fenFaCodesArr.length > 0) {
			var sendIds = new Array();
			for (var i = 0; i < fenFaCodesArr.length; i ++) {
				var itemObj = _self._parHandler.getItem(fenFaCodesArr[i]);
				if (null == itemObj) {
					alert("您选择的分发字段不存在！");
					return false;
				} else {
					var itemValue = itemObj.getValue();
					if ("" == (itemValue || "")) {
						alert("您选择的分发字段没有值！");
						return false;
					} else {
						sendIds.push(itemValue);
					}
				}
			}
			fenfaObj["SEND_ID"] = sendIds.join(",");
			_self.showDialog(event, fenfaObj); //弹出dialog框
			return false;
		} else {
			alert("请确定要分发字段code！");
			return false;
		}
	//如果分发节点没有配置字段项，直接打开卡片
	} else {
		this.beforeFenfa(fenfaObj);
		var fenFaUrl = encodeURI("SY_COMM_SEND_SHOW_CARD.showSend.do?data="+ JsonToStr(fenfaObj));
		var options = {
			"id" : "SY_COMM_SEND_SHOW_CARD-" + servDataId,
			"url" : fenFaUrl,
			"tTitle" : "分发",
			"menuFlag" : 4
		};
		Tab.open(options);
	}
}
/**
 * 显示分发选择用户界面前调用此参数
 * **/
rh.vi.wfCardView.prototype.beforeFenfa = function(fenfaObj){
	
}

rh.vi.wfCardView.prototype.showSendDetail = function(fenfaObj) {
	// 服务ID
	var servId = fenfaObj.SERV_ID;
	// 被分发数据的ID
	var dataId = fenfaObj.DATA_ID;
	// 被分发数据标题
	var dataTitle = fenfaObj.DATA_TITLE;
	// 来源于方案
	var fromScheme = "yes";
	var sendObj = {
		"SEND_TYPE" : fenfaObj["SEND_TYPE"],
		"SEND_FLAG" : fenfaObj["SEND_FLAG"],
		"SEND_NUM" : fenfaObj["SEND_NUM"],
		"SERV_ID" : servId,
		"DATA_TITLE" : dataTitle,
		"DATA_ID" : dataId,
		"SEND_ID" : fenfaObj["SEND_ID"],
		"fromScheme" : fromScheme,
		"ifFirst" : "yes"
	};
	sendObj._extWhere = " and DATA_ID = '" + dataId + "'";
	var url = "SY_COMM_SEND_SHOW_USERS.list.do";
	var opts = {
		"url" : url,
		"tTitle" : "待分发人员列表",
		"params" : sendObj,
		"menuFlag" : 4
	};
	Tab.open(opts);
};

/**
 * 审批单的附件、意见、相关文件管理
 */
rh.vi.wfCardView.prototype.cmWfDataMgr = function(event) {
	var _viewer = this;
	var servDataId = _viewer.getParHandler()._pkCode;
	var serID = _viewer.getParHandler().servId;
	var sId = "SY_COMM_ENTITY_GL";
	var data = {};
    data["_searchWhere"] = " and SERV_ID='"+serID+"' and DATA_ID='"+servDataId+"'";
	var entityData = FireFly.getListData("SY_COMM_ENTITY_GL",data);
	var options = {"url":sId + ".card.do?pkCode=" + entityData["_DATA_"][0]["ENTITY_ID"] , "tTitle":"公文管理", "menuFlag":4};
	Tab.open(options);	
}

/**
 * 选择补登的 固定意见
 */
rh.vi.wfCardView.prototype._chooseRegularMind = function(event, mindCode) {
	var _self = this;
	var inputName ="USUAL_CONTENT";

	var configStr = "SY_COMM_MIND_REGULAR,{'TARGET':'MIND_ID~REGULAR_MIND','SOURCE':'MIND_ID~MIND_CONTENT~MIND_VALUE','PKHIDE':true,'EXTWHERE':' and REGULAR_TYPE=^" + mindCode + "^', 'TYPE':'single'}";
	var options = {"itemCode":inputName, "config":configStr, "rebackCodes":inputName, "parHandler":_self._parHandler, "replaceCallBack":function(mind){
		jQuery("#USUAL_ID").val(mind.MIND_ID);
		jQuery("#USUAL_CONTENT").val(mind.MIND_CONTENT);
		jQuery("#TARGET_MIND").val(mind.MIND_CONTENT);
	}};

	var queryView = new rh.vi.rhSelectListView(options);
	queryView.show(event);	
}

/**
 * 补登意见
 */
rh.vi.wfCardView.prototype.cmBuDeng = function(event, actItem) {
	var _self = this;
	var leaders = StrToJson(actItem.leaders);
	if (null == leaders || "" == leaders) {
		alert("当前没有补登领导可以选择!");
		return;
	}
	
	if (!actItem.WFE_PARAM || actItem.WFE_PARAM.length==0) {
		alert("工作流中没有配置补登意见的意见类型!");
		return;
	}
	
	var mindCodeRtn = FireFly.byId("SY_COMM_MIND_CODE", actItem.WFE_PARAM);
	if (mindCodeRtn[UIConst.RTN_MSG] && mindCodeRtn[UIConst.RTN_MSG].indexOf(UIConst.RTN_ERR) == 0) { //没有该意见类型， 提示检查工作流配置
		alert("没有查到工作流中配置的意见编码，请检查意见编码是否存在!");
		return;
	}
	
	var queryBean = {};
	queryBean.WF_NI_ID = _self.getNodeInstBean().NI_ID;
	queryBean.DATA_ID = _self._parHandler._pkCode;
	var budengMind = FireFly.doAct("SY_COMM_MIND", "getBudengMind", queryBean, false);
	
	// 补登意见弹出匡
	jQuery("#bdmind").dialog("destroy");
	var winDialog = jQuery("<div></div>").addClass("selectDialog").attr("id", "bdmind").attr("title", "补登意见");
    
	jQuery("<table align='center' height='20px' border=1 width='90%'></table>").appendTo(winDialog);
	
	// 补登意见必要属性
	var tableBd = jQuery("<table align='center' border=0 width='90%'></table>").appendTo(winDialog);
	jQuery("<tr></tr>").appendTo(tableBd);
	var inputNameTr = jQuery("<tr></tr>").appendTo(tableBd);
	var inputNameTd1 =  jQuery("<td></td>").appendTo(inputNameTr);
	var inputNameTd2 =  jQuery("<td></td>").appendTo(inputNameTr);
	var nameDiv = jQuery("<div>领导</div>").appendTo(inputNameTd1);
	var inputNameDiv = jQuery("<div class='ui-select-default' style='max-width: 202px;'></div>").appendTo(inputNameTd2);
	
	var users = jQuery("<select id='TARGET_USER' class='ui-select-default2' name='TARGET_USER' style='width: 200px;' />")
			.appendTo(inputNameDiv);
	// foreach leaders
	jQuery.each(leaders, function(i, leader) {
		jQuery("<option value='" + leader.userCode + "'>").append(leader.userName).appendTo(users);
	});

	// 时间
	var bdtimeTr = jQuery("<tr></tr>").appendTo(tableBd);
	var bdtimeTd1 = jQuery("<td></td>").appendTo(bdtimeTr);
	var bdtimeTd2 = jQuery("<td></td>").appendTo(bdtimeTr);
	jQuery("<div>补登时间</div>").appendTo(bdtimeTd1);
	var timeLi = jQuery("<div></div>").appendTo(bdtimeTd2);
	jQuery("<input id='TARGET_TIME' class='Wdate ui-date-default' onfocus=\"WdatePicker({startDate:'%y-%MM-%dd %H:%m:%ss',dateFmt:'yyyy-MM-dd HH:mm:ss',alwaysUseStartDate:false})\"  type='text' style='width: 200px;' />")
			.appendTo(timeLi);
	//给时间的默认值
	
	//意见类型
	var bdTypeTr = jQuery("<tr></tr>").appendTo(tableBd);
	var bdTypeTd1 = jQuery("<td></td>").appendTo(bdTypeTr);
	var bdTypeTd2 = jQuery("<td></td>").appendTo(bdTypeTr);
	jQuery("<div>意见类型</div>").appendTo(bdTypeTd1);
	var bdTypeli = jQuery("<div></div>").appendTo(bdTypeTd2);
	jQuery("<input id='MIND_CODE__NAME' type='text' class='ui-text-default ui-text-disabled' style='width: 200px;' />")
			.appendTo(bdTypeli);	
	jQuery("<input id='MIND_CODE' type='hidden' value='" + actItem.WFE_PARAM + "'/>").appendTo(bdTypeli);	    
	
	// 意见输入
	var bdMindTr = jQuery("<tr></tr>").appendTo(tableBd);
	var bdMindTd1 = jQuery("<td></td>").appendTo(bdMindTr);
	var bdMindTd2 = jQuery("<td></td>").appendTo(bdMindTr);
	jQuery("<div>补登意见</div>").appendTo(bdMindTd1);	
	
	var bdMindInput = jQuery("<div></div>").appendTo(bdMindTd2);
	if (mindCodeRtn.REGULAR_TYPE.length > 0 && mindCodeRtn.REGULAR_TYPE == 1) { //固定意见 , 构造查询选择
		var regularStr = "<div><input id='USUAL_CONTENT' class='ui-query-default' style='cursor:pointer;max-width:420px;' type='text' readonly='readonly'/>" +
		"<span id='chooseMindBD' class='iconChoose icon-input-select' style='float:left;cursor:pointer;width:30px;height:20px;'></span>" +
		"<span id='cancelMindBD' class='iconCancel btn-clear' style='float:left;cursor:pointer;width:30px;height:20px;'></span>" +
		"<input id='USUAL_ID' type='hidden' value=''/><input id='MIND_VALUE' type='hidden' value=''/></div>";
		
		jQuery(regularStr).appendTo(bdMindInput);
	}
	
	var bdMindInputObj = jQuery("<textarea class='ui-textarea-default' type='textarea' cols='65' rows='7' id ='TARGET_MIND' name ='TARGET_MIND'  />")
			.appendTo(bdMindInput);			
	
	//常用批语
	var bdCYPiYuTr = jQuery("<tr></tr>").appendTo(tableBd);
	var bdCyPiyuTd1 = jQuery("<td></td>").appendTo(bdCYPiYuTr);
	var bdCyPiyuTd2 = jQuery("<td></td>").appendTo(bdCYPiYuTr);
	jQuery("<div></div>").appendTo(bdCyPiyuTd1);	
	
	var bdCyPiyuInput = jQuery("<div></div>").appendTo(bdCyPiyuTd2);	
	var bdCypiyuLink =  jQuery("<a href='#'>常用批语</a>").appendTo(bdCyPiyuInput);	
	var opts = {"typeCode":"MIND"
		,"optionType":"single"
		,"fieldObj":bdMindInputObj
		,"optObj":bdCypiyuLink};
	Select.usualContent(opts, _self._parHandler);

	jQuery("<table align='center' height='20px' border=1 width='90%'></table>").appendTo(winDialog);

	// 按钮-保存
	var btnTable = jQuery("<table align='center' width='50%'></table>").appendTo(winDialog);
	var bdBtnTr = jQuery("<tr></tr>").appendTo(btnTable);
	var bdBtnTd1 = jQuery("<td align='center'></td>").appendTo(bdBtnTr);
	var bdBtnTd2 = jQuery("<td align='center'></td>").appendTo(bdBtnTr);
	var okBtn = jQuery("<a><span class='rh-icon rh-icon-inner'>保存<span class='rh-icon-img btn-save'></span></span></a>")
			.appendTo(bdBtnTd1);
	okBtn.bind("click", function() {
		var user = jQuery("#TARGET_USER").val();
		var uname = jQuery("#TARGET_USER").find('option:selected').text();
		var mindstr = jQuery("#TARGET_MIND").val();
		if (mindstr.length == 0) {
			alert("请填写补登意见");
			return;
		}
		if (jQuery("#chooseMindBD").length > 0 && jQuery("#USUAL_ID").val().length == 0) {
			alert("请选择补登意见");
			return;
		}
		
		// 保存意见
		var data = {};
		if (budengMind.MIND_ID) {
			data["MIND_ID"] = budengMind.MIND_ID;
		}
		data["MIND_CONTENT"] = mindstr;
		data["MIND_CODE"] = mindCodeRtn.CODE_ID;
		data["SERV_ID"] = _self._parHandler.servId; // 服务名
		data["DATA_ID"] = _self._parHandler._pkCode;
		data["MIND_TYPE"] = 1;
		data["WF_NI_ID"] = _self.getNodeInstBean().NI_ID;
		data["MIND_DIS_RULE"] = mindCodeRtn.MIND_DIS_RULE;
		data["TARGET_USER"] = user;
		data["MIND_TIME"] = jQuery("#TARGET_TIME").val();
		if (jQuery("#chooseMindBD").length > 0) {
			data["USUAL_ID"] = jQuery("#USUAL_ID").val();
			data["USUAL_CONTENT"] = jQuery("#USUAL_CONTENT").val();
		}

		var resultData = FireFly.doAct("SY_COMM_MIND", "saveBuDengMind", data);
		if (resultData[UIConst.RTN_MSG]
				&& resultData[UIConst.RTN_MSG].indexOf(UIConst.RTN_OK) == 0) {
			_self.mind.refresh();
		} else {
			Tip.show("返回错误，请检查！" + JsonToStr(resultData), true);
		}

		winDialog.remove();
	});

	// 按钮-取消
	var cancelBtn = jQuery(
			"<a><span class='rh-icon rh-icon-inner'>取消<span class='rh-icon-img btn-clear'></span></span></a>")
			.appendTo(bdBtnTd2);
	cancelBtn.bind("click", function() {
		winDialog.remove();
	});

	var posArray = [];
	if (event) {
		var cy = event.clientY;
		posArray[0] = "";
		posArray[1] = cy - 120;
	}
	winDialog.appendTo(jQuery("body"));
	jQuery("#bdmind").dialog({
		autoOpen : false,
		width : 600,
		height : 320,
		modal : true,
		resizable : false,
		position : posArray,
		open : function() {

		},
		close : function() {
			winDialog.remove();
		}
	});
	jQuery("#bdmind").dialog("open");
	jQuery(".ui-dialog-titlebar").last().css("display", "block");// 设置标题显示
	
	jQuery("#TARGET_TIME").val(rhDate.getCurentTime() + ":00");
	jQuery("#MIND_CODE__NAME").val(mindCodeRtn.CODE_NAME);
	if (budengMind.MIND_CONTENT) {
		jQuery("#TARGET_MIND").val(budengMind.MIND_CONTENT);
		if (jQuery("#USUAL_CONTENT").length > 0) {
			jQuery("#USUAL_CONTENT").val(budengMind.USUAL_CONTENT);
			jQuery("#USUAL_ID").val(budengMind.USUAL_ID);
		}
	}
	if (jQuery("#chooseMindBD").length > 0) {
		jQuery("#chooseMindBD").unbind("click").bind("click",function(){ //查询选择，
			_self._chooseRegularMind(event, mindCodeRtn.CODE_ID);
		});
		
		jQuery("#cancelMindBD").unbind("click").bind("click",function(){ //取消
			jQuery("#USUAL_ID").val("");
			jQuery("#USUAL_CONTENT").val("");
		});
	}
}

/**
 * 流程跟踪
 */
rh.vi.wfCardView.prototype.cmWfTracking = function() {
	var _self = this;

	var trackObj = {};
	trackObj.PI_ID = _self.procInstId;
	trackObj.INST_IF_RUNNING = _self.wfState;
	trackObj.act = "query";
	var opts = {
		"url" : "SY_WFE_TRACK.list.do?type=single",
		"tTitle" : "流程跟踪",
		"params" : trackObj,
		"menuFlag" : 3
	};
	Tab.open(opts);
}

/**
 * 独占 ， 即开始处理文件 用于 送角色的时候，其中某人进流程，点独占，角色内其他人员就不能收到待办了
 */
rh.vi.wfCardView.prototype.duZhan = function() {
	var _self = this;
	var result = rh_processData(WfActConst.SERV_PROC + ".duZhan.do",
			_self.reqdata);
	if (result.rtnstr == "success") {
		Tip.show("操作成功", true);
	} else {
		Tip.show("操作失败", true);
	}
	_self._parHandler.refresh();
}

/**
 * 结束当前工作
 */
rh.vi.wfCardView.prototype.stopWfNode = function() {
	var _self = this;
	var result = rh_processData(WfActConst.SERV_PROC + ".stopWfNode.do",
			_self.reqdata);
	if (result.rtnstr == "success") {
		Tip.show("操作成功", true);
	} else {
		Tip.show("操作失败", true);
	}
	_self._parHandler.refresh();
}

/**
 * 打印
 */
rh.vi.wfCardView.prototype.cmPrint = function(event,actObj) {
	var _self = this;
	_self.reqdata.PK_CODE = _self._parHandler._pkCode;

	var formServId = _self._parHandler.servId;
	_self.reqdata.TMP_CODE = formServId;

	// 打印预览
	window.open(formServId + ".cmPrint.do?data=" + JsonToStr(_self.reqdata));
}

/**
 * 审签单打印，调用freemaker模板，模板名和
 */
rh.vi.wfCardView.prototype.cmPrintAudit = function() {
	var _self = this;
	var servId = _self._parHandler.servId;
	var servSrcId = _self._parHandler._data["SERV_SRC_ID"];
	var dataId = _self._parHandler._pkCode;
	if (_self._auditFtlFile && _self._auditFtlFile.length > 0) {
		FireFly.doPrint(servId, servSrcId, dataId, _self._auditFtlFile);
	} else {
		FireFly.doPrint(servId, servSrcId, dataId);
	}
};

/**
 * 设置审签单打印模板
 */
rh.vi.wfCardView.prototype.setCmPrintAuditFtl = function(ftl) {
	this._auditFtlFile = ftl;
};

/*
 * 办结之前执行,业务代码可覆盖此方法
 */
rh.vi.wfCardView.prototype._beforeFinish = function() {
};

/**
 * 办结
 */
rh.vi.wfCardView.prototype.finish = function() {
	var _self = this;

	if (!confirm("是否确认办结?")) {
		return false;
	}

	if (_self._beforeFinish() == false) {
		return false;
	}

	var result = rh_processData(WfActConst.SERV_PROC + ".finish.do",
			_self.reqdata);
	_self._parHandler.refresh();
	if (result.rtnstr == "success") {
		alert("办结成功！");
		// 关闭当前页面
		_self._pretendClickBack();
	} else {
		alert("办结未成功，请检查");
	}
}

/*
 * 取消办结之前执行,业务代码可覆盖此方法
 */
rh.vi.wfCardView.prototype._beforeUndoFinish = function() {
};

/**
 * 取消办结
 */
rh.vi.wfCardView.prototype.undoFinish = function() {
	var _self = this;
	if (_self._beforeUndoFinish() == false) {
		return false;
	}

	var result = rh_processData(WfActConst.SERV_PROC + ".undoFinish.do",
			_self.reqdata);
	// 重新装载页面
	var servId = _self._parHandler.servId;
	var dataId = _self._parHandler._pkCode;
	var url = servId + ".byid.do?data={_PK_:" + dataId + "}";
	_self._parHandler.resetReplaceUrl(url);
	_self._parHandler.refresh();
}

/**
 * 保存
 */
rh.vi.wfCardView.prototype.save = function() {
	var _self = this;

	if (_self._parHandler.saveForm(false)) {
		_self._parHandler.refresh();
	}
}

/**
 * 收回
 */
rh.vi.wfCardView.prototype.withdraw = function() {
	var _self = this;
	var result = rh_processData(WfActConst.SERV_PROC + ".withdraw.do",
			_self.reqdata);
	// 重新装载页面
	var servId = _self._parHandler.servId;
	var dataId = _self._parHandler._pkCode;
	var url = servId + ".byid.do?data={_PK_:" + dataId + "}";
	_self._parHandler.resetReplaceUrl(url);
	_self._parHandler.refresh();
}

/**
 * 终止并发
 */
rh.vi.wfCardView.prototype.stopParallelWf = function() {
	var _self = this;
	var result = rh_processData(WfActConst.SERV_PROC + ".stopParallelWf.do",
			_self.reqdata);

	// 重新装载页面
	var servId = _self._parHandler.servId;
	var dataId = _self._parHandler._pkCode;
	var url = servId + ".byid.do?data={_PK_:" + dataId + "}";
	_self._parHandler.resetReplaceUrl(url);
	_self._parHandler.refresh();
}


/**
 * 删除流程，会同时删除业务数据及流程运行数据信息
 */
rh.vi.wfCardView.prototype.deleteDoc = function() {
	var _self = this;

	if (!confirm("您确定要删除并终止流程么？")) {
		return false;
	}

	var result = rh_processData(WfActConst.SERV_PROC + ".deleteDoc.do",
			_self.reqdata);

	if (result.rtnstr == "success") {
		Tip.show("操作成功", true);
		_self._pretendClickBack();
	} else {
		Tip.show("操作失败", true);
	}
}

/**
 * 在页面的最下面显示 分发的详细信息，点连接打开 分发明细列表
 */
rh.vi.wfCardView.prototype._bldSendList = function() {
	var _self = this;

	var _cardSendObj = jQuery(
			"<div id='sendDtailBtn' style='margin:0 auto;background-color:white;width:98%;height:30px; line-height:30px;'></div>")
			.addClass("ui-form-default").addClass("center").addClass(
					"ui-corner-5").attr("height", 300);

	var _sendDetailHref = jQuery(
			"<a href='#' id='showSend"
					+ _self._parHandler.servId
					+ "'  style='margin-left:18px;padding-left:18px'>分发明细>></a>")
			.addClass("btn-cmFenFa");
	_sendDetailHref.appendTo(_cardSendObj);
	_cardSendObj.appendTo(_self._parHandler.formCon);

	_sendDetailHref
			.unbind("click")
			.bind(
					"click",
					function() {
						var sendObj = {};
						sendObj.SERV_ID = _self._parHandler.servId;
						sendObj.DATA_ID = _self._parHandler._pkCode;
						var strWhere = " and SERV_ID ='"
								+ _self._parHandler.servId
								+ "' and DATA_ID = '"
								+ _self._parHandler._pkCode + "'";
						sendObj._extWhere = strWhere;

						var url = "SY_COMM_SEND_DETAIL.list.do?data={'_extWhere':'"
								+ strWhere + "'}";
						if (_self.getAuthBean().userDoInWf == "true") {
							var opts = {
								"url" : url,
								"tTitle" : "分发明细",
								"params" : sendObj,
								"menuFlag" : 4
							};
							Tab.open(opts);
						} else {
							var opts = {
								"url" : url + "&readOnly=true",
								"tTitle" : "分发明细",
								"params" : sendObj,
								"menuFlag" : 4
							};
							Tab.open(opts);
						}
					});
}

/**
 * 隐藏所有的按钮
 */
rh.vi.wfCardView.prototype._hideAllBtns = function() {
	var _self = this;

	jQuery("#" + _self._parHandler.servId + "-mainTab").find("a").hide();
}

/**
 * @param varCode
 *            变量名称
 * @returns 指定变量的值，未找到指定变量则返回undefined
 */
rh.vi.wfCardView.prototype.getCustomVarContent = function(varCode) {
	var customVars = this._parHandler.byIdData.WF_CUSTOM_VARS;
	var result = undefined;
	if (customVars) {
		jQuery(customVars).each(function(index, item) {
			if (item.VAR_CODE == varCode) {
				result = item.VAR_CONTENT
			}
		});
	}

	return result;
}

/**
 * 取得审批单的现实模式。常用的查看模式有：MODE_DOING(办理模式)、MODE_ADMIN（流程管理员）、
 * MODE_FLOW（流经模式）、MODE_BASE（最低权限，分发、接收用户查看模式）
 */
rh.vi.wfCardView.prototype.getDisplayMode = function() {
	return this._parHandler.byIdData.WF_DISPLAY_MODE || "";
}

/**
 * 关注，弹出列表页，可添加，删除，关注的事项
 */
rh.vi.wfCardView.prototype.cmSetAttention = function(event, actItem) {
	var _self = this;
	
	var attentionObj = {};
	attentionObj.PI_ID = _self.procInstId;
	attentionObj.S_USER = System.getVar("@USER_CODE@");
	attentionObj.act = "query";
	attentionObj.DATA_ID = _self._parHandler._pkCode;
	
	var url = encodeURI("SY_COMM_ATTENTION.list.do?data="+ JsonToStr(attentionObj));
	var opts = {
		"url" : url,
		"tTitle" : "关注",
		"params" : attentionObj,
		"menuFlag" : 3
	};
	Tab.open(opts);	
}


/**
 * Act 定义的一些常量
 */
var WfActConst = {
	/** 流程定义的服务 */
	SERV_PROC : "SY_WFE_PROC_DEF"
};


/**
 * 我的收藏夹
 */
rh.vi.wfCardView.prototype.cmFavorite = function(event) {
	var _self = this;
	this.favoriteDialog(event,_self);
	this.showFavoriteItems(_self);
	jQuery("#favoriteForm input:button").addClass("rh-wf-card-favorite-button");
}
//弹出我的收藏夹对话框
rh.vi.wfCardView.prototype.favoriteDialog = function(event,_self) {
	var _this=this;
	this.dialogId = "favorite";	
	//设置jqueryUi的dialog参数
	this.winDialog = jQuery("<div style='background-color:#EFEFF2;'></div>").addClass("selectDialog").attr("id",this.dialogId).attr("title","我的收藏夹");
	this.winDialog.appendTo(jQuery("body"));
	var bodyWid = jQuery("body").width();
	var hei = 360;
    var wid = 700;
    var posArray = [30,30];
    if (event) {
	    var cy = event.clientY;
	    posArray[0] = "";
	    posArray[1] = cy;
    }
    //生成jqueryUi的dialog
	jQuery("#" + this.dialogId).dialog({
		autoOpen: false,
		height: hei,
		width: wid,
		modal: true,
		resizable:true,
		position:posArray,
		open: function() { 

		},
		close: function() {
			//关闭的时候进行数据保存
			rh.vi.wfCardView.prototype.favoriteDialogClose(_self);	
			//关闭对话框
			jQuery("#" + _this.dialogId).remove();
		}
	});
	//手动打开dialog
	var dialogObj = jQuery("#" + this.dialogId);
	dialogObj.dialog("open");
	dialogObj.focus();
    jQuery(".ui-dialog-titlebar").last().css("display","block");//设置标题显示
    dialogObj.parent().addClass("rh-bottom-right-radius rhSelectWidget-content");
}

//收藏夹对话框关闭时调用
rh.vi.wfCardView.prototype.favoriteDialogClose = function(_self){
	// 获取当前用户所有自定义的标签
	var allTag= this.allTag();
	//获取当前审批单的标签
	var selectedValue = this.selectedTag(_self);
	//获取当前流程服务ID
	var servId = _self._parHandler.servId;
	var servDataId = _self._parHandler._pkCode;	
	var tagId="";
	for(var i=0;i<(selectedValue._DATA_).length;i++){
		tagId +=(selectedValue._DATA_)[i].TAG_ID+",";
	}
	//获取storeTag的所有的标签
	var selectedLength = selectedValue._DATA_.length;
	var checkVal ="";
	//如果收藏标签上存在，数据库中不存在则添加
	jQuery("#storeTag").find(":checkbox").each(function(){
		if(tagId.indexOf(jQuery(this).val())==-1){
			FireFly.cardAdd("SY_COMM_ENTITY_TAG",{"DATA_ID":servDataId,"SERV_ID":servId,"TAG_ID":jQuery(this).val()});
		}
		checkVal += jQuery(this).val()+",";
	});
	//如果收藏标签上不存在，数据库中存在 则删除
	var deleteData ="";
	for(var i=0;i<(selectedValue._DATA_).length;i++){
		if(checkVal.indexOf((selectedValue._DATA_)[i].TAG_ID)==-1){
			deleteData +=(selectedValue._DATA_)[i].ET_ID+",";
		}
	}
	if(deleteData !=""){
		var data={"_PK_":deleteData};
		FireFly.listDelete("SY_COMM_ENTITY_TAG",data);
	}	
}
rh.vi.wfCardView.prototype.tagCheckedChange = function(){
	//监听checkbox
	jQuery("#favoriteForm input:checkbox").unbind("click").bind("click",function(){
		jQuery(this).next().toggleClass("rh-wf-card-favorite-changecheckbox");
	});	
}
//收藏夹的按钮事件
rh.vi.wfCardView.prototype.favoriteBtnEvent = function(){
	var _self = this;
	return btnEvent = {
		//全选
		selectAll: function(){
			jQuery(this).parent().find(":checkbox").each(function(){
				jQuery(this).attr("checked", true);
				jQuery(this).next().addClass("rh-wf-card-favorite-changecheckbox");
			});
		},
		
		//全不选
		cancelAll: function(){
			jQuery(this).parent().find(":checkbox").each(function(){
				jQuery(this).attr("checked", false);
				jQuery(this).next().removeClass("rh-wf-card-favorite-changecheckbox");
			});
		},
		
		//storeTag的取消标签
		cancel: function(){
			var r=confirm("您确定取消么？");
			if(r==true){
				jQuery("#storeTagDiv").find(":checkbox").each(function(){
					if (jQuery(this).attr("checked")) {
						jQuery(this).attr("checked", false);
						jQuery(this).next().removeClass("rh-wf-card-favorite-changecheckbox");
						jQuery("#manageTagDiv").append(jQuery(this).parent());
					};
				});
			}
		},
		//manageTag的添加标签
		addTagFn: function(){
			jQuery("#addNewTag").show();
		},
		//manageTag的删除选中
		deleteTagFn: function(){
			var dataArr = [];
			jQuery("#manageTagDiv").find(":checkbox").each(function(){
				if (jQuery(this).attr("checked")) {
					dataArr.push(jQuery(this).val());
				};
			});
			if(dataArr.length>0){
				var r=confirm("您确定取消么？");
				if(r==true){
					var data = dataArr.toString();
					var datas = {
						"_PK_": data
					};
					//获取成功删除后的数据
					var deleteOkData = FireFly.listDelete("SY_COMM_TAG", datas);
					var deleteValue = deleteOkData._DELIDS_;
					var arrDelete = deleteValue.split(",");
					//删除页面上的标签
					for(var i=0;i<arrDelete.length;i++){
						jQuery("#manageTagDiv input[value="+arrDelete[i]+"]").parent().remove();
					}
				}
			}else{
				alert("请选择您要删除的数据！")
			}
		},
		//提交按钮事件
		submitFn: function(){
			jQuery("#manageTagDiv").find(":checkbox").each(function(){
				if (jQuery(this).attr("checked")) {
					jQuery(this).attr("checked", false);
					jQuery(this).next().removeClass("rh-wf-card-favorite-changecheckbox");
					jQuery("#storeTagDiv").append(jQuery(this).parent());
				};
			});
		},
		
		//隐藏div的确定按钮事件
		addNewTagBtn: function(){
			var newTagValue = jQuery("#newTagName").val();
			if(newTagValue !=""&& newTagValue!=null){
				if(newTagValue.length<7){
					var data={"TAG_NAME":newTagValue,"TAG_LEVEL":"PRIVATE","TAG_TYPE":"FAVORITE"}
					var newTagData = FireFly.cardAdd("SY_COMM_TAG",data);
					//判断标签名不能为空！
					if(newTagData.TAG_ID != "" && newTagData.TAG_ID !=null){
						var check = jQuery("<label><input type='checkbox' value="+newTagData.TAG_ID+"><span>"+newTagValue+"</span></label>");
						var check1 = jQuery("#manageTagDiv label").first().length;
						if(check1 !=0){
							jQuery("#manageTagDiv label").first().before(check);
						}else {
							jQuery("#manageTagDiv").append(check);
						}
						jQuery("#favoriteForm input:checkbox").addClass("rh-wf-card-favorite-checkbox");
						jQuery("#favoriteForm span").addClass("rh-wf-card-favorite-span");
						jQuery("#favoriteForm label").addClass("rh-wf-card-favorite-lable");
						_self.tagCheckedChange();
					}
				}else{
					alert("收藏夹名称不超过6个字");
				}
			}
		},
		//隐藏div的取消按钮事件
		cancelNewTagBtn: function(){
			jQuery("#newTagName").val("");
			jQuery("#addNewTag").hide();
		}
	}
}
//显示我的收藏夹对话框内容
rh.vi.wfCardView.prototype.showFavoriteItems = function(_self){
	//storeTag
	var storeTag = jQuery("<div style='height:150px;width: 100%;'></div>").attr("id","storeTag");
	var storeTagBtn = jQuery("<div style='height: 20%;width: 90%;margin-left: 5%;margin-top: 10px;'></div>").attr("id","storeTagBtn");
	var storeTagDiv = jQuery("<div style='border: solid 1px rgb(167, 167, 167);height: 70%;width: 90%;margin-left: 5%;background-color: white;'></div>").attr("id","storeTagDiv");
	storeTag.append(storeTagBtn);
	storeTag.append(storeTagDiv);
	//manageTag
	var manageTag = jQuery("<div style='height:150px;width: 100%;'></div>").attr("id","manageTag");
	var manageTagBtn = jQuery("<div style='height: 20%;width: 90%;margin-left: 5%;'></div>").attr("id","manageTagBtn");
	var manageTagDiv = jQuery("<div style='border: solid 1px rgb(167, 167, 167);height: 70%;width: 90%;margin-left: 5%;background-color: white;'></div>").attr("id","manageTagDiv");
	manageTag.append(manageTagBtn);
	manageTag.append(manageTagDiv);
	//addNewTag
	var addNewTag = jQuery("<div style='display:none;margin-left: 5%;'></div>").attr("id","addNewTag");
	//form表单
	var form = jQuery("<div></div>").attr("id","favoriteForm");
	var storeTagText = jQuery("<a>已保存至收藏夹:</a>").addClass("rh-wf-card-favorite-text");
	var manageTagText = jQuery("<a>可选收藏夹:</a>").addClass("rh-wf-card-favorite-text");
	var selectAllStore = jQuery("<input id='selectAllStore' style='display: none;' type='button' value='全选' />");
	var cancelAllStore = jQuery("<input id='cancelAllStore' style='display: none;' type='button' value='全不选' />");
	var cancelTag = jQuery("<input id='cancelTag' type='button' value='取消收藏' />");
	var addTag = jQuery("<input id='addTag' type='button' value=新建收藏夹 />");
	var selectAllManage = jQuery("<input id='selectAllManage' style='display: none;' type='button' value='全选' />");
	var cancelAllManage = jQuery("<input id='cancelAllManage' style='display: none;' type='button' value='全不选' />");
	var deleteTag = jQuery("<input id='deleteTag' type='button' value='删除收藏夹'/>");
	var submit = jQuery("<input id='submit' type='button' value='添加至收藏夹' />");
	var newTagText = jQuery("<a>收藏夹名称:</a>");
	var newTagName = jQuery("<input type='text'>").attr("id","newTagName");
	var addNewTagBtn = jQuery("<input type='button' style='margin-left: 3px;'>").attr("id","addNewTagBtn").attr("value","添加");
	var cancelNewTagBtn = jQuery("<input type='button'>").attr("id","cancelNewTagBtn").attr("value","取消");
	//建立关联
	storeTagBtn.append(storeTagText);
	storeTagBtn.append(cancelTag);
	storeTagBtn.append(selectAllStore);
	storeTagBtn.append(cancelAllStore);
	//遍历当前审批单的标签。
	var selectedValue = this.selectedTag(_self);
	var selectedValues = "";
	var allTag = this.allTag();
	var allTags = "";
	for(var i=0;i<allTag._DATA_.length; i++){
		allTags += (allTag._DATA_)[i].TAG_ID;
	}
	for(var i=0;i<selectedValue._DATA_.length; i++){
		var tagId = (selectedValue._DATA_)[i].TAG_ID;
		if(allTags.indexOf(tagId) >=0){
			var tagObj = FireFly.byId("SY_COMM_TAG",tagId);
			var check = jQuery("<label><input type='checkbox' value="+tagId+"><span>"+tagObj.TAG_NAME+"</span></label>");
			storeTagDiv.append(check);
			selectedValues +=  tagId + ",";
		}
	}
	manageTagBtn.append(manageTagText);
	manageTagBtn.append(submit);
	manageTagBtn.append(selectAllManage);
	manageTagBtn.append(cancelAllManage);
	manageTagBtn.append(addTag);
	manageTagBtn.append(deleteTag);
	//获取当前用户所有自定义的标签
	
	for(var i=0;i<allTag._DATA_.length; i++){
		var tagId = (allTag._DATA_)[i].TAG_ID;
		var tagName = (allTag._DATA_)[i].TAG_NAME;
		if(selectedValues.indexOf(tagId) == -1){
			var check = jQuery("<label><input type='checkbox' value="+tagId+"><span>"+tagName+"</span></label>");
			manageTagDiv.append(check);
		}
		
	}
	//新添加标签
	addNewTag.append(newTagText);
	addNewTag.append(newTagName);
	addNewTag.append(addNewTagBtn);
	addNewTag.append(cancelNewTagBtn);
	
	form.append(storeTag);
	form.append(manageTag);
	form.append(addNewTag);
	//初始化事件	
	//storeTag
	selectAllStore.unbind("click").bind("click",this.favoriteBtnEvent().selectAll);
	cancelAllStore.unbind("click").bind("click",this.favoriteBtnEvent().cancelAll);
	cancelTag.unbind("click").bind("click",this.favoriteBtnEvent().cancel);
	//manageTag
	selectAllManage.unbind("click").bind("click",this.favoriteBtnEvent().selectAll);
	cancelAllManage.unbind("click").bind("click",this.favoriteBtnEvent().cancelAll);
	addTag.unbind("click").bind("click",this.favoriteBtnEvent().addTagFn);
	deleteTag.unbind("click").bind("click",this.favoriteBtnEvent().deleteTagFn);
	submit.unbind("click").bind("click",this.favoriteBtnEvent().submitFn);
	addNewTagBtn.unbind("click").bind("click",this.favoriteBtnEvent().addNewTagBtn);
	cancelNewTagBtn.unbind("click").bind("click",this.favoriteBtnEvent().cancelNewTagBtn);
	//显示
	jQuery("#favorite").append(form);
	jQuery("#favoriteForm input:checkbox").addClass("rh-wf-card-favorite-checkbox");
	jQuery("#favoriteForm span").addClass("rh-wf-card-favorite-span");
	jQuery("#favoriteForm label").addClass("rh-wf-card-favorite-lable");
	//监听复选框的状态
	this.tagCheckedChange();
}
//如果收藏标签中有则在标签管理中不显示
rh.vi.wfCardView.prototype.compareTag = function(){
	jQuery("#storeTag").find(":checkbox").each(function(){
		var storeTagValue =	jQuery(this).val();
		jQuery("#manageTag").find(":checkbox").each(function(){
			if(jQuery(this).val()==storeTagValue){
				jQuery(this).parent().remove();
			}
		})
	})
}
//获取当前审批单的标签
rh.vi.wfCardView.prototype.selectedTag = function(_self){
	//获取关联审批ID
	var servDataId = _self._parHandler._pkCode;
	var data= {};
	data["_searchWhere"] =" and DATA_ID='"+servDataId+"'";
	var selectedValue = FireFly.getListData("SY_COMM_ENTITY_TAG",data);
	return selectedValue;
}
//获取当前用户所有自定义的标签
rh.vi.wfCardView.prototype.allTag = function(){
	//获取当前用户所有自定义的标签
	var data = {"_searchWhere":" and TAG_TYPE = 'FAVORITE'"};
	data["_NOPAGE_"] = true;
	var allTag = FireFly.getListData("SY_COMM_TAG",data);
	return allTag;
};
//打开dialog框
rh.vi.wfCardView.prototype.showDialog = function(event,fenfaObj) {
	var _self = this;
	// 构造dialog
	var dialogId = "WF_NOTE_FENFA_DIALOG"; // 设置Dialog的id
	var winDialog = jQuery("<div></div>").attr("id", dialogId).attr("title",(fenfaObj["TITLE"] || "分发文件"));
	//追加到当前页面body上
	winDialog.appendTo(jQuery("body"));
	var bodyWid = jQuery("body").width() / 3;
	var hei = 180;
	var wid = bodyWid;
	var posArray = [ 30, 30 ];
	if (event) {
		var cx = jQuery("body").width();
		cx = cx / 3;
		posArray[0] = cx;
		posArray[1] = parseInt(parent.jQuery("body").scrollTop() + GLOBAL.getDefaultFrameHei() / 2) - hei;
	}
	jQuery("#" + dialogId).dialog({
		autoOpen : false,height : hei,width : wid,
		modal : false,show:"blud",hide:"blue",
		resizable : false,position : posArray,
		buttons: {
			"确认": function() {
				_self._callBackFenfaDialog(jQuery("#" + dialogId),fenfaObj);
				jQuery(this).remove();
			},
			"关闭": function() {
				jQuery(this).remove();
			}
		},
		open : function() {},
		close : function() {
			jQuery(this).remove();
		}
	});

	// 打开dialog
	var dialogObj = jQuery("#" + dialogId);
	dialogObj.dialog("open");

	dialogObj.focus();
	jQuery(".ui-dialog-titlebar").last().css("display", "block");// 设置标题显示
	dialogObj.parent().addClass("rh-bottom-right-radius rhSelectWidget-content");
	Tip.showLoad("努力加载中...", null, jQuery(".ui-dialog-title", winDialog).last());
	var btns = jQuery(".ui-dialog-buttonpane button",dialogObj.parent()).attr("onfocus","this.blur()");
	btns.first().addClass("rh-small-dialog-ok");
	btns.last().addClass("rh-small-dialog-close");
	dialogObj.parent().addClass("rh-small-dialog").addClass("rh-bottom-right-radius");
	dialogObj.css({"background-color":"#FFF"});
    jQuery(".ui-dialog-titlebar").last().css("display","block");//设置标题显示
    _self._setFenFaHtml(dialogObj);
};
//画分发html元素
rh.vi.wfCardView.prototype._setFenFaHtml = function(pCon) {
	var fenfaTable = jQuery("<table  border='1'>" +
		"  <tr>"+
		"    <td width='30%'>分发次数</td>"+
		"    <td width='70%'>"+
		"		<div style='padding:0px 3px 0px 0px;'>"+
		"			<input type='text' value='1' id='SEND_NUM' style='width:100%;'/>"+
		"		</div>"+
		"	</td>"+
		"  </tr>"+
		"  <tr>"+
		"    <td>强制提醒接收人</td>"+
		"    <td valign='middle'>"+
		"		<div style='padding:0px 5px 0px 0px;'>"+
		"			<input  type='radio' value='1' name='SEND_FLAG' checked='checked'style='vertical-align: middle;'><label style='line-height:10px;'>是</label></input>"+
		"			<input  type='radio' value='2' name='SEND_FLAG' style='vertical-align: middle;'><label style='line-height:10px;'>否</label></input>"+
		"		</div>"+
		"	</td>"+
		"  </tr>"+
		"  <tr>"+
		"    <td>办理类型</td>"+
		"    <td>"+
		"		<div style='padding:0px 5px 0px 0px;'>"+
		"			<input type='radio' value='1' name='SEND_TYPE' checked='checked' style='vertical-align: middle;'><label style='line-height:10px;'>办件</label></input>"+
		"			<input  type='radio' value='2' name='SEND_TYPE' style='vertical-align: middle;'><label style='line-height:10px;'>阅件</label></input>"+
		"		</div>"+
		"	</td>"+
		"  </tr>"+
		"</table>");
	fenfaTable.css({"width":"100%","border":"1px #91bdea solid"});
	fenfaTable.find("td").css({"padding":"3px 5px 3px 5px","border":"1px #91bdea solid"});
	var conDiv = jQuery("<div></div>");
	conDiv.css({"padding":"10px 5px 10px 5px"});
	fenfaTable.appendTo(conDiv);
	conDiv.appendTo(pCon);
};

//dialog回调函数
rh.vi.wfCardView.prototype._callBackFenfaDialog = function(dialogObj,fenfaObj) {
	var _self = this;
	var sendNum = dialogObj.find("input[id='SEND_NUM']").val() || "";
	var sendFlag = dialogObj.find("input[name='SEND_FLAG']:checked").val() || "";
	var sendType = dialogObj.find("input[name='SEND_TYPE']:checked").val() || "";
	var fenfaAddObj = {"SEND_NUM":sendNum,"SEND_FLAG":sendFlag,"SEND_TYPE":sendType};
	fenfaObj = jQuery.extend(fenfaAddObj, fenfaObj);
	//调用分发
	_self.showSendDetail(fenfaObj);
	return true;
};

//公文发布
rh.vi.wfCardView.prototype.publish = function() {
	var _self = this;
	//获取[是否公开]对象
	var isOpen = _self._parHandler.getItem("ISOPEN").getValue() || "";
	if ((isOpen == "") || (isOpen != UIConst.YES)) {
		_self._parHandler.cardBarTipError("请先将此公文公开");
		return false;
	} else {
		//获取[是否公开]对象
		var openType = _self._parHandler.getItem("OPEN_TYPE").getValue() || "";
		if (openType == "") {
			_self._parHandler.cardBarTipError("请先选择此公文公开类型");
			return false;
		} else {
			var data = {"_PK_":_self._parHandler._pkCode,
						"ISOPEN":_self._parHandler.getItem("ISOPEN").getValue(),
						"OPEN_TYPE":_self._parHandler.getItem("OPEN_TYPE").getValue()
					   };
			if(!_self._getFaBuData(data)){
				_self._parHandler.cardBarTipError("请先保存数据！");
				return false;
			}
			var returnObj = FireFly.doAct("OA_GW_TMPL_FW_PUBLISH","operatePublishData",data);
			if (returnObj["MSG"] == "OK") {
				_self._parHandler.cardBarTip("发布成功！");
				_self._parHandler.refresh();
			} else {
				_self._parHandler.cardBarTipError("发布失败！");
			}
		}
	}
};

/**
 * 获取公文发布数据
 */
rh.vi.wfCardView.prototype._getFaBuData = function (data){
	var _self = this;
	var changeData = _self._parHandler.getChangeData();
	//如果修改未保存
	if (changeData["ISOPEN"] || changeData["OPEN_TYPE"]) {
		return false;
	}
	//总公司
	if (data["OPEN_TYPE"] == "1") {
		data["OPEN_TYPE"] = System.getVar("@ODEPT_CODE@");
	//总省公司
	} else if (data["OPEN_TYPE"] == "2") {
		data["OPEN_TYPE"] = "ZS";
	//全国
	} else if (data["OPEN_TYPE"] == "3") {
		data["OPEN_TYPE"] = "RPUB";
	}
	return true;
}