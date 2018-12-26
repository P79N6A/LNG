var _viewer = this;

//alert(System.getVar("@ROLE_CODES@"));
//alert(System.getVar("@ODEPT_CODE@"));

if(System.getVar("@ROLE_CODES@").indexOf("sysadmin") < 0) {
	$("#SY_COMM_SEND-S_PUBLIC_div").attr("style","display:none");
}