var _viewer = this;
var recover =  _viewer.grid.getBtn("recover");
recover.bind("click",function(){
	
	 var PKCode = jQuery(this).attr("rowpk");
	 var serId = _viewer.servId;
	 var content = FireFly.byId(serId,PKCode);

	 FireFly.doAct(serId,"recoverHisFile",content,true,false);

	 _viewer.refresh();
	 _viewer.getParHandler().refresh();
	

	
	
});