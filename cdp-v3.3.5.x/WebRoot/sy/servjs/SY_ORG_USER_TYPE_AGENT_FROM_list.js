var _viewer = this;
	
//“按业务委托”按钮
_viewer.getBtn("doAgtByType").unbind("click").bind("click",function(event){
	var temp = {
		"act":UIConst.ACT_CARD_ADD,
		"sId":_viewer.servId,
		"parHandler":_viewer,
		"widHeiArray":[600,250],
		"xyArray":[200,100],
		"links":_viewer.opts.links,
		"params":{
			"handlerRefresh":_viewer,
			"AGT_ID":_viewer.getParHandler().itemValue("AGT_ID"),
			"MAIN_AGT_STATUS":_viewer.getParHandler().itemValue("AGT_STATUS"),
			"startDate":_viewer.getParHandler().itemValue("AGT_BEGIN_DATE")
		}
	};
	var cardView = new rh.vi.cardView(temp);
	cardView.show();
});

//“转办委托”按钮
_viewer.getBtn("showAgentToMe").unbind("click").bind("click",function(event){
	getDialog(event,"type_agent-dial","转办委托列表",800,300);
	var params = {
		"sId":"SY_ORG_USER_TYPE_AGENT_TO",
		"pCon":jQuery("#type_agent-dial"),
		"batchFlag":false,
		"showTitleBarFlag":"false",
	    "_SELECT_":"",
	    "type":_viewer.type,
	    "selectView":false,
        "resetHeiWid":_viewer._resetHeiWid,
        "parHandler":_viewer,
        "extWhere":"",
        "dataFlag":_viewer._dataFlag,
        "params":{
			"AGT_ID":_viewer.getParHandler().getPKCode(),
			"MAIN_AGT_STATUS":_viewer.getParHandler().itemValue("AGT_STATUS"),
			"transFlag":true
		}
    };
	this.listView = new rh.vi.listView(params);
	this.listView.show();
});

/**内部函数--构建弹出框页面布局*/
function getDialog(event,dialogId,title,wid,hei) {
	//设置jqueryUi的dialog参数
	if(title == null){
		title = ""
	}
	var winDialog = jQuery("<div></div>").addClass("selectDialog").attr("id",dialogId).attr("title",title);
	winDialog.appendTo(jQuery("body"));
	if(hei == null || wid == null || hei == "" || wid == ""){
		wid = jQuery("body").width() - 500;
		hei = GLOBAL.getDefaultFrameHei()-550;	
	}
	var posArray = [30,30];
	if (event) {
		var cy = event.clientY;
	    posArray[0] = "";
	    posArray[1] = cy-300;
	}
  
  //生成jqueryUi的dialog
	jQuery("#" + dialogId).dialog({
		autoOpen: false,
		height: hei,
		width: wid,
		modal: true,
		resizable:false,
		position:posArray,
		open: function() { 

		},
		close: function() {
			jQuery("#" + dialogId).remove();
			_viewer.refresh();
		}
	});
	
	//手动打开dialog
	var dialogObj = jQuery("#" + dialogId);
	dialogObj.dialog("open");
	dialogObj.focus();
  jQuery(".ui-dialog-titlebar").last().css("display","block");//设置标题显示
  dialogObj.parent().addClass("rh-bottom-right-radius rhSelectWidget-content");
  Tip.show("努力加载中...",null,jQuery(".ui-dialog-title",winDialog).last());
}

var _bldBtn = function(pkCode, actCode, actName, imgClass, func){
	return jQuery('<a class="rh-icon rhGrid-btnBar-a" id="SY_ORG_USER_TYPE_AGENT_FROM-' + actCode 
			+ '" actcode="' + actCode + '"><span class="rh-icon-inner">' 
			+ actName + '</span><span class="rh-icon-img btn-' + imgClass + '"></span></a>').unbind("click").bind("click",{"id":pkCode},func);
};

var delAgent = function(event){
	if(!confirm("是否清除委托？")){
		return;
	}
	var param = {"_PK_":event.data.id,"action":"del"};
	FireFly.doAct("SY_ORG_USER_TYPE_AGENT", "doOperation", param, true, false, mainCardRefresh);
};

var stopAgent = function(event){
	if(!confirm("是否终止委托？")){
		return;
	}
	var param = {"_PK_":event.data.id,"action":"stop"};
	FireFly.doAct("SY_ORG_USER_TYPE_AGENT", "doOperation", param, true, false, mainCardRefresh);
};

var restartAgent = function(event){
	if(!confirm("是否恢复委托？")){
		return;
	}
	var param = {"_PK_":event.data.id,"action":"restart"};
	FireFly.doAct("SY_ORG_USER_TYPE_AGENT", "doOperation", param, true, false, mainCardRefresh);
};

var cancelSingleTrans = function(event){
	if(!confirm("确认后转办将被清除？")){
		return;
	}
	var param = {"_PK_":event.data.id,"action":"cancelSingle"};
	FireFly.doAct("SY_ORG_USER_TYPE_AGENT", "doOperation", param, true, false, mainCardRefresh);
};

var mainCardRefresh = function(){
	_viewer.getParHandler().refresh();
};

var mainStatus = _viewer.getParHandler().itemValue("AGT_STATUS");
var currUserCode = System.getVar("@USER_CODE@");
jQuery.each(_viewer.grid.getBodyTr(),function(i,n){
	var grid = _viewer.grid;
	var sFlag = grid.getRowItemValue(n.id, "S_FLAG");
	if(sFlag==1){
		var userCode = grid.getRowItemValue(n.id, "USER_CODE");
		var status = grid.getRowItemValue(n.id, "AGT_STATUS");
		var optTdObj = jQuery(n).find('td[icode="OPERATION_S"]');
		_bldBtn(n.id,"delAgent","清除","delete",delAgent).appendTo(optTdObj);
		if((status == 1 || status == 2) && userCode == currUserCode){
			_bldBtn(n.id,"stopAgent","终止委托","stop",stopAgent).appendTo(optTdObj);
		}
		if((status == 0) && mainStatus !=0 && userCode == currUserCode){
			_bldBtn(n.id,"restartAgent","恢复委托","begin",restartAgent).appendTo(optTdObj);
		}
		if(userCode != currUserCode){
			_bldBtn(n.id,"cancelSingleTrans","取消转办","zhuanfa",cancelSingleTrans).appendTo(optTdObj);
		}
	}
});





