<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--page.jsp 平台page页面-->
<%@ page import="com.rh.core.base.Context" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>智能平台系统</title>
    <%@ include file= "/sy/base/view/inHeader.jsp" %>
    <script type="text/javascript" src="<%=urlPath%>/sy/base/frame/engines/rhPageView.js"></script>
</head>
<%
  String func = RequestUtils.getStr(request,"func");
  String todoServId = RequestUtils.getStr(request,"todoServId");
  String todoUrl = RequestUtils.getStr(request,"todoUrl");
  String todoTitle = RequestUtils.getStr(request,"todoTitle");
  String servPk = RequestUtils.getStr(request,"servPk");
  String openTab = RequestUtils.getStr(request,"openTab");//扩展打开的tab参数
  
  String rhDevFlag = request.getParameter("rhDevFlag");
  String homeConfig = null;
  if (rhDevFlag != null && rhDevFlag.equalsIgnoreCase("true")) { 
  } else {
	  homeConfig = Context.getSyConf("SY_HOME_CONFIG",null);//首页的参数定义信息
  }
  
  String bannerConfig = Context.getSyConf("SY_BANNER_CONFIG","");//banner的配置信息
  String wbimFlag = Context.getSyConf("SY_WBIM_FLAG","");//即时通讯是否启用
  Bean bannerBean = JsonUtils.toBean(bannerConfig);
  String banner = urlPath + bannerBean.get("banner","");
  String bannerBack = urlPath + bannerBean.get("bannerBack","");
  String bannerTabBack = urlPath + bannerBean.get("bannerTabBack","");
%>  
<%
if (wbimFlag.length() > 0 && wbimFlag.equals("true")) {//即时通讯模块所需文件引用%>
    <script src='<%=urlPath%>/sy/plug/webim/scripts/strophe.js'></script>
    <script src='<%=urlPath%>/sy/plug/webim/scripts/flXHR.js'></script>
    <script src='<%=urlPath%>/sy/plug/webim/scripts/strophe.flxhr.js'></script>
    
    <script src='<%=urlPath%>/sy/plug/webim/scripts/iso8601_support.js'></script>
    <script src='<%=urlPath%>/sy/plug/webim/scripts/strophe.rsm.js'></script>
    <script src='<%=urlPath%>/sy/plug/webim/scripts/strophe.archive.js'></script>
    <script src='<%=urlPath%>/sy/plug/webim/scripts/strophe.hismsg.js'></script>
    <script src='<%=urlPath%>/sy/plug/webim/scripts/strophe.recentcontact.js'></script>
  
  <!-- suport file upload -->  
  <script type="text/javascript" src="<%=urlPath%>/sy/base/frame/coms/file/swfupload.js"></script>
  <script type="text/javascript" src="<%=urlPath%>/sy/base/frame/coms/file/js/swfupload.queue.js"></script>
  <script type="text/javascript" src="<%=urlPath%>/sy/base/frame/coms/file/js/fileprogress.js"></script>
  <script type="text/javascript" src="<%=urlPath%>/sy/base/frame/coms/file/js/handlers.js"></script>
  <link rel="stylesheet" type="text/css" href="<%=urlPath%>/sy/plug/webim/chat/webim.css"/>
  <script type="text/javascript" src="<%=urlPath%>/sy/plug/webim/chat/rhWbimView.js"></script>
<%}%>
<%
if (bannerTabBack.length() > 0) {%>
<style type="text/css">
#homeTabs .ui-widget-header {background:white url(<%=bannerTabBack %>) left top repeat-x;}
</style>
<%}%>
<style type="text/css">
#banner {background:url(<%=bannerBack %>) left top;}
.banner-logo {background:url(<%=banner %>) left top no-repeat;}
</style>
<body class="pageBody">
<div id="banner" style="text-align:center;height:45px;">
 <div id="logo" class="banner-logo" style="width:100%;height:45px;float:left;"></div>
 <div id="rh-slideMsg" class="rh-slideMsg"></div><!-- 消息下拉面板 -->
</div>
<div id="homeTabsULFill" class="homeTabsULFill"></div>
<div id="homeTabs"><!--Begin homeTabs -->
    <%
      if (homeConfig != null) {%>
      	<ul class="tabUL">
		</ul>
    <%
      } else {%>
		<ul class="tabUL">
			<li class="lightBlueLi replaceLi platformPage"><a class="lightBlueA rh-open-default" title="信息平台" href="#platformPage"><span>信息平台</span></a></li> 
	    </ul>  
	    <div id='platformPage'></div>    
    <%      
      }
    %>
</div><!-- End homeTabs -->  
<div id="homeMenu" style="display:none;"></div>
<div id="rh-slideStyle" class="rh-slideStyle"><!--Begin 风格面板 -->
	  <div class="rh-slideStyle-content" style="">
	     <div id="rh-slideStyle-box" class="rh-slideStyle-box"></div>
	  </div>
</div><!-- End 风格面板 -->
</body>
<script type="text/javascript">
//设置cookie
document.cookie="RhClientLogin=true";
//设置参数
var topAlert = System.getVar("@C_SY_TOP_ALERT@") || "false";//顶部消息面板是否启用
var styleDef = System.getVar("@C_SY_STYLE_DEF@") || "";//样式默认定义
var pageTitle = System.getVar("@C_SY_PAGE_TITLE@") || "智能平台系统";//页面的浏览器标题
var mbLink = System.getVar("@C_SY_MB_LINK@") || "false";//banner的配置信息
var pwdFlag = System.getVar("@C_SY_PWD_SHOW@") || "true";//密码修改是否显示
var preDeptUser = System.getVar("@C_SY_PRE_DEPT_USER@") || "";//用户名前缀显示的部门
var tabColor = System.getVar("@C_SY_TAB_COLOR@") || "";//tab的颜色配置信息
var wbimFlag = System.getVar("@C_SY_WBIM_FLAG@") || "false";//即时通讯是否启用
document.title = pageTitle;
var opts = {"id":"rhHome","styleDef":styleDef,"topPannel":topAlert,"wbimFlag":wbimFlag,
		"mbLink": mbLink,"tabColor":tabColor,"pwdFlag":pwdFlag,"preDeptUser":preDeptUser};
if (<%=homeConfig%> != null) {//首页的配置
	opts["home"] = <%=homeConfig%>;
}
if ("<%=func%>" === "openTodo") {//自动进入待办的配置
    opts["openTodo"] = {"todoServId":"<%=todoServId%>","todoUrl":"<%=todoUrl%>","todoTitle":"<%=todoTitle%>","servPk":"<%=servPk%>"};
}
opts["openTab"] = "<%=openTab%>";
var pageView = new rh.vi.pageView(opts);
pageView.show();
//外部rh桌面调用
function client_pageFunc () {
	jQuery("#rh-slideMsgBtn").click();
};
//外部rh桌面调用取代办数量
function client_TodoCount () {
	var res = Todo.getCount();
	if (res) {
	    return res;
	} else {
		return "";
	}
};
</script>
</html>