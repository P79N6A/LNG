<%@ page import="javax.servlet.http.Cookie"%>
<%
	String ssoServLogoutUrl = com.rh.core.comm.sso.ConfigGet.getValue(request.getSession().getServletContext());	
	if (request.getSession(false) != null) {
        session.invalidate();
    }
	response.sendRedirect(ssoServLogoutUrl);
%>
