<!--平台通用-标签模板-->

<!-- 参数-开始 -->
<#--
[
	{
		"id":"json",
		"value":{
			"titleCode":"gongwen",
			"titleName":"公文",
			"conMinWid":"500px",
			"conMinHei":"300px",
			"tabs":[
				{
					"code":"todo",
					"name":"待办公文",
					"subFile":"COMMON_LIST",
					"showThead":"true",
					"emergField":"S_EMERGENCY",
					"colorField":{"code":"TODO_OVERTIME_S","exp":"overTimeFlag == 'true'","color":"red"},
					"_PK_":"TODO_ID",
					"serv":"OA_GW_COMM_TODO",
					"col":[
						{"code":"TODO_TITLE","name":"公文标题","style":"width:30%;min-width:60px","ellipFlag":"true","url":"TODO_URL"},
						{"code":"SEND_USER_CODE__NAME","name":"送交人","style":"width:15%;min-width:40px;text-align:center;"},
						{"code":"TODO_SEND_TIME","name":"送交时间","style":"width:25%;min-width:50px;text-align:center;"},
						{"code":"TODO_CODE_NAME","name":"公文类型","style":"width:20%;min-width:40px;text-align:center;"}
					]
				}
			]
		},
		"name":"传递到ftl的JSON字符串"
	}
]
	
	titleCode标题编码
	titleName标题名
	conMinHei容器最小高度
	tabs
	
	补充说明（金伟）：
	titleCode 为正个tab窗口容器的ID tabsCode 为单个tab的ID tabsName为对应的显示名称 subFiles为tab对应的引用的ftl文件的文件名
	showThead 为是否显示设定的t1_head标题 true 为显示 fase为不显示 conMinHei 设定最小高度
	emergFields value值为逗号分隔的字符串 若为判断值模板在前行数前加标志信息 目前所加标志为红色的感叹号，个数对应tab个数
	0-10为一般  11-20为紧急 21以上为特急 已在模板中写死
	例子请看：core服务模板组织中 COMMON_TAB组件
-->
<!-- 参数-结束 -->

<!-- 自定义样式-开始 -->
<style>
	<#if conMinHei??>
		#${titleCode}_con {
			min-height: ${conMinHei}
		}
	</#if>
	.TAB_SHOW_MORE {
		position:relative;
		float:right;
		right:20px;
		line-height:28px;
	}
	td {
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
		-o-text-overflow:ellipsis;
		-moz-text-overflow:ellipsis;
		-webkit-text-overflow:ellipsis;
		-icab-text-overflow: ellipsis;
		-khtml-text-overflow: ellipsis;
	}
</style>
<!-- 自定义样式-结束 -->
<div id="${titleCode!boxTheme}_box" class="portal-box ${boxTheme}">
	<div id="${titleCode!boxTheme}_con" class="portal-box-con portal-box-tab">
		<!-- 标题条-开始 -->
		<ul class="portal-box-title">
			<#list tabs as o>
				<li><a href="#${o.code}">${o.name}</a></li>
			</#list>
		</ul>
		<!-- 标题条-结束 -->
		
		<#list tabs as o>
			<#if (tabs?size == 1)>
				<#assign list = _DATA_>
			<#else>
				<#assign list = ("_DATA_" + o_index + "._DATA_")?eval>
			</#if>
			<#assign tab = o>
			<#assign filePath = "*/" + o.subFile + ".ftl">
			<div id="${o.code}_div">
				<#include "${filePath}">
			</div>
		</#list>
	</div>
</div>

<!-- 前端脚本 -->
<script type="text/javascript">
(function() {
    jQuery(document).ready(function(){
	    setTimeout(function() {
	      jQuery("#${titleCode!boxTheme}_con").tabs({});
	    },0);
    });
})();

function openMore(serv, title){
	var opts = {"url":serv + ".list.do", "tTitle":"title", "menuFlag":4, "params":{}};
	Tab.open(opts);
}
</script>
