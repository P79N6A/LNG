/** 字典选择弹出框页面渲染引擎 */
GLOBAL.namespace("rh.vi");
/*待解决问题：
 * 
 * */
rh.vi.rhDictTreeView = function(options) {
	var defaults = {
		"id":"-viDictTreeView",
		"sId":"",//服务ID
		"aId":"", //操作ID
		"pCon":null,
		"pId":null,
		"linkWhere":"",
		"itemCode":"",
		"config":"",
		"rebackCodes":null,
		"hide":"",
		"show":"",
		"resizable": false,
		"replaceData":null,//替换的树形展示数据
		"replaceCallBack":null,//替换的回调方法
		"replaceNodeClick":null,//单击方法
		"afterFunc":null,//回写之后的回调函数
		"extendDicSetting":null,//扩展的树形参数设置
		"parHandler":null,
		"formHandler":null,
		"searchFlag":false,
		"dialogName":null
	};
	this.opts = jQuery.extend(defaults,options);
	this.parHandler = this.opts.parHandler;
	this.formHandler = this.opts.formHandler;
	var config = this.opts.config;
	var confArray = config.split(",");
	this.dictId = confArray[0];
	this.dialogName = "字典选择";
	
	var conf = confArray.slice(1);
	this._confJson = StrToJson(conf.join(","));
	this._treeType = this._confJson && (this._confJson.TYPE) ? this._confJson.TYPE:"single";
	this._searchType = this._confJson && (this._confJson.SEARCHTYPE) ? this._confJson.SEARCHTYPE:null;
	if (this.opts.searchFlag && this._searchType) {
		this._treeType = this._searchType;
	}
	this.level = this._confJson && (this._confJson.LEVEL) ? this._confJson.LEVEL:null;//显示层级
	this._pid = this._confJson && (this._confJson.PID) ? this._confJson.PID:null;
	this.configExtendDicSetting = this._confJson && (this._confJson.extendDicSetting) ? this._confJson.extendDicSetting:null;
	this.extendBackItem = this._confJson && (this._confJson.extendBackItem) ? this._confJson.extendBackItem:null;
	this.rtnLeaf = this._confJson && (this._confJson.rtnLeaf) ? this._confJson.rtnLeaf:false;//只返回叶子节点值
	this.rtnNullFlag = this._confJson && (this._confJson.rtnNullFlag) ? this._confJson.rtnNullFlag:false;//空值也返回
	this.contentMain = jQuery();
	this._data = null;	
	this._searchWhere = "";//查询条件
	this._extWhere = this._confJson && (this._confJson.EXTWHERE) ? this._confJson.EXTWHERE:null;//扩展条件
	this.dialogId = GLOBAL.getUnId("dictDialog",Tools.rhReplaceId(this.dictId));
	this._linkWhere = this.opts.linkWhere;//关联功能过滤条件
	this.links = this.opts.links || {};//关联功能过滤条件
	this._height = "";
	this._width = "";
	this._pCon = this.opts.pCon;//树要放到的容器
	  
	this.LINK_WHERE = UIConst.LINK_WHERE;  
	this.SEARCH_WHERE = UIConst.SEARCH_WHERE;           
};
/*
 * 渲染页面主方法
 */
rh.vi.rhDictTreeView.prototype.show = function(event,replacePosArray) {
	this._initMainData();
	if (this._pCon) {
		
	} else {
		this._layout(event,replacePosArray);
	}
	//this._bldSearch();
	this._bldDictTree();
	//this._afterLoad();
};
/*
 * 构建弹出框页面布局
 */
rh.vi.rhDictTreeView.prototype._layout = function(event,replacePosArray) {
	var _self = this;
	jQuery("#" + this.dialogId).dialog("destroy");
	//1.构造dialog
	this.winDialog = jQuery("<div></div>").addClass("dictDialog").attr("id",this.dialogId).attr("title",this.dialogName);
	this.winDialog.appendTo(jQuery("body"));
	//@TODO:显示位置处理
	var hei = 420;
    var wid = 290;
    var posArray = [];

    var scroll = RHWindow.getScroll(parent.window);
    var viewport = RHWindow.getViewPort(parent.window);
    var top = scroll.top + viewport.height / 2 - hei / 2 - 88;
    
    posArray[0] = "";
    posArray[1] = top;
    
/*    if (event) {
	    var cy = event.clientY;
	    posArray[0] = "";
	    posArray[1] = cy-280;
    }*/
    
    if (replacePosArray) {
    	posArray = replacePosArray;
    }

	jQuery("#" + this.dialogId).dialog({
		autoOpen: false,
		height: hei,
		width: wid,
		modal: true,
		hide:_self.opts.hide,
		show:_self.opts.show,
		resizable:_self.opts.resizable,
		position:posArray,
		buttons: {
				"确认": function() {
					var curNode = null;
					if (_self._treeType == "multi") {
						curNode = _self.tree.getCheckedNodes();
					} else {
						curNode = [];
						curNode.push(_self.tree.getCurrentNode());
						//单选的时候，只选叶子节点，
						if (_self.rtnLeaf && _self.tree.hasChild(_self.tree.getCurrentNode()) || !_self.tree.getCurrentNode()) {
							alert("请选择具体的" + _self.dialogName + "！");
							return false;
						}
					}
					if (((curNode == null) || curNode.length == 0) && _self.rtnNullFlag == false) {
						alert("请选择" + _self.dialogName + "！");
						return false;
					}
					_self.backWriteItem(curNode);
				},
				"关闭": function() {
					jQuery("#" + _self.dialogId).dialog("close");
					//jQuery(".bbit-tree-selected").removeClass("bbit-tree-selected");
				}
		},
		open: function() { 

		},
		close: function() {
			_self.winDialog.remove();
		}
	});
	var dialogObj = jQuery("#" + this.dialogId);
	dialogObj.dialog("open");
	//注释掉头部关闭按钮
	dialogObj.parent().find(".ui-dialog-titlebar-close").hide();
	var btns = jQuery(".ui-dialog-buttonpane button",dialogObj.parent()).attr("onfocus","this.blur()");
	btns.first().addClass("rh-small-dialog-ok");
	btns.last().addClass("rh-small-dialog-close");
	dialogObj.parent().addClass("rh-small-dialog").addClass("rh-bottom-right-radius");
    jQuery(".ui-dialog-titlebar").last().css("display","block");//设置标题显示

};
/*
 * 构造树
 */
