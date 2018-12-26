<%
    final String CONTEXT_PATH = request.getContextPath();
%>	
<script>
	var login = "LOGIN";
	var url = "<%=CONTEXT_PATH%>/";
	self.parent.window.location.href = url; 
</script>
