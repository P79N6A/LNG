/** 查询选择弹出框页面渲染引擎 */
GLOBAL.namespace("rh.vi");
/*
 * 例：SY_SERV_ITEM,{'TARGET':'CMPY_ADDRESS','SOURCE':'ITEM_CODE','EXTWHERE':' and SERV_ID=^SY_ORG_USER^','TYPE':'single'}
 * 
 * */
rh.vi.rhSelectListView = function(options) {
	this.conOptions = options;
	if (options.configs) {//关联选择配置
		this.opts = {"title":""};
		this.parHandler = options.parHandler;
		this.configs = options.configs;
		this.dialogId = GLOBAL.getUnId("selectDialog","UNIT");
	} else {//默认查询选择
		this._resetOptions(options);    
		this.dialogId = GLOBAL.getUnId("selectDialog",this.sId);
	}
};
/*
 * 渲染页面主方法
 */
rh.vi.rhSelectListView.prototype.show = function(event,positionArray) {
	var _self = this;
	//工作流特殊处理frame
	this._workflowControl();
	this._layout(event,positionArray);
	if (this.configs) {
		this._bldChangeList();
		this.ul.appendTo(this._titBar);
		this.selectArea.appendTo(this.winDialog);
		this.winDialog.parent().find(".ui-dialog-title").empty();
		jQuery(".rh-select-top-li").first().click();
	} else {
		setTimeout(function() {
			_self._bldListView();
			_self._afterLoad();	
		},0);	
	}
};
/*
 * 重置参数
 */
rh.vi.rhSelectListView.prototype._resetOptions = function(options) {
	var _self = this;
	var defaults = {
			"id":options.sId + "-viSelectView",
			"aId":"", //操作ID
			"pCon":null,
			"pId":null,
			"linkWhere":"",
			"itemCode":"",
			"config":"",
			"rebackCodes":null,
			"parHandler":null,
			"formHandler":null,
			"searchFlag" : false,
			"params":null,
			"replaceCallBack":null,
			"title":"查询选择"
	};
	var _self = this;
	this.opts = jQuery.extend(defaults,options);
	var config = this.opts.config;
	var confArray = config.split(",");
	this.sId = confArray[0];
	var conf = confArray.slice(1);
	this._confJson = StrToJson(conf.join(","));
	this.pCodes = this._confJson && (this._confJson.TARGET) ? this._confJson.TARGET.split("~"):"";
	this.sCodes = this._confJson && (this._confJson.SOURCE) ? this._confJson.SOURCE.split("~"):"";
	if (this.sCodes.length > 0) {
		_self.sCodesFilter = [];
		jQuery.each(this.sCodes,function(i,n) {
			if (n.indexOf("__NAME") < 0) {
				_self.sCodesFilter.push(jQuery.trim(n));
			}
		});
	}
	this.type = this._confJson && (this._confJson.TYPE) ? this._confJson.TYPE:"multi";
	this._searchType = this._confJson && (this._confJson.SEARCHTYPE) ? this._confJson.SEARCHTYPE:null;
	if (this.opts.searchFlag && this._searchType) {
		this.type = this._searchType;
	}
	this.pkHide = this._confJson && (this._confJson.PKHIDE) ? this._confJson.PKHIDE:"false";//增加主键的隐藏判断
	this._dataFlag = this._confJson && (this._confJson.DATAFLAG) ? this._confJson.DATAFLAG:"true";//是否显示列表内容
	this._addBtnFlag = this._confJson && (this._confJson.ADDBTN) ? this._confJson.ADDBTN:"false";//是否显示添加按钮
	this._deleteBtnFlag = this._confJson && (this._confJson.DELETEBTN) ? this._confJson.DELETEBTN:"false";//是否显示删除按钮
	this._modifyBtnFlag = this._confJson && (this._confJson.MODIFYBTN) ? this._confJson.MODIFYBTN:"false";//是否显示修改按钮
	this._split = this._confJson && (this._confJson.SPLIT) ? this._confJson.SPLIT:"";//是否用替换的分割符
	this._htmlItem = this._confJson && (this._confJson.HTMLITEM) ? this._confJson.HTMLITEM:"";//返回html()的字段
	
	this.parHandler = this.opts.parHandler;
	this.formHandler = this.opts.formHandler;
	this.searchFlag = this.opts.searchFlag;
	this.params = this.opts.params;// 扩展参数对象
	this.contentMain = jQuery();
	this._data = null;	
	this._searchWhere = "";//查询条件
	this._extendWhere = "";//扩展条件

	this._linkWhere = this.opts.linkWhere;//关联功能过滤条件
	this.links = this.opts.links || {};//关联功能过滤条件
	this._height = "";
	this._width = "";
	  
	this.LINK_WHERE = UIConst.LINK_WHERE;     
};
/*
 * 构建弹出框页面布局
 */
