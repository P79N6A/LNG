<!DOCTYPE html>
<!--STATUS OK-->
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<title>全部文档</title>
<#include "/SY_COMM_WENKU/config_constant.ftl">
<script type="text/javascript"> var FireFlyContextPath =''; </script>
<script type="text/javascript" src="/sy/base/frame/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="/sy/base/frame/constant.js"></script>
<script type="text/javascript" src="/sy/base/frame/tools.js"></script>
<script type="text/javascript" src="/sy/base/frame/platform.js"></script>
<script type="text/javascript" src="/sy/comm/cms/js/wenku.js"></script>

<meta name="description"
	content="在线互动式文档分享平台，在这里，您可以和千万网友分享自己手中的文档，全文阅读其他用户的文档 ">
<link rel="stylesheet" type="text/css"
	href="/sy/comm/wenku/baidu_style_files/framework_48fb02e1.css">
<link rel="stylesheet" type="text/css"
	href="/sy/comm/wenku/baidu_style_files/uploadBox_d6fe1324.css">
<link rel="stylesheet" type="text/css"
	href="/sy/comm/wenku/baidu_style_files/userList_6b1e06e8.css">
<link rel="stylesheet" type="text/css"
	href="/sy/comm/wenku/baidu_style_files/list_35637000.css">
<link rel="stylesheet" type="text/css"
	href="/sy/comm/wenku/baidu_style_files/childClassBlock_79b2739b.css">
<link rel="stylesheet" type="text/css"
	href="/sy/comm/wenku/baidu_style_files/cpmsg_b717a84f.css">
<link rel="stylesheet" type="text/css"
	href="/sy/comm/wenku/baidu_style_files/dataList_d8492a2c.css">
<link rel="stylesheet" type="text/css"
	href="/sy/comm/wenku/baidu_style_files/pager_1cd6d3a7.css">
<script type="text/javascript"
	src="/sy/comm/wenku/baidu_style_files/base_75690991.js"></script>

<script src="/sy/comm/wenku/baidu_style_files/wenku.js"></script>
</head>
<body>

	<!-- page begin -->
	

	<style type="text/css">
.pass-login-pop-form {
	_text-align: left;
}

.docBubble {
	z-index: 500;
}

#baidu-top-tip .close {
	background:
		url(http://img.baidu.com/img/iknow/docshare/img/close_bg.png)
		no-repeat 0 -1px !important;
}

#doc .ic-pptx {
	background:
		url(http://wenku.baidu.com/static/widget/common/module_static/module_static_z20976ac6.png)
		no-repeat -1098px 0;
}

.bottom-topic .topic-docList-item .doc-value,.bottom-topic .topic-docList-item .doc-rate-count,.bottom-topic .topic-docList-item .doc-page-num
	{
	display: none !important;
}

.user-bar .mn-lk,.ui-crumbs li {
	background-image:
		url("http://img.baidu.com/img/iknow/docshare/img/module_static_z69a01da9.png");
}

.user-bar .mn-lk {
	background-position: right 6px;
}

.ui-crumbs li {
	background-position: right -5px;
}

div#hd .top-search-box {
	position: relative;
}

.reader-tools-bar-wrap .reader-download {
	overflow: visible !important;
}

