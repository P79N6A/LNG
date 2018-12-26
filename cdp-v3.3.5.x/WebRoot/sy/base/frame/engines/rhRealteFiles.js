GLOBAL.namespace("rh.vi");

rh.vi.relateFiles = function(options) {
    this.opts = options;
	this._viewer = this.opts.wfHandler._parHandler;
	
	this.canDelete = false;
	if (this._viewer.wfCard.getAuthBean().userDoInWf == "true") {
		this.canDelete = true;
	}
	
	this.servId = this._viewer.servId.toString();      //表单对应服务	
	
	this.servKeys = this._viewer.servKeys;  //表单数据，主键字段
	this._pkCode = this._viewer._pkCode;    //表单数据主键ID

	// 整个相关文件的容器
  	this.relateConObj = jQuery("<div class='ui-form-default' id='"+this.servId+"relateContainer'></div>");
	
    this.initRelateList();
	this.existFlag = false;
	
	this.fieldSetItem;
}


rh.vi.relateFiles.prototype.initRelateList = function() {	
    var _self = this;   
	_self.initData();
	
	if(_self.relateList.rtnRelates.length > 0){
	    _self.relateRender();
		_self.showRealteListToPage();
		_self.relateConObj.insertAfter(_self._viewer.form.obj);   	    
	}
}


rh.vi.relateFiles.prototype.relateRender = function() {
    var _self = this;
	var fieldsetObj = new rh.ui.FieldSet({formContainerId : "relateContainer",itemId : "relateFieldSet", legendName : "相关文件"});

	var relateObj = fieldsetObj.obj;
	
	var width = _self._viewer.form.getItemWidth(2);
	var options = {itemWidth:width.ITEM_WIDTH, leftWidth:width.LEFT_WIDTH, rightWidth:width.RIGHT_WIDTH, maxWidth:width.MAX_WIDTH};

	_self.fieldSetItem = new rh.ui.Item(options);
	_self.fieldSetItem.addLabel(new rh.ui.Label({text:""}));
	
	fieldsetObj.addContent(_self.fieldSetItem.obj);
	relateObj.insertAfter(_self._viewer.form.obj.find(".item").last());	
}

/**
 * 打开关联的文件
 */
rh.vi.relateFiles.prototype.openRelateFile = function(relateDataId, relateServId) {	
	var options = {"url":relateServId + ".card.do?pkCode=" + relateDataId + "&readOnly=true","tTitle":"关联文件","menuFlag":4};
	Tab.open(options);	
}


/**
 * 选择关联文件方式
 */ 
rh.vi.relateFiles.prototype.chooseRelateWay = function(event) {
    var _self = this;
	var choose = jQuery('<div id="relate_dialog" title="选择关联文件类型">' +
			'<div style="margin:10px auto;padding-left:60px;">' +
			'<div><input type="radio" name="createWay" value="1"/>授权建议<div/>' +
			'<div><input type="radio" name="createWay" value="2"/>授权书<div/>' +
			'<div><input type="radio" name="createWay" value="3"/>合同审签单<div/>' +
			'</div></div>');
	choose.dialog({
		autoOpen: true,
		height: 150,
		width: 250,
		show: "bounce", 
        hide: "puff",
		modal: true,
		resizable: false,
		position: ["center",100],
		buttons: {
			"确认": function() {
				if(choose.find(':input:radio:checked').first().val() == 1) { // 授权建议 
					_self.showRelateSugg(event);
				} else if(choose.find(':input:radio:checked').first().val() == 2) { // 授权书
					_self.showRelateAuthFile(event);
				} else if(choose.find(':input:radio:checked').first().val() == 3) { // 合同
					_self.showRelateContract(event);
				} 
				choose.dialog("close");
			}
		}
	});
	jQuery(".ui-dialog-titlebar").last().css("display","block");//设置标题显示    
}

/**
 * 删除
 */
