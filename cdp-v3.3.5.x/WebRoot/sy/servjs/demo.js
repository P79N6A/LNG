/*=========================================================================================================
 * 写在最前面：此文件为功能示例文件库，包含了前端在业务操作中比较典型的功能，每个人可以在此页面添加自认为实用且具有代表性的功能代码，供大家学习和查阅。
 * 添加和修改时请按照已有代码格式添加(良好的格式、注释、作者)
 * 每个人都是贡献者也是受益者,鼓励大家勘误和贡献!!!!
 *========================================================================================================*/ 

/**********************************************************************************************************
 * 页面上的字段的对象获取，值获取和设置，显示，隐藏
 * @author liujinkai
 **********************************************************************************************************/
var itemValue = _viewer.getItem("USER_NAME").getValue();//获取字段的值
alert("字段值的获取：" + itemValue);
_viewer.getItem("USER_NAME").setValue("testcode");//常规字段的赋值

_viewer.getItem("DEPT_CODE").setValue("testcode");//字典类型字段的code赋值
_viewer.getItem("DEPT_CODE").setText("testcode__NAME");//字典类型字段的name赋值

_viewer.getItem("USER_NAME").getContainer().hide();//隐藏字段
_viewer.getItem("USER_NAME").getContainer().show();//显示字段

/**********************************************************************************************************
 * 卡片页面获取父服务的上下文句柄
 * @author liujinkai
 **********************************************************************************************************/
var name = _viewer.getParHandler().grid.getSelectItemValues("USER_NAME");
alert(name);
var btnName = _viewer.getParHandler().getBtn("add").text();
alert(btnName);

/**********************************************************************************************************
 * 字典的弹出选择并回调
 * @author liujinkai
 **********************************************************************************************************/
_viewer.getBtn("transTo").unbind("click").bind("click", function(event) {
	//1.构造树形选择参数
	var configStr = "SY_ORG_DEPT,{'TYPE':'multi'}";//此部分参数说明可参照说明文档的【树形选择】配置说明
	var extendTreeSetting = "{'rhexpand':false,'expandLevel':2,'cascadecheck':false,'checkParent':false,'childOnly':true}";
	var options = {
		"config" :configStr,
		"extendDicSetting":StrToJson(extendTreeSetting),//非必须参数，一般用不到
		"replaceCallBack":function(idArray,nameArray){//回调，idArray为选中记录的相应字段的数组集合
			dictCallBack(idArray,nameArray);
		}
	};
	//2.显示树形
	var dictView = new rh.vi.rhDictTreeView(options);
	dictView.show(event);	 
});

//字典弹出选择回调的方法
function dictCallBack(idArray,nameArray) {
	var param = {};
	param["TO_USER_CODE"] = idArray.join(",");
	param["USER_CODE"] = nameArray.join(",");
	FireFly.doAct(_viewer.servId, "testGetParam", param, true);
};

/**********************************************************************************************************
 * 打开新tab方法，并传递参数到下一个页面
 * @author liujinkai
 **********************************************************************************************************/
_viewer.getBtn("transTo").unbind("click").bind("click", function(event) {
	var params = {};
	params["test"] = _viewer.getItem("USER_NAME").getValue();
	params["hello"] = "world!";
	
	var options = {"url":"SY_ORG_DEPT.list.do","tTitle":"test","params":params,"menuFlag":3};
	Tab.open(options);
});

/**********************************************************************************************************
 * 打开新tab方法，并传递参数到下一个页面，并把当前的句柄传递到下一个页面,
 * 新打开的页面里通过_viewer.getParams().handler 可取到上个页面的句柄
 * @author liujinkai
 **********************************************************************************************************/
_viewer.getBtn("transTo").unbind("click").bind("click", function(event) {
	var params = {};
	params["test"] = _viewer.getItem("USER_NAME").getValue();
	params["hello"] = "world!";
	params["handler"] = _viewer;
	
	var options = {"url":"SY_ORG_DEPT.list.do","tTitle":"test","params":params,"menuFlag":3};
	Tab.open(options);
});

/**********************************************************************************************************
 * 给新建任务按钮绑定事件,打开新建任务服务的卡片页面,并设置回调函数,在关闭新建任务的页面时刷新本页面
 * @author liuxinhe
 **********************************************************************************************************/
_viewer.getBtn("create").unbind("click").bind("click", function() {
			Tab.open({
						"url" : "SY_COMM_TASK_ASSIGN.card.do",
						"tTitle" : "新建任务",
						"menuFlag" : 2,
						"params" : {
							"callBackHandler" : _viewer,
							"closeCallBackFunc" : function() {
								_viewer.refresh();
							}
						}
			});
});

/**********************************************************************************************************
 * 打开用户信息悬浮框
 * @author hedongyang
 **********************************************************************************************************/
//例如，在一个div标签上绑定鼠标over事件，显示个人信息悬浮框
jQuery("<div></div>").unbind("mouseover").bind("mouseover",function(event){
	var user_code = System.getVar("@USER_CODE@");
	new rh.vi.userInfo(event, user_code);//event，事件对象；user_code，用户编码
});