rh.vi.rhSelectListView.prototype._layout = function(event,positionArray) {
	var _self = this;
	jQuery("#" + this.dialogId).dialog("destroy");
	//构造dialog
	this.winDialog = jQuery("<div></div>").addClass("selectDialog").attr("id",this.dialogId).attr("title",this.opts.title);
	this.winDialog.appendTo(jQuery("body"));
	var bodyWid = jQuery("body").width();
	var hei = GLOBAL.getDefaultFrameHei()-150;
    var wid = bodyWid - 100;
    
    var scroll = RHWindow.getScroll(parent.window);
    var viewport = RHWindow.getViewPort(parent.window);
    // scroll.top - viewport.height / 2 到顶上了，再加上高度的一半以及top的高度
    var top = scroll.top + viewport.height / 2 - hei / 2 - 88;
    var left = scroll.left + viewport.width / 2;
    
    var posArray = [left,top];
    
//    
//    if (event) {
//	    var cy = event.clientY;
//	    posArray[0] = "";
//	    posArray[1] = cy-300;
//    }

	jQuery("#" + this.dialogId).dialog({
		autoOpen: false,
		height: hei,
		width: wid,
		modal: true,
		resizable:false,
		position:posArray,
		open: function() { 

		},
		close: function() {
			_self.winDialog.find("iframe").remove();
			_self.winDialog.remove();
			_self._workflowControl();
		}
	});
	var dialogObj = jQuery("#" + this.dialogId);
	dialogObj.dialog("open");
	dialogObj.focus();
    this._titBar = jQuery(".ui-dialog-titlebar").last().css("display","block");//设置标题显示
    dialogObj.parent().addClass("rh-bottom-right-radius rhSelectWidget-content");
    //增加服务的切换
    //Tip.showLoad("努力加载中...",null,jQuery(".ui-dialog-title",this.windialog).last());
};
/*
 * 构造列表
 */
rh.vi.rhSelectListView.prototype._bldListView = function() {
	if (jQuery("#" + this.sId + "-select-container").length == 1) {
		jQuery(".rh-select-container").hide();
		jQuery("#" + this.sId + "-select-container").addClass("rh-select-show").show();
	} else if (jQuery("#" + this.sId + "-select-container").length == 0) {
		jQuery(".rh-select-container").hide();
		var _self = this;
		var extWhere = "";
		var res = this._confJson && (this._confJson.EXTWHERE) ? this._confJson.EXTWHERE:"";
		var advRes = this._confJson && (this._confJson.SEARCHEXTWHERE) ? this._confJson.SEARCHEXTWHERE:"";//高级查询的条件替换
		if (advRes.length > 0) {
			res = advRes;
		}
		if (this.searchFlag == false) {//非高级查询时
			//字段级替换
			var match = new RegExp("#.*?#","gm").exec(res);//#字段#
			while(match != null) {
				var temp = match.toString();
				var item = temp.substring(1,temp.length-1);
				var value = _self.formHandler.getItem(item).getValue();
				res = res.replace(temp,value);
				match = new RegExp("#.*?#","gm").exec(res);
			}
		}
		extWhere = res.replace(/\^/g,"'");//替换^
		var div = jQuery("<div class='rh-select-container'></div>").attr("id",this.sId + "-select-container").appendTo(this.winDialog);
		var temp = {"sId":this.sId,"pCon":div,"batchFlag":false,"showTitleBarFlag":"false","showButtonFlag":"false",
				"_SELECT_":_self.sCodesFilter.join(","),"type":this.type,"selectView":true,"pkHide":this.pkHide,"replaceQueryModel":1,
				"resetHeiWid":this._resetHeiWid,"parHandler":_self,"extWhere":extWhere,"dataFlag":this._dataFlag,"params":this.params};
		this.listView = new rh.vi.listView(temp);
		this.listView.show();
	}
};
/*
 * 刷新列表
 */
