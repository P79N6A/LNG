<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.*"%>
<%@ page import="com.rh.core.base.Context" %>
<%@ page import="com.rh.core.base.Bean" %>
<%@ page import="com.rh.core.org.UserBean" %>
<%@ page import="com.rh.core.serv.ServUtils" %>
<%@ page import="com.rh.core.util.RequestUtils" %>
<%@ page import="com.rh.core.util.Constant"%>
<%@ page import="com.rh.core.util.JsonUtils"%>
<%@ page import="com.rh.core.util.var.VarMgr"%>
<%
	String urlPath = request.getContextPath();
    UserBean userBean = Context.getUserBean(request);
    String devUsers = Context.getSyConf("SY_DEV_USERS","");//开发用户
    boolean debugMode = true;
%>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
<meta name="apple-mobile-web-app-capable" content="yes" />
<script type="text/javascript">
	var FireFlyContextPath = "<%=urlPath%>";//虚拟路径
</script>
<%if (debugMode == true) {%><!--开发模式-->
	<!-- 外部jqueryMobile库样式
	<link rel="stylesheet"  href="<%=urlPath %>/sy/base/frame/plugs/jQueryMobile/css/sy/theme/default/jquery.mobile-1.1.0.css" /> -->
	<!-- 外部jquery-ui库样式 -->
	<link rel="stylesheet" type="text/css" href="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/jquery.ui.core.css"/>
	<link rel="stylesheet" type="text/css" href="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/jquery.ui.resizable.css"/>
	<link rel="stylesheet" type="text/css" href="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/jquery.ui.theme.css"/>
	<link rel="stylesheet" type="text/css" href="<%=urlPath %>/sy/theme/default/icon.css"/>
	

	<!-- 外部jquery库js脚本-->
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/jquery-1.8.2.min.js"></script> 
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/a.jquery.ui.core.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/b.jquery.ui.widget.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/d.jquery.ui.mouse.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/e.jquery.ui.draggable.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/f.jquery.ui.droppable.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/g.jquery.ui.sortable.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/h.jquery.ui.position.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/i.jquery.ui.resizable.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/j.jquery.ui.effect.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/k.jquery.ui.accordion.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/l.jquery.ui.dialog.js"></script>
	<!-- 外部jqueryMobile库js脚本
	<script src="<%=urlPath %>/sy/base/frame/plugs/jQueryMobile/js/jquery.mobile-1.1.0.js"></script> -->
	<link rel="stylesheet" type="text/css" href="<%=urlPath %>/sy/theme/default/page-mb.css"/>
	<!-- 字体图形引入-->
	<link rel="stylesheet" type="text/css" href="<%=urlPath %>/sy/theme/default/fonticon.css"/>		
	
	<!-- 平台UI核心js库 -->
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/platform.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/tools.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/constant.js"></script>
	<!-- 平台UI核心组件js库 -->
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/coms/mb.ui.grid.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/coms/mb.ui.card.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/coms/mb.ui.dialog.js"></script>
	<!-- 平台UI核心viewjs库 -->
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/engines/mbListView.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/engines/mbCardView.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/engines/mbSelectListView.js"></script>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/engines/mbWfCardView.js"></script>
	
<%} else {%><!--发布模式-->
	<!-- 外部jquery-ui库样式 -->
	<link rel="stylesheet" type="text/css" href="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/rh.jquery-ui.min.css"/>  
	<!-- 平台UI核心样式 -->
	<link rel="stylesheet" type="text/css" href="<%=urlPath %>/sy/theme/default/rh.core.min.css"/> 
	<!-- 外部jquery-ui库js脚本 -->
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/jquery-1.8.2.min.js"></script> 
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/plugs/jquery-ui/rh.jquery-ui.min.js"></script>
	<!-- 外部jquerytree库js脚本 -->
	<link rel="stylesheet" type="text/css" href="<%=urlPath %>/sy/base/frame/coms/tree/style.css"/>
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/coms/tree/jquery.tree.js"></script>
	<!-- 平台UI核心js库 -->
	<script type="text/javascript" src="<%=urlPath %>/sy/base/frame/rh.core.min.js"></script>
<%}%>

<script type="text/javascript">
	FireFly.contextPath = "<%=urlPath%>";
	FireFly.jsessionid = "<%=request.getSession().getId()%>";
	System.setMB("flag",true);
	var devUsers = "<%=devUsers%>";
	<%if (userBean != null) { 
		//用户相关信息、系统配置信息、日期相关信息
	    String sysParams = JsonUtils.mapsToJson(VarMgr.getOrgMap(), VarMgr.getConfMap(), VarMgr.getDateMap());
	%>
		var sysVarParasStr = <%=sysParams%>;
	    var loginName = "<%=userBean.getLoginName()%>";
		System.setUser("USER_CODE","<%=userBean.getCode()%>");
		System.setUser("LOGIN_NAME",loginName);
		System.setUser("USER_NAME","<%=userBean.getName()%>");
		System.setUser("DEPT_CODE","<%=userBean.getDeptCode()%>");
		System.setUser("DEPT_NAME","<%=userBean.getDeptName()%>");
		System.setUser("CMPY_CODE","<%=userBean.getCmpyCode()%>");
		System.setUser("ROLE_CODES","<%=userBean.getRoleCodeStr()%>");
		
		var devUsersArray = devUsers.split(",");
		if (jQuery.inArray(loginName,devUsersArray) != -1) {
			System.setUser("DEV_FLAG","true");
		}

		System.setVars(sysVarParasStr);
	<%}%>

</script>