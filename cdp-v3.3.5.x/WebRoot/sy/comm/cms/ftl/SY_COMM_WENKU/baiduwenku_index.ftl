<!DOCTYPE html>
<!--STATUS OK-->
<html>
<head>
<#include "/SY_COMM_WENKU/config_constant.ftl">
<script type="text/javascript"> var FireFlyContextPath =''; </script>
<script type="text/javascript" src="/sy/base/frame/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="/sy/base/frame/constant.js"></script>
<script type="text/javascript" src="/sy/base/frame/tools.js"></script>
<script type="text/javascript" src="/sy/base/frame/platform.js"></script>
<script type="text/javascript" src="/sy/comm/cms/js/wenku.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<title>文库――让每个人平等地提升自我</title>
<meta property="wb:webmaster" content="3dc25059492736e0">
<script>
	var PDC = {
		_version : "0.1",
		_render_start : new Date().getTime(),
		_analyzer : {
			loaded : false,
			url : "http://static.tieba.baidu.com/tb/pms/wpo.pda.js?v=0.1?v=0.1",
			callbacks : []
		},
		_opt : {
			is_login : false,
			sample : 0,
			product_id : 0,
			page_id : 0,
			common_resources : [],
			special_resources : [],
			ds_resources : null,
			display : false
		},
		_timing : {},
		init : function(a) {
			for ( var b in a) {
				this._opt[b] = a[b]
			}
		},
		mark : function(a) {
			this._timing[a] = new Date().getTime()
		},
		view_start : function() {
			this.mark("vt")
		},
		tti : function() {
			this.mark("tti")
		},
		page_ready : function() {
			this.mark("fvt")
		},
		metadata : function() {
			var a = this._opt;
			var b = {
				env : {
					user : (a.is_login == true ? 1 : 0),
					product_id : a.product_id,
					page_id : a.page_id
				},
				common_resources : a.common_resources,
				special_resources : a.special_resources,
				render_start : this._render_start,
				timing : this._timing,
				ds_resources : a.ds_resources,
				display : a.display
			};
			return b
		}
	};
	(function() {
		if (document.attachEvent) {
			window.attachEvent("onload", function() {
				PDC.mark("let");
				PDC._load_analyzer()
			})
		} else {
			window.addEventListener("load", function() {
				PDC.mark("lt")
			}, false)
		}
	})();
	
	
    
</script>
<meta name="description"
	content="在线互动式文档分享平台，在这里，您可以和千万网友分享自己手中的文档，全文阅读其他用户的文档，同时，也可以利用分享文档获取的积分下载文档 ">
<script type="text/javascript"
	src="/sy/comm/wenku/baidu_style_files/pass_uni_loginWrapper.js"></script>
<link rel="stylesheet" type="text/css"
	href="/sy/comm/wenku/baidu_style_files/framework_7d9033ac.css">
<link rel="stylesheet" type="text/css"
	href="/sy/comm/wenku/baidu_style_files/module_index_777ae95d.css">
<link rel="stylesheet" type="text/css"
	href="/sy/comm/wenku/baidu_style_files/index_50da8c9a.css">
<script type="text/javascript"
	src="/sy/comm/wenku/baidu_style_files/base_75690991.js"></script>
	
<script type="text/javascript">
	F._fileMap({
		'/sy/comm/wenku/baidu_style_files/framework_mvp_06d78764.js' : [
				'/static/common/lib/tangram/base/base.js',
				'/static/common/ui/js_core/util/util.js',
				'/static/common/ui/js_core/widget/widget.js',
				'/static/common/ui/js_core/mvp/presenter/presenter.js',
				'/static/common/ui/js_core/mvp/template/template.js',
				'/static/common/ui/js_core/mvp/view/view.js',
				'/static/common/ui/js_core/mvp/route/route.js',
				'/static/common/ui/js_core/mvp/model/model.js',
				'/static/common/ui/js_core/mvp/event/event.js',
				'/static/common/ui/js_core/layerControl/layerControl.js',
				'/static/common/lib/fis/data/data.js',
				'/static/common/ui/js_core/recommendation/recommendation.js',
				'/static/common/ui/js_core/dialog/dialog.js',
				'/static/common/ui/js_core/log/log.js',
				'/static/common/ui/js_core/login/login.js',
				'/static/common/ui/js_core/tips/tips.js',
				'/static/common/ui/js_core/preload/preload.js',
				'/static/common/ui/js_core/Suggestion/Suggestion.js',
				'/static/common/ui/js_core/tabs/tabs.js',
				'/static/common/ui/js_core/mask/mask.js',
				'/static/common/ui/js_core/dropDown/dropDown.js',
				'/static/common/ui/js_core/_dialog/_dialog.js',
				'/static/common/ui/js_core/tree/tree.js',
				'/static/widget/common/360tip/360tip.js',
				'/static/widget/common/header/search_box/search_box.js',
				'/static/widget/common/user_bar/user_bar.js' ]
	});
</script>
<script type="text/javascript">
	F._fileMap({
		'/sy/comm/wenku/baidu_style_files/module_index_9829b63d.js' : [
				'/static/widget/core/hotRead/hotRead.js',
				'/static/widget/core/userInfo/userInfo.js',
				'/static/widget/core/featureClass/featureClass.js',
				'/static/core/ui/lazyLoadImage/lazyLoadImage.js' ]
	});
</script>
<script src="/sy/comm/wenku/baidu_style_files/wenku.js"></script>
<script src="/sy/comm/wenku/baidu_style_files/wpo.js"
	type="text/javascript"></script>
