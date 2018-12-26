
RHTimeCenter.before_can_modify = true;//当前时间之前可否添加、修改、或移动事件并屏蔽

/*
数据结构说明--开始
	{
		start_date
		end_date
		event_id(前台组件生成)
		...
		服务对应字段
		...
		can_modify(能否添加)
		can_del(能否删除)
	}
数据结构说明--结束
*/
/************************************************可实现方法 开始******************************************************
*RHTimeCenter.doDrag(data, dargMode, view)------判断每个事件是否可以拖动修改的逻辑可以实现此方法
*RHTimeCenter.doBeforeEventChanged------判断每个已存在事件及对应的改变后的事件关系的逻辑可以实现此方法
*RHTimeCenter.doBeforeViewChange------视图切换前
*RHTimeCenter.doViewChange------视图切换后
*RHTimeCenter.afterSave------保存数据后，可重载系统默认方法
*RHTimeCenter.doEventCreated(data)------判断 可以实现此方法
*RHTimeCenter.doCollision------判断每个事件是否可以重叠及重叠的数量限制的逻辑可以实现此方法
*RHTimeCenter.doEventChanged------判断每个事件是否可以拖动修改的逻辑可以实现此方法
*RHTimeCenter.showDetail------可重载系统默认展示详细信息的方法
*RHTimeCenter.doDeleteData------可重载系统默认后端删除的方法
************************************************可实现方法 结束******************************************************/
//1、判断是否可以添加修改的逻辑写在这里
RHTimeCenter.doDrag = function(data, dargMode, view){
	//dhtmlx.message(dargMode);
	//dargMode常见值：create（新增）、move（修改）、resize(修改)
	if(dargMode=="create"){
		/*前台禁止添加的程序写在此处 return true or false --开始*/
			//...
		/*前台禁止添加的程序写在此处 return true or false --结束*/
	}else{
		if(data && data.can_Modify && data.can_Modify == "false"){
			dhtmlx.message("您禁止修改日程");
			return false;
		}
	}
	return true;
};

//2、判断每个已存在事件及对应的改变后的事件关系的逻辑可以实现此方法
RHTimeCenter.doBeforeEventChanged = function(data, isAddFlag, rawData){
	return true;
};

//3、视图切换前
RHTimeCenter.doBeforeViewChange = function(old_view, old_date, view, date){
	RHTimeCenter.clearDatasWithoutRender();
	view = view || old_view;
	if(view == 'unit'){
		RHTimeCenter.setCurrentUsers({"code":RHTimeCenter.getUserCode(),"name":RHTimeCenter.getUserName()});
		RHTimeCenter._setHeaderExtInfo("  下属");
	}else{
		RHTimeCenter._setHeaderExtInfo("  " + RHTimeCenter.getCurrentUsers().name);
	}
	return true;
};

//4、视图切换后
RHTimeCenter.doViewChange = function(view, date){
	if(scheduler.initEnd){
		if(view != 'unit'){
			RHTimeCenter.loadDatas({"queryUserStr": RHTimeCenter.getCurrentUsers().code});
		}else{
			RHTimeCenter.loadDatas({"queryUserStr": RHTimeCenter.belongUserStr});
		}
	}
};

//5、保存数据后，可重载系统默认方法
RHTimeCenter.afterSave = function(eventObj){
	var saveFunc = function(resultData){
		eventObj.text = resultData.text;
		eventObj.CAL_ID = resultData.CAL_ID;
		eventObj.CAL_TITLE = resultData.CAL_TITLE;
		eventObj.CAL_START_DATE = resultData.CAL_START_DATE;
		eventObj.CAL_START_TIME = resultData.CAL_START_TIME;
		eventObj.CAL_END_DATE = resultData.CAL_END_DATE;
		eventObj.CAL_END_TIME = resultData.CAL_END_TIME;
		eventObj.CAL_TYPE = resultData.CAL_TYPE;
		eventObj.CAL_CONTENT = resultData.CAL_CONTENT;
		eventObj.start_date = RHTimeCenter.convertToUtc(resultData.CAL_START_TIME);
		eventObj.end_date = RHTimeCenter.convertToUtc(resultData.CAL_END_TIME);
		eventObj.type = resultData.CAL_TYPE;
		RHTimeCenter.updateEvent(eventObj.id);
	};
	return saveFunc;
};

//日程_获取后台下属用户信息
RHTimeCenter.getBelongUsers = function(){
	RHTimeCenter.belongUserStr = FireFly.doAct("SY_COMM_BELONG","getBelongUserInStr",{}).belongUserStr;
	var result = FireFly.doAct("SY_COMM_BELONG","getBelongUsers",{});
	return result;
};

//日程_获取后台共享用户信息
RHTimeCenter.getShareUsers = function(){
	var result = FireFly.doAct(MB.serv, "getShareUsers",{});
	return result;
};

//6、日程_用户列表组件
RHTimeCenter.userTree = function(options){
	if(options.act == "belong"){
		this._userArray = RHTimeCenter.getBelongUsers()._DATA_;//下属用户信息
	}else{
		this._userArray = RHTimeCenter.getShareUsers()._DATA_;//共享用户信息
	}
	this._act = options.act;
	this._containerDiv = null;//列表容器
	this._headDiv = null;//列表头部
	this._headSpan = null;
	this._bodyDiv = null;//列表容器
	this._ulObj = null;
	this._liObjArray = new Array();
	this._uimgSpanObjArray = new Array();
	this._userSpanObjArray = new Array();
	this._dimgSpanObjArray = new Array();
	this._deptSpanObjArray = new Array();
};

