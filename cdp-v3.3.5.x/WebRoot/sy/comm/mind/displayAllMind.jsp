<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--StdCardView.jsp列表页面-->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ include file= "/sy/base/view/inHeader.jsp" %>
<script type="text/javascript" src="<%=urlPath %>/sy/comm/mind/mind.js"></script>
<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/coms/file/swfupload.js"></script>
<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/coms/file/js/swfupload.queue.js"></script>
<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/coms/file/js/fileprogress.js"></script>
<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/coms/file/js/handlers.js"></script>

<body style="background-color:white">
<div style="width:96%;margin-top:5px;margin-left:2%;margin-right:2%" id = "mindContainerHI">

</div>

<script language="javascript">
	var _viewer = window.parent.jQuery(window.parent.document).data("shareCradViewer");
	var _wfCardView = _viewer.wfCard;
	
	var pCon = jQuery("#mindContainerHI");

	var param = {"viewer":_viewer,"id":"rh.cm.mind","servId":_viewer._data["SERV_SRC_ID"]
			,"dataId":_viewer._pkCode,"wfCard":_wfCardView, "pCon":pCon};
	
	var mind = new rh.cm.mind(param);
	mind.render();

	jQuery(document).ready(function(){
		setTimeout(function() {//第一次加载
			Tab.setCardTabFrameHei();
		}, 10);
	});
	
</script>
</body>