var _viewer = this;

if(!_viewer.params || !_viewer.params.transFlag){
	_viewer.grid.getBtn("tranAgent").hide();
} else {
	//“转 办”按钮
	_viewer.grid.getBtn("tranAgent").unbind("click").bind("click",function(event){
		var temp = {
			"act":UIConst.ACT_CARD_ADD,
			"sId":_viewer.servId,
			"parHandler":_viewer,
			"widHeiArray":[500,250],
			"xyArray":[200,100],
			"params":{
				"handlerRefresh":_viewer,
				"MAIN_AGT_STATUS":_viewer.params.MAIN_AGT_STATUS
			}
		};
		var cardView = new rh.vi.cardView(temp);
		cardView.show();
		
		var pkCode = jQuery(this).attr("rowPk");
		cardView.getItem("RE_AGT_ID").setValue(pkCode);
		cardView.getItem("AGT_ID").setValue(_viewer.params.AGT_ID);
	});
}


