var _viewer = this;

//var datas= FireFly.doAct(_viewer.servId,"selectObjSet",{"SHARE_ID":_viewer.getPKCode()});
//alert(JsonToStr(datas["_DATA_"][0]));
/**
 * 当点击保存按钮后，进行输入框的效验。取值、将值给后台处理
 */
//为保存按钮绑定点击事件
var saveShareObject = _viewer.getBtn("saveShareObject");
saveShareObject.bind("click",function(){
	//获取当前服务ID
	var servId = _viewer.servId;
	//param用于保存页面中的值。
	var param = {};
	param["SHARE_ID"] = _viewer.getPKCode();
	var checkedBox = jQuery("input[type='radio']:checked").attr("value");
	//勾选用户后，展开“用户”输入框，这里获取输入框内的用户名称、用户CODE
	var userInfo = jQuery("#SY_COMM_CAL_SHARE-SELECT_USER__NAME").attr("value");
	var userInfoId = jQuery("#SY_COMM_CAL_SHARE-SELECT_USER").attr("value");
	//勾选角色后，展开“角色”输入框，这里获取输入框内的角色名称、角色code
	var roleInfo = jQuery("#SY_COMM_CAL_SHARE-SELECT_ROLE__NAME").attr("value");
	var roleInfoId = jQuery("#SY_COMM_CAL_SHARE-SELECT_ROLE").attr("value");
	//勾选部门后，展开“部门”输入框，这里获取输入框的部门名称、部门code
	var deptInfo = jQuery("#SY_COMM_CAL_SHARE-SELECT_DEPT__NAME").attr("value");
	var deptInfoId = jQuery("#SY_COMM_CAL_SHARE-SELECT_DEPT").attr("value");
	if(userInfo==""&&roleInfo==""&&deptInfo==""){
		if(checkedBox=="1"){
		}
		else{
			alert("请选择共享对象后点击\"保存\"");
			return false;
		}
	}
	else{
	}
	if(checkedBox !=""&&checkedBox !=undefined){
		param["FULLY_OPEN"] = checkedBox;
	}
	//将获取的用户信息保存到param中
	if(userInfo!=undefined&&userInfo!=""){
		param["shareTypeUser"] = userInfo;
		param["shareTypeUserId"] = userInfoId;
	}
	//将获取的角色信息保存到param中
	if(roleInfo!=undefined&&roleInfo!=""){
		param["shareTypeRole"] = roleInfo;
		param["shareTypeRoleId"] = roleInfoId;
	}
	//将获取的部门信息保存到param中
	if(deptInfo!=undefined&&deptInfo!=""){
		param["shareTypeDept"] = deptInfo;
		param["shareTypeDeptId"] = deptInfoId;
	}
	//将param的值传到后台处理。
	FireFly.doAct(servId,"shareObjectSet",param,true,false);
	//刷新列表页
	_viewer.refresh();
	//返回列表页
	//_viewer.backClick();
})
//判断如果用户点击了“完全公开”则清除“用户、角色、部门”下面的值，如果选择了“用户、角色、部门”则清除“完全公开”...mutual Exclusion（互斥）
jQuery("input[type='radio'][value='1']").bind("click",function(){
	jQuery("#SY_COMM_CAL_SHARE-SELECT_USER__NAME").text("");
	jQuery("#SY_COMM_CAL_SHARE-SELECT_ROLE__NAME").text("");
	jQuery("#SY_COMM_CAL_SHARE-SELECT_DEPT__NAME").text("");
});
jQuery("#SY_COMM_CAL_SHARE-SELECT_NAME__NAME").bind("click",function(){
	jQuery("input[name='SY_COMM_CAL_SHARE-FULLY_OPEN'][value='1']").removeAttr("checked");
});
jQuery("#SY_COMM_CAL_SHARE-SELECT_ROLE__NAME").bind("click",function(){
	jQuery("input[name='SY_COMM_CAL_SHARE-FULLY_OPEN'][value='1']").removeAttr("checked");
});
jQuery("#SY_COMM_CAL_SHARE-SELECT_DEPT__NAME").bind("click",function(){
	jQuery("input[name='SY_COMM_CAL_SHARE-FULLY_OPEN'][value='1']").removeAttr("checked");
});
jQuery(".iconChoose").bind("click",function(){
	jQuery("input[name='SY_COMM_CAL_SHARE-FULLY_OPEN'][value='1']").removeAttr("checked");
});
