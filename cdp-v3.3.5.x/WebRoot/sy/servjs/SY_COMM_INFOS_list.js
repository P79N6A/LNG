var _viewer = this;

_viewer.getBtn("batchCommit").unbind("click").bind(
		"click",
		function() {
			var servid = _viewer.servId;
			var pkdata = _viewer.grid.getSelectPKCodes();
			if (pkdata != '') {
				var datas = {};
				datas[UIConst.PK_KEY] = pkdata.join(",");
				for ( var i = 0; i < pkdata.length; i++) {
					var check = _viewer.grid.getRowItemValue(pkdata[i],
							"NEWS_CHECK");
					var fbtime = _viewer.grid.getRowItemValue(pkdata[i],
							"NEWS_TIME");
					var checker = _viewer.grid.getRowItemValue(pkdata[i],
							"NEWS_CHECKER");
					var nowDate = rhDate.getCurentTime().substring(0, 11);
					datas[pkdata[i]] = check + "," + fbtime + "," + nowDate
							+ "," + checker;
				}
				FireFly.doAct(servid, "batchCheck", datas, true, false,
						function() {
							_viewer.refreshTreeAndGrid();
						});
			} else {

				alert("请选择要提交的数据");
			}
		});

/* 对[操作]列添加操作链接 */
_viewer.grid.getBodyTr().each(function() {
	
	// 获取每一列的[操作]列
	var operate = jQuery(this).find("[icode='OPERATE']");

	var pCon = jQuery("<div></div>");
	var newId = jQuery(this).find("[icode='NEWS_ID']").html();
	// alert(newId);
	appendAObjs(newId,pCon);
	pCon.appendTo(operate);
});

/* 向[操作]列添加操作链接代码 */
function appendAObjs(newId,pCon){
	var newsChecked = _viewer.grid.getRowItemValue(newId,"NEWS_CHECKED");
	
	var edit = jQuery("<a href='javascript:void(0);'></a>").css({"margin":"0px 3px 0px 5px"});
	var debtn=jQuery("<a href='javascript:void(0);'></a>").css({"margin":"0px 3px 0px 5px"});
	var check=jQuery("<a href='javascript:void(0);'></a>").css({"margin":"0px 3px 0px 5px"});
	
	if (newsChecked == '1' || newsChecked == '2') {
		edit.html("编辑").css({"color":"#008000"}).unbind("click").bind("click",function(event){
			Tab.open({
				"url" : "SY_COMM_INFOS.card.do?pkCode="+newId,
				"tTitle" : "我填报的信息",
				"menuFlag" : 4
			});
		});
		debtn.html("  删除   ").css({"color":"#008000"}).unbind("click").bind("click",function(event){
		  var servid=_viewer.servId;
		  var data={};
		  data[UIConst.PK_KEY] = newId;
		  data['serv'] = servid;
	      FireFly.doAct(servid, "delete", data, true, false,
					function() {
						_viewer.refreshTreeAndGrid();
					});
			
		});
		check.html("  提交审核   ").css({"color":"0000ff"}).unbind("commit").bind("click",function(event){
			var servid = _viewer.servId;
			var data={};
			data[UIConst.PK_KEY] =newId;
			var check =_viewer.grid.getRowItemValue(newId,"NEWS_CHECK");
			var fbtime=_viewer.grid.getRowItemValue(newId,"NEWS_TIME");
			var checker =_viewer.grid.getRowItemValue(newId,"NEWS_CHECKER");
			var nowDate = rhDate.getCurentTime().substring(0, 11);
			data[newId] = check + "," + fbtime + "," + nowDate
			+ "," + checker;
			FireFly.doAct(servid, "batchCheck", data, true, false,
					function() {
						_viewer.refreshTreeAndGrid();
					});
		});
	} else {
		
	}
	
	edit.appendTo(pCon);
	debtn.appendTo(pCon);
	check.appendTo(pCon);
}