<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--StdCardView.jsp列表页面-->
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page import="com.rh.core.serv.ServMgr" %>
<%@ page import="com.rh.core.base.Bean" %>
<%@ page import="com.rh.core.util.JsonUtils" %>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>功能卡片页面</title>
    <%@ include file= "inHeader.jsp" %>
    <script type="text/javascript" src="<%=urlPath%>/sy/base/frame/coms/file/swfupload.js"></script>
	<script type="text/javascript" src="<%=urlPath%>/sy/base/frame/coms/file/js/swfupload.queue.js"></script>
	<script type="text/javascript" src="<%=urlPath%>/sy/base/frame/coms/file/js/fileprogress.js"></script>
	<script type="text/javascript" src="<%=urlPath%>/sy/base/frame/coms/file/js/handlers.js"></script>
<%
//必须参数
String sId = RequestUtils.getStr(request, "sId");
String pkCode = RequestUtils.getStr(request, "pkCode");
//可选参数
String frameId = RequestUtils.getStr(request, "frameId");

String replaceUrl = RequestUtils.getStr(request, "replaceUrl");
String paramsFlag = RequestUtils.getStr(request, "paramsFlag");
String readOnly = RequestUtils.getStr(request, "readOnly");
String areaId = RequestUtils.getStr(request, "areaId");

//装载服务定义
Bean servBean = ServMgr.servDef(sId);
//取得服务中配置的HTML代码
String strHtml = "";
if(servBean.isNotEmpty("SERV_JS")){
    strHtml = servBean.getStr("SERV_JS");
    strHtml = strHtml.replaceAll("@urlPath@", urlPath);
    out.println(strHtml);
}
String servDef = JsonUtils.toJson(servBean,false);
%>
</head>
<body  class="bodyBack bodyBackPad">
</body>
<script type="text/javascript">
var __serv_def = <%=servDef%>;
GLOBAL.servStyle["<%=sId%>"] = "tru"; //服务级html缓存
<%
if(userBean != null) {
%>
(function() {
    jQuery(document).ready(function(){
        var act = UIConst.ACT_CARD_MODIFY;
        var pkCode = "<%=pkCode%>";
        if (pkCode == null || (pkCode == "null") || (pkCode.length == 0)) {
	        act = UIConst.ACT_CARD_ADD;
	        pkCode = "";
        }
	    var temp = {"act":act,"replaceUrl":"<%=replaceUrl%>","sId":"<%=sId%>","parHandler":null,"parTabClose":"true",
	                "paramsFlag":"<%=paramsFlag%>","readOnly":"<%=readOnly%>","areaId":"<%=areaId%>"
	                ,"servDef":__serv_def};
	    temp[UIConst.PK_KEY] = pkCode;
	    var cardView = new rh.vi.cardView(temp);
	    cardView.show();
	    RHFile.bldDestroyBase(cardView);
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