rh.vi.relateFiles.prototype.deleteRelateFile = function(relateSugId, relateSid) {
    var _self = this;
	var reqdata = {};
	reqdata.DATA_ID = _self._pkCode;
	reqdata.SERV_ID = _self.servId;
	reqdata.RELATE_DATA_ID = relateSugId;	
	reqdata.RELATE_SERV_ID = relateSid;
	
	FireFly.doAct("SY_SERV_RELATE","deleteRelate",reqdata);	
	
	_self.initData();
	
	_self.showRealteListToPage();
}

/**
 * 添加相关文件
 * 
 */
rh.vi.relateFiles.prototype.addRelateFiles = function(reqdata) {
    var _self = this;
	
	reqdata.DATA_ID = _self._pkCode;
	reqdata.SERV_ID = _self.servId;
	
	var result = rh_processData("SY_SERV_RELATE.addRelateFiles.do",reqdata);
	if (result.rtnStr == "success") {
	    _self.initData();
	    
		if (!_self.existFlag) {
		    _self.relateConObj.insertAfter(_self._viewer.form.obj);   
		}
		_self.showRealteListToPage();
	}
}

/**
 * 获取数据
 */
rh.vi.relateFiles.prototype.initData = function() { 
    var _self = this;
	var reqdataObj = {};
	reqdataObj.DATA_ID = _self._pkCode;
	reqdataObj.VSER_ID = _self.servId;

	_self.relateList = FireFly.doAct("SY_SERV_RELATE","getRelateDataList",reqdataObj);	
}

/**
 * 将关联文件显示到页面上
 */
rh.vi.relateFiles.prototype.showRealteListToPage = function() { 
    var _self = this;
	
	jQuery("#"+_self.servId+"relateTable").remove();
	
	if (_self.relateList.rtnRelates.length>0) {
	    _self.existFlag = true;
		var typeTable = jQuery("<table id='"+_self.servId+"relateTable'></table>");
		jQuery.each(_self.relateList.rtnRelates,function(i,relateItem) {
		    var relateTypeName = relateItem.RELATE_SERV_NAME;
			var authRelateFileName = relateItem.RELATE_TITLE;
			var typeTr = jQuery("<tr></tr>").appendTo(typeTable);
		
			var contrastListStrLiTr = jQuery("<td>"+relateTypeName+"&nbsp;&nbsp;&nbsp;"+authRelateFileName + "</td>").appendTo(typeTr);

			jQuery("<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>").appendTo(typeTr);
			var typeTd2 = jQuery("<td></td>").appendTo(typeTr);
			jQuery("<a href='#'>查看</a>").click(function(){_self.openRelateFile(relateItem.RELATE_DATA_ID,relateItem.RELATE_SERV_ID);}).appendTo(typeTd2);
			jQuery("<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>").appendTo(typeTr);
			if (_self.canDelete) {
				var typeTd3 = jQuery("<td></td>").appendTo(typeTr);
				jQuery("<a href='#'>删除</a>").click(function(){_self.deleteRelateFile(relateItem.RELATE_DATA_ID,relateItem.RELATE_SERV_ID);}).appendTo(typeTd3);
			}
		});
		_self.fieldSetItem.addItem(typeTable);
		
		_self._viewer._resetHeiWid();
	} 
}


////////////////////////////////////////////////////////////////////////
// 关联授权建议开始
////////////////////////////////////////////////////////////////////////
rh.vi.relateFiles.prototype.showRelateSuggQuery = function(event) {
    

}


/**
 * 关联授权建议
 */
rh.vi.relateFiles.prototype.showRelateSugg = function(event) {
    var _self = this; 
	var inputName = "lw_auth_sug_authID";
	var extWhereStr = " and AUTH_ID in (select data_id from SY_SERV_FLOW where SERV_ID like ^LW_AUTH_SUG%^ and FLOW_ROLE_USER = ^@USER_CODE@^)";
	var configStr = "LW_AUTH_SUG,{'TARGET':'AUTH_ID~','SOURCE':'AUTH_ID~AUTH_CODE~AUTH_USER_NAME~AUTH_USER_IDENTI~AUTH_YEAR','PKHIDE':true,'EXTWHERE':'"+extWhereStr+"','TYPE':'multi'}";
	var options = {"itemCode":inputName,
	"config" :configStr,
	"rebackCodes":inputName,
	"parHandler":this,
	"formHandler":this,
	"replaceCallBack":function(idArray){
			_self.addSuggRelateFiles(idArray);
		}
	};
	var queryView = new rh.vi.rhSelectListView(options);
	queryView.show(event);    
}


