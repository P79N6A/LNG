/* 用户浮出卡片渲染引擎 */
GLOBAL.namespace("rh.vi");

/*
 * 用户个人信息弹出框实例
 */
rh.vi.userInfo = function(e, id){
	  this.userObj;	//用户个人信息对象
	  this.imgSrc; //用户头像链接地址
	  this.x;
	  this.y;
	  this.userId; //div弹出位置和用户编码
	  this.setTimeoutVal; //定时器变量声明
	  this.onDialog = false; //鼠标在div上
	  this._userload(e, id);
};

/*
 * 初始化方法
 */
rh.vi.userInfo.prototype._userload = function(e, id){
		var _self = this; //获取当前对象
		//获得实例化出来的div个数
		var divObjs = jQuery("div[name = 'user-info-dialog-names']");
		//清除弹出div
		divObjs.remove();
		//指定弹出div方法
		_self.userId=id;
		_self._userloadData(id);
		_self._getUserInfoDialog(e);
};

/*
 *获得user对象
 */
rh.vi.userInfo.prototype._userloadData = function(userCode){
	this.userObj = top.FireFly.byId("SY_COMM_ADDRESS_LIST",userCode);
};

/*
 * 构建弹出框页面布局
 */
rh.vi.userInfo.prototype._getUserInfoDialog = function(e) {
	var _self = this;
	var dialogId = "user-info-dialog"; // 设置Dialog的id
	var xVal = Mouse.getMousePoint(e).x;
	var yVal = Mouse.getMousePoint(e).y;
	
	//计算弹出div的位置，不能出现在body之外的位置
	var bodyWidth = parent.jQuery("body").width();
	var scrollVal = parent.jQuery("body").scrollTop();
	if (scrollVal == 0) {
		scrollVal = Mouse.getScrollTop();
	}
	
	//获取当前可视化窗体高度
	var bodyHeight = top.GLOBAL.getDefaultFrameHei();
	
	//弹出框所在区域返回值
	var rtnVal = 0;
	
	//获得区域返回值
	rtnVal = Mouse.dialogCoordinate(xVal, Math.abs(yVal - scrollVal), 275, 225);
	
	//判断在哪个位置显示
	if ((rtnVal == 0) || (rtnVal == 1)) {
		this.x = xVal + 15;
		this.y = yVal + 15; 
	} else if (rtnVal == 2) {
		this.x = xVal - 275 - 15;
		this.y = yVal + 15; 
	} else if (rtnVal == 3) {
		this.x = xVal - 275 - 15;
		this.y = yVal - 225 - 15; 
	} else if (rtnVal == 4) {
		this.x = xVal + 15;
		this.y = yVal - 225 - 15; 
	}
	
	
	
	//最外层div
	var hideDiv = jQuery("<div class = 'icon-user-info-div-back' name = 'user-info-dialog-names' ></div>")
		.css({
			"display":"none",
			"position":"absolute",
			"top":this.y,"left":this.x,
			"width":"275px","height":"225px",
			"z-index":"10000"
		}).appendTo(jQuery("body"));
	
	//添加圆角，阴影。内层div
	var winDialog = jQuery("<div></div>").attr("id", dialogId)
		.attr("class", "icon-user-info-div-back rh-user-info-circular-bead rh-user-info-shadow")
		.css({
			"width":"275px","height":"225px"
		});
	
	winDialog.appendTo(hideDiv);
	
	//给内层div添加鼠标事件
	winDialog.bind("mouseover",function(e){
		jQuery("#user-info-close-div").attr("class", "icon-user-close-mouseleave-div icon-user-close-mouseover-div rh-user-info-close-div");
		jQuery("#user-info-close-div").show();
		//_self.setInterVal
	}).bind("mouseleave", function(e){
		jQuery("#user-info-close-div").hide();
		jQuery("div[name = 'user-info-dialog-names']").fadeOut(1000);
	});
	
	//添加左边div
	jQuery("<div></div>").attr("id", "user-info-div").css({"padding" : "5px 5px 5px 5px"}).appendTo(winDialog);
	//添加图片div
	jQuery("<div></div>").attr("id", "user-info-img-div").css({
				"float":"left","margin-right":"5px"
			}).appendTo(jQuery("#user-info-div"));
	//拿到图片路径
	var imgSub = this.userObj.USER_IMG_SRC;
	//图片存在，展示已有图片；图片不存在，展示系统默认图片。
	if (!imgSub) {
		if (this.userObj.USER_SEX == "0") {
			this.imgSrc = FireFly.getContextPath() + "/sy/theme/default/images/common/rh-male-icon.png";
		} else if (this.userObj.USER_SEX == "1"){
			this.imgSrc = FireFly.getContextPath() + "/sy/theme/default/images/common/rh-lady-icon.png";
		}
	} else {
		this.imgSrc = FireFly.getContextPath() + "/file/" + imgSub.substring(0,imgSub.indexOf(","));
	}
	//设置img圆角显示
	jQuery("<img class = 'rh-user-info-circular-bead'/>").attr("src", this.imgSrc).attr("width","100").attr("height","100")
		.appendTo(jQuery("#user-info-img-div"));
	
	//添加在线状态图标
	jQuery("<div>&nbsp;</div>").attr("id", "user-info-on-line").appendTo(jQuery("#user-info-img-div"));
	
	//添加关闭div按钮
	jQuery("<div class = 'rh-user-info-close-div'>&nbsp;</div>").attr("id","user-info-close-div").attr("title","关闭")
		.appendTo(jQuery("#user-info-div"));
	
	//根据在线状态显示不同的状态图标
	if (this.userObj.USER_CODE__STATUS== "1") {
		jQuery("#user-info-on-line").attr("class","rh-user-info-list-online rh-user-info-on-line").attr("title", "在线");
	} else if (this.userObj.USER_CODE__STATUS== "2") {
		jQuery("#user-info-on-line").attr("class","rh-user-info-list-offline rh-user-info-on-line").attr("title", "离线");
	}
	//添加基本信息div
	jQuery("<div class = 'rh-user-info-local-mouse-over-div rh-user-info-local-div rh-user-info-field'></div>")
		.attr("id","user-info-local-div").appendTo(jQuery("#user-info-div"));
	
	//添加姓名标签
	jQuery("<div class='icon-user-img'></div>").attr("id","user-info-name").attr("title", "姓名")
		.appendTo(jQuery("#user-info-local-div"));
	var userSpan = jQuery("<span></span>").appendTo(jQuery("#user-info-name"));
	jQuery("<a href=javascript:void(0);>" + this.userObj.USER_NAME + " </a>").bind("click",function(){
			_self._inTouserCard(_self.userObj.USER_NAME, _self.userObj.USER_CODE);
		}).appendTo(userSpan);
	jQuery("<br/><br/>").appendTo(jQuery("#user-info-local-div"));
	
	//添加性别标签
	jQuery("<div class = 'icon-user-sex'></div>").attr("id","user-info-sex").attr("title", "性别")
		.appendTo(jQuery("#user-info-local-div"));
	//alert(this.userObj.USER_SEX + "---" + this.userObj.USER_SEX__NAME);
	if (this.userObj.USER_SEX == "0") {
		///*+ this.userObj.USER_SEX__NAME+ */ "
		jQuery("<span>男&nbsp;</span>").css({"color":"#3777be"}).appendTo(jQuery("#user-info-sex"));
	} else if (this.userObj.USER_SEX == "1") {
		// " /*+ this.userObj.USER_SEX__NAME +*/ "
		jQuery("<span>女&nbsp;</span>").css({"color":"#ba2c27"}).appendTo(jQuery("#user-info-sex"));
	} else {//添加性别不确定的标签
		jQuery("<span><暂无></span>").css({"color":"#CCC"}).appendTo(jQuery("#user-info-sex"));
	}
	jQuery("<br/><br/>").appendTo(jQuery("#user-info-local-div"));
	
	//添加手机标签
	jQuery("<div class = 'icon-user-phone'></div>").attr("id","user-info-phone").attr("title", "手机")
		.appendTo(jQuery("#user-info-local-div"));
	var mobile = this.userObj.USER_MOBILE || "<暂无>";
	jQuery("<span style='color:#000'>   " + mobile + "</span>").appendTo(jQuery("#user-info-phone"));
	jQuery("<br/><br/>").appendTo(jQuery("#user-info-local-div"));
	
	//t添加电话标签
	jQuery("<div class = 'icon-user-telephone'></div>").attr("id","user-info-telephone").attr("title", "电话")
		.appendTo(jQuery("#user-info-local-div"));
	var telephone = this.userObj.USER_OFFICE_PHONE || "<暂无>";
	jQuery("<span style='color:#000'>   " + telephone + "</span>").appendTo(jQuery("#user-info-telephone"));
	jQuery("<br/><br/>").appendTo(jQuery("#user-info-local-div"));
	
	//添加职位标签
	jQuery("<div class = 'icon-user-post'></div>").attr("id","user-info-post").css({"left":"10px"}).attr("title", "职位")
		.appendTo(jQuery("#user-info-local-div"));
	var user_post = this.userObj.USER_POST || "<暂无>";
	jQuery("<span style='color:#000'>" + user_post + "</span>").appendTo(jQuery("#user-info-post"));
	//jQuery("<br/><br/>").appendTo(jQuery("#user-info-local-div"));
	
	//添加部门标签
	jQuery("<div class = 'icon-user-dept'></div>").attr("id","user-info-dept").attr("title", "部门")
		.appendTo(jQuery("#user-info-local-div"));
	var user_dept = this.userObj.DEPT_CODE__NAME || "<暂无>";
	jQuery("<span style='color:#000'>" + user_dept + "</span>").appendTo(jQuery("#user-info-dept"));
	jQuery("<br/><br/>").appendTo(jQuery("#user-info-local-div"));
	
	//添加邮箱标签
	jQuery("<div class = 'icon-user-mail'></div>").attr("id","user-info-mail").css({"left":"10px"}).attr("title", "邮件")
		.appendTo(jQuery("#user-info-local-div"));
	jQuery("<span><a href = 'javascript:viod(0) return false;' id = 'user-info-e-mail'>发送邮件</a></span>").appendTo(jQuery("#user-info-mail"));
		jQuery("#user-info-e-mail").bind("click", function(e){
			window.open("http://staff.zotn.com/");
			hideDiv.remove();
		});
	
	//添加聊天标签
	jQuery("<div class = 'icon-user-friend'></div>").attr("id","user-info-friend").attr("title", "聊天")
		.appendTo(jQuery("#user-info-local-div"));
	jQuery("<span><a href = 'javascript:void(0) return false;'  id = 'user-info-chat'>聊天</a></span>").appendTo(jQuery("#user-info-friend"));
	jQuery("<br/><br/>").appendTo(jQuery("#user-info-local-div"));
	
	//打开聊天对话框单击事件
	jQuery("#user-info-chat").bind("click", function(event){
		var user_id = _self.userObj.USER_CODE + "-rhim-server";
		var chat_id = _self.userObj.USER_CODE + "@rhim.server";
		var user_name = _self.userObj.USER_NAME;
		parent.rhImFunc.showChatArea({"id":user_id,"jid":chat_id,"name":user_name,"status":"online"});
		hideDiv.remove();
	});
	
	jQuery("<div></div>").attr("id", "user-info-bottom-div").appendTo(winDialog);
	
	//给关闭按钮添加鼠标事件
	jQuery("#user-info-close-div").bind("click", function(e){
		hideDiv.remove();
	}).bind("mouseover", function(e){
		jQuery(this).attr("class", "icon-user-close-mouseover-div rh-user-info-close-div");
	});
	
	if (e.type != "click") {
		//给父元素绑定单击事件
		jQuery("body").bind("click",function(e){
			jQuery("div[name = 'user-info-dialog-names']").remove();
		});
	}
	hideDiv.show("slow");
};

