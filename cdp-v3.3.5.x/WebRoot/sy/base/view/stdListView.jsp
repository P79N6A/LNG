<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--StdListView.jsp列表页面-->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page import="com.rh.core.serv.ServMgr" %>
<%@ page import="com.rh.core.base.Bean" %>
<%@ page import="com.rh.core.util.JsonUtils" %>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>功能列表页面</title>
    <%@ include file= "inHeader.jsp" %>
    <script type="text/javascript" src="<%=urlPath %>/sy/base/frame/coms/file/swfupload.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/coms/file/js/swfupload.queue.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/coms/file/js/fileprogress.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/coms/file/js/handlers.js"></script>
	<%
	String frameId = RequestUtils.getStr(request,"frameId");
	String sId = RequestUtils.getStr(request,"sId");
	String extWhere = RequestUtils.getStr(request,"extWhere");
	String paramsFlag = RequestUtils.getStr(request,"paramsFlag");
	String readOnly = RequestUtils.getStr(request,"readOnly");
	String dataFlag = RequestUtils.getStr(request,"dataFlag");
	String parVar = RequestUtils.getStr(request,"parVar");
	String parWhere = RequestUtils.getStr(request,"parWhere");
	String type = RequestUtils.getStr(request,"type");
	String title = RequestUtils.getStr(request,"title");
	//装载服务定义
	Bean servBean = ServMgr.servDef(sId);
	String strHtml = "";
	if(servBean.isNotEmpty("SERV_JS")){
	    strHtml = servBean.getStr("SERV_JS");
	    strHtml = strHtml.replaceAll("@urlPath@", urlPath);
	    out.println(strHtml);
	}
	String servDef = JsonUtils.toJson(servBean,false);
	%>
</head>
<body class="bodyBack bodyBackPad">
</body>
<script type="text/javascript">
var __serv_def = <%=servDef%>;
GLOBAL.servStyle["<%=sId%>"] = "true"; //服务级html缓存
<%
if(userBean != null) {
%>
	(function() {
	    jQuery(document).ready(function(){
	      var temp = {"sId":"<%=sId%>","pCon":jQuery("body"),"extWhere":"<%=extWhere%>","title":"<%=title%>",
	                  "paramsFlag":"<%=paramsFlag%>","readOnly":"<%=readOnly%>","dataFlag":"<%=dataFlag%>",
	                  "parVar":StrToJson("<%=parVar%>"),"parWhere":"<%=parWhere%>","type":"<%=type%>",
	                  "servDef":__serv_def};
	      //初始化列表view
	      var listView = new rh.vi.listView(temp);
	      listView.show();
	    });
	})();
<%
} else {
%>
    FireFly.jumpToIndex();
<%
}
%>
</script>
</html>