/**
 * 添加授权建议的相关文件
 */
rh.vi.relateFiles.prototype.addSuggRelateFiles = function(idArray) {
    var _self = this;
    var reqdata = {};
	
	reqdata.relateIds = idArray.AUTH_ID;
	reqdata.RELATE_SERV_ID = "LW_AUTH_SUG:AUTH_CODE";  //父服务:子服务字段
	reqdata.TITLE_FIELD = "AUTH_YEAR,S_DNAME";	
	
	_self.addRelateFiles(reqdata);
}



////////////////////////////////////////////////////////////////////////
// 关联授权建议结束
////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
// 关联授权书开始
////////////////////////////////////////////////////////////////////////


/**
 * 添加授权  书  的相关文件
 */
rh.vi.relateFiles.prototype.addRelateAuthFiles = function(idArray) {
    var _self = this;
    var reqdata = {};
	
	reqdata.relateIds = idArray.FILE_ID;
	reqdata.RELATE_SERV_ID = "LW_AUTH_FILE";  //父服务:子服务字段
	reqdata.TITLE_FIELD = "FILE_NAME";	
	
	_self.addRelateFiles(reqdata);
}

/**
 * 关联授权书
 */
rh.vi.relateFiles.prototype.showRelateAuthFile = function(event) {
    var _self = this;
	var inputName = "xxxx";
	var extWhereStr = "";//" and S_PUBLIC = 1 and FILE_FILE is not null and S_USER=^@USER_CODE@^";
	var configStr = "LW_AUTH_FILE_Q_RESULT,{'TARGET':'FILE_ID~','SOURCE':'FILE_ID~FILE_NAME~FILE_ORG','PKHIDE':true,'EXTWHERE':'"+extWhereStr+"','TYPE':'multi'}";
	var options = {"itemCode":inputName,
	"config" :configStr,
	"rebackCodes":inputName,
	"parHandler":this,
	"formHandler":this,
	"replaceCallBack":function(idArray){
			_self.addRelateAuthFiles(idArray);
		}
	};
	var queryView = new rh.vi.rhSelectListView(options);
	queryView.show(event);
}

////////////////////////////////////////////////////////////////////////
// 关联授权书结束
////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////
// 关联  合同审签单   开始
////////////////////////////////////////////////////////////////////////
rh.vi.relateFiles.prototype.showRelateContract = function(event) {
    var _self = this;
	var inputName = "xxxx";
	var extWhereStr = " and S_DEPT = ^@DEPT_CODE@^";
	var configStr = "LW_CONTRACT_AUDIT,{'TARGET':'CAD_ID~','SOURCE':'CAD_ID~PJ_NAME~CAD_DEPT','PKHIDE':true,'EXTWHERE':'"+extWhereStr+"','TYPE':'multi'}";
	var options = {"itemCode":inputName,
	"config" :configStr,
	"rebackCodes":inputName,
	"parHandler":this,
	"formHandler":this,
	"replaceCallBack":function(idArray){
			_self.addRelateContracts(idArray);
		}
	};
	var queryView = new rh.vi.rhSelectListView(options);
	queryView.show(event);
}


/**
 * 添加  合同审签单 的相关文件
 */
rh.vi.relateFiles.prototype.addRelateContracts = function(idArray) {
    var _self = this;
    var reqdata = {};
	
	reqdata.relateIds = idArray.CAD_ID;
	reqdata.RELATE_SERV_ID = "LW_CONTRACT_AUDIT";  //父服务:子服务字段
	reqdata.TITLE_FIELD = "PJ_NAME";
	
	_self.addRelateFiles(reqdata);
}


////////////////////////////////////////////////////////////////////////
// 关联   合同审签单   结束
////////////////////////////////////////////////////////////////////////