</head>
<body>
	<div style="display: none;" id="WkDialogWrap">
		<div id="mask" class="ui-mask js-mask">
			<iframe class="iframe" frameborder="0"></iframe>
		</div>
		<div id="WkDialog" class="mod ui-dialog" onselectstart="return false;">
			<iframe class="iframe" frameborder="0" height="100%" width="100%"></iframe>
			<div class="inner">
				<div id="WkDialogHd" class="hd mv20 pb10 pt20">
					<span class="act"><a id="WkDialogClose" href="###"
						hidefocus="true" class="ir close">Χ</a></span>
					<h3 id="WkDialogTit"></h3>
				</div>
				<div id="WkDialogCon" class="bd"></div>
				<div id="WkDialogBtn" class="ft pv20 pb20"></div>
			</div>
		</div>
	</div>
	<script>
		PDC.mark("ht");
		(function() {
			var a = PDC.ready = function() {
				var g = false, f = [], c;
				if (document.addEventListener) {
					c = function() {
						document.removeEventListener("DOMContentLoaded", c,
								false);
						d()
					}
				} else {
					if (document.attachEvent) {
						c = function() {
							if (document.readyState === "complete") {
								document.detachEvent("onreadystatechange", c);
								d()
							}
						}
					}
				}
				function d() {
					if (!d.isReady) {
						d.isReady = true;
						for ( var k = 0, h = f.length; k < h; k++) {
							f[k]()
						}
					}
				}
				function b() {
					try {
						document.documentElement.doScroll("left")
					} catch (h) {
						setTimeout(b, 1);
						return

						

					}
					d()
				}
				function e() {
					if (g) {
						return

						

					}
					g = true;
					if (document.addEventListener) {
						document.addEventListener("DOMContentLoaded", c, false);
						window.addEventListener("load", d, false)
					} else {
						if (document.attachEvent) {
							document.attachEvent("onreadystatechange", c);
							window.attachEvent("onload", d);
							var h = false;
							try {
								h = window.frameElement == null
							} catch (i) {
							}
							if (document.documentElement.doScroll && h) {
								b()
							}
						}
					}
				}
				e();
				return function(h) {
					d.isReady ? h() : f.push(h)
				}
			}();
			a.isReady = false
		})();
		PDC.ready(function() {
			PDC.mark("drt")
		});
		PDC.mark("vt");
	</script>

	<!-- page begin -->
	<script>
		//window.onload = function () {

		F
				.use(
						[ '/static/common/lib/tangram/base/base.js',
								'/static/common/lib/fis/data/data.js',
								'/static/common/ui/js_core/login/login.js' ],
						function(T, Data, Login) {

							var login = Login.login;

							T.url.escapeSymbol = function(source) {
								return String(source)
										.replace(
												/[#%&+=\/\\\ \　\f\r\n\t]/g,
												function(all) {
													return '%'
															+ (0x100 + all
																	.charCodeAt())
																	.toString(
																			16)
																	.substring(
																			1)
																	.toUpperCase();
												});
							};

							T.dom
									.ready(function() {

										var paypage = T.dom.g('pay-page');
										if (paypage) {
											T.dom.setAttr(paypage,
													"data-scale",
													"0.70709782964164");
										}

										if (T.cookie.get('BAIDU_DOC_NACT') === 'upload') {
											T.cookie.remove('BAIDU_DOC_NACT');
										}

										var _zoneUrl = window.location.href
												.toString();
										if (_zoneUrl.indexOf("org") > -1
												|| _zoneUrl
														.indexOf("verifyteacher") > -1) {
											document
													.getElementsByTagName("html")[0].style.background = "#FFF";
										}

										// 新手机客户端上线
										var TD = T.dom;
										var client = [
												'<a id="new-client-banner" href="#" target="_blank" style="position: absolute;right:0;top: 1px;z-index:0;">',
												'<img src="/sy/comm/wenku/baidu_style_files/client-banner-20130204.png" />',
												'</a>' ].join('');

										if (TD.g('topSearchBox')) {
											TD.q('top-search-box', 'hd').length
													&& TD
															.insertHTML(
																	TD
																			.q(
																					'top-search-box',
																					'hd')[0],
																	'beforeEnd',
																	client);
											TD.g('topSearchBox').style.zIndex = 10;
											TD.g('topSearchBox').style.width = (location.pathname == "/search" || location.pathname == "/lec/search") ? "810px"
													: '660px';
											TD.g('new-client-banner').style.right = (location.pathname == "/search" || location.pathname == "/lec/search") ? "0px"
													: "-20px";
											TD.q('content', 'hd')[0].style.zIndex = 10;
										}

									});

						});
		//};
	</script>

	<style type="text/css">
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

	<script type="text/javascript">
		F.use([ '/static/common/lib/fis/data/data.js' ], function(Data) {
			var WkInfo = Data.get("WkInfo") || {};
			WkInfo.PageInfo = {
				'isLogin' : true,
				'copyright' : "",
				'tpl' : "wk_info",
				'docTypeList' : [ [ 'none', '' ], [ 'doc', 'Word文档' ],
						[ 'xls', 'Excel表格' ], [ 'ppt', 'PPT文稿' ],
						[ 'doc', 'Word文档' ], [ 'xls', 'Excel表格' ],
						[ 'ppt', 'PPT文稿' ], [ 'pdf', 'pdf文档' ],
						[ 'txt', 'txt文档' ], [ 'wps', 'Word（金山）' ],
						[ 'et', 'Excel（金山）' ], [ 'dps', 'PPT（金山）' ],
						[ 'vsd', 'Visio绘图' ], [ 'rtf', 'rtf文档' ],
						[ 'pot', 'PPT模板' ], [ 'pps', 'PPT放映' ],
						[ 'epub', 'ePub文档' ] ]
			};
			WkInfo.UserInfo = {
				'wealth' : "40",
				'payed' : false,
				'userName' : "text",
				'userGradeNum' : "2",
				'isCreater' : false,
				'isLimit' : false,
				'isNoUsername' : false,
				'isAdmin' : false
			};
			WkInfo.errMsg = {
				0 : "提交成功",
				1 : "系统错误",
				2 : "用户未登陆",
				5 : "操作频率太快",
				11 : "提交参数非法"
			};
			Data.set("WkInfo", WkInfo);
		});
	</script>
	<!-- 
	<div class="user-bar">
		<ul class="inner">
			<li class="uname mn-lk-w"><a id="userNameCon"
				href="http://www.baidu.com/p/test?from=wenku"
				data-logsend="{&quot;send&quot;:[&quot;general&quot;,&quot;myhome&quot;]}"
				target="_blank" class="mn-lk user-my-name logSend">username</a>
				<div class="mn-tip user-my-name-tip" style="width: 75px; right: 0;">
					<ul class="mn">
						<li><a href="http://www.baidu.com/p/liwei_8?from=wenku"
							class="logSend"
							data-logsend="{&quot;send&quot;:[&quot;general&quot;,&quot;myhome&quot;]}"
							target="_blank">我的主页</a></li>
						<li><a href="http://passport.baidu.com/center"
							class="logSend"
							data-logsend="{&quot;send&quot;:[&quot;general&quot;,&quot;userinfo&quot;]}"
							target="_blank">帐号设置</a></li>
						<li><a
							href="http://passport.baidu.com/?logout&amp;aid=7&amp;u=file%3A///Users/liwei/Desktop/baidu_wenku.html"
							id="logout" class="bt logSend"
							data-logsend="{&quot;send&quot;:[&quot;general&quot;,&quot;logout&quot;]}">退出</a></li>
					</ul>
				</div></li>
			<li style="padding-left: 6px;">二级(370)</li>
			<li class="line">|</li>
			<li id="mywenku" class="mn-lk-w user-my-wenku"><a
				href="file:///user/index" target="_blank" class="mn-lk logSend"
				data-logsend="{&quot;send&quot;:[&quot;general&quot;, &quot;usercenter&quot;, {&quot;refer&quot;:&quot;userbar&quot;}]}">个人中心</a>
				<div class="mn-tip user-my-wenku-tip"
					style="width: 70px; left: 0px;">
					<ul class="mn">
						<li><a href="#" target="_blank" id="status_my_ask"
						    onclick="javascript:myDocuments();"
							class="logSend"
							data-logsend="{&quot;send&quot;:[&quot;general&quot;,&quot;usercenter&quot;,{&quot;refer&quot;:&quot;userbar&quot;}]}">我的文库</a></li>
						<li><a href="file:///user/index" target="_blank"
							id="status_my_answer" style="display: none">我的贡献</a></li>
						<li><a href="file:///course/user/ing" target="_blank">我的课程</a></li>
						<li><a href="file:///user/task?fr=status" target="_blank">我的任务</a></li>
					</ul>
				</div></li>
			<li class="line">|</li>
			<li class="user-my-class" id="user-my-class"><span
				class="my-notice" title="消息"></span></li>
			<li class="line">|</li>
			<li><a href="http://msg.baidu.com/" class="logSend"
				data-logsend="{&quot;send&quot;:[&quot;general&quot;,&quot;msg&quot;]}"
				target="_blank">私信</a><span class="msgs">(<span id="mnum">0</span>)
			</span></li>
			<li class="line">|</li>
			<li><a href="http://www.baidu.com/" class="logSend"
				data-logsend="{&quot;send&quot;:[&quot;general&quot;,&quot;bdindex&quot;,{&quot;login&quot;:1}]}">软虹首页</a></li>
		</ul>
	</div>
	 -->
	<script>
		F.use('/static/widget/common/user_bar/user_bar.js');
	</script>
	<div id="doc" class="page">
		<div id="hd">



			<div class="box top-search-box ">
				<div class="media">
				<a href="#">
				<img width="137" height="46" alt="软虹文库_文档分享平台" src="/sy/comm/wenku/baidu_style_files/logo-wk-137-46_3164f22b.png">
				</a>
				</div>
				<div style="z-index: 10;" class="content">
					<div class="s_nav"></div>
					<form style="z-index: 10; width: 660px;" action="/SY_PLUG_SEARCH.query.do" id="searchForm"
						name="ftop" id="topSearchBox" method="get">
						<span class="s_ipt_wr"> <input id="kw" name="word"
							class="s_ipt" maxlength="256" tabindex="1" autocomplete="off">
						</span><span class="s_btn_wr"> 
						<input id="sb" value="搜索文档"
							class="s_btn" onmouseover="this.className='s_btn s_btn_h'"
							onclick="javascript:search();"
							onmousedown="this.className='s_btn s_btn_d'"
							onmouseout="this.className='s_btn'" type="submit">
							</span><span
							class="s_tools"><a
							href="#"
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
						<input name="od" value="0" type="hidden"> 
						<input name="fr" value="top_home" type="hidden">
						<input name="data" id="data" value="" type="hidden">
					</form>
				</div>
				<a id="new-client-banner" href="#"
					target="_self"
					style="position: absolute; right: -20px; top: 1px; z-index: 0;"><img
					src="/sy/comm/wenku/baidu_style_files/client-banner-20130204.png"></a>
			</div>
			
			
			
			
			<script>
				escapeSymbol = function(source) {
					return String(source).replace(
							/[#%&+=\/\\\ \　\f\r\n\t]/g,
							function(all) {
								return '%'
										+ (0x100 + all.charCodeAt()).toString(
												16).substring(1).toUpperCase();
							});
				};
				setHeadUrl = function(a) {
					if (!document.getElementById('kw').value) {
						var diff = new RegExp("[?]");
						if (diff.test(a.href)) {
							var temple = a.href;
							a.href = a.getAttribute('data-href');
							a.setAttribute('data-href', temple);
						}
					} else {
						var diff = new RegExp("[?]");
						if (!diff.test(a.href)) {
							var temple = a.href;
							a.href = a.getAttribute('data-href');
							a.setAttribute('data-href', temple);
						}
						a.href = a.href.replace(
								'?newmap=1&ie=utf-8&s=s%26wd%3D',
								'?newmap=1&ie=utf-8&s=s&wd=');
						a.href = a.href.replace(
								new RegExp("(" + a.getAttribute('wdfield')
										+ "=)[^&]*"),
								'$1'
										+ encodeURIComponent(document
												.getElementById('kw').value))
								.replace('?newmap=1&ie=utf-8&s=s&wd=',
										'?newmap=1&ie=utf-8&s=s%26wd%3D');
						a.href = a.href.replace(new RegExp("("
								+ a.getAttribute('wdfield') + "=)[^&]*"),
								'$1'
										+ escapeSymbol(document
												.getElementById('kw').value));
					}
				};
				F.use('/static/widget/common/header/search_box/search_box.js');
			</script>
			<div class="nav-wrap mb10">
				<div class="ui-nav">
					<div class="inner clearfix">
						<ul>
							<li id="nav-index" class="first"><a class="fst" href="/wenku/channel/${root_channel_id}/index.html"><span>文库首页</span></a></li>
							<@channel_list debugName="首页导航" channelId="${root_channel_id}"> 
							<#list tag_list as channel>
							<li id="nav-org" class="four"><a href=/wenku/channel/${channel.CHNL_ID}/index.html><span>${channel.CHNL_NAME}</span></a>
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
			</div>
			<script>
				F.use([ "/static/common/lib/tangram/base/base.js",
						"/static/common/ui/js_core/login/login.js" ], function(
						T, login) {
					T.dom.ready(function() {
						var TE = T.event, G = T.g;
						var pathName = document.location.pathname, navTest = {
							"nav-index" : /^\/$/i,
							"nav-edu" : /^\/edu\/index$/i,
							"nav-ppt" : /^\/ppt\/index$/i,
							"nav-pro" : /^\/pro\/index$/i,
							"nav-form" : /^\/form\/index$/i,
							"nav-org" : /^\/org\/index$/i,
							"nav-course" : /^\/course\/[^user]/i,
							"nav-uc" : /^\/(room|course\/user|user\/task)/i,
							"nav-topic" : /^\/topic$/i
						}, _login = login.login;
						for ( var item in navTest) {
							var tmp = navTest[item];
							if (tmp.test && tmp.test(pathName)) {
								var el = G(item);
								if (el) {
									T.addClass(el, 'current');
								}
							}
						}
						TE.on(G('myWenku'), 'click', function(e) {
							TE.stop(e);
							_login.verlogin(function() {
								location.href = "/room?fr=nav";
							}, null, null, {
								fromMod : 'bar'
							});
						});
					});
				});
			</script>
		</div>
		<div id="bd">
			<div class="bd-wrap">
				<div class="body">
					<div id="banner0" class="bannerTop">
						<div class="clearfix">
							<div class="updoc">
								<@wenku_total debugName="文档统计" siteId="${site_id}"> <span>当前已有<b>${total}</b>份文档
								</span>
								 </@wenku_total>
								  <a href="#" onclick="javascript:upload('${upload_tmpl_id}','${site_id}')" target="_self" id="upload-icon"
									data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;upload&quot;,&quot;login&quot;:&quot;1&quot;}]}"
									class="logSend"></a>
							</div>
						</div>
						<ul>
							<li class="s"><a href="#hotRead" class="toHot hotArea"></a>
								<p>从千万份文档中找到所需，每天阅读，让你的心灵更广阔。</p> <a href="#hotRead"
								class="hotS hotArea"></a></li>
							<li class="t"><a href="file:///room" class="roomShare"></a>
								<p>收藏、下载、管理、同步等操作便捷随心，你的随身知识库。</p> <a href="file:///room"
								class="hotT roomShare"></a></li>
							<li class="f"><a href="file:///course/index"></a>
								<p>从文档到课程，一点一滴学习，铸就更好更强大的自己。</p> <a href="file:///course/index"
								class="hotC"></a></li>
							<li class="l"><a href="#"  onclick="javascript:upload('${upload_tmpl_id}','${site_id}')"
								class="roomShare"></a>
								<p>将文档与所有员工共同分享，你将知识的力量传递得更远。</p> <a href="#" onclick="javascript:'${upload_tmpl_id}','${site_id}')"
								class="hotL roomShare"></a></li>
						</ul>
					</div>
					<div id="contentWrap1" class="mt10 mainbody">
						<div class="aside">
							<div class="mod userInfo">
								<div class="clearfix userTitle">
									您可以<a 
										onclick="javascript:upload('${upload_tmpl_id}','${site_id}');"
										href="#" target="_self">上传文档</a>，
										<a 
										onclick= "javascript:categoryManager();";
										href="#" target="_self">分类管理文档</a>，打造你的随身知识库。
								</div>
							
					<!--	个人文库信息		
											<ul class="userData clearfix">
									<li class="wealth"><a href="#"
										target="_blank"><b>40</b><br> <span>财富值</span></a></li>
									<li class="public"><a href="#"
										target="_blank"><b>0</b><br> <span>公共文档</span></a></li>
									<li class="doc"><a href="#"
										target="_blank"><b>1</b><br> <span>文辑</span></a></li>
								</ul>
								<div id="browse">
									<h4>
										<a href="#" id="clearBrowse">清除</a>最近浏览
									</h4>
									<ul id="browse-wrap" class="record">
										<p class="c-gray9">记录为空，去看看你感兴趣的文档吧。</p>
									</ul>
								</div>
								<div id="mywk">
									<h4>
										<a href="file:///room" class="more">查看更多</a><a
											href="file:///room" class="c-gray3">我的文库</a>
									</h4>
									<ul class="record">
										<li><span>1页</span><a
											href="file:///view/4bd19624af45b307e87197ba"
											title="如何办理《流动人口婚育证明》" target="_blank"
											data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;mysave&quot;}]}"
											class="logSend">如何办理《流动人口婚育...</a></li>
									</ul>
								</div>
					-->
								
								<ul class="userData clearfix">
									
								</ul>
								<div id="browse">
									<h4>
										<a href="#" id="clearBrowse"></a>
										最近浏览
									</h4>
									<ul id="browse-wrap" class="record">
									</ul>
								</div>
								<div id="mywk">
									<h4>
										<a 
										onclick="javascript:myDocuments();"
										href="#" class="more">查看更多</a>
										<a
											onclick="javascript:myDocuments();"
											href="#" class="c-gray3">我的文库</a>
									</h4>
									<ul id="mydoc" class="record">
									</ul>
								</div>
								<!-- my wenku info -->
								<script>
								/* 我的文库信息 */
								var result = parent.FireFly.doAct("SY_COMM_WENKU_DOCUMENT","getMyInfo",{"DOCUMENT_STATUS":2},false,false);
								var userIntegral = result["USER_INTEGRAL"];
								var pubDocs = result["PUB_DOC_COUNT"];
								var doclistCount = result["DOCLIST_COUNT"];
								var readHisArray = result["READ_HIS"];
								var myDocArray = result["MY_DOC_LIST"];
								
							    //积分
							    var integral = jQuery("<li class='wealth'></li>").appendTo($(".userData"));
							    var integralBtn = jQuery("<a href='#' target='_self'></a>").appendTo(integral);
							    integralBtn.append("<b>" + userIntegral + "</b><br> <span>积分值</span>");
							    integralBtn.bind("click", function() {
							    	myWenkuIntegral();
						        });
							    //公共文档数量
								var pubDocLi = jQuery("<li class='public'></li>").appendTo($(".userData"));
								var pubDocBtn = jQuery("<a href='#' target='_self'></a>").appendTo(pubDocLi);
								pubDocBtn.append("<b>" + pubDocs + "</b><br> <span>公共文档</span>");
								pubDocBtn.bind("click", function() {
								    myDocuments();
							        });
							    //文辑数量
							//	$(".userData").append("<li class='doc'><a href='#' target='_blank'><b>" + doclistCount + "</b><br> <span>文辑</span></a></li>");
								var myDoclistLi = jQuery("<li class='doc'></li>").appendTo($(".userData"));
								var myDoclistBtn = jQuery("<a href='#' target='_self'></a>").appendTo(myDoclistLi);
								myDoclistBtn.append("<b>" + doclistCount + "</b><br> <span>文辑</span>");
								myDoclistBtn.bind("click", function() {
								    myDoclist();
							        });
								
							    //浏览历史
								jQuery.each(readHisArray,function(i,n) {
									var li = jQuery("<li></li>").appendTo($("#browse-wrap"));
									var page = jQuery("<span></span>").appendTo(li);
//									page.text("1页");
									var title = n.DATA_DIS_NAME;
									if (title.length > 12) {
										title = title.substring(0, 12) + "...";
									}
									var btn = jQuery("<a href='#' title='" + n.DATA_DIS_NAME + "' target='_self' class='logSend'></a>").appendTo(li);
									btn.text(title);
									btn.bind("click", function() {
										view(n.DATA_ID, n.DATA_DIS_NAME);
								        });
								});
							    
							    //用户文档
								jQuery.each(myDocArray,function(i,n) {
									var li = jQuery("<li></li>").appendTo($("#mydoc"));
									var page = jQuery("<span></span>").appendTo(li);
									if (n.DOCUMENT_FILE_PAGES > 0) {
										page.text( n.DOCUMENT_FILE_PAGES + "页");	
									} 
									var title = n.DOCUMENT_TITLE;
									if (title.length > 12) {
										title = title.substring(0, 12) + "...";
									}
									var btn = jQuery("<a href='#' title='" + n.DOCUMENT_TITLE + "' target='_self' class='logSend'></a>").appendTo(li);
									btn.text(title);
									btn.bind("click", function() {
										view(n.DOCUMENT_ID, n.DOCUMENT_TITLE);
								        });
								});
							    
								/* 我的文库信息 */
								</script>
								
								<script type="text/javascript">
									F
											.use(
													[
															'/static/common/lib/tangram/base/base.js',
															'/static/widget/core/userInfo/userInfo.js' ],
													function(T, S) {
														T.dom
																.ready(function(
																		argument) {
																	S
																			.clearData();
																	S
																			.loadData(T
																					.g('browse-wrap'));
																});
													});
								</script>
							</div>
	<!-- 
							<div class="mod task" id="today-task-2">
								<h3>今日任务</h3>
								<div class="innerbox clearfix">
									<div class="task-img">
										<a href="http://wenku.baidu.com/user/task?tab=1&amp;fr=shouye"
											target="_blank"><img
											src="/sy/comm/wenku/baidu_style_files/gray_img.gif"
											data-lazyload-src="http://hiphotos.baidu.com/baidu/pic/item/9c16fdfaaf51f3deb1ef009694eef01f3b2979e6.png"
											alt="今天领财富值没"
											data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;taskinfo&quot;}]}"
											class="logSend lazyLoadImage" height="53" width="69">
											<div class="img-border"></div></a>
									</div>
									<dl>
										<dt>
											<a
												href="http://wenku.baidu.com/user/task?tab=1&amp;fr=shouye"
												class="task-title logSend" target="_blank"
												data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;taskinfo&quot;}]}">今天领财富值没</a>
										</dt>
										<dd class="c-gray9">参与任务，每天免费领取10点财富值</dd>
									</dl>
								</div>
							</div>
		 -->					
							
							<div class="mod area">
								<div class="hd clearfix">
									<h3>公告区</h3>
									<!-- 
									<a href="http://hi.baidu.com/wenkuduxiaoyue" target="_blank">更多</a>
									 -->
								</div>
								<div class="inner clearfix">
									<ul class="publist">
									
										<@wenku_notice_list debugName="文库公告" count="6"> 
										<#list tag_list as notice>
										<#if notice_index==0 >
										<li><a
											href="#"
											onclick="javascript:openNotice('${notice_tmpl_id}','${notice.NOTICE_ID}');"
											class=" new logSend" 
											data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;pub&quot;}]}">${notice.NOTICE_TITLE}</a><span></span></li>
										<#elseif notice_index==1>
										<li><a
											href="#"
											onclick="javascript:openNotice('${notice_tmpl_id}','${notice.NOTICE_ID}');"
											class=" new logSend" 
											data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;pub&quot;}]}">${notice.NOTICE_TITLE}</a></li>
										<#else>
											<li><a
											href="#"
											onclick="javascript:openNotice('${notice_tmpl_id}','${notice.NOTICE_ID}');"
											class=" logSend"
											data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;pub&quot;}]}">${notice.NOTICE_TITLE}</a></li>
										</#if>
										
										</#list>
									  </@wenku_notice_list>
									</ul>
								</div>
							</div>
							<div class="mod rank">
								<h3>文档排行榜</h3>
								<dl>
									<@wenku_readTop debugName="文档排行" siteId="${site_id}" count="5"> 
									<#list tag_list as doc>
									<#if doc_index < 3>
									<dt class="rank-color">${doc_index + 1}</dt>
									<dd>
										<#if doc.DOCUMENT_FILE_PAGES gt 0>
										<span>${doc.DOCUMENT_FILE_PAGES}页</span>
										</#if>
										<a
											href="#"
											onclick="javascript:view('${doc.DOCUMENT_ID}','${doc.DOCUMENT_TITLE}')"; 
											title="${doc.DOCUMENT_TITLE}"
											data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;docTop&quot;}]}"
											class="logSend" target="_self">
											<#if doc.DOCUMENT_TITLE?length gt 10>
																${doc.DOCUMENT_TITLE[0..10]}...
																<#else>${doc.DOCUMENT_TITLE}	
											</#if>
											</a>
									</dd>
									<#else>
									<dt>${doc_index + 1}</dt>
									<dd>
									   <#if doc.DOCUMENT_FILE_PAGES gt 0>
										<span>${doc.DOCUMENT_FILE_PAGES}页</span>
										</#if>
										<a
											href="http://wenku.baidu.com/view/fe228b7ff46527d3240ce0dc.html"
											title="${doc.DOCUMENT_TITLE}"
											data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;docTop&quot;}]}"
											class="logSend" target="_self">
											<#if doc.DOCUMENT_TITLE?length gt 10>
																${doc.DOCUMENT_TITLE[0..10]}...
																<#else>${doc.DOCUMENT_TITLE}	
											</#if>
											</a>
									</dd>
									</#if>
									</#list>
									</@wenku_readTop>
								
								</dl>
							</div>
							<div class="mod rank">
								<h3>文辑排行榜</h3>
								<dl>
								
								<@doclist_readTop debugName="文辑排行" siteId="${site_id}" count="5"> 
									<#list tag_list as doclist>
									<#if doclist_index < 3>
									<dt class="rank-color">${doclist_index + 1}</dt>
									<dd>
										<span>${doclist.LIST_DOCUMENT_COUNTER}篇</span><a
											href="#"
											onclick="javascript:myDoclist();"
											title="${doclist.LIST_TITLE}"
											data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;albumTop&quot;}]}"
											class="logSend" target="_self">${doclist.LIST_TITLE}</a>
									</dd>
									<#else>
										<dt>${doclist_index + 1}</dt>
									<dd>
										<span>${doclist.LIST_DOCUMENT_COUNTER}篇</span><a
											href="#"
											onclick="javascript:myDoclist();"
											title="${doclist.LIST_TITLE}"
											data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;albumTop&quot;}]}"
											class="logSend" target="_self">${doclist.LIST_TITLE}</a>
									</dd>
									
									</#if>
									</#list>
									</@doclist_readTop>
									
								</dl>
							</div>
							<div class="mod rank tabs ui-tabs-aside user rank3">
								<h3>用户排行榜</h3>
								<div class="hd topper">
									<ul class="tabControl">
										<li class="current"><a
											href="#">本周积分排行</a></li>
										<li class="disabled"><a
											href="#">总积分排行</a></li>
									</ul>
								</div>
								<div class="bd">
									<ul class="tabContent clearfix">
										<li class="current"><dl>
											<@wenku_integralTop debugName="本周积分排行" type="week" count="5"> 
											<#list tag_list as integral>
											<#if integral_index < 3>
												<dt class="rank-color">${integral_index + 1}</dt>
												<dd>
													<span>${integral.SCORE}</span><a
														href="#"
														target="_self"
														data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;daren&quot;}]}"
														class="logSend">${integral.USER_NAME}</a>
												</dd>
											<#else>
												<dt>${integral_index + 1}</dt>
												<dd>
													<span>${integral.SCORE}</span><a
														href="#"
														target="_self"
														data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;daren&quot;}]}"
														class="logSend">${integral.USER_NAME}</a>
												</dd>
											</#if>
											</#list>
											</@wenku_integralTop>
										
											
											</dl></li>
										<li class="disabled"><dl>
										
											<@wenku_integralTop debugName="总积分排行" type="total" count="5"> 
											<#list tag_list as integral>
											<#if integral_index < 3>
											
											<dt class="rank-color">${integral_index + 1}</dt>
												<dd>
													<span>${integral.INTEGRAL_VALUE}</span><a
														href="http://www.baidu.com/p/%E4%B8%AD%E9%A1%BE%E6%B3%95%E5%BE%8B%E7%BD%91?from=wenku"
														target="_self"
														data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;daren&quot;}]}"
														class="logSend">${integral.USER_NAME}</a>
												</dd>
											
											<#else>
											
												<dt>${integral_index + 1}</dt>
												<dd>
													<span>${integral.INTEGRAL_VALUE}</span><a
														href="http://www.baidu.com/p/ziliao51?from=wenku"
														target="_self"
														data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;daren&quot;}]}"
														class="logSend">${integral.USER_NAME}</a>
												</dd>
											
											</#if>
											</#list>
											</@wenku_integralTop>
												
												
											</dl></li>
									</ul>
								</div>
								<script type="text/javascript">
									F
											.use(
													[
															'/static/common/lib/tangram/base/base.js',
															'/static/common/ui/js_core/tabs/tabs.js' ],
													function(T, tabs) {
														tabs = tabs.tabsCreate;
														tabs({
															'el' : T.q('rank3')[0],
															'delay' : 300,
															'selectIndex' : 0
														});
													});
								</script>
							</div>
			<!-- 			
							<div class="mod activity">
								<a href="http://wenku.baidu.com/event/bqbh" title="拒绝盗版，营造绿色文库"
									target="_blank"><img
									src="/sy/comm/wenku/baidu_style_files/gray_img.gif"
									alt="拒绝盗版，营造绿色文库"
									data-lazyload-src="http://img.baidu.com/img/iknow/wenku/r/image/2012-11-22/beca624f8ca968664ef93c95c0db2adf.jpg"
									class="lazyLoadImage">
									<div class="img-border"></div></a><a
									href="http://baike.baidu.com/feature/tea/index.html"
									title="百科专题：熊猫茶" target="_blank"><img
									src="/sy/comm/wenku/baidu_style_files/gray_img.gif"
									alt="百科专题：熊猫茶"
									data-lazyload-src="http://baike.baidu.com/cms/rc/tea210X70.jpg"
									class="lazyLoadImage">
									<div class="img-border"></div></a>
							</div>
		 -->	
		 
		 <!--
							<div class="mod org">
								<div class="hd clearfix">
									<h3>友情连接</h3>
									<a href="#" target="_blank">更多</a>
								</div>
								
								<@linker_list debugName="友情连接" siteId="${site_id}" pic="1"  count="4"> 
								<#list tag_list as link>
								<div>
									<a href="${link.LINKER_URL}"
										target="_blank"><img
										src="/sy/comm/wenku/baidu_style_files/gray_img.gif"
										data-lazyload-src="/file/${link.LINKER_IMAGE}"
										alt="${link.LINKER_NAME}" class="lazyLoadImage">
										<div class="img-border"></div></a>
									<p>
										<a href="${link.LINKER_URL}"
											target="_blank">${link.LINKER_NAME}</a>
									</p>
								</div>
								</#list>
								</@linker_list>
							
							</div>
							-->
							
							
							<div class="mod tousu">
								如要投诉或提出意见建议，请到<br> <a target="_blank"
									href="#">软虹文库投诉中心</a>反馈。
							</div>
						</div>
						<div class="main">
							<div class="mod featureClass ui-imgtabs">
								<!--  精彩专题 -->
								
								<script type="text/javascript">
									F
											.use(
													[
															'/static/common/lib/tangram/base/base.js',
															'/static/widget/core/featureClass/featureClass.js' ],
													function(T, imgTabs) {
														imgTabs = imgTabs.imgTabsCreate;
														imgTabs({
															'el' : T
																	.q('ui-imgtabs')[0],
															'delay' : 15000
														});
														function getTimeFormat(
																ns) {
															var data = new Date(
																	parseInt(ns));
															return data
																	.getFullYear()
																	+ "-"
																	+ (data
																			.getMonth() + 1)
																	+ "-"
																	+ data
																			.getDate();
														}
														function returnDate() {
															var dataList = T.dom
																	.q(
																			'update-time',
																			'contentWrap1',
																			'span');
															if (!dataList)
																return;
															var today = (new Date())
																	.getTime();
															var oneday = 24 * 60 * 60 * 1000;
															for ( var i = 0; i < dataList.length; i++) {
																dataList[i].innerHTML = getTimeFormat(today
																		- i
																		* oneday);
															}
														}
														returnDate();
													});
								</script>
							</div>
							<div class="mod recommendation hotRead" id="recommendation">
								<textarea id="recommendation-template" style="display: none">           
 &lt;div class="hd" id="recommendhd"&gt;
                &lt;h2 class="clearfix"&gt;&lt;a href="###" class="act 
