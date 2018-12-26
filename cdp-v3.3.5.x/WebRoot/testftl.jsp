<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<%
    final String CONTEXT_PATH = request.getContextPath();
	%>	
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Insert title here</title>

	<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-precompose.png"/>
    <link rel="shortcut icon" href="favicon.ico"/>
    <!-- 引用公用头部资源文件：开始 -->
    <%@ include file= "sy/base/view/inHeader.jsp" %>
    <!-- 引用公用头部资源文件：结束 -->
    <link rel="stylesheet" type="text/css" href="<%=CONTEXT_PATH %>/sy/comm/index/incl-index.css" charset="UTF-8"/>

</head>
<body>
<div id='SY_CARD_VIEW_CONFIG' class='portal-target wp100 floatLeft'>
<script type="text/javascript">
(function() {
	jQuery(document).ready(function(){
	    var temp = {"act":UIConst.ACT_CARD_ADD,"sId":"SY_COMM_CONFIG","pCon":jQuery("#SY_CARD_VIEW_CONFIG"),"reset":"false","backBtn":"false"};
	    var cardView = new rh.vi.cardView(temp);
	    cardView.show();
	    RHFile.bldDestroyBase(cardView);
	});
})();
</script>
</div>

<div id='SY_LIST_VIEW_CONFIG' class='portal-target wp100 floatLeft'> 
<script type="text/javascript">
(function() {
	jQuery(document).ready(function(){
 	  var temp = {"sId":"SY_COMM_CONFIG","pCon":jQuery("#SY_LIST_VIEW_CONFIG"),
 	  "cardCon":jQuery("#SY_CARD_VIEW_CONFIG"),"reset":"false","cardReset":"false","cardBackBtn":"false"};
      var listView = new rh.vi.listView(temp);
      listView.show();
	});
})();
</script>


</div>

</body>
</html>