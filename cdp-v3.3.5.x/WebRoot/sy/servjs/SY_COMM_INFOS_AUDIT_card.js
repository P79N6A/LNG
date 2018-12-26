(function(_viewer){
	var servId = _viewer.servId;
	
	if (_viewer.wfCard) {
		var chooseChnlBtn = _viewer.wfCard._getBtn("chooseChnl");
		var doPostBtn =  _viewer.wfCard._getBtn("doPost");
		
		// 选择审核栏目
		if (chooseChnlBtn) {
			chooseChnlBtn.layoutObj.unbind("click").click(function(event){
					var configStr = "SY_COMM_INFOS_CHNL_POST,{'TYPE':'single'}";
					var extendTreeSetting = "{'rhexpand':false,'expandLevel':2,'cascadecheck':false,'checkParent':false,'childOnly':true}";
					var auditId = _viewer.getItem("AUDIT_ID").getValue();
					var options = {
						"config" :configStr,
						"extendDicSetting":StrToJson(extendTreeSetting),
						"replaceCallBack":function(idArray,nameArray){
							var param = {};
							param[UIConst.PK_KEY] = auditId;
							param["CHNL_POST_ID"] = idArray[0];
							FireFly.doAct(servId, "setPostChnlId", param);
						}
					};
					var dictView = new rh.vi.rhDictTreeView(options);
					dictView.show(event);	 
			});
		}
		
		// 发布信息
		if (doPostBtn) {
			doPostBtn.layoutObj.unbind("click").click(function(){
				var auditId = _viewer.getItem("AUDIT_ID").getValue();
				var param = {};
				param[UIConst.PK_KEY] = auditId;
				FireFly.doAct(servId, "postToChnl", param);
			});
		}
	}
})(this);