dochange logSend" 
data-logsend="{'send':['general','reqanother',{'module':'rprec','page':'home'}]}"&gt;&lt;b
 class="ic ic-sync"&gt;&lt;/b&gt;换一批&lt;/a&gt;&lt;span 
class="title"&gt;猜你喜欢&lt;b class="ic 
new-tip"&gt;&lt;/b&gt;&lt;/span&gt;&lt;/h2&gt;
                &lt;p class="recommend-cate-title"&gt;我们发现您对
                    &lt;% for( var i = 0, list = data.tag_list, l = 
list.length; i &lt; l; i += 1 ) { %&gt;
                        &lt;a href="&lt;%=list[i].search %&gt;" 
class="logSend" 
data-logsend="{'send':['general','tag_click',{'module':'rprec','page':'home'}]}"
 target="_blank" title="&lt;%=list[i].str 
%&gt;"&gt;“&lt;%=list[i].cutstr %&gt;”&lt;/a&gt;&lt;% if( i !== l - 1 ) {
 %&gt;、&lt;% } %&gt;
                    &lt;% } %&gt;
                    等内容感兴趣，所以为您推荐以下文档。
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class="bd" id="recommendbd"&gt;
		    	&lt;div class="gd-g classRow"&gt;
                    &lt;% for(var i = 0, list = data.doc_list, l = 
list.length; i &lt; l; i += 1 ) { %&gt;
				    &lt;div class="gd-g-u gd-u-1-6 classItem logSend" 
data-logsend="{'send':['general','doc_click',{'module':'rprec','page':'home'}]}"&gt;

					    &lt;dl class="&lt;% if( list[i].ppt ) { %&gt;isPPT &lt;% } else
 { %&gt;notPPT&lt;% } %&gt;"&gt;
						    &lt;dt class="classItemImg"&gt;
							    &lt;a href="&lt;%=list[i].url %&gt;" 
title="&lt;%=list[i].title %&gt;" target="_blank"&gt;
								    &lt;img src="&lt;%=list[i].cover %&gt;" 
alt="&lt;%=list[i].title %&gt;" class='logSend' /&gt;
    								&lt;b class="ic ic-&lt;%=list[i].docType[0] 
%&gt;"&gt;&lt;/b&gt;
	    						&lt;/a&gt;
		    				&lt;/dt&gt;
			    			&lt;dd class="doc-title doc-info"&gt;&lt;a 
href="&lt;%=list[i].url %&gt;" class='logSend' target="_blank" 
title="&lt;%=list[i].title %&gt;"&gt;&lt;%=list[i].cuttitle 
%&gt;&lt;/a&gt;&lt;/dd&gt;
				    		&lt;dd class="view-cnt doc-info"&gt;&lt;%=list[i].view_count 
%&gt;人已读&lt;/dd&gt; 
					    &lt;/dl&gt;
    				&lt;/div&gt;
                    &lt;% } %&gt;
    			&lt;/div&gt;
            &lt;/div&gt;
        </textarea>
							</div>
							<script>
								F
										.use(
												[
														'/static/common/lib/tangram/base/base.js',
														'/static/common/ui/js_core/log/log.js',
														'/static/common/ui/js_core/recommendation/recommendation.js' ],
												function(T, Log, recommendation) {
													var counter = 0;
													recommendation
															.recommendationCreate({
																container : T
																		.g('recommendation'),
																template : T
																		.g('recommendation-template').value,
																onrequest : function(
																		data) {
																	var style = this.container.style;
																	if (data.status
																			&& data.status.code == 0) {
																		!(counter++)
																				&& Log
																						.send(
																								'general',
																								'show',
																								{
																									'module' : 'rprec',
																									'page' : 'home'
																								});
																		style.height = '250px';
																		setTimeout(
																				function() {
																					style.overflow = 'visible';
																				},
																				1001);
																	}
																}
															});
												});
							</script>
							<div class="mod hotRead" id="hotRead-mod">
								<div class="hd" id="hotRead">
									<h2 class="pb10 clearfix">
									<!-- 
										<span class="act"><a href="###"
											data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;topsetclass&quot;}]}"
											class="sort_6 logSend">定制我的首页</a></span>
									 -->
										<span class="title">热门文档</span>
									</h2>
								</div>
								<div class="bd">
									<div class="mod classBox">
										 
										<div class="hd logClass" cid="76" num="12">
											<h3 class="ph15">
												<span><a href="file:///hotlist?page=1&amp;c=76"
													target="_blank" class="catalog-title">热门阅读</a></span>
											</h3>
										</div>
									 
										<div class="bd">
											<div class="gd-g classRow catalog-76">
											<@wenku_readTop debugName="热门阅读" siteId="${site_id}" count="12"> 
											<#list tag_list as doc>
												<div class="gd-g-u gd-u-1-6 classItem">
													<dl class="notPPT">
														<dt class="classItemImg">
															<a
																href="#"
																onclick="javascript:view('${doc.DOCUMENT_ID}','${doc.DOCUMENT_TITLE}')"; 
																title="${doc.DOCUMENT_TITLE}" target="_self"><img
																src="/sy/comm/wenku/baidu_style_files/gray_img.gif"
																alt="${doc.DOCUMENT_TITLE}"
																data-lazyload-src="<@setPic doc middle/>"
																data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;hotDoc&quot;}]}"
																class="logSend lazyLoadImage"><b class="ic-${doc.DOCUMENT_FILE_SUFFIX!'ic-unknow'}"></b></a>
														</dt>
														<dd class="classItemTitle">
															<a
																href="#"
																onclick="javascript:view('${doc.DOCUMENT_ID}','${doc.DOCUMENT_TITLE}')"; 
																data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;hotDoc&quot;}]}"
																class="logSend" target="_self"
																title="${doc.DOCUMENT_TITLE}">
																<#if doc.DOCUMENT_TITLE?length gt 10>
																${doc.DOCUMENT_TITLE[0..10]}...
																<#else>${doc.DOCUMENT_TITLE}	
																</#if>
															</a>
														</dd>
														<dd class="classItemInfo">
														<#if doc.DOCUMENT_FILE_PAGES gt 0>
														<span class="classItemPageCount">${doc.DOCUMENT_FILE_PAGES}页</span>
														</#if>
									          			<span class="classItemPrice">${doc.DOCUMENT_READ_COUNTER}次</span>
														</dd>
													</dl>
												</div>
												</#list>
												</@wenku_readTop>
											
											</div>
											<div class="gd-g classRow catalog-76"></div>
										</div>
									</div>
		<!-- 
									<div class="mod classBox">
										<div class="hd logClass" cid="9" num="12">
											<h3 class="ph15">
												<span><a href="file:///hotlist?page=1&amp;c=9"
													target="_blank" class="catalog-title">热门点评</a></span>
											</h3>
										</div>
										<div class="bd">
											<div class="gd-g classRow catalog-9">
												
												<div class="gd-g-u gd-u-1-6 classItem">
													<dl class="notPPT">
														<dt class="classItemImg">
															<a
																href="http://wenku.baidu.com/view/121d19f0fab069dc50220178.html"
																title="中学生美文摘抄大全" target="_blank"><img
																src="/sy/comm/wenku/baidu_style_files/gray_img.gif"
																alt="中学生美文摘抄大全"
																data-lazyload-src="http://wenku.baidu.com/img/ec4225e44afe04a1b071de12"
																data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;hotDoc&quot;}]}"
																class="logSend lazyLoadImage"><b class="ic ic-doc"></b></a>
														</dt>
														<dd class="classItemTitle">
															<a
																href="http://wenku.baidu.com/view/121d19f0fab069dc50220178.html"
																data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;hotDoc&quot;}]}"
																class="logSend" target="_blank" title="中学生美文摘抄大全">中学生美文摘抄大全</a>
														</dd>
														<dd class="classItemInfo">
															<span class="classItemPageCount">25页</span><span
																class="classItemPrice">免费</span>
														</dd>
													</dl>
												</div>
												
												
												
											</div>
											<div class="gd-g classRow catalog-9"></div>
										</div>
									</div>
				-->
									<div class="mh10 homebanner">
									
										<a
											href="#"
											target="_self" title="文库学院专题：过日子要有技术含量"> <img
											src="/sy/comm/wenku/baidu_style_files/0dc9d19e4f6fef9a351d13546794a913.jpg"
											alt="文库学院专题：过日子要有技术含量">
											<div class="img-border"></div>
										</a>
									</div>
									
									
					<@channel_list debugName="获取文库首页栏目" channelId="${root_channel_id}"> 				
					<#list tag_list as channel>
					<@wenku_list debugName="栏目下文档:${channel.CHNL_NAME}" channelId="${channel.CHNL_ID}" count="6"> 
					
									<div class="mod classBox">
									<#if (tag_list?size gt 0) >
										<div class="hd logClass" cid="126" num="12">
											<h3 class="ph15">
												<span><a href="/wenku/channel/${channel.CHNL_ID}/index.html"
													target="_self" class="catalog-title">${channel.CHNL_NAME}</a></span>
											</h3>
										</div>
									</#if>
										<div class="bd">
											<div class="gd-g classRow catalog-126">
										
											<#list tag_list as doc>
												<div class="gd-g-u gd-u-1-6 classItem">
													<dl class="notPPT">
														<dt class="classItemImg">
															<a
																href="#"
																onclick="javascript:view('${doc.DOCUMENT_ID}','${doc.DOCUMENT_TITLE}')"; 
																title="${doc.DOCUMENT_TITLE}" target="_self"><img
																src="/sy/comm/wenku/baidu_style_files/gray_img.gif"
																alt="${doc.DOCUMENT_TITLE}"
																data-lazyload-src="<@setPic doc middle/>"
																data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;hotDoc&quot;}]}"
																class="logSend lazyLoadImage"><b class="ic-${doc.DOCUMENT_FILE_SUFFIX!'ic-unknow'}"></b></b></a>
														</dt>
														<dd class="classItemTitle">
															<a
																href="#"
																onclick="javascript:view('${doc.DOCUMENT_ID}','${doc.DOCUMENT_TITLE}')"; 
																data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;hotDoc&quot;}]}"
																class="logSend" target="_self"
																title="${doc.DOCUMENT_TITLE}">
																<#if doc.DOCUMENT_TITLE?length gt 10>
																${doc.DOCUMENT_TITLE[0..10]}...
																<#else>${doc.DOCUMENT_TITLE}	
																</#if>
															</a>
														</dd>
														<dd class="classItemInfo">
															<#if doc.DOCUMENT_FILE_PAGES gt 0>
															<span class="classItemPageCount">${doc.DOCUMENT_FILE_PAGES}页</span>
															</#if>
															<span class="classItemPrice">${doc.DOCUMENT_READ_COUNTER}次</span>
														</dd>
													</dl>
												</div>
												</#list>
												</@wenku_list>
												
											</div>
											<div class="gd-g classRow catalog-126"></div>
										</div>
									</div>
									</#list>
									</@channel_list>
									
									
									<!-- 
									<div class="banner sort_6 logSend"
										data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;bottomsetclass&quot;}]}">
										<a href="javascript:;" title="添加更多分类" class="logSend"
											data-logsend="{&quot;send&quot;:[&quot;home&quot;,&quot;homeclk&quot;,{&quot;subtype&quot;:&quot;bottomsetclass&quot;}]}">添加更多</a>
									</div>
									 -->
								</div>
							</div>
							<script type="text/javascript">
								F
										.use(
												[
														'/static/common/lib/tangram/base/base.js',
														'/static/widget/core/hotRead/hotRead.js',
														'/static/common/ui/js_core/login/login.js' ],
												function(T, S, L, K) {
													var login = L.login;
													T
															.element(
																	T.dom
																			.query(".sort_6"))
															.each(
																	function(
																			item) {
																		T
																				.on(
																						item,
																						'click',
																						function(
																								e) {
																							T.event
																									.stop(e);
																							login
																									.verlogin(
																											function() {
																												T.ajax
																														.post(
																																"/async",
																																"atype=getMyClassConf",
																																function(
																																		xhr,
																																		msg) {
																																	var allClass = eval(msg);
																																	var classCon = S
																																			.fromJsData(
																																					allClass,
																																					'76,9,11,126,2,3001,77,64,63,47');
																																	S
																																			.sortDialog({
																																				title : '定制分类<span class="mark">（选择您想定制的分类）</span>',
																																				width : 560,
																																				content : classCon,
																																				source : '76,9,11,126,2,3001,77,64,63,47'
																																			});
																																})
																											},
																											null,
																											null,
																											{
																												fromMod : 'other'
																											});
																						});
																	});
													T.dom
															.ready(function() {
																if (T.cookie
																		.get("subClass") == "1") {
																	T.event
																			.fire(
																					T.dom
																							.q("sort_6")[0],
																					"click");
																	T.cookie
																			.remove("subClass");
																}
																;
															});
												});
							</script>
						</div>
					</div>
					<script type="text/javascript">
						F
								.use(
										[
												'/static/common/lib/tangram/base/base.js',
												'/static/common/ui/js_core/login/login.js',
												'/static/common/ui/js_core/log/log.js',
												'/static/core/ui/lazyLoadImage/lazyLoadImage.js' ],
										function(T, L, log, LLI) {
											var login = L.login, lazyLoadImage = LLI.lazyLoadImage;
											lazyLoadImage({
												'className' : 'lazyLoadImage'
											});
											var scrollToHotRead = function(e) {
												e && T.event.stop(e);
												var lastTop = T.dom
														.getPosition(T
																.g("hotRead")).top;
												var t, step = 10;
												if (T.browser.firefox) {
													step = 60
												}
												if (T.browser.ie) {
													step = 20
												}
												var startTop = T.page
														.getScrollTop();
												var endTop = startTop + step;
												function scroll() {
													window.scrollTo(startTop,
															endTop);
													startTop = endTop;
													endTop = endTop + step;
													if (endTop >= lastTop) {
														clearTimeout(t);
														return;
													}
													;
													if ((lastTop - endTop) < step) {
														endTop = lastTop;
													}
													t = setTimeout(
															arguments.callee, 1);
												}
												scroll();
											};
											T.array
													.each(
															T.q("hotArea"),
															function(item) {
																T
																		.on(
																				item,
																				"click",
																				scrollToHotRead);
															});
											T.array
													.each(
															T.q("roomShare"),
															function(item) {
																T
																		.on(
																				item,
																				"click",
																				function(
																						e) {
																					T.event
																							.stop(e);
																					login
																							.verlogin(
																									function() {
																										location.href = item.href;
																									},
																									null,
																									null,
																									{
																										fromMod : 'other'
																									});
																				});
															});
									/* 		T
													.on(
															T.g("upload-icon"),
															"click",
															function(e) {
																T.event.stop(e);
																login.verlogin(
																				function() {
																					location.href = "/new?fr=";
																				},
																				null,
																				null,
																				{
																					fromMod : 'upload'
																				});
															}); */
											var selectText = function(textbox,
													start, stop) {
												if (!textbox
														|| textbox.offsetWidth == 0) {
													return false;
												}
												if (textbox.setSelectionRange) {
													textbox.setSelectionRange(
															start, stop);
												} else {
													var range = textbox
															.createTextRange();
													range.collapse(true);
													range.moveStart(
															"character", start);
													range.moveEnd("character",
															stop - start);
													range.select();
												}
												textbox.focus();
											};
											T.dom
													.ready(function() {
														var kw = T.g('kw'), l = kw.value.length;
														selectText(kw, l, l);
														var obj = {};
														T.array
																.each(
																		T.dom
																				.q("logClass"),
																		function(
																				item) {
																			var id = item
																					.getAttribute("cid");
																			var num = item
																					.getAttribute("num");
																			obj["cid["
																					+ id
																					+ "]"] = num;
																		});
														var params = T.object
																.merge(
																		{
																			"subtype" : "showNum"
																		}, obj);
														if (Number("1")) {
															params.login = 1;
														} else {
															params.login = -1;
														}
					//tongji									log.send("home", "homeshow", params);
														var urlAct = T.url
																.getQueryValue(
																		location.href,
																		'act'), showGrownupTaskTips = function(
																str) {
															if (T.g('hotRead')) {
																T.dom
																		.insertHTML(
																				'hotRead',
																				'beforeEnd',
																				'<div class="grownup-task-tips">'
																						+ str
																						+ '</div>');
															}
														};
														if (urlAct === 'GrownupTaskFavorites') {
															showGrownupTaskTips('点击喜欢的文档 然后收藏它吧！');
															scrollToHotRead();
														} else if (urlAct === 'GrownupTaskBookMark') {
															showGrownupTaskTips('阅读喜欢的文档时 记得添加书签哦！');
															scrollToHotRead();
														}
													});
										});
					</script>
				</div>
			</div>
		</div>
		<div id="ft">
			<div class="footer">
				<p>
					<span class="cr">&#169;2013 Ruaho</span> <a
						href="#" class="Bidu" target="_self">使用前必读</a>&nbsp;|&nbsp;<a
						href="#"
						class="Xieyi" target="_self">文库协议</a>
				</p>
			</div>
		</div>
	</div>
	<script>
		F.use([ '/static/widget/common/360tip/360tip.js' ], function(Tip) {
			var tip = Tip.showTopTip, options = {
				referer : ''
			};
			new tip(options).create();
		});
	</script>
	<script>
	/* 	with (document)
			0[(getElementsByTagName('head')[0] || body)
					.appendChild(createElement('script')).src = 'http://img.baidu.com/hunter/wenku.js?st='
					+ ~(new Date() / 864e5)]; */
	</script>
	<script type="text/javascript">
		var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://"
				: " http://");
	</script>
	<script type="text/javascript">
		F
				.use(
						[ '/static/common/lib/tangram/base/base.js' ],
						function(T) {
							T.dom
									.ready(function(argument) {
										var taskStepByStep = T.cookie
												.get('taskStepByStep');
										if (taskStepByStep
												&& taskStepByStep != ''
												&& window.top === window.self) {
											T.page
													.loadJsFile('http://img.baidu.com/img/iknow/docshare/js/taskStepByStep.js?t='
															+ ~new Date());
										}
									});
						});
	</script>
	<div id="change2pad"
		style="position: relative; top: -25px; font-size: 14px; text-align: center; padding: 10px 0; display: none;">
		<a style="text-decoration: none;" href="javascript:void(0)">Pad版</a><span
			style="color: #ccc; padding: 5px;"> | </span>传统版
	</div>
	<script>
		(function() {
			if (navigator.userAgent.match(/(iPad).*OS\s([\d_]+)/)) {
				var el = document.getElementById('change2pad');
				el.style.display = 'block';
				el.getElementsByTagName('a')[0].addEventListener('touchstart',
						function() {
							var href = location.href, has = false;
							href = href.replace(/dsp=(pc|ipad)/g, function(s) {
								has = true;
								return 'dsp=ipad'
							});
							if (!has) {
								if (href.indexOf('?') == -1) {
									href = href + '?dsp=ipad';
								} else {
									href = href + '&dsp=ipad';
								}
							}
							location.href = href;
						}, false);
			}
		})();
	</script>
	<script>
		if (typeof PDC != 'undefined') {
			PDC.init({
				is_login : parseInt('1'),
				sample : 1,
				product_id : 112,
				page_id : 4,
				display : false
			});
		}
	</script>
	<script>
		PDC._load_js = function(b, c) {
			var a = document.createElement("script");
			a.setAttribute("type", "text/javascript");
			a.setAttribute("src", b);
			a.onload = a.onreadystatechange = function() {
				if (!this.readyState || this.readyState == "loaded"
						|| this.readyState == "complete") {
					a.onload = a.onreadystatechange = null;
					if (typeof c === "function") {
						c(b, true)
					}
				}
			};
			a.onerror = function(d) {
				if (typeof c === "function") {
					c(b, false)
				}
			};
			document.getElementsByTagName("head")[0].appendChild(a)
		};
		PDC._load_analyzer = function() {
			if (PDC._is_sample() == false) {
				return

				

			}
			PDC._analyzer.loaded = true;
			PDC._load_js(PDC._analyzer.url, function() {
				var c = PDC._analyzer.callbacks;
				for ( var b = 0, a = c.length; b < a; b++) {
					c[b]()
				}
			})
		};
		PDC.send = function() {
			if (PDC._analyzer.loaded == true) {
				WPO_PDA.send()
			} else {
				PDC._analyzer.callbacks.push(function() {
					WPO_PDA.send()
				})
			}
		};
		PDC._is_sample = function() {
			var d = false, c = this._opt.sample, b = 0;
			c = c > 0.9 ? 0.9 : c;
			c = c < 0.0001 ? 0.0001 : c;
			var a = document.cookie.match(/BAIDUID=(\w*):/);
			if (a) {
				b = parseInt(a[1].slice(-4), 16);
				b = isNaN(b) ? 0 : b
			}
			if (c <= 0.5) {
				d = (b % (parseInt(1 / c)) == 1)
			} else {
				d = (b % (parseInt(1 / (1 - c))) != 1)
			}
			return d
		};
		(function() {
			if (document.attachEvent) {
				window.attachEvent("onload", function() {
					PDC.mark("lt")
				}, false)
			} else {
				window.addEventListener("load", function() {
					PDC.mark("let");
					PDC._load_analyzer()
				})
			}
		})();
	</script>
	<script type="text/javascript">
		F.use([ '/static/common/lib/tangram/base/base.js',
				'/static/common/lib/fis/data/data.js' ], function(T, D) {
			var signInCookie = T.cookie.get('WK_daily_signIn'), WKINFO = D
					.get('WkInfo'), needSignin = false;
			if (WKINFO.PageInfo.isLogin) {
				var cookies = [];
				var uname = WKINFO.UserInfo.userName.split('');
				T.array.each(uname, function(item, i) {
					uname[i] = item.charCodeAt(0).toString(16);
				});
				uname = uname.join('');
				if (signInCookie) {
					cookies = signInCookie.split(',');
					needSignin = T.array.every(cookies, function(item, i) {
						return item !== uname;
					});
				} else {
					needSignin = true;
				}
			}
		});
	</script>
	<div data-guid="TANGRAM$3" id="tangram-suggestion--TANGRAM$3-main"
		class="tangram-suggestion-main"
		style="position: absolute; display: none; left: 294px; top: 73px; width: 408px;">
		<div id="tangram-suggestion--TANGRAM$3" class="tangram-suggestion"
			style="position: relative; top: 0px; left: 0px"></div>
	</div>
	<div style="left: 925px;" id="docBubble" class="docBubble">
		<i class="triangle-t"></i><i title="关闭" class="close markSend">关闭</i>
		<div class="tl">
			<div class="inner"></div>
		</div>
		<div class="tr"></div>
		<div class="bl"></div>
	</div>
</body>
</html>