/**********************************************************************************************************
 * 打开小卡片页面，
 * @author liujinkai
 **********************************************************************************************************/
var res = _viewer.getBtn("exp");
res.unbind("click").bind("click",function() {
	//打开修改页面act：方法（必填），sId：服务（必填），parHandler：当前句柄，widHeiArray:小卡片的宽度高度，xyArray：左上角坐标
    var temp = {"act":UIConst.ACT_CARD_MODIFY,"sId":"SY_ORG_USER","parHandler":_viewer,"widHeiArray":[700,500],"xyArray":[200,50]};
    temp[UIConst.PK_KEY] = "liujinkai";//修改时，必填
    var cardView = new rh.vi.cardView(temp);
    cardView.show();
	//打开添加页面act：方法（必填），sId：服务（必填），parHandler：当前句柄，widHeiArray:小卡片的宽度高度，xyArray：左上角坐标
    var temp = {"act":UIConst.ACT_CARD_ADD,"sId":"SY_ORG_USER","parHandler":_viewer,"widHeiArray":[600,300],"xyArray":[200,100]};
    var cardView = new rh.vi.cardView(temp);
    cardView.show();
});

/**********************************************************************************************************
 * 日程_弹出迷你卡片页
 * 此示例代码针对需要从一个A服务的某页面中触发某个操作弹出一个dialog，其中内嵌了一个B服务的卡片
 * 页，并且可以添加在A服务打开迷你卡片时动态的添加一个按钮对象到B服务卡片页的对象属性中，然后一起
 * 交由B服务的卡片引擎渲染，如果还需要在打开卡片页的同时给里面的相应字段赋初值，可以也拿到B服务卡片
 * 页的句柄直接进行操作，避免了再去B服务卡片页的工程js中编辑代码（只有简单的逻辑操作建议这么做）
 * @author wangchen
 **********************************************************************************************************/
//设置迷你卡片页的服务id、dialog宽高、dialog坐标
var options = {"sId": "A","widHeiArray": [1000,500],"xyArray": [50,50]};
//设置服务方法、A服务句柄
var opts = {"act":UIConst.ACT_CARD_ADD,"parHandler":this}
//删除按钮对象
var deleteBtn = {
	ACT_CODE: "deleteEve",//按钮代码
	ACT_CSS: "delete",//按钮样式类型
	ACT_EXPRESSION: "",//按钮操作表达式
	ACT_EXPRESSION_FLAG: "",
	ACT_MEMO: "Calendar.deleteData(Calendar.cardOpts.currEvent, true)",//按钮操作脚本
	ACT_NAME: "删除日程",//按钮名称
	ACT_ORDER: "0",
	ACT_TYPE: "2",
	ACT_WS_FLAG: "2",
	ACT_WS_RESULT: "",
	S_FLAG: "1"
}
//初始化卡片引擎
var cardView = new rh.vi.cardView(jQuery.extend(opts,options));
//添加按钮对象到B服务卡片页的对象属性中
cardView._data.BTNS.deleteEve = deleteBtn;
//展示卡片
cardView.show();
//拿到B服务句柄（cardView）进行操作
if(cardView.getItem("CAL_START_DATE")){cardView.getItem("CAL_START_DATE").setValue(convertToDate(scheduler.getEventStartDate(eventId)));}
if(cardView.getItem("CAL_START_TIME")){cardView.getItem("CAL_START_TIME").setValue(convertToTime(scheduler.getEventStartDate(eventId)));}
if(cardView.getItem("CAL_END_DATE")){cardView.getItem("CAL_END_DATE").setValue(convertToDate(scheduler.getEventEndDate(eventId)));}
if(cardView.getItem("CAL_END_TIME")){cardView.getItem("CAL_END_TIME").setValue(convertToTime(scheduler.getEventEndDate(eventId)));}
if(!eventObj.CAL_ID){
	jQuery("[actcode='deleteEve']").hide();
}
//保存之后
cardView.afterSave = function(resultData){
	//用户逻辑代码
};

/**********************************************************************************************************
 * 相关文件字段的回调处理
 * @author chujie
 **********************************************************************************************************/
//获取相关文件的字段
var relate = _viewer.getItem("GW_RELATE");
//单击确定后进行回调处理
relate.callBack = function (arr){
   gwExtCard.getRelate(arr,_viewer);
};

/**********************************************************************************************************
 * 向某个字段后面追加一个按钮或者文字
 * @author chujie
 **********************************************************************************************************/
var searchFlag = _viewer.form.getItem("GW_PRINT");
var setSearch = jQuery(" <a href='#' style='padding-right: 20px;padding-top: 10px;' class='icon-input-select'></a>")
					.appendTo(searchFlag.obj.parent());

/**********************************************************************************************************
 * 从一个卡片向另一个卡片传递数据可以加一个link参数
 * @author chujie
 **********************************************************************************************************/