rh.vi.rhSelectListView.prototype.refreshAndTip = function() {
	this.listView.refresh();
	Tip.show("已重新加载当前列表！",null,jQuery(".ui-dialog-title",this.windialog).last()).css("line-height","20px");
};
/*
 * 构造按钮条
 */
rh.vi.rhSelectListView.prototype._bldBtnBar = function() {
	var _self = this;
	var btnBar = this.listView._btnBar;
	btnBar.find(".rh-icon").remove();
	var btnData = [{"ACT_NAME":"确定选择并返回","ACT_CODE":"selectOK","ACT_CSS":"ok"},
	               {"ACT_NAME":"取消选择","ACT_CODE":"selectCancel","ACT_CSS":"cancel"}];
	if (this._addBtnFlag === "true" || this._addBtnFlag === true) {
		btnData.push({"ACT_NAME":"添加","ACT_CODE":"selectAdd","ACT_CSS":"add"});
	}
	if (this._deleteBtnFlag === "true" || this._deleteBtnFlag === true) {
		btnData.push({"ACT_NAME":"删除","ACT_CODE":"selectDelete","ACT_CSS":"delete"});
	}
	if (this._modifyBtnFlag === "true" || this._modifyBtnFlag === true) {
		btnData.push({"ACT_NAME":"修改","ACT_CODE":"selectModify","ACT_CSS":"sync"});
	}
	jQuery.each(btnData,function(i,n) {	
		var temp = jQuery("<a></a>").addClass("rh-icon").addClass("rhGrid-btnBar-a");
		temp.attr("id",_self._getUnId(n.ACT_CODE));
		_self._act(n.ACT_CODE,temp);
		var labelName = jQuery("<span></span>").addClass("rh-icon-inner").text(n.ACT_NAME);
		temp.append(labelName);
		var icon = jQuery("<span></span>").addClass("rh-icon-img").addClass("btn-" + n.ACT_CSS);
		temp.append(icon);
		btnBar.append(temp);
	});
};
/*
 * 根据动作绑定相应的方法
 * @param aId 动作ID
 */
rh.vi.rhSelectListView.prototype._act = function(aId,aObj) {
	var _self = this;
	var taObj = aObj;
	this.selectGrid = this.listView.grid;
	switch(aId) {
		case "selectOK"://确定选择
			taObj.bind("click",function() {
			   if (_self.configs) {
	               _self._backWriteItemConfigs();
	           } else {
	        	   var pks = _self.selectGrid.getSelectPKCodes();
	        	   if (pks.length == 0) {
	        		   alert("请选择记录");
	        	   } else {
	        		   _self.backWriteItem();
	        	   }
	           }
			});	
			break;
		case "selectCancel"://取消选择
		    taObj.bind("click",function() {
		        _self.selectGrid.deSelectAllRows();
		    });  
		    break;
		case "selectAdd"://新加记录
		    taObj.bind("click",function() {
		    	var paramsAll = {"callBackHandler":_self};
		    	paramsAll["closeCallBackFunc"] = function() {
		    		_self.refreshAndTip();
		    	};
		    	paramsAll = jQuery.extend(paramsAll,_self.params);
				var options = {"url":_self.sId + ".card.do","tTitle":'添加一条选择',"params":paramsAll,menuFlag:3};
				Tab.open(options);
		    });  
		    break;
		case "selectDelete"://删除记录
		    taObj.bind("click",function() {
                var pkAarry = _self.listView.grid.getSelectPKCodes();
		    	if (jQuery.isEmptyObject(pkAarry)) {
		    		 _self.listView.listBarTipError("请选择相应记录！");
		    	} else {
		    		 var res = confirm("您确定要删除该数据么？");
		    		 if (res == true) {
			    		_self.listView.listBarTipLoad("提交中...");
			    		setTimeout(function() {
				    		var strs = pkAarry.join(",");
				    		var temp = {};
				    		temp[UIConst.PK_KEY]=strs;
				    		var resultData = FireFly.listDelete(_self.sId,temp,true);
					        _self.listView.refresh();
			    		},0);	
		    		 } else {
		    		 	return false;
		    		 }
		    	}
		    });  
		    break;
		case "selectModify"://修改记录
			taObj.bind("click",function() {
				var paramsAll = {"callBackHandler":_self};
		    	paramsAll["closeCallBackFunc"] = function() {
		    		_self.refreshAndTip();
		    	};
				var pkAarry = _self.listView.grid.getSelectPKCodes();
		    	if (pkAarry.length>1||pkAarry.length==0) {
		    		 _self.listView.listBarTipError("请选择一条记录！");
		    	}else{
		    		paramsAll = jQuery.extend(paramsAll,_self.params);
		    		var options = {"url":_self.sId + ".card.do?pkCode=" + pkAarry,"tTitle":'修改选择',"params":paramsAll,menuFlag:3};
		    		Tab.open(options);
		    	}
			});  
			break;
    };
};
/*
 * 回写值
 */
