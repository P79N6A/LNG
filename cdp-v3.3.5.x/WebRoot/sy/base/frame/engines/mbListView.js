/** 列表页面渲染引擎 */
GLOBAL.namespace("mb.vi");
/*待解决问题：
 * 
 * */
mb.vi.listView = function(options) {
	var defaults = {
		"id":options.sId + "-mbListView",
		"sId":"",//服务ID
		"aId":"", //操作ID
		"pCon":null,
		"pId":null,
		"linkWhere":"",
		"extWhere":"",
		"type":null,
		"pkHide":false,
		"paramsFlag":false,
		"showSearchFlag":"true",
		"parHandler":null,//主卡片的句柄,
		"resetHeiWid": "",//覆盖函数
		"_SELECT_":null,//显示的字段
		"selectView":false,//查询选择标识
		"readOnly":false//页面只读标识
	};
	this.opts = jQuery.extend(defaults,options);
	this.servId = this.opts.sId;
    this._pCon = this.opts.pCon;
	this._data = null;	
	this._searchWhere = "";//查询条件
	this._originalWhere = "";//服务定义条件
	this._extendWhere = this.opts.extWhere;//扩展条件
	this._readOnly = this.opts.readOnly;
	this._cardRead = true;
	this._linkWhere = this.opts.linkWhere;//关联功能过滤条件
	this._params = this.opts.params || "";

	this._extWhere = (this.opts.extWhere && this.opts.extWhere != "undefined") ?  this.opts.extWhere : "";     
	this._transferData = {};
	this._height = "";
	this._width = "";


	this.LINK_WHERE = UIConst.LINK_WHERE;  
	this.SEARCH_WHERE = UIConst.SEARCH_WHERE;
	this.TREE_WHERE = UIConst.TREE_WHERE;   
	this.EXT_WHERE = UIConst.EXT_WHERE; 
	this.whereData = {};
	this.PAGE = {};   
};
/*
 * 渲染列表主方法
 */
mb.vi.listView.prototype.show = function() {
	this._initMainData();
	this._layout();
	this._bldGrid();
	//this._bldHeader();
	//this._bldSearch();
	this._afterLoad();
};
mb.vi.listView.prototype._initMainData = function() {
	this._data = FireFly.getCache(this.servId,FireFly.servMainData);
};
/*
 * 刷新
 */
mb.vi.listView.prototype.refresh = function() {
	var _self = this;
	this.gridContainer.empty();
	this._bldGrid();
	setTimeout(function() {
		//_self._refresh.html(UIConst.FONT_STROKE_REFRESH);
		_self.right.removeClass("mbTopBar-backActive");
	},500);
};
/*
 * 构建列表页面布局
 */
mb.vi.listView.prototype._layout = function() {
	var _self = this;
	//默认布局
	this.top = jQuery("<div></div>").addClass("mbTopBar").appendTo(this._pCon);
	
	var table = jQuery("<table class='mbTopBar-table'></table>").appendTo(this.top);
    var tr = jQuery("<tr></tr>").appendTo(table);
	var left = jQuery("<td class='mbTopBar-left'></td>").appendTo(tr);
	var center = jQuery("<td class='mbTopBar-center'></td>").appendTo(tr);
	this.right = jQuery("<td class='mbTopBar-right'></td>").appendTo(tr);
	
	this.back = jQuery("<div>返回</div>").addClass("mbTopBar-back").appendTo(left); 
   // this.back.html(UIConst.FONT_STROKE_BACK);
    left.bind("click",function() {
    	left.addClass("mbTopBar-backActive");
    	//_self.back.html(UIConst.FONT_STROKE_LOAD);
    	history.go(-1);
    });
    this._refresh = jQuery("<div>刷新</div>").addClass("mbTopBar-refresh").appendTo(this.right);	
    //this._refresh.html(UIConst.FONT_STROKE_REFRESH);
    this.right.bind("click",function() {
    	_self.right.addClass("mbTopBar-backActive");
    	//_self._refresh.html(UIConst.FONT_STROKE_LOAD);
    	_self.refresh();
    });
	var listContainer = jQuery("<div></div>").addClass("mbList-container");
	var top = jQuery("<div></div>").addClass("mbList-container-top").appendTo(listContainer);//头部
	this.con = jQuery("<div></div>").addClass("mbList-container-con").appendTo(listContainer);//主内容区
	//this._bldBtnBar();
	this.gridContainer = jQuery("<div></div>").addClass("mbList-container-con-grid").appendTo(listContainer);//列表外容器

	listContainer.appendTo(this._pCon);
};

/*
 * 构建列表页面布局
 */