var links ={"Title":Title,"Content":Content,"PK":PK,"servId":servId};
_viewer.getBtn("remind").unbind("click").bind("click",function(event) {
	if(PK){
	    var temp = {"act":UIConst.ACT_CARD_ADD,"sId":"SY_COMM_SET_REMIND","widHeiArray":[600,360],"xyArray":[200,100],"links":links};
	    var cardView = new rh.vi.cardView(temp);
	    cardView.show(event);
	} else{
		_viewer.cardBarTipError("请先保存");
	}
});
//在另一个卡片上调用就可以得到
var remindDataID = _viewer.links.PK;

/**********************************************************************************************************
 * 颜色选取插件
 * @author 赵振兴-20130201
 **********************************************************************************************************/
 1.插件所在路径：“/sy/base/frame/coms/colorPicker/”文件目下，包括：arrow.gif,cross.gif,hs.png,hv.png,jscolor.js
 2.jscolor.js文件中第二行的"dir"属性指定js调用的arrow.gif等图片的路径。
 3.修改bindClass属性，值为绑定的input的ID属性。
 4.在页面中直接引入jscolor.js文件，调用 jscolor.bind()函数。
 	jQuery("<script type='text/javascript' src='" + FireFly.getContextPath() + "/sy/base/frame/coms/colorPicker/jscolor.js'></script>").appendTo(jQuery("body"));
 	jscolor.bind();
 5.参考服务为：SY_COMM_CAL_TYPE的卡片页，有"日程颜色"一列。参考文件为：SY_COMM_CAL_TYPE_card.js
  
/**********************************************************************************************************
 * 兼容浏览器的CSS截串方式
 * @author 赵振兴-20130201
 **********************************************************************************************************/
overflow:hidden;
white-space:nowrap;
text-overflow:ellipsis;
-o-text-overflow:ellipsis;
-moz-text-overflow:ellipsis;
-webkit-text-overflow:ellipsis;
-icab-text-overflow: ellipsis;
-khtml-text-overflow: ellipsis;
 	
/**********************************************************************************************************
 * 列表：获取选中记录的主键并交互后台
 * @author liujinkai
 **********************************************************************************************************/
_viewer.getBtn("exp").unbind("click").bind("click",function() {
	var pkCodes = _viewer.grid.getSelectPKCodes();//获取主键值
	var itemName = [];
	var i = 0;
	for (i;i < pkCodes.length;i++) {
		itemName.push(_viewer.grid.getRowItemValue(pkCodes[i],"USER_NAME"));//获取某行的字段值
	}
	var param = {};
	param["pkCodes"] = pkCodes.join(",");
	param["userName"] = itemName.join(",");
	var result = FireFly.doAct(_viewer.servId, "testListGetParam", param, true);
    if (result[UIConst.RTN_MSG].indexOf(UIConst.RTN_OK) == 0) {//成功后刷新列表
    	_viewer.refresh();
    } 
});

/**********************************************************************************************************
 * 列表：行按钮的获取和事件绑定示例
 * @author liujinkai
 **********************************************************************************************************/
var res = _viewer.grid.getBtn("test");
res.unbind("click").bind("click",function() {
	var pk = jQuery(this).attr("rowpk");//获取主键信息
	alert(pk);
});

/**********************************************************************************************************
 * 动态调用消息聊天窗口示例
 * @author liujinkai
 **********************************************************************************************************/
var res = _viewer.getBtn("exp");
res.unbind("click").bind("click",function() {
	parent.rhImFunc.showChatArea({"id":"liwei","name":"aa","status":"online"});
});

/**********************************************************************************************************
 * 代码构造查询选择框，并回调
 * @author liujinkai
 **********************************************************************************************************/
_viewer.getBtn("selectOne").unbind("click").bind("click", function(event) {//选择一个现有模版
	//1.构造查询选择参数，其中参数【HTMLITEM】非必填，用以标识返回字段的值为html标签类的
	var configStr = "SY_COMM_TEMPL,{'TARGET':'~PT_TITLE~PT_CONTENT~PT_PARAM~PT_INCL_CSSJS','SOURCE':'PT_ID~PT_TITLE~PT_CONTENT~PT_PARAM~PT_INCL_CSSJS','TYPE':'single','HTMLITEM':'PT_CONTENT,PT_INCL_CSSJS'}";
	var options = {
		"config" :configStr,
		"parHandler":_viewer,
		"formHandler":_viewer.form,
	    "replaceCallBack":function(idArray) {//回调，idArray为选中记录的相应字段的数组集合
	    	callBack(idArray);
		}
	};
	//2.用系统的查询选择组件 rh.vi.rhSelectListView()
	var queryView = new rh.vi.rhSelectListView(options);
	queryView.show(event);
});
/*
 * 回调的方法
 */
function callBack(idArray) {
	var title = idArray["PT_TITLE"] + "【新建】";
    _viewer.getItem("PT_TITLE").setValue(title);
    _viewer.getItem("PT_CONTENT").setValue(idArray["PT_CONTENT"]);
    _viewer.getItem("PT_PARAM").setValue(idArray["PT_PARAM"]);
    _viewer.getItem("PT_INCL_CSSJS").setValue(idArray["PT_INCL_CSSJS"]);
};