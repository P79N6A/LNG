var _viewer = this;

//去掉最小高度
jQuery("#" + _viewer.servId + "-winTabs").css("min-height","auto");

//“确认”按钮
_viewer.getBtn("save").unbind("click").bind("click",function(event){
	var param = {
		"RE_AGT_ID":_viewer.itemValue("RE_AGT_ID"),
		"AGT_ID":_viewer.itemValue("AGT_ID"),
		"TO_USER_CODE":_viewer.itemValue("TO_USER_CODE"),
		"MAIN_AGT_STATUS":_viewer.opts.params.MAIN_AGT_STATUS
	}

	var result = FireFly.doAct("SY_ORG_USER_TYPE_AGENT", "doTransferAgent", param, true, false);
	if (result[UIConst.RTN_MSG].indexOf(UIConst.RTN_OK) == 0) {
		_viewer.getParHandler().refresh();
		_viewer.backA.click();
	}
});

//“取消”按钮
_viewer.getBtn("cancel").unbind("click").bind("click",function(event){
	_viewer.backA.click();
});