/*
 * 用户连接
 * @param userName 用户名称
 * @param userCode 用户id
 */
rh.vi.userInfo.prototype._inTouserCard = function (userName,userCode){
	Tab.open({
		"tTitle":userName,
		"url":"SY_COMM_ADDRESS_LIST.card.do?pkCode=" + userCode + "&readOnly=true"
	});
};

/*
 * 图片悬浮查看
 */
rh.vi.suspendImg = function(e,imgPath){
	this.x;
	this.y;
	this._loadImg(e,imgPath);
};

/*
 * 初始化悬浮图片
 */
rh.vi.suspendImg.prototype._loadImg = function(e,imgPath){
	jQuery("div[name = 'user-info-suspend-img']").remove();
	var xVal = Mouse.getMousePoint(e).x;
	var yVal = Mouse.getMousePoint(e).y;
	
	//计算弹出div的位置，不能出现在body之外的位置
	var bodyWidth = parent.jQuery("body").width();
	var scrollVal = parent.jQuery("body").scrollTop();
	if (scrollVal == 0) {
		scrollVal = Mouse.getScrollTop();
	}
	
	//获取当前可视化窗体高度
	var bodyHeight = top.GLOBAL.getDefaultFrameHei();
	
	//弹出框所在区域返回值
	var rtnVal = 0;
	
	//获得区域返回值
	rtnVal = Mouse.dialogCoordinate(xVal, Math.abs(yVal - scrollVal), 200, 200);
	
	//判断在哪个位置显示
	if ((rtnVal == 0) || (rtnVal == 1)) {
		this.x = xVal + 15;
		this.y = yVal + 15; 
	} else if (rtnVal == 2) {
		this.x = xVal - 200 - 15;
		this.y = yVal + 15; 
	} else if (rtnVal == 3) {
		this.x = xVal - 200 - 15;
		this.y = yVal - 200 - 15; 
	} else if (rtnVal == 4) {
		this.x = xVal - 15;
		this.y = yVal - 200 - 15; 
	}
	
	var imgDiv = jQuery("<div style='display:none;' class='rh-user-info-shadow' name='user-info-suspend-img'></div>")
		.appendTo(jQuery("body"));
	var imgVal = jQuery("<img class = 'rh-user-info-circular-bead'/>")
		.attr("src",imgPath).appendTo(imgDiv);
	imgVal.attr("width","200").attr("height","200");
	imgDiv.css({
		"position":"absolute",
		"top":this.y,"left":this.x,
		"width":"200px","height":"200px",
		"z-index":"10000"
	}).bind("mouseleave",function(event){
		imgDiv.fadeOut("slow");
	}).bind("click",function(event){
		imgDiv.fadeOut("slow");
	});
	
	//给父元素绑定单击事件
	jQuery("body").bind("click",function(e){
		jQuery("div[name = 'user-info-suspend-img']").fadeOut("slow");
	});
	
	imgDiv.fadeIn("slow");
	if (rtnVal == 0 || rtnVal == 1) {
		imgDiv.animate({
			left:this.x + 50,
			top:this.y - 30
		  }, 1000 );
	} else if (rtnVal == 2) {
		imgDiv.animate({
			left:this.x - 50,
			top:this.y - 30
		  }, 1000 );
	} else if (rtnVal == 3) {
		imgDiv.animate({
			left:this.x - 50,
			top:this.y - 30
		  }, 1000 );
	} else if (rtnVal == 4) {
		imgDiv.animate({
			left:this.x - 50,
			top:this.y + 30
		  }, 1000 );
	}
};