mb.vi.listView.prototype._bldGrid = function() {
	//默认布局
	var options = {};
	if (this._params.length > 0) {
		var temp = StrToJson(this._params);
		options = jQuery.extend(options,temp);
	}
	if (this._extendWhere.length > 0) {
		options[this.EXT_WHERE] = this._extendWhere;
	}
	this._listData =  FireFly.getPageData(this.servId,options) || {};	

	var temp = {"id":this.servId,"mainData":this._data,"parHandler":this,"pCon":this.gridContainer,"parHandler":this};
	temp["listData"] = this._listData;
	this.servName = this._data.SERV_NAME;
	this.grid = new mb.ui.grid(temp);
	this.grid.render();
	this.grid.click(this._openLayer, this);
//	this.grid.getBlocks().longPress(500,function(event){
//		var obj = jQuery(event.target).parent();
//		obj.find(".mb-right-nav").hide();
//		obj.data("inFlag",false);
//		var delBtn = jQuery("<div>删除</div>").addClass("mb-btn-span mbTopBar-blueBtn").appendTo(obj);
//		event.stopPropagation();
//		return false;
//	}); 
};
mb.vi.listView.prototype._openLayer = function(pkCode,node) {
	var readOnly = false;//this.readOnly;
	this.url = FireFly.getContextPath() + "/sy/base/view/stdCardView-mb.jsp?sId=" +　this.servId + "&readOnly=" + readOnly + "&pkCode=" + pkCode;		
	window.location.href = this.url;
};
/*
 * 构建列表页面布局
 */
mb.vi.listView.prototype.morePend = function(options) {
	var _self = this;
	//_self._refresh.html(UIConst.FONT_STROKE_LOAD);
	if (options && options._PAGE_) {
		_self.PAGE["_PAGE_"] = options._PAGE_;
	}
	var data = {};
	data = jQuery.extend({},_self.PAGE,data);//合并分页信息
	if (options && options._NOPAGEFLAG_ && (options._NOPAGEFLAG_ == "true")) {//删除分页信息
		delete data._PAGE_;
		delete data._NOPAGEFLAG_;
	}
	this._listData = FireFly.getPageData(this.servId,data);
	this.grid._morePend(this._listData);
	this.grid.click(this._openLayer, this);
	this._afterLoad();
	setTimeout(function() {
		//_self._refresh.html(UIConst.FONT_STROKE_REFRESH);
	},500);
};
/*
 * 构建按钮条
 */
mb.vi.listView.prototype._bldBtnBar = function() {
	var _self = this;
	this.btns = {};
	var tempData = this._data.BTNS;
	var _btnBar = jQuery("<div></div>").addClass("mbList-container-con-btnBar");
	var oneVar = UIConst.STR_YES;
	jQuery.each(tempData,function(i,n) {  
		if ((n.ACT_TYPE == UIConst.ACT_TYPE_LIST)) {
			var temp = jQuery("<a></a>").addClass("rh-icon").addClass("rhGrid-btnBar-a");
			temp.attr("id",_self._getUnId(n.ACT_CODE));
			//_self._act(n.ACT_CODE,temp);
			var labelName = jQuery("<span></span>").addClass("rh-icon-inner").text(n.ACT_NAME);
			temp.append(labelName);
			var icon = jQuery("<span></span>").addClass("rh-icon-img").addClass("btn-" + n.ACT_CSS);
			temp.append(icon);
			if (n.ACT_MEMO.length > 0) {
				temp.bind("click",function() {
					var _funcExt = new Function(n.ACT_MEMO);
                    _funcExt.apply(_self);
				});
			}
			_self.btns[n.ACT_CODE] = temp;
			if ((n.ACT_EXPRESSION.length > 0) && _self._excuteActExp(n.ACT_EXPRESSION) == false) {//判断操作表达式
				temp.hide();
			} 
			_btnBar.append(temp);
		}
	});
	this._btnBar = _btnBar;
	this._btnBar.appendTo(this.con);
};

/*
 * 构建列表页面布局
 */
mb.vi.listView.prototype._afterLoad = function() {
	if (jQuery(".mbTopBar-title").length == 0) {
		jQuery("<div></div>").text(this.servName).addClass("mbTopBar-title").appendTo(this.top.find(".mbTopBar-center"));
	}
    //执行功能级js
    this._excuteProjectJS();
};
mb.vi.listView.prototype._getUnId = function(id) {
    var sId = this.servId;
    return sId + "-listbtn-" + id;
};
/*
 * 列表加载后执行工程级js方法
 */
mb.vi.listView.prototype._excuteProjectJS = function() {
	var _self = this;
	this._servListLoad = this._data.SERV_LIST_LOAD || "";//列表加载js
    this._pServListLoad = this._data.P_SERV_LIST_LOAD || "";//父服务列表加载js
    this._servPId = this._data.SERV_PID || "";//父服务ID
	var jsLoadFlag = this._servListLoad;
	var pLoadFlag = this._pServListLoad;
	var pSId = this._servPId;//父服务
	var sId = this.opts.sId;//当前服务
	if ((this._servPId.length > 0) && (pLoadFlag == 1)) {//有当前服务列表js
	    load(pSId);	
	}
	if (jsLoadFlag == 1) {//有当前服务列表js
        load(sId);
	}
	function load(value) {
		var pathFolder = value.split("_");
		var lowerFolder = pathFolder[0].toLowerCase();
	    var jsFileUrl = FireFly.getContextPath() + "/" + lowerFolder + "/servjs/" + value + "_list_mb.js";
	    jQuery.ajax({
	        url: jsFileUrl,
	        type: "GET",
	        dataType: "text",
	        async: false,
	        data: {},
	        success: function(data){
	            try {
	                var servExt = new Function(data);
	                servExt.apply(_self);
	            } catch(e){}
	        },
	        error: function(){;}
	    });			
	};
};