rh.vi.rhSelectListView.prototype.backWriteItem = function() {
	var _self = this;
    jQuery.each(_self.sCodes, function(i,n) {//回写字段，如果有配置回写字段
	   	   _self.pCode = _self.pCodes[i];
	   	   if (_self.pCode == "" || _self.pCode == null) {
	   	   	   return;
	   	   }
	       _self.iCodes = _self.selectGrid.getSelectItemValues(n);
	       if (_self._split && _self._split.length > 0) {//有自定义的分割符
	    	   var str = _self.iCodes + "";
	    	   _self.iCodes = str.replace(/\,/g,_self._split);
	       }
	       if (_self.opts.rebackCodes) {
	    	   jQuery("#" + _self.opts.rebackCodes).val(_self.iCodes);
	       } else if (_self.pCode.indexOf("__NAME") > 0) {
	    	   var code = _self.pCode.substring(0,_self.pCode.indexOf("__NAME"));
	    	   _self.formHandler.getItem(code).obj.val(_self.iCodes);	   
	       } else {
	    	   if (_self.formHandler) {
	    		   _self.formHandler.getItem(_self.pCode).setValue(_self.iCodes);	   
	    	   }
	       }
	});
	if (_self.opts.replaceCallBack) { //有替换的回调函数
	    var array = {};
		jQuery.each(_self.sCodes, function(i,n) {
	   	   _self.pCode = _self.pCodes[i];
	   	   var htmlItem = null;
           if ((_self._htmlItem.length > 0) && (_self._htmlItem.indexOf(n) >=0)) {//回写的取html()
        	   htmlItem = true;
           }
	       _self.iCodes = _self.selectGrid.getSelectItemValues(n,htmlItem);
	       array[n] = "" + _self.iCodes + "";
	    });
        var backFunc = _self.opts.replaceCallBack;
        var searchWhere = _self.listView.whereData[UIConst.SEARCH_WHERE];
        backFunc.call(_self.opts.parHandler,array,searchWhere);
    }
   	jQuery("#" + _self.dialogId).dialog("close");
};
rh.vi.rhSelectListView.prototype.trClick = function() {
	var _self = this;
};
/*
 * 加载后执行
 */
rh.vi.rhSelectListView.prototype._afterLoad = function() {
	var _self = this;
	this._bldBtnBar();
	this.selectGrid.unbindTrdblClick();//取消双击绑定
	this.selectGrid.unbindIndexTDClick();//取消单击绑定
	if (this.configs) { 
		this.selectGrid.getCheckBox().bind("click",function(event) {
			var tar = jQuery(event.target);
			var pTr = tar.parent().parent();
			var sId = _self.sId;
			var id = pTr.attr("id");
			var title = pTr.find("td").last().text();
			if (pTr.hasClass("tBody-selectTr")) {
				_self._putIntoArea(id,sId,title);
			} else {
				_self._deleteFormArea(id);
			}
		});
	} else {
		this.selectGrid.dblClick(this.backWriteItem,this);//增加双击绑定
		//单选多选判断
		if (this.type == 'single') {
			this.selectGrid.trClick(this.trClick,this);//增加单击事件
		}	
	}
	//设置已选中行
};
//组合主键
rh.vi.rhSelectListView.prototype._getUnId = function(id) {
    var sId = this.opts.sId;
    return sId + "-" + id;
};
/*
 * 重置当前页面的高度，初始化时、从卡片返回列表时
 */
