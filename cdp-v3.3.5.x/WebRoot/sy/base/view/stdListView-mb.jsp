<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--StdCardView-mb.jsp列表页面-->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>手机功能卡片页面</title>
    <%@ include file= "inHeader-mb.jsp" %>
</head>
<%
String sId = request.getParameter("sId");
String params = request.getParameter("params");
if (params == null) {
	params = "";
}
String readOnly = request.getParameter("readOnly");
if (readOnly == null) {
	readOnly = "";
}
String extWhere = request.getParameter("extWhere");
if (extWhere == null) {
	extWhere = "";
}

%>
<body class="mbList-body">
</body>
<script type="text/javascript">
(function() {
    jQuery(document).ready(function(){
        var act = UIConst.ACT_CARD_MODIFY;
	    var temp = {"sId":"<%=sId%>","readOnly":"<%=readOnly%>","extWhere":"<%=extWhere%>","params":"<%=params%>","pCon":jQuery("body")};
	    var listView = new mb.vi.listView(temp);
	    listView.show();
	    if (Browser.versions().mobile) {
		    window.addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		    function hideURLbar(){
		      window.scrollTo(0,1);
		    }
	    }
    });
})();
</script>
</html>