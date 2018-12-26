var _viewer = this;

var startAgentBtn = _viewer.getBtn("startAgent");
var stopAgentBtn = _viewer.getBtn("stopAgent");

if (startAgentBtn && (_viewer.itemValue("AGT_STATUS") == 1 || _viewer.itemValue("AGT_STATUS") == 2 || _viewer.getPKCode() == "")) {
	startAgentBtn.hide();
}
if (stopAgentBtn && (_viewer.itemValue("AGT_STATUS") == 0)){
	stopAgentBtn.hide();
}

startAgentBtn.unbind("click").bind("click",function(event){
	if(!confirm("确认后您将处于委托状态？")){
		return;
	}
	var param = {
			"_PK_":_viewer.getPKCode(),
			"USER_CODE": _viewer.itemValue("USER_CODE"),
			"TO_USER_CODE": _viewer.itemValue("TO_USER_CODE"),
			"AGT_BEGIN_DATE": _viewer.itemValue("AGT_BEGIN_DATE"),
			"AGT_END_DATE": _viewer.itemValue("AGT_END_DATE"),
			"AGT_END_TYPE": _viewer.itemValue("AGT_END_TYPE"),
			"AGT_MEMO": _viewer.itemValue("AGT_MEMO"),
			"AGT_STATUS": _viewer.itemValue("AGT_STATUS"),
			"action":"startAgent"
		};
	var result = FireFly.doAct("SY_ORG_USER_TYPE_AGENT", UIConst.ACT_SAVE, param, true, false);
	if (result[UIConst.RTN_MSG].indexOf(UIConst.RTN_OK) == 0) {
		_viewer.refresh();
	}
});

stopAgentBtn.unbind("click").bind("click",function(event){
	if(!confirm("确认后您将不再处于委托状态，所有转办将被清除？")){
		return;
	}
	var param = {
		"_PK_":_viewer.getPKCode(),
		"AGT_STATUS": 0,
		"action":"stopAgent"
	};
	var result = FireFly.doAct("SY_ORG_USER_TYPE_AGENT", "doStopAgent", param, true, false);
	if (result[UIConst.RTN_MSG].indexOf(UIConst.RTN_OK) == 0) {
		_viewer.refresh();
	}
});