var _viewer = this;

//隐藏“保存”按钮
_viewer.getBtn("save").hide();

//“确认”按钮
_viewer.getBtn("saveFromAgent").unbind("click").bind("click",function(event){
	var param = {
		"AGT_ID": _viewer.opts.params.AGT_ID,
		"TO_USER_CODE": _viewer.itemValue("TO_USER_CODE"),
		"AGT_TYPE_CODE": _viewer.itemValue("AGT_TYPE_CODE"),
		"MAIN_AGT_STATUS":_viewer.opts.params.MAIN_AGT_STATUS,
		"startDate": _viewer.opts.params.startDate || ""
	};
	var result = FireFly.doAct("SY_ORG_USER_TYPE_AGENT", "doFromAgent", param, true, false);
	if (result[UIConst.RTN_MSG].indexOf(UIConst.RTN_OK) == 0) {
		_viewer.getParHandler().refresh();
		_viewer.backA.click();
	}
});

//“取消”按钮
_viewer.getBtn("cancel").unbind("click").bind("click",function(event){
	_viewer.backA.click();
});

//去掉最小高度
jQuery("#" + _viewer.servId + "-winTabs").css("min-height","auto");