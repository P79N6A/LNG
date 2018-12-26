<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- saved from url=(0032)http://wenku.baidu.com/edu/index -->
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>软虹文库_</title>
	<script type="text/javascript" src="/sy/comm/wenku/baidu_style_files/zoneCom.js"></script>
	<script type="text/javascript" src="/sy/comm/wenku/baidu_style_files/wenku.js"></script>
	
<#include "/SY_COMM_WENKU/config_constant.ftl">
<script type="text/javascript"> var FireFlyContextPath =''; </script>
<script type="text/javascript" src="/sy/base/frame/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="/sy/base/frame/constant.js"></script>
<script type="text/javascript" src="/sy/base/frame/tools.js"></script>
<script type="text/javascript" src="/sy/base/frame/platform.js"></script>
<script type="text/javascript" src="/sy/comm/cms/js/wenku.js"></script>

<meta name="description"
	content="在线互动式文档分享平台，在这里，您可以和千万网友分享自己手中的文档，全文阅读其他用户的文档，同时，也可以利用分享文档获取的积分下载文档 ">
	
<link type="text/css" rel="stylesheet"
	href="/sy/comm/wenku/baidu_style_files/popmessage.css">
<link type="text/css" rel="stylesheet"
	href="/sy/comm/wenku/baidu_style_files/zoneCom.css">

<style>

#shadowDiv {
	display: none;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0:left:0;
	background: #000;
	filter: alpha(opacity = 25);
	opacity: 0.25;
	z-index: 65534
}

#popDiv {
	display: none;
	position: absolute;
	width: 450px;
	height: 300px;
	z-index: 65535;
	background: #fff;
	line-height: 20px
}

#popBody {
	display: none;
	text-align: center;
	padding: 17px;
	font-size: 14px
}

