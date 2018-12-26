/** 服务卡片使用的js方法定义：开始 */
var _viewer = this;

/**
 * 点击保存按钮
 */
_viewer.getBtn('saveWf').bind("click",function() {
	saveProcDef("saveWf");
});


/**
 * 点击“另存为新版本”按钮
 */
_viewer.getBtn('saveWfAsNewVersion').bind("click",function() {
	if(_viewer.byIdData._ADD_ === "true"){
		saveProcDef("saveWf");
	}else{
		saveProcDef("saveWfAsNewVersion");
	}
});


/**
 * 提交流程
 * @returns
 */
function saveProcDef(act){
	
	if(!_viewer.form.validate()) {
		_viewer.cardBarTipError("校验未通过");
    	return false;
    }
	
	//取得定义页面上的
	var wfResStr = frames[_viewer.servId + "-PROC_XML_DRAW"].showWorkflowDefXml();
	var data = _viewer.form.getItemsValues();
    data["xmlStr"] = wfResStr;
	data["PROC_TYPE"] = "1";
	data["_ADD_"] = _viewer.byIdData._ADD_;
	
	var result = rh_processData(_viewer.opts.sId + "." + act + ".do",data);
	if (result[UIConst.RTN_MSG].indexOf(UIConst.RTN_OK) == 0) {
		_viewer.cardBarTip("保存成功");
		
		_viewer._parentRefreshFlag = true;
		_viewer._actVar = UIConst.ACT_CARD_MODIFY;
		
		_viewer.byIdData._ADD_ = "false";
		_viewer._pkCode = result["_DATA_"]["PROC_CODE"];
		_viewer.getItem("PROC_CODE").setValue(result["_DATA_"]["PROC_CODE"]);
		
		//“另存为新版本”时，刷新页面
		if(result["_DATA_"]["PROC_VERSION"]){
			_viewer.refresh();
		}
	}
	
	return result;
}


var _oldProcDefFrameHeight = 0;
//左侧菜单是否为展开状态
var isLeftMenuExpand = parent.jQuery(".left-homeMenu").is(":visible") 
                      && !parent.jQuery(".left-homeMenu").hasClass("leftHide");
/**
 * 点击放大按钮
 */
_viewer.getBtn("fullScreen").bind("click",function() {
	var iframeElem = jQuery("#" + _viewer.servId + "-PROC_XML_DRAW");
	if(iframeElem.hasClass("pa")){
		//缩小
		if(isLeftMenuExpand){
			Menu.expandLeftMenu();
		}
		iframeElem.removeClass();
		_viewer.getBtn("fullScreen").find("span.rh-icon-inner").text("放大");
		iframeElem.height(_oldProcDefFrameHeight);
	}else{
		//放大
		_oldProcDefFrameHeight = iframeElem.height();
		if(isLeftMenuExpand){
			Menu.closeLeftMenu();
		}
		var pageHeight = jQuery(document).height();
		var siblings = iframeElem.siblings();
		var pos = { top: 85, left: 0 };
		if(siblings.length > 0){
			pos = siblings.offset();
		}
		iframeElem.addClass("pa ");
		iframeElem.offset(pos);
		iframeElem.height(pageHeight - 85);
		_viewer.getBtn("fullScreen").find("span.rh-icon-inner").text("缩小");
	}
});