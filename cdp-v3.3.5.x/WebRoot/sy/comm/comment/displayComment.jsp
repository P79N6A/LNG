<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="com.rh.core.base.BeanUtils"%>
<%@ page import="com.rh.core.util.RequestUtils"%>
<%@ page import="com.rh.core.serv.ParamBean"%>
<%@ page import="com.rh.core.serv.OutBean"%>
<%@ page import="com.rh.core.serv.ServMgr"%>
<%@ include file= "/sy/base/view/inHeader.jsp" %>

<%
	ParamBean paramBean = RequestUtils.transParam(request);
	String dataId = paramBean.getStr("DATA_ID");
	OutBean outBean = ServMgr.act(ServMgr.SY_COMM_MIND,"displayMindTitle",paramBean);
%>

<script language="javascript">
	var _dataId = "<%=dataId%>";
	var _servId = "<%=paramBean.getStr("SERV_ID")%>";
jQuery(document).ready(function(){
	var opts = {"DATA_ID": _dataId, "SERV_ID":_servId, "SHOWNUM":10,"NOWPAGE":1,"pCon":jQuery("#document_comment")};
	var listView = new rh.vi.comment(opts);
	listView.show();
});	

</script>
<div style="wp">
	<div style="width:90%;margin-left:5%;margin-right:5%" id="document_comment"></div>
</div>