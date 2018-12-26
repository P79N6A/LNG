var _viewer = this;

/**
 * 打开行数据对应的审批单
 */
_viewer.grid.unbindTrdblClick();
_viewer.grid.dblClick(function(value,node) {
	var servId = _viewer.grid.getSelectItemVal("SERV_ID");
	var dataId = _viewer.grid.getSelectItemVal("DATA_ID");
	var title = _viewer.grid.getSelectItemVal("TITLE");
	var params = {};
	var options = {"url":servId + ".card.do?pkCode=" + dataId, "tTitle":title 
				,"menuFlag":3,"params":params};
	Tab.open(options);
},_viewer);