//7、日程_构造用户列表jquery dom
RHTimeCenter.userTree.prototype.renderUserTree = function(){
	var _self = this;
	var conId = this._act == "belong"?"belongUserTree_container":"shareUserTree_container";
	this._containerDiv = jQuery("#" + conId);
	//构造头部
	this._headDiv = jQuery("<div></div>").addClass(MB.serv + "_userTree_headDiv");
	var headTitle = this._act == "belong"?"我的下属":"我的共享用户";
	this._headSpan = jQuery("<span></span>").addClass(MB.serv + "_userTree_headSpan").text(headTitle);
	this._headSpan.appendTo(this._headDiv);
	this._headLink = jQuery("<span></span>").addClass(MB.serv + "_userTree_headLink").text("本人");
	this._headLink.appendTo(this._headDiv);
	this._headLink.unbind("click").bind("click",function(event){
		RHTimeCenter.setCurrentUsers({"code":RHTimeCenter.getUserCode(),"name":RHTimeCenter.getUserName()});
		RHTimeCenter.updateView(null, "week");
	});
	this._headDiv.appendTo(this._containerDiv);
	//构造内容
	this._bodyDiv = jQuery("<div></div>").addClass(MB.serv + "_userTree_bodyDiv");
	if(!this._userArray || this._userArray.length == 0){
		var warnStr = this._act == "belong"?"没用下属":"没有共享用户";
		jQuery("<span></span>").text(warnStr).css({position:"relative",left:"5px"}).appendTo(this._bodyDiv);
		this._bodyDiv.appendTo(this._containerDiv);
		return;
	}
	this._ulObj = jQuery("<ul></ul>").addClass(MB.serv + "_userTree_ul");
	for(var i = 0;i < this._userArray.length; i++){
		var _userCode = this._act == "belong"?this._userArray[i].S_USER:this._userArray[i].userCode;
		var _userName = this._act == "belong"?this._userArray[i].S_USER__NAME:this._userArray[i].userName;
		var _deptName = this._act == "belong"?"":this._userArray[i].deptName;
		this._liObjArray[i] = jQuery("<li></li>");
		this._liObjArray[i].addClass(MB.serv + "_userTree_li").attr("id", MB.serv + "_userTree_li_" + _userCode);
		this._liObjArray[i].unbind("click").bind("click",{"code":_userCode,"name":_userName},function(event){
			RHTimeCenter.setCurrentUsers({"code":event.data.code, "name":event.data.name});
			RHTimeCenter.updateView(null, "week");
		});
		this._uimgSpanObjArray[i] = jQuery("<span></span>").addClass(MB.serv + "_userTree_uimgSpan");
		this._userSpanObjArray[i] = jQuery("<span></span>").text(_userName);
		this._userSpanObjArray[i].addClass(MB.serv + "_userTree_userSpan").attr("id", MB.serv + "_userTree_userSpan_" + _userCode);
		this._uimgSpanObjArray[i].appendTo(jQuery(this._liObjArray[i]));
		this._userSpanObjArray[i].appendTo(jQuery(this._liObjArray[i]));
		if(this._act == "share"){
			this._dimgSpanObjArray[i] = jQuery("<span></span>").addClass(MB.serv + "_userTree_dimgSpan");
			this._deptSpanObjArray[i] = jQuery("<span></span>").text(_deptName);
			this._deptSpanObjArray[i].addClass(MB.serv + "_userTree_deptSpan").attr("id", MB.serv + "_userTree_deptSpan_" + _userCode);	
			this._dimgSpanObjArray[i].appendTo(jQuery(this._liObjArray[i]));
			this._deptSpanObjArray[i].appendTo(jQuery(this._liObjArray[i]));
		}
		this._liObjArray[i].appendTo(this._ulObj);
	}
	this._ulObj.appendTo(this._bodyDiv);
	this._bodyDiv.appendTo(this._containerDiv);
};
//8、日程_配置下属视图
RHTimeCenter.setBelongView = function(){
	var users = RHTimeCenter.belongUserTree._userArray;
	if(users.length > 0){
		jQuery('<div class="dhx_cal_tab" name="unit_tab" style="right:280px;"></div>').appendTo(jQuery(".dhx_cal_navline"));
	}else{
		return;
	}
	var belongUserSections = new Array();
	for(var i=0;i < users.length;i++){
		belongUserSections[i] = {"key":users[i].S_USER, "label":users[i].S_USER__NAME};
	}
	scheduler.createUnitsView("unit", "unit_USER_BELONG", belongUserSections, 5, 5, true);
	scheduler.locale.labels.unit_tab = "我的下属";
};

/*-------------------------------------------------------------------自定义功能初始化-----------------------------------------------------------------------*/
jQuery('<div id="belongUserTree_container"></div>').appendTo(jQuery("#left_container"));
jQuery('<div id="shareUserTree_container"></div>').appendTo(jQuery("#left_container"));
//日程_初始化下属列表
RHTimeCenter.belongUserTree = new RHTimeCenter.userTree({"act":"belong"});
//日程_渲染下属列表
RHTimeCenter.belongUserTree.renderUserTree();
//日程_初始化共享列表
RHTimeCenter.shareUserTree = new RHTimeCenter.userTree({"act":"share"});
//日程_渲染共享列表
RHTimeCenter.shareUserTree.renderUserTree();
//日程_配置下属视图
RHTimeCenter.setBelongView();