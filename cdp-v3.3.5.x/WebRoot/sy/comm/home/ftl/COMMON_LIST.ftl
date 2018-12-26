<!--平台通用-列表模板-->

<!-- 参数-开始 -->
<#--
	showTheadFlag是否显示标题
-->
<!-- 参数-结束 -->

<!-- 自定义样式-开始 -->
<style type='text/css'>
#list_table {width:100%;table-layout:fixed;}
.head_td_order {width:10%;min-width:20px;}
.imgspan {display:inline-block;width:10px;height:10px;}
.normal-img {background:url(/sy/theme/default/images/slidemsg/blue.png) no-repeat  0px 0px transparent;}
.emergency-img {background:url(/sy/theme/default/images/slidemsg/yellow.png) no-repeat  0px 0px transparent; }
.hurry-img {background:url(/sy/theme/default/images/slidemsg/red.png) no-repeat  0px 0px transparent;}
</style>
<!-- 自定义样式-结束 -->

<table class="list_table" id="table_${tab.code}">
<thead class="head_table" id="head_${tab.code}">
	<#if tab.showThead == "true" && (list?size != 0)>
		<tr class="head_tr" id="head_tr_${tab.code}">
			<td class="head_td_order" id="head_td_order_${tab.code}">#</td>
			<#list tab.col as c>
				<td id="head_td_${c.code}" style="${c.style}">${c.name}</td>
			</#list>
		</tr>
	</#if>
</thead>
<tbody class="body_table" id="body_${tab.code}">
	<#if (list?size == 0)>
		<tr class="body_EMPTY" id="body_empty_${tab.code}">
			<td>没有待办需要处理！</td>
		</tr>
	</#if>
	
	<#list list as o>
		<tr class="body_tr" id="body_tr_${o[tab._PK_]}" pk="${o[tab._PK_]}" row="${o_index + 1}">
			<#assign emDeg = o[tab.emergField]>
			<td class="body_td_order" id=body_td_order_${tab.code}">
				<#if emDeg lte 10 >				
					<span class='imgspan normal-img'></span>
				<#elseif emDeg lte 20>
					<span class='imgspan emergency-img'></span>
				<#else>
					<span class='imgspan hurry-img'></span>
				</#if>
				${o_index + 1}
			</td>
			<#list tab.col as c>
				<td class="body_td_${tab.code}" id="body_td_${c.code}" style="${c.style}" itemCode="${tab.serv}-${c.code}" title="${o[c.code]}">${o[c.code]}</td>
			</#list>
		</tr>
	</#list>
</tbody>
</table>
<#if (list?size != 0)>
	<div class="TAB_SHOW_MORE">
		<a href="#" onclick="openMore('&{tab.serv}','&{tab.name}')">更多...</a>
	</div>
	<div style="clear:both;"></div>
</#if>