.pop_r1,.pop_r2,.pop_r3,.pop_r4 {
	width: 10px;
	height: 5px;
	display: bolck;
	overflow: hidden;
	background: url(http://img.baidu.com/img/iknow/docshare/bg_popup.gif)
}

.pop_r1 {
	background-position: 0 -62px;
	float: left;
	margin-top: -3px
}

.pop_r2 {
	background-position: -10px -62px;
	float: right;
	margin-top: -3px
}

.pop_r3 {
	height: 10px;
	background-position: 0 -67px;
	float: left
}

.pop_r4 {
	height: 10px;
	background-position: -10px -67px;
	float: right
}

.pop_bottom {
	background: url(http://img.baidu.com/img/iknow/docshare/bg_popup.gif)
		repeat-x 0 -82px
}

.pop_bg1 {
	width: 10px;
	background: url(http://img.baidu.com/img/iknow/docshare/bg_popup2.gif)
		repeat-y
}

.pop_bg2 {
	width: 10px;
	background: url(http://img.baidu.com/img/iknow/docshare/bg_popup2.gif)
		repeat-y right center
}

.pop_holder1 {
	width: 100%;
	height: 100%;
	background: #fff;
	border: 2px solid #68995a;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1
}

.pop_holder2 {
	width: 100%;
	height: 100%;
	background: #000;
	position: absolute;
	left: 7px;
	top: 7px;
	filter: alpha(opacity = 25);
	opacity: 0.25
}

.pop_title {
	height: 33px;
	line-height: 33px;
	padding: 0 10px;
	color: #333;
	font-size: 14px;
	font-weight: bold;
	background: url(http://img.baidu.com/img/iknow/docshare/bg_popup.gif)
		repeat-x
}

.pop_close {
	width: 19px;
	height: 19px;
	display: block;
	float: right;
	background: url(http://img.baidu.com/img/iknow/docshare/bg_popup.gif)
		no-repeat 0 -38px;
	border: 0;
	margin: 5px 0 0 0;
	padding: 0;
	cursor: pointer
} /*pop v2 style*/
.v2 .pop_r1,.v2 .pop_r2,.v2 .pop_r3,.v2 .pop_r4 {
	display: none;
}

.v2 .pop_bg1,.v2 .pop_bg2,.v2 .pop_bottom {
	display: none;
}

.v2 .pop_holder1 {
	border: none;
	border-top: 5px solid #2f805d;
	background: #fafafa;
}

.v2 .pop_head {
	padding: 15px 25px 0 25px;
}

.v2 .pop_title {
	background: none;
	border-bottom: 1px solid #E5E5E5;
	padding: 0;
}

.v2 .pop_close {
	width: 15px;
	height: 15px;
	background:
		url(http://img.baidu.com/img/iknow/docshare/btn_wk_pop_close.png)
		no-repeat 0 0;
}

.v2 .pop_close:hover {
	background-position: -15px 0;
}

.v2 #popContent {
	background: #fafafa;
}

.v2 #ifrDiv {
	margin: 0 25px;
}

.v2 .ok,.v2 .cancle {
	background:
		url(http://img.baidu.com/img/iknow/wenku/ugc/icon-class-ok.png) left
		top no-repeat;
	display: inline-block;
	width: 82px;
	height: 26px;
	margin: 0 15px;
	cursor: pointer;
}

.v2 .ok {
	background-position: -1px top;
}

.v2 .cancle {
	background-position: -86px top;
}

.v2 .newpopbt {
	text-align: center;
	padding-top: 15px;
}

#popBody p {
	text-align: left;
	padding-left: 10px;
}

.v2 .pop_holder2 {
	display: none;
} /*tasknote style*/
.tasknote {
	padding-left: 10px;
	position: absolute;
	z-index: 100;
}

.tasknote .arrow {
	background: url(http://img.baidu.com/img/iknow/task/arrow.gif) 0 0
		no-repeat;
	overflow: hidden;
	position: absolute;
	top: 9px;
	left: 0;
	z-index: 1;
}

.tasknote .side {
	width: 11px;
	height: 21px;
}

.tasknote .up {
	top: 0;
	left: 40px;
	width: 21px;
	height: 11px;
}

.tasknote .down {
	bottom: 2px;
	top: auto;
	left: 40px;
	width: 21px;
	height: 11px;
	background-position: 0 -10px
}

.tasknotebody {
	background: #FFF9E3;
	border: 1px solid #FBE5A3;
	width: 100px;
	padding-left: 4px;
	font-size: 12px;
}

.noticeInfo {
	background: url(http://img.baidu.com/img/iknow/task/note.gif) no-repeat
		0 center;
	padding-left: 20px;
	margin: 8px 8px 0;
	line-height: 22px;
}

.noticelist {
	margin: 0;
	padding: 0;
	margin-left: 26px;
}

.noticelist li {
	margin: 0;
	padding: 0;
	line-height: 22px;
}

.tasknote .close {
	width: 13px;
	height: 13px;
	background: url(http://img.baidu.com/img/iknow/task/close.gif) no-repeat
		0 0;
	overflow: hidden;
	position: absolute;
	top: 2px;
	right: 2px;
	cursor: pointer;
	z-index: 2
}

; /* tangram-dialog */
.tangram-dialog-main {
	position: absolute;
	z-index: 65535;
	background: #68995a;
	line-height: 20px
}

.tangram-dialog-content {
	text-align: center;
	font-size: 14px;
}

.tangram-dialog {
	background: #FFFFFF repeat scroll 0 0;
	border: 2px solid #68995A;
	height: 100%;
	position: absolute;
	width: 100%;
	z-index: 1;
}

.tangram-dialog-title {
	height: 33px;
	line-height: 33px;
	padding: 0 10px;
	color: #2f5124;
	font-size: 14px;
	font-weight: bold;
	background: url(http://img.baidu.com/img/iknow/docshare/bg_popup.gif)
		repeat-x
}

.tangram-dialog-close {
	width: 19px;
	height: 19px;
	display: block;
	position: absolute;
	top: 5px;
	right: 10px;
	background: url(http://img.baidu.com/img/iknow/docshare/bg_popup.gif)
		no-repeat 0 -38px;
	border: 0;
	padding: 0;
	cursor: pointer;
}

.tangram-dialog-title .pop_r1 {
	background-position: 0 -62px;
	position: absolute;
	left: 0;
	top: 30px;
	z-index: 2;
	margin: 0;
}

.tangram-dialog-title .pop_r2 {
	background-position: -10px -62px;
	position: absolute;
	right: 0;
	top: 30px;
	z-index: 2;
	margin: 0;
}

.tangram-dialog-footer {
	position: relative;
	display: block;
	margin-top: -10px;
	width: 200px;
	margin: 0 auto;
	padding: 10px 0 30px 0;
	margin-top: -10px;
}

.tangram-dialog-footer:after {
	content: ".";
	display: block;
	visibility: hidden;
	clear: both;
	height: 0;
}

.submit {
	text-align: center;
	background: #fff;
}

.tangram-dialog-button-label {
	background: url("http://img.baidu.com/img/iknow/docshare/bg_popbtn.gif")
		no-repeat scroll 0 -37px transparent;
	border: medium none;
	color: #2F5124;
	cursor: pointer;
	font-size: 14px;
	font-weight: bold;
	height: 32px;
	line-height: 32px;
	width: 92px;
	display: inline-block;
}

.tangram-dialog-accept {
	display: inline;
	float: left;
}

.tangram-dialog-cancel {
	display: inline;
	float: right;
}





</style>
</head>



<body  style="background-color: #FAFAFA;" >
	<div id="top-tip"></div>
	
	<div id="wrapper">
		<style type="text/css">
.search-box .s_control_wr .s_nav .s_tab a {
	padding-right: 12px;
}

.search-box .s_control_wr .s_ipt_wr {
	width: 408px;
}

.tangram-suggestion {
	width: 408px;
}

{
.tangram-suggestion {
	margin-left: 0px;
}
}

</style>
<!--搜索  -->
<div id="search" class="search-box">
			<div class="s_logo_wr">
				<a href="http://wenku.baidu.com/" class="s_logo"><img
					src="/sy/comm/wenku/baidu_style_files/logo-wk-137-46_3164f22b.png" width="137" height="46"
					alt="软虹文库_文档分享平台"></a>
			</div>
			<div class="s_control_wr">
				<div class="s_nav">
					<div class="s_tab">
					</div>
					<div id="zzFlash"
						style="position: absolute; right: 137px; top: 22px; z-index: 98"></div>
				</div>
				<form action="/SY_PLUG_SEARCH.query.do" name="ftop"
					id="searchForm" method="get">
					<span class="s_ipt_wr">
					<input id="kw" name="word"
						class="s_ipt" maxlength="256" tabindex="1" value=""
						autocomplete="off"></span>
						<span class="s_btn_wr">
						<input
						type="submit" id="sb" value="搜索文档" class="s_btn"
						onclick="javascript:search();"
						onmouseover="this.className=&#39;s_btn s_btn_h&#39;"
						onmousedown="this.className=&#39;s_btn s_btn_d&#39;"
						onmouseout="this.className=&#39;s_btn&#39;">
						</span>
						 <span class="s_tools"> <a href="_self" target="_self">帮助</a>
					</span>
					
					<div class="g-sl">
						<label for="all"><input type="radio" name="lm" value="0"
							checked="" id="all">全部</label> <label for="doc"><input
							type="radio" name="lm" value="1" id="doc">DOC</label> <label
							for="ppt"><input type="radio" name="lm" value="3"
							id="ppt">PPT</label> <label for="txt"><input type="radio"
							name="lm" value="5" id="txt">TXT</label> <label for="pdf"><input
							type="radio" name="lm" value="2" id="pdf">PDF</label> <label
							for="xls"><input type="radio" name="lm" value="4"
							id="xls">XLS</label>
						<div style="clear: both"></div>
					</div>
					<input type="hidden" name="od" value="0"> <input
						type="hidden" name="fr" value="top_zone_edu">
							<input name="data" id="data" value="" type="hidden">
				</form>
			</div>
			<div id="zzFlash"
				style="position: absolute; right: 137px; top: 22px; z-index: 98"></div>
			<div style="clear: both"></div>
		</div>
		


		
		<script type="text/javascript">(function(){var A=baidu.dom.g("add_to_desktop");if(A){baidu.on("add_to_desktop","click",function(B){log.send("search","add_to_destop")})}})();</script>

		<style type="text/css">
#popBody #copy-pop p {
	text-align: center !important;
}

.docBubble {
	z-index: 1001 !important;
}

#popBody .copyTip {
	padding-left: 30px;
}

#wrapper {
	position: relative;
}

.qingting {
	display: none !important;
}

.hot-img dd a {
	word-break: break-all;
}

.skin-nav-new .new-tip {
	position: absolute;
	left: 788px;
	top: 3px;
	width: 22px;
	height: 12px;
	background: transparent
		url('http://img.baidu.com/img/iknow/docshare/new_icon.png') no-repeat
		left top;
}
</style>
		<div id="nav" class="mod skin-nav-new">
			<div class="inner clearfix">
				<ul>
					<li id="nav-index" class="first"><a class="fst" href="/wenku/channel/${root_channel_id}/index.html"><span>文库首页</span></a></li>
							<@channel_list debugName="首页导航" channelId="${root_channel_id}"> 
							<#list tag_list as channel>
							<li id="nav-org" class="four"><a href="/wenku/channel/${channel.CHNL_ID}/index.html"><span>${channel.CHNL_NAME}</span></a>
							</li> 
							</#list>
							 </@channel_list>
							<li id="nav-uc" class="four logSend"><a href="#"
							    onclick="javascript:myDocuments();"
								target="_self" id="myWenku" class="logSend"
								data-logsend="{&quot;send&quot;:[&quot;general&quot;,&quot;usercenter&quot;,{&quot;refer&quot;:&quot;navigator&quot;}]}"><span>我的文库</span></a>
							</li>
				</ul>
				<!-- 
				<div class="new-tip"></div>
				 -->
			</div>
		</div>


		<div id="main" class="main">


			
			<style>
.has-sync {
	padding-top: 8px;
	width: 300px;
	right: -341px;
	_right: -351px;
}

.primary-sync {
	width: 200px;
	right: -241px;
	_right: -251px;
}

.has-sync li {
	font-weight: bold;
}

.sync-name {
	width: 100% !important;
}

.sync-name li {
	width: 50px !important;
	background: none !important;
	font-weight: normal !important;
}

.tab-cate .new-tip {
	position: absolute;
	left: 72px;
	top: 5px;
	width: 22px;
	height: 12px;
	background: transparent
		url('http://img.baidu.com/img/iknow/docshare/new_icon.png') no-repeat
		left top;
}

.tab-content dd.more {
	padding-top: 1px;
	_padding-top: 2px;
}

.icon-more {
	background:
		url(http://img.baidu.com/img/iknow/docshare/img/icon/icon-more.png)
		no-repeat right center;
	_background-image:
		url(http://img.baidu.com/img/iknow/docshare/img/icon/icon-more-hack.png);
	/*ie6 hack*/
	padding-right: 7px;
}

.icon-more-hack {
	background:
		url(http://img.baidu.com/img/iknow/docshare/img/icon/icon-more.png)
		no-repeat right center;
	background-image:
		url(http://img.baidu.com/img/iknow/docshare/img/icon/icon-more-hack.png)
		\9; /*ie8 hack*/ +
	background-image:
		url(http://img.baidu.com/img/iknow/docshare/img/icon/icon-more.png);
	/*ie7 hack*/
	_background-image:
		url(http://img.baidu.com/img/iknow/docshare/img/icon/icon-more-hack.png);
	/*ie6 hack*/
	padding-right: 7px;
}

.tab-cate {
	height: 42px;
}
</style>
			
			<!--精品文档-->
			
			<div class="clear"></div>
			<div class="banner mb10">
				<a href="#" target="_self"><img
					src="/sy/comm/wenku/baidu_style_files/049cdbe2294804f575328845e1bfa331.jpg"
					alt="第四届全国中小学优秀教学案例评选活动"></a>
			</div>
			
			<span> ${chanel.CHNL_NAME}</span>
			
			<!--幼儿小学教育推荐-->
			<div class="mod mb20 skin-category-list" id="edu-cate">
		    <@channel_list debugName="栏目列表" channelId="${chanel.CHNL_ID}" count="5"> 
		    	<#list tag_list as obj>
				<div class="inner">
					<div class="hd">
						<b><a href="http://wenku.baidu.com/list/17?l=4.1.7"
							target="_blank">${obj.CHNL_NAME}</a></b> <span class="r" id="edu-class">
							 <a
							href="/wenku/channel/${obj.CHNL_ID}/index.html" target="_blank"
							class="icon-more">更多</a></span>
					</div>
					<div class="cd c-align">
						
						<div id="edu-hot-cate">
						<!-- <div class="cate-r" id="edu-hot-cate"> -->
							<div class="hot-img">
							
									<@wenku_list debugName="栏目下文档:${obj.CHNL_NAME}" channelId="${obj.CHNL_ID}" count="5"> 
									<#list tag_list as doc>
								<dl>
									<dt>
										<a
											href="#"
											onclick="javascript:view('${doc.DOCUMENT_ID}','${doc.DOCUMENT_TITLE}')"; 
											target="_self"><img
											src="/file/${doc.DOCUMENT_FILE_SNAPSHOT}"
											title="${doc.DOCUMENT_TITLE}" alt="${doc.DOCUMENT_TITLE}"></a> <span
											class="doc icon" title="doc"></span>
									</dt>
									<dd>
										<a
											href="#"
											onclick="javascript:view('${doc.DOCUMENT_ID}','${doc.DOCUMENT_TITLE}')"; 
											title="${doc.DOCUMENT_TITLE}" target="_self">
										  <#if doc.DOCUMENT_TITLE?length gt 12>
                               				 ${doc.DOCUMENT_TITLE[0..12]}...
                             			   <#else>${doc.DOCUMENT_TITLE}                                                                                           
                             			   </#if>
											
											
											</a>
									</dd>
									<dd class="f-grey">${doc.DOCUMENT_READ_COUNTER}人阅读</dd>
								</dl>
								</#list>
							 </@wenku_list>
								
							</div>
							
						</div>
					</div>
				</div>
				</#list>
				</@channel_list>
				
				
			</div>

		
		
		</div>
		<div id="aside" class="aside">
			<div id="upload-box" class="mod mb10 skin-upload">
				<div class="inner">
					<div class="cd c-align">
						<p class="share-number">
							「${chanel.CHNL_NAME}」已有<span class="doc-number">30</span>份文档
						</p>
						<p class="share-button">
							<a href="#" id="upload-icon"
							onclick="javascript:upload();"
								class="upload-btn" rel="log-home-sharebutton-from=index2011"></a>
						</p>
					</div>
					<!-- 最近上传 -->
				</div>
			</div>

			<!--阅读排行top10-->
			<div id="rank-read" class="mod mb10 skin-default">
				<div class="inner">
					<div class="hd">
						<b class="f-black">文档排行榜</b>
					</div>
					<div class="cd c-align">
						<ul class="rank-tab">
							<li class="tab-1 tab-on">本日</li>
							<li class="tab-2">本周</li>
							<li class="tab-3">本月</li>
						</ul>
						<div class="clear"></div>
						<div class="rank-content">
							<div class="rank" style="display: block;">
								<ul>

									<li><a
										href="http://wenku.baidu.com/view/beffa1e081c758f5f61f6731.html?l=5.1.1.1&"
										title="追溯现代元素中的古典诗歌意象" target="_blank">追溯现代元素中的古典诗歌...</a></li>
									<li><a
										href="http://wenku.baidu.com/view/e7eba5cf8bd63186bcebbc3c.html?l=5.1.1.1&"
										title="机械毕业论文大纲模板" target="_blank">机械毕业论文大纲模板</a></li>
									<li><a
										href="http://wenku.baidu.com/view/bbcadc1210a6f524ccbf852e.html?l=5.1.1.1&"
										title="明眸善睐百媚生" target="_blank">明眸善睐百媚生</a></li>
									<li><a
										href="http://wenku.baidu.com/view/e1683714650e52ea55189836.html?l=5.1.1.1&"
										title="高考英语常用固定搭配总结f" target="_blank">高考英语常用固定搭配总结...</a></li>
									<li><a
										href="http://wenku.baidu.com/view/455edad980eb6294dd886c53.html?l=5.1.1.1&"
										title="如何为孩子选择合适的高中" target="_blank">如何为孩子选择合适的高中</a></li>
									<li><a
										href="http://wenku.baidu.com/view/3bda923df111f18583d05a68.html?l=5.1.1.1&"
										title="如何及时掌握初中孩子的思想动态" target="_blank">如何及时掌握初中孩子的思...</a></li>
									<li><a
										href="http://wenku.baidu.com/view/36e473ba69dc5022aaea002d.html?l=5.1.1.1&"
										title="学校小学科学实验教学计划" target="_blank">学校小学科学实验教学计划</a></li>
									<li><a
										href="http://wenku.baidu.com/view/a79c397b7fd5360cba1adb4d.html?l=5.1.1.1&"
										title="六年级数学观察与探究说课稿" target="_blank">六年级数学观察与探究说课...</a></li>
									<li><a
										href="http://wenku.baidu.com/view/0183cc3bb90d6c85ec3ac698.html?l=5.1.1.1&"
										title="教育孩子最忌讳的三件事" target="_blank">教育孩子最忌讳的三件事</a></li>
									<li><a
										href="http://wenku.baidu.com/view/ef7229cdaa00b52acfc7cacd.html?l=5.1.1.1&"
										title="给孩子一片属于自己的天空" target="_blank">给孩子一片属于自己的天空</a></li>

								</ul>
							</div>
							<div class="rank" style="display: none;">
								<ul>

									<li><a
										href="http://wenku.baidu.com/view/2aaebf806529647d272852aa.html?l=5.1.1.2&"
										title="学生保持精力充沛的方法" target="_blank">学生保持精力充沛的方法</a></li>
									<li><a
										href="http://wenku.baidu.com/view/64e1128b02d276a200292ed9.html?l=5.1.1.2&"
										title="居住小区儿童游憩空间的研究与改进" target="_blank">居住小区儿童游憩空间的研...</a></li>
									<li><a
										href="http://wenku.baidu.com/view/bb1751e2b8f67c1cfbd6b803.html?l=5.1.1.2&"
										title="申论经典范文大全25套" target="_blank">申论经典范文大全25套</a></li>
									<li><a
										href="http://wenku.baidu.com/view/c692ea6325c52cc58bd6befc.html?l=5.1.1.2&"
										title="高考地理大题答题模板(第5版)" target="_blank">高考地理大题答题模板(第5...</a></li>
									<li><a
										href="http://wenku.baidu.com/view/283dc3dc3186bceb18e8bb07.html?l=5.1.1.2&"
										title="反比例函数的图像和性质教学设计" target="_blank">反比例函数的图像和性质教...</a></li>
									<li><a
										href="http://wenku.baidu.com/view/547136df360cba1aa811da0e.html?l=5.1.1.2&"
										title="浅谈农村幼儿教育的现状与发展" target="_blank">浅谈农村幼儿教育的现状与...</a></li>
									<li><a
										href="http://wenku.baidu.com/view/b638218cbceb19e8b8f6bafd.html?l=5.1.1.2&"
										title="四级闭眼飘单词文本整理完美版" target="_blank">四级闭眼飘单词文本整理完...</a></li>
									<li><a
										href="http://wenku.baidu.com/view/83170a3df111f18583d05abd.html?l=5.1.1.2&"
										title="2013自考大学模拟题" target="_blank">2013自考大学模拟题</a></li>
									<li><a
										href="http://wenku.baidu.com/view/e47f75c405087632311212d7.html?l=5.1.1.2&"
										title="政治生活单项选择题专项练习" target="_blank">政治生活单项选择题专项练...</a></li>
									<li><a
										href="http://wenku.baidu.com/view/e5d680cc9ec3d5bbfd0a74d8.html?l=5.1.1.2&"
										title="初中英语语法——三大从句汇总" target="_blank">初中英语语法——三大从句...</a></li>

								</ul>
							</div>
							<div class="rank" style="display: none;">
								<ul>

									<li><a
										href="http://wenku.baidu.com/view/625d188b02d276a200292e7d.html?l=5.1.1.3&"
										title="2013驾考新规扣分标准及科目二考试攻略" target="_blank">2013驾考新规扣分标准及科...</a></li>
									<li><a
										href="http://wenku.baidu.com/view/e66c4a48a8956bec0975e3a5.html?l=5.1.1.3&"
										title="中文名言名句英语翻译80句" target="_blank">中文名言名句英语翻译80句</a></li>
									<li><a
										href="http://wenku.baidu.com/view/ad7593d2d15abe23482f4dfa.html?l=5.1.1.3&"
										title="小学生家长须知家庭教育的十种方式" target="_blank">小学生家长须知家庭教育的...</a></li>
									<li><a
										href="http://wenku.baidu.com/view/ab523f292f60ddccda38a008.html?l=5.1.1.3&"
										title="马哲考研复习资料汇总" target="_blank">马哲考研复习资料汇总</a></li>
									<li><a
										href="http://wenku.baidu.com/view/a8e04dabb0717fd5360cdc2c.html?l=5.1.1.3&"
										title="英语被动语态的复习" target="_blank">英语被动语态的复习</a></li>
									<li><a
										href="http://wenku.baidu.com/view/351d9a82d0d233d4b14e6996.html?l=5.1.1.3&"
										title="家长不要违背孩子的“时间表”" target="_blank">家长不要违背孩子的“时间...</a></li>
									<li><a
										href="http://wenku.baidu.com/view/70538104f12d2af90242e6b2.html?l=5.1.1.3&"
										title="双学考试：心理学复习题要" target="_blank">双学考试：心理学复习题要</a></li>
									<li><a
										href="http://wenku.baidu.com/view/e022aa074a7302768e9939da.html?l=5.1.1.3&"
										title="2013新交规驾照理论考试易错题汇总" target="_blank">2013新交规驾照理论考试易...</a></li>
									<li><a
										href="http://wenku.baidu.com/view/b5e0b3277375a417866f8fe5.html?l=5.1.1.3&"
										title="小宝宝不宜多吃的食物" target="_blank">小宝宝不宜多吃的食物</a></li>
									<li><a
										href="http://wenku.baidu.com/view/18ca21bd65ce0508763213b8.html?l=5.1.1.3&"
										title="英语应用文写作格式总结ass" target="_blank">英语应用文写作格式总结as...</a></li>

								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>



			<!--文辑收藏排行榜-->
			<!-- 
			<div id="rank-album" class="mod mb10 skin-default">
				<div class="inner">
					<div class="hd">
						<b class="f-black">文辑排行榜</b>
					</div>
					<div class="cd c-align">
						<ul class="rank-tab">
							<li class="tab-1 tab-on">本日</li>
							<li class="tab-2">本周</li>
							<li class="tab-3">本月</li>
						</ul>
						<div class="clear"></div>
						<div class="rank-content">
							<div class="rank" style="display: block;">
								<ul>

									<li><a
										href="http://wenku.baidu.com/album/view/41f1dd4df7ec4afe04a1df32?l=5.2.1.1&"
										title="育儿经验" target="_blank">育儿经验</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/47f141d2240c844769eaee93?l=5.2.1.1&"
										title="高考物理复习讲座" target="_blank">高考物理复习讲座</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/8fd84f61ddccda38376baff8?l=5.2.1.1&"
										title="西班牙语学习与运用" target="_blank">西班牙语学习与运用</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/390d4335eefdc8d376ee322d?l=5.2.1.1&"
										title="读后感大全  (方法)" target="_blank">读后感大全 (方法)</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/2f74516aaf1ffc4ffe47ac4b?l=5.2.1.1&"
										title="全国名校高考专题训练" target="_blank">全国名校高考专题训练</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/bfc29104cc1755270722083b?l=5.2.1.1&"
										title="中国古代文学史 明清小说戏曲" target="_blank">中国古代文学史 明清小说...</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/ea599901bed5b9f3f90f1c41?l=5.2.1.1&"
										title="同等学力申硕" target="_blank">同等学力申硕</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/4130284de518964bcf847cd7?l=5.2.1.1&"
										title="宝宝生活用品汇总" target="_blank">宝宝生活用品汇总</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/ea5f9901bed5b9f3f90f1c43?l=5.2.1.1&"
										title="医学细胞生物学与遗传学" target="_blank">医学细胞生物学与遗传学</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/4319e64c2b160b4e767fcf4d?l=5.2.1.1&"
										title="英语剧本" target="_blank">英语剧本</a></li>

								</ul>
							</div>
							<div class="rank" style="display: none;">
								<ul>

									<li><a
										href="http://wenku.baidu.com/album/view/fd0e71fd700abb68a982fb0b?l=5.2.1.2&"
										title="如何学好少儿英语" target="_blank">如何学好少儿英语</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/cda7b6f24693daef5ef73d0b?l=5.2.1.2&"
										title="如何写好初中作文" target="_blank">如何写好初中作文</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/c9f26123192e45361066f5d2?l=5.2.1.2&"
										title="春天的诗歌" target="_blank">春天的诗歌</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/0a4bbb3283c4bb4cf7ecd1e2?l=5.2.1.2&"
										title="数学精英解题系列" target="_blank">数学精英解题系列</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/fa693623aaea998fcc220eb3?l=5.2.1.2&"
										title="最经典的公务员考试资料" target="_blank">最经典的公务员考试资料</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/31469f0e76c66137ee0619b3?l=5.2.1.2&"
										title="中学作文素材" target="_blank">中学作文素材</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/75d4c9104431b90d6c85c7d5?l=5.2.1.2&"
										title="英语虚拟语气" target="_blank">英语虚拟语气</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/bbb6e5d149649b6648d74731?l=5.2.1.2&"
										title="幼师必备" target="_blank">幼师必备</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/b128e06eb84ae45c3b358c45?l=5.2.1.2&"
										title="小学优秀作文【二】" target="_blank">小学优秀作文【二】</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/8194b75bbe23482fb4da4c48?l=5.2.1.2&"
										title="政治经济学" target="_blank">政治经济学</a></li>

								</ul>
							</div>
							<div class="rank" style="display: none;">
								<ul>

									<li><a
										href="http://wenku.baidu.com/album/view/d6b6dbea19e8b8f67c1cb937?l=5.2.1.3&"
										title="交规考试指南" target="_blank">交规考试指南</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/8f1ade0c6c85ec3a87c2c528?l=5.2.1.3&"
										title="走进三毛" target="_blank">走进三毛</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/5ed764030740be1e650e9ad2?l=5.2.1.3&"
										title="大学英语四级资料" target="_blank">大学英语四级资料</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/de9b107e5acfa1c7aa00ccd2?l=5.2.1.3&"
										title="初中学习资料汇总" target="_blank">初中学习资料汇总</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/e57b6309763231126edb11b3?l=5.2.1.3&"
										title="小学作文精华" target="_blank">小学作文精华</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/fc730736ee06eff9aef807b3?l=5.2.1.3&"
										title="考研英语资料集合" target="_blank">考研英语资料集合</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/5302d506e87101f69e31954c?l=5.2.1.3&"
										title="美国小学教材" target="_blank">美国小学教材</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/38fbc51fb7360b4c2e3f640b?l=5.2.1.3&"
										title="伽利略对自由落体运动的研究教学设计" target="_blank">伽利略对自由落体运动的研...</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/e4beb6d333d4b14e85246832?l=5.2.1.3&"
										title="经典英文歌曲" target="_blank">经典英文歌曲</a></li>
									<li><a
										href="http://wenku.baidu.com/album/view/cae8b7f24693daef5ef73d46?l=5.2.1.3&"
										title="五年级数学上册第三单元试卷1" target="_blank">五年级数学上册第三单元试...</a></li>

								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			 -->
			
		<!-- 	
			<div id="user-build" class="mod mb10 skin-default">
				<div class="inner">
					<div class="hd">
						<b class="f-black">用户贡献榜</b>
					</div>
					<div class="cd c-align">
						<ul class="rank-tab">
							<li id="leftlistbom_tab_1" class="tab-1 tab-on"><a
								href="http://wenku.baidu.com/userlist/edu?type=1&l=3.2.1"
								target="_blank">本周积分排行</a></li>
							<li id="leftlistbom_tab_3" class="tab-3"><a
								href="http://wenku.baidu.com/userlist/edu?type=2&l=3.2.2"
								target="_blank">总积分排行</a></li>
						</ul>
						<div class="clear"></div>
						<table width="100%" cellspacing="0" cellpadding="0">
							<tbody>
								<tr>
									<td width="124" style="text-indent: 25px;">用户名</td>
									<td align="center">经验值</td>
								</tr>
							</tbody>
						</table>
						<div class="rank-content">
							<div style="">
								<table width="100%" cellspacing="0" cellpadding="0" class="rank">
									<tbody>
										<tr>
											<td width="124"><a
												href="http://www.baidu.com/p/feion199?from=wenku"
												onmousedown="log.send(&#39;view&#39;,&#39;user&#39;,{l:&#39;&#39;})"
												class="Author" target="_blank">feion199</a></td>
											<td align="center" class="f-grey" style="text-indent: 0">29350</td>
										</tr>
										<tr>
											<td width="124"><a
												href="http://www.baidu.com/p/whx0910?from=wenku"
												onmousedown="log.send(&#39;view&#39;,&#39;user&#39;,{l:&#39;&#39;})"
												class="Author" target="_blank">whx0910</a></td>
											<td align="center" class="f-grey" style="text-indent: 0">4378</td>
										</tr>
										<tr>
											<td width="124"><a
												href="http://www.baidu.com/p/suimengren?from=wenku"
												onmousedown="log.send(&#39;view&#39;,&#39;user&#39;,{l:&#39;&#39;})"
												class="Author" target="_blank">suimengren</a></td>
											<td align="center" class="f-grey" style="text-indent: 0">3740</td>
										</tr>
										<tr>
											<td width="124"><a
												href="http://www.baidu.com/p/gjh0927?from=wenku"
												onmousedown="log.send(&#39;view&#39;,&#39;user&#39;,{l:&#39;&#39;})"
												class="Author" target="_blank">gjh0927</a></td>
											<td align="center" class="f-grey" style="text-indent: 0">3027</td>
										</tr>
										<tr>
											<td width="124"><a
												href="http://www.baidu.com/p/%E5%AD%99%E9%80%B8%E8%B1%AA?from=wenku"
												onmousedown="log.send(&#39;view&#39;,&#39;user&#39;,{l:&#39;&#39;})"
												class="Author" target="_blank">孙逸豪</a></td>
											<td align="center" class="f-grey" style="text-indent: 0">2834</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div style="display: none;">
								<table width="100%" cellspacing="0" cellpadding="0" class="rank">
									<tbody>
										<tr>
											<td width="124"><a
												href="http://www.baidu.com/p/suimengren?from=wenku"
												onmousedown="log.send(&#39;view&#39;,&#39;user&#39;,{l:&#39;&#39;})"
												class="Author" target="_blank">suimengren</a></td>
											<td align="center" class="f-grey" style="text-indent: 0">920</td>
										</tr>
										<tr>
											<td width="124"><a
												href="http://www.baidu.com/p/lzzcghlsy?from=wenku"
												onmousedown="log.send(&#39;view&#39;,&#39;user&#39;,{l:&#39;&#39;})"
												class="Author" target="_blank">lzzcghlsy</a></td>
											<td align="center" class="f-grey" style="text-indent: 0">406</td>
										</tr>
										<tr>
											<td width="124"><a
												href="http://www.baidu.com/p/goulou?from=wenku"
												onmousedown="log.send(&#39;view&#39;,&#39;user&#39;,{l:&#39;&#39;})"
												class="Author" target="_blank">goulou</a></td>
											<td align="center" class="f-grey" style="text-indent: 0">387</td>
										</tr>
										<tr>
											<td width="124"><a
												href="http://www.baidu.com/p/qnwz?from=wenku"
												onmousedown="log.send(&#39;view&#39;,&#39;user&#39;,{l:&#39;&#39;})"
												class="Author" target="_blank">qnwz</a></td>
											<td align="center" class="f-grey" style="text-indent: 0">359</td>
										</tr>
										<tr>
											<td width="124"><a
												href="http://www.baidu.com/p/feion199?from=wenku"
												onmousedown="log.send(&#39;view&#39;,&#39;user&#39;,{l:&#39;&#39;})"
												class="Author" target="_blank">feion199</a></td>
											<td align="center" class="f-grey" style="text-indent: 0">336</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			 -->

			<!--广告右栏-->

			
			<div id="tousu" class="mod mb10 skin-default">
				<div class="inner">
					如要投诉或提出意见建议，请到<br>
					<span id="tousu"><a target="_blank"
						href="http://tousu.baidu.com/wenku">软虹文库投诉中心</a>反馈。</span>
				</div>
			</div>
		</div>
		<div class="clear"></div>
		<div id="footer" class="footer">
			<p>
				<span class="cr">&#169;2013 Ruaho</span> <a
					href="#" class="Bidu" target="_blank">使用软虹前必读</a>&nbsp;|&nbsp;<a
					href="#"
					class="Xieyi" target="_blank">文库协议</a>
			</p>
		</div>
	</div>

	<div
		style="position: absolute; display: none; left: 300px; top: 72px; width: 408px;"
		class="tangram-suggestion-main"
		id="tangram-suggestion--TANGRAM__3-main" data-guid="TANGRAM__3">
		<div id="tangram-suggestion--TANGRAM__3" class="tangram-suggestion"
			style="position: relative; top: 0px; left: 0px"></div>
	</div>
	<div id="docBubble" class="docBubble" style="left: 940px;">
		<i class="triangle-t"></i><i title="关闭" class="close markSend">关闭</i>
		<div class="tl">
			<div class="inner"></div>
		</div>
		<div class="tr"></div>
		<div class="bl"></div>
	</div>
</body>
</html>