.reader-tools-bar-wrap .reader-download span {
	top: -6px !important;
	right: -90px !important;
	height: 35px !important;
}
</style>

	
	<!-- user bar -->
	
	<div id="doc" class="page">
		<div id="hd">
			<div class="box top-search-box ">
				<div class="media">
					<a href="http://wenku.baidu.com/"><img
						src="/sy/comm/wenku/baidu_style_files/logo-wk-137-46_3164f22b.png"
						alt="软虹文库_文档分享平台" height="46" width="137"></a>
				</div>
				<div style="z-index: 10;" class="content">
					<div class="s_nav">
						<div class="s_tab">
							
						</div>
					</div>
					<form style="z-index: 10; width: 660px;" action="/SY_PLUG_SEARCH.query.do"
						name="ftop" id="topSearchBox" method="get">
						<span class="s_ipt_wr"> <input id="kw" name="word"
							class="s_ipt" maxlength="256" tabindex="1" autocomplete="off">
						</span><span class="s_btn_wr"> <input id="sb" value="搜索文档"
						onclick="javascript:search();"
							class="s_btn" onmouseover="this.className='s_btn s_btn_h'"
							onmousedown="this.className='s_btn s_btn_d'"
							onmouseout="this.className='s_btn'" type="submit"></span><span
							class="s_tools"><a
							href="http://www.baidu.com/search/wenku/help.html"
							target="_blank">帮助</a> </span>
						<div class="g-sl">
							<label for="bot_all"><input name="lm" value="0"
								id="bot_all" checked="checked" type="radio">全部</label> <label
								for="bot_doc"><input name="lm" value="1" id="bot_doc"
								type="radio">DOC</label> <label for="bot_ppt"><input
								name="lm" value="3" id="bot_ppt" type="radio">PPT</label> <label
								for="bot_txt"><input name="lm" value="5" id="bot_txt"
								type="radio">TXT</label> <label for="bot_pdf"><input
								name="lm" value="2" id="bot_pdf" type="radio">PDF</label> <label
								for="bot_xls"><input name="lm" value="4" id="bot_xls"
								type="radio">XLS</label>
							<div style="clear: both"></div>
						</div>
						<input name="od" value="0" type="hidden"> <input name="fr"
							value="top_home" type="hidden">
								<input name="data" id="data" value="" type="hidden">
					</form>
				</div>
				<a id="new-client-banner"
					href="http://wenku.baidu.com/topic/szbq/index.html" target="_blank"
					style="position: absolute; right: 0; top: 1px; z-index: 0;"><img
					src="/sy/comm/wenku/baidu_style_files/d291e33faea304362eee028e07217b47.png"></a>
			</div>
			
			<div class="nav-wrap mb10">
				<div class="ui-nav">
					<div class="inner clearfix">
						<ul>
							<li id="nav-index" class="first"><a class="fst"
								href="/wenku/channel/${root_channel_id}/index.html"><span>文库首页</span></a></li>
							<@channel_list debugName="首页导航" channelId="${root_channel_id}"> 
							<#list tag_list as channel>
							<li id="nav-edu" class="four"><a
								href="/wenku/channel/${channel.CHNL_ID}/index.html"><span>${channel.CHNL_NAME}</span></a></li>
							</#list>
							 </@channel_list>
							<li id="nav-uc" class="four logSend"><a
								javascript:myDocuments();
								href="#" target="_self"
								id="myWenku" class="logSend"
								data-logsend="{&quot;send&quot;:[&quot;general&quot;,&quot;usercenter&quot;,{&quot;refer&quot;:&quot;navigator&quot;}]}"><span>我的文库</span></a>
							</li>
						</ul>
						<div class="new-tip"></div>
					</div>
				</div>
			</div>
		
		</div>
		<div id="bd">
			<div class="bd-wrap">
			<!-- 当前位置
				<div id="page-curmbs" class="crumbs ui-crumbs mb10">
					<ul>
						<li><a href="http://wenku.baidu.com/" class="logSend"
							data-logsend="{&quot;send&quot;:[&quot;general&quot;,&quot;crumb1&quot;]}">软虹文库</a></li>
						<li><a href="http://wenku.baidu.com/pro/index"
							class="logSend"
							data-logsend="{&quot;send&quot;:[&quot;general&quot;,&quot;crumb2&quot;]}">专业资料</a></li>
						<li><a href="http://wenku.baidu.com/list/175" class="logSend"
							data-logsend="{&quot;send&quot;:[&quot;general&quot;,&quot;crumb3&quot;]}">人文社科</a></li>
						<li class="current">广告/传媒</li>
					</ul>
				</div>
				 -->
				<div class="body">
					
					
					<!--  右上角 upload
					<div class="aside">
						<div class="upbox">
							<div class="content">
								<a class="upload" id="upload"
									href="http://wenku.baidu.com/new?fr=list"></a>
							</div>
						</div>
						<script type="text/javascript">
							F
									.use(
											[
													'/static/common/lib/tangram/base/base.js',
													'/static/common/ui/js_core/login/login.js' ],
											function(T, Login) {
												T.event
														.on(
																'upload',
																'click',
																function(e) {
																	T.event
																			.stop(e);
																	Login.login
																			.verlogin(
																					function() {
																						location.href = "/new?fr=list";
																					},
																					null,
																					null,
																					{
																						fromMod : 'upload'
																					});
																});
											});
						</script>
						<div class="mod fenyuejinbu userListMod">
							<div class="hd pb5">
								<h2>
									<span class="ic ic-userList"></span>分类飞跃进步奖
								</h2>
							</div>
							<div class="bd">
								<table class="reward" cellpadding="0" cellspacing="0">
									<tbody>
										<tr>
											<td>当前没有飞跃进步奖用户</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						
					</div>
					 -->
					 
					 
					
					
					<div class="main">
						<div class="mod catalog">
							<b class="top"><b class="tl"></b><b class="tr"></b></b>
							<div class="inner">
								<div class="hd">
									<h2>${chanel.CHNL_NAME}</h2>
								</div>
								<div class="bd">
									<table id="classList" cellpadding="0" cellspacing="0"
										width="100%">
										<tbody>
						     <@channel_list debugName="栏目二级导航" channelId="${chanel.CHNL_PID}"> 
						     <tr>
							<#list tag_list as obj>
							 <#if obj.CHNL_ID == chanel.CHNL_ID>
							   <td><strong>${obj.CHNL_NAME}</strong></td>
							 <#else>
							<td><a href="/wenku/channel/${obj.CHNL_ID}/index.html" >${obj.CHNL_NAME}</a>&nbsp;</td>
							</#if>
							<#if (obj_index+1) gt 0 && (obj_index+1) % 4 == 0>
							</tr>
							<tr>
							</#if>
							</#list>
							</tr>
							 </@channel_list>
										
										<!-- 
											<tr>
												<td><a href="http://wenku.baidu.com/list/65">法律资料</a>&nbsp;</td>
												<td><a href="http://wenku.baidu.com/list/142">军事/政治</a>&nbsp;</td>
												<td><strong>广告/传媒</strong></td>
												<td><a href="http://wenku.baidu.com/list/86">文学研究</a>&nbsp;</td>
											</tr>
											<tr>
												<td><a href="http://wenku.baidu.com/list/125">教育学/心理学</a>&nbsp;</td>
												<td><a href="http://wenku.baidu.com/list/67">哲学/历史</a>&nbsp;</td>
												<td><a href="http://wenku.baidu.com/list/143">设计/艺术</a>&nbsp;</td>
												<td><a href="http://wenku.baidu.com/list/144">社会学</a>&nbsp;</td>
											</tr>
											 -->
											
										</tbody>
									</table>
								</div>
							</div>
							<b class="bottom"><b class="bl"></b><b class="br"></b></b>
						</div>
						<div class="cpmsg-wrap">
							<img class="cpmsg-icon" alt=""
								src="/sy/comm/wenku/baidu_style_files/cpmsg-alert.gif">我们不允许任何未经著作权人同意而将其作品进行上传和公开分享的行为。一旦您发现了此类文档，希望您能前往<a
								href="#" target="_self">投诉区</a>进行投诉,我们非常感谢您为维护软虹文库无盗版环境作出的贡献。
						</div>
						<div class="mod dataList">
							<ul class="docAlbumTab">
								<li class="selected"><a
									href="http://wenku.baidu.com/list/124" class="Doclist"
									hidefocus="true">文档</a></li>
						<!-- 	
								<li><a href="http://wenku.baidu.com/album/list?cid=124"
									class="Albumlist" hidefocus="true">文辑</a></li>
						-->		
							</ul>
							<div class="tab-line"></div>
							<div id="tabContent" class="tabContent">
								<table class="list" id="docList" cellpadding="0" cellspacing="0"
									width="100%">
									<tbody>
										<tr>
											<th width="32">格式</th>
											<th width="394">文档名称</th>
											<th width="100">上传者</th>
											<th width="70">下载量</th>
											<!-- 
											<th width="70"><a title="按下载量排序"
												href="http://wenku.baidu.com/list/124?od=2">下载量</a></th>
												 -->
											<th width="70">上传时间<span title="按上传时间排序"
												class="icon sort"></span></th>
										</tr>
										<#list _DATA_ as doc>
										<#if doc_index % 2 = 0 >
										<tr>
										<#else>
										<tr class="hasb">
										</#if>
										
											<td class="i"><span title="doc" class="ic ic-doc"></span></td>
											<td><a
												href="#"
												onclick="javascript:view('${doc.DOCUMENT_ID}','${doc.DOCUMENT_TITLE}')"; 
												target="_self" title="${doc.DOCUMENT_TITLE}">
												<#if doc.DOCUMENT_TITLE?length gt 30>
																${doc.DOCUMENT_TITLE[0..30]}...
																<#else>${doc.DOCUMENT_TITLE}	
											</#if>
												</a><span>4页</span></td>
											<td class="un"><div>
													<a href="#"
														data-logsend="{'send':['view','user',{'l':''}]}"
														class="Author logSend" target="_self">${doc.S_UNAME}</a>
												</div></td>
											<td><span>${doc.DOCUMENT_DOWNLOAD_COUNTER}次</span></td>
											<td><span>
											${doc.S_CTIME_TIMEAGO}
											</span></td>
										</tr>
										</#list>
									</tbody>
								</table>
							</div>
						</div>
						<!-- index_1.html _PAGE_ -->
						<div class="page-nav page-center">
							<div class="page-inner">
								<div class="page-content">
								<!-- 如果当前页>1 显示上一页 -->
								   <#if _PAGE_.NOWPAGE gt 1>
								   <a
										href="/wenku/channel/${chanel.CHNL_ID}/index_${_PAGE_.NOWPAGE - 1 }.html"
										class="next">上一页&gt;</a>
								   </#if>
								   
								   <#assign start=1 />
								   <#assign end= _PAGE_.NOWPAGE+9 />
								   
								   <#if _PAGE_.NOWPAGE gte 11>
								     <#assign start = _PAGE_.NOWPAGE - 10 />
								   </#if>
								   
								   <#if end gte _PAGE_.PAGES >
								      <#assign end = _PAGE_.PAGES/>
								   </#if>
								   
								
									<#list start..end as t>
									<#if t == _PAGE_.NOWPAGE >
									<span class="cur no1">${t}</span>
									<#else>
									  <a
										href="/wenku/channel/${chanel.CHNL_ID}/index_${t}.html"
										class="no1">${t}</a>
									</#if>	
									</#list>
									
									<#if _PAGE_.NOWPAGE lt _PAGE_.PAGES>
										<a
										href="/wenku/channel/${chanel.CHNL_ID}/index_${_PAGE_.NOWPAGE + 1 }.html"
										class="next">下一页&gt;</a>
									</#if>
										<!-- 
										<a
										href="http://wenku.baidu.com/list/124?od=1&amp;pn=750"
										class="last">尾页</a>
										 -->
								</div>
							</div>
						</div>
						<div class="mod rg">
							<b class="top"><b class="tl"></b><b class="tr"></b></b>
							<div class="inner">
								<div class="bd">
									<div class="box top-search-box ">
										<div class="content">
											<form action="/SY_PLUG_SEARCH.query.do" name="ftop" id="searchForm"
												method="get">
												<span class="s_ipt_wr"> <input id="bskw" name="word"
													class="s_ipt" maxlength="256" tabindex="1"
													autocomplete="off">
												</span><span class="s_btn_wr"> <input id="bsb" value="搜索文档"
												  onclick="javascript:search();"
													class="s_btn" onmouseover="this.className='s_btn s_btn_h'"
													onmousedown="this.className='s_btn s_btn_d'"
													onmouseout="this.className='s_btn'" type="submit"></span>
												<div class="g-sl">
													<label for="bot_all"><input name="lm" value="0"
														id="bot_all" checked="checked" type="radio">全部</label> <label
														for="bot_doc"><input name="lm" value="1"
														id="bot_doc" type="radio">DOC</label> <label for="bot_ppt"><input
														name="lm" value="3" id="bot_ppt" type="radio">PPT</label>
													<label for="bot_txt"><input name="lm" value="5"
														id="bot_txt" type="radio">TXT</label> <label for="bot_pdf"><input
														name="lm" value="2" id="bot_pdf" type="radio">PDF</label>
													<label for="bot_xls"><input name="lm" value="4"
														id="bot_xls" type="radio">XLS</label>
													<div style="clear: both"></div>
												</div>
												<input name="od" value="0" type="hidden"> <input
													name="fr" value="top_home" type="hidden">
														<input name="data" id="data" value="" type="hidden">
											</form>
										</div>
									</div>
								</div>
							</div>
							<b class="bottom"><b class="bl"></b><b class="br"></b></b>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="ft">
		<div class="footer">
			<p>
				<span class="cr">&#169;2013 Ruaho</span> <a
					href="#" class="Bidu" target="_self">使用文库前必读</a>&nbsp;|&nbsp;<a
					href="#"
					class="Xieyi" target="_blank">文库协议</a>
			</p>
		</div>
	</div>
	
	<div data-guid="TANGRAM$3" id="tangram-suggestion--TANGRAM$3-main"
		class="tangram-suggestion-main"
		style="position: absolute; display: none; left: 294px; top: 73px; width: 408px;">
		<div id="tangram-suggestion--TANGRAM$3" class="tangram-suggestion"
			style="position: relative; top: 0px; left: 0px"></div>
	</div>
	<div id="docBubble" class="docBubble">
		<i class="triangle-t"></i><i title="关闭" class="close markSend">关闭</i>
		<div class="tl">
			<div class="inner"></div>
		</div>
		<div class="tr"></div>
		<div class="bl"></div>
	</div>
</body>
</html>