rh.vi.rhDictTreeView.prototype._bldDictTree = function() {
	var _self = this;
	var setting = {
		rhexpand: false,
    	showcheck: false,   
    	url: "SY_COMM_INFO.dict.do", 
    	dictId : this.dictId,
        theme: "bbit-tree-no-lines", //bbit-tree-lines ,bbit-tree-no-lines,bbit-tree-arrows
        rhItemCode:this.opts.itemCode,
        onnodeclick: function(item) {
        	if (_self.opts.replaceNodeClick != null) {//增加单击覆盖 2013-03-14 jinkai
        		        var backFunc = _self.opts.replaceNodeClick;
                        backFunc.call(_self.opts.parHandler,item);
        	}
	    	return false;
		},
		onnodedblclick : function(item) {
			var str = [];
			str.push(item);
			_self.backWriteItem(str);
		}
    };
    setting.rhLeafIcon = Tools.getTreeLeafClass(this.dictId);//系统默认提供
    if (this._treeType == "multi") {
    	setting["showcheck"] = true;
    }
    if (this.configExtendDicSetting) {
    	setting = jQuery.extend(setting,this.configExtendDicSetting);//合并扩展的树形设置信息    	
    }
    if (_self.opts.replaceData) {
	    var tempData =_self.opts.replaceData;// 替换的显示数据
	    if (tempData.length > 0) {
		    this.dialogName = tempData[0].NAME;
		    setting.data = tempData[0].CHILD;
	    }
    } else {
    	var extWhere = Tools.parVarReplace(this._extWhere);
    	extWhere = Tools.systemVarReplace(extWhere);
    	setting.extWhere = extWhere;
	    var tempData = FireFly.getDict(this.dictId,_self._pid,extWhere,_self.level);//设置树的初始化数据
	    this.dialogName = tempData[0].NAME;
	    setting.data = tempData[0].CHILD;
    }
    if (this.opts.extendDicSetting) {
    	setting = jQuery.extend(setting,this.opts.extendDicSetting);//合并扩展的树形设置信息
    }
    if (this.opts.dialogName) {//替换标题
    	this.dialogName = this.opts.dialogName;
    }

    this.tree = new rh.ui.Tree(setting);
    if (this._pCon) {
    	this._pCon.append(this.tree.obj);
    } else {
    	this.winDialog.parent().find(".ui-dialog-title").text(this.dialogName);
    	this.winDialog.append(this.tree.obj);
    }
};
/*
 * 回写值
 */
rh.vi.rhDictTreeView.prototype.backWriteItem = function(nodes) {
	var id=[],value=[];
	var _self = this;
	
	if (_self.rtnLeaf == true) { //如果只需要 取到 叶子值，去掉不是叶子节点的节点
	    jQuery.each(nodes, function(i, n) {
	    	if (!_self.tree.hasChild(n)) {
		    	id.push(n.ID);
		    	value.push(n.NAME);
			}
	    });
	} else {
	    jQuery.each(nodes, function(i, n) {
	    	id.push(n.ID);
	    	value.push(n.NAME);
	    });
	}	
	var ret = true; // 用于接收回调函数返回值,来判断是否选择成功
    if (_self.opts.replaceCallBack) { //有替换的回调函数
        var backFunc = _self.opts.replaceCallBack;
        ret = backFunc.call(_self.opts.parHandler,id,value);
        if (ret != false) {
        	ret = true;
        }
    } else {
	    if (_self.opts.rebackCodes) {
	 	   jQuery("#" + _self.opts.rebackCodes).val(id.join(","));
	 	   jQuery("#" + _self.opts.rebackCodes + "__NAME").val(value.join(","));
	    } else {
	    	_self.parHandler.setValue(id.join(","));
	    	_self.parHandler.setText(value.join(","));
	    	if (_self.extendBackItem) {//回写扩展字段
	    		_self.formHandler.getItem(_self.extendBackItem).setValue(value.join(","));;
	    	}
	    }
	    if (_self.opts.afterFunc) {//回写之后的方法
	        var afterFunc = _self.opts.afterFunc;
	        afterFunc.call(_self.opts.parHandler,id,value);	    	
	    }
    }
    if (ret && typeof(jQuery) == "function") {
    	jQuery("#" + this.dialogId).dialog("close");
    }
};
/*
 * 初始化主数据
 */
rh.vi.rhDictTreeView.prototype._initMainData = function() {
	//默认布局
	var pId = "";
};