rh.vi.rhSelectListView.prototype._resetHeiWid = function() {
	var _self = this;
};
/*
 * 工作流定义页面特殊处理
 */
rh.vi.rhSelectListView.prototype._workflowControl = function() {
	var _self = this;
	var wfIframe = "#SY_WFE_PROC_DEF-includeJSP";
	if (jQuery(wfIframe).html() != null) {
		var obj = jQuery(wfIframe);
		if (obj.hasClass("hideFrame")) {
			obj.css("display","");
			obj.removeClass("hideFrame");
		} else {
			obj.css("display","none");
			obj.addClass("hideFrame");
		}
	}
};
/*
 * 选择的多列表切换
 */
rh.vi.rhSelectListView.prototype._bldChangeList = function() {
	var _self = this;
	this.ul = jQuery("<ul class='rh-select-top-ul'></ul>");
	var array = eval(this.configs);
	for (var i = 0;i < array.length;i++) {
		var item = array[i];
		var arr = JsonToStr(item);
		var li = jQuery("<li class='rh-select-top-li'>" + item.servName + "</li>").appendTo(_self.ul);
		li.bind("click", {"con":arr,"servId":item.servId}, function(event) {
			var data = event.data;
			jQuery(".rh-select-top-liActive").removeClass("rh-select-top-liActive");
			jQuery(this).addClass("rh-select-top-liActive");
			var config = data.servId + "," + data.con;
			_self._resetListload({"sId":item.servId,"config":config,"replaceCallBack":_self.conOptions.replaceCallBack,"formHandler":_self.conOptions.formHandler});
		});
	}
	this.selectArea = jQuery("<div class='rh-select-top-area'></div>");
};
/*
 * 重置列表的加载
 */
rh.vi.rhSelectListView.prototype._resetListload = function(options) {
	var _self = this;
	//参数重置
	this._resetOptions(options);
	//列表加载
	this._bldListView();
	if (jQuery("#" + this.sId + "-select-container").hasClass("rh-select-show")) {
	} else {
		this._afterLoad();	
	}
};
/* 
 * 将数据展示在临时展示区
 */
rh.vi.rhSelectListView.prototype._putIntoArea = function(data,sId,title) {
	var _self = this;
	var span = jQuery("<span class='rh-select-area-span'><span class='rh-select-area-text'>" + title + "</span><span class='rh-select-area-close btn-delete'></span></span>").attr("selectid",data).attr("sId",sId).appendTo(this.selectArea);
	span.bind("mouseover",function() {
		jQuery(this).find(".rh-select-area-close").show();
	}).bind("mouseleave",function() {
		jQuery(this).find(".rh-select-area-close").hide();
	});
	span.find(".rh-select-area-close").bind("click",function() {
		jQuery(this).parent().remove();
	});
};
/* 
 * 将数据删除临时展示区
 */
rh.vi.rhSelectListView.prototype._deleteFormArea = function(data) {
	var _self = this;
	this.selectArea.find(".rh-select-area-span[selectid='" + data + "']").remove();
};
/* 
 * 将数据删除临时展示区
 */
rh.vi.rhSelectListView.prototype._areaShowHide = function() {
	if (this.selectArea.find(".rh-select-area-span").length == 0) {
		this.selectArea.hide();
	} else  {
		this.selectArea.show();
	}
};
/* 
 * 回写临时列表区
 */
rh.vi.rhSelectListView.prototype._backWriteItemConfigs = function() {
	var _self = this;
	var data = this.selectArea.find(".rh-select-area-span");
	var values = [];
	jQuery.each(data,function(i,n) {
		var temp = {};
		temp["sId"] = jQuery(n).attr("sid");
		temp["dataId"] = jQuery(n).attr("selectid");
		values.push(temp);
	});
	if (values.length > 0) {
		if (_self.opts.replaceCallBack) { //有替换的回调函数
	        var backFunc = _self.opts.replaceCallBack;
	        backFunc.call(_self.conOptions.parHandler,values);
	        var returnFlag = _self.conOptions.parHandler.returnFlag;
	    } else {
			this.conOptions.parHandler.buildList(values);
	    }
		jQuery("#" + _self.dialogId).dialog("close");
	} else {
		alert("请选中记录！");
	}
};

