<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>文档内容</title>
		<#include "global.ftl"/>
		<#include "/SY_COMM_WENKU/config_constant.ftl">
        <link href="/sy/comm/wenku/css/style_daoh.css" rel="stylesheet" type="text/css"/>
        <link href="/sy/comm/wenku/css/style2.css" rel="stylesheet" type="text/css"/>		
		<style type="text/css">
			html,body{
				margin:0;
				padding:0;
			}
		</style>
		<script type="text/javascript">
			function doView(id,name){
				var url = "/wenku/content/" + id + ".html?group=${group}";	
				var opts={'scrollFlag':true , 'url':url,'tTitle':name,'menuFlag':1};
				top.Tab.open(opts);
			}
			function doDocList(id,name){
				var url = "/wenku/doclist/" + id + "/index.html?group=${group}";	
				var opts={'scrollFlag':true , 'url':url,'tTitle':name,'menuFlag':1};
				top.Tab.open(opts);
			}
			
			jQuery(document).ready(function(){
				
				/* 监听左侧“展开边栏”按钮 */
				var status = top.jQuery(".leftMenu-expand,.leftMenu-close");
				if(!status.hasClass("leftMenu-expand")){
					jQuery("td.r1").css({"width":"200px","max-width":"200px"});
					jQuery("table.w980").css("width","96%");
				}
				status.click(function(){
					if(status.hasClass("leftMenu-expand")){
						jQuery("td.r1").css({"width":"300px","max-width":"300px"});
						jQuery("table.w980").css("width","90%");
					}
					else{
						jQuery("td.r1").css({"width":"200px","max-width":"200px"});
						jQuery("table.w980").css("width","96%");
					}
				});
				
				/* 阅读+1*/
				top.FireFly.doAct("SY_COMM_WENKU_DOCUMENT","increaseReadCounter",{"DOCUMENT_ID":"${document.DOCUMENT_ID!''}"},false,true);
				
				/* 下载+1*/
				jQuery("#downloadId2").click(function(){
					top.FireFly.doAct("SY_COMM_WENKU_DOCUMENT","increaseDownloadCounter",{
						"DOCUMENT_ID": "${document.DOCUMENT_ID!''}"
					},false,true);
				});
				
				/* 评论_begin */
				(function wenku(){
					var opts = {"DATA_ID": "${document.DOCUMENT_ID}", "SERV_ID":"SY_COMM_WENKU_DOCUMENT", "SHOWNUM":10,"NOWPAGE":1,"pCon":jQuery("#document_comment")};
				    var listView = new rh.vi.comment(opts);
				    listView.show();
				})();
				/* 评论_end */
			});
		</script>
    </head>
    <body>
    	<#--
    	<@coms_html comsId="${coms_nav_id}" siteId="${channel.SITE_ID}" comparam="{'titleBar':'portal-title-none'}">
			${coms.AREA}
		</@coms_html>
		-->
        <div class="w101"></div>
		<table class="w980" border="0" cellpadding="0" cellspacing="10">
			<!--
			<tr>
				<td colspan="2" style="padding:5px;">
					<a href="/wenku/channel/${channel.CHNL_ID}/index.html?group=${group}">${channel.CHNL_NAME}</a>
							&nbsp;&gt;&gt;&nbsp;${document.DOCUMENT_TITLE!""}
				</td>
			</tr>
			-->
		    <tr><td class="l1">
		        <div class="bor13">
		            <div class="t ${document.DOCUMENT_FILE_SUFFIX!'unknown'}" style="height:30px;margin:10px 0 0 15px;">
						<span>
			                <a rel="nofollow" id="wenji" href="javascript:;" class="sc">收藏到文辑</a> 
							<script type="text/javascript">
								jQuery("#wenji").click(function(event){
									
									//1.构造查询选择参数
									var configStr = "SY_COMM_WENKU_DOCLIST,{'SOURCE':'LIST_ID~LIST_TITLE'," +
											                     "'EXTWHERE':' and 	S_USER=^@USER_CODE@^','TYPE':'single','PKHIDE':'true'}";
									var options = {"itemCode":"我的文辑",
										"config" :configStr,
										"parHandler":this,
									    "replaceCallBack":function(idArray) {//回调，idArray为选中记录的相应字段的数组集合
									    	var id = idArray["LIST_ID"];
											var param = {
												"DOCUMENT_ID":"${document.DOCUMENT_ID}",
												"DOCUMENT_TITLE":"${document.DOCUMENT_TITLE}",
												"LIST_ID":id
											}
											//2.根据当前文档ID查询查询所选文辑中是否已存在
											var rtnBean = top.FireFly.doAct("SY_COMM_WENKU_DOCLIST_ITEM","count",param,false);
											if(rtnBean["_DATA_"]!="0"){
											//	alert("文辑中已存在");
												Tip.showError("文辑中已存在", true);
												return false;
											}
											var result = top.FireFly.doAct("SY_COMM_WENKU_DOCLIST_ITEM","save",param,false);
											if(result["_MSG_"]){
											//	alert("收藏到文辑成功");
												Tip.show("收藏成功");
											}
										}
									};
									//3.用系统的查询选择组件 rh.vi.rhSelectListView()
									var queryView = new top.rh.vi.rhSelectListView(options);
									queryView.show(event);
								
									var d = top.jQuery("#SY_COMM_WENKU_DOCLIST-selectDialog").parent("div");
									d.css({"z-index":"9999","background":"white","top":"40%","left":"40%","width":"400px","height":"240px","position":"absolute"});
								});
							</script>             
						</span>
		                <h1 style="font-size:18px;">${document.DOCUMENT_TITLE!""}</h1>
		            </div>
		            <p style="margin:0 15px;"> 
						简介：${document.DOCUMENT_DESCRIPTION!""}
		            </p>
		        </div>
				<#if document.DOCUMENT_FILE_SUFFIX=="mp3">
				<!-- 音频播放窗口_begin-->
				<link href="/sy/comm/wenku/jPlayer/skin/blue.monday/jplayer.blue.monday.css" rel="stylesheet" type="text/css" />
				<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js"></script>
				<script type="text/javascript" src="/sy/comm/wenku/jPlayer/js/jquery.jplayer.min.js"></script>
				<script type="text/javascript">
				//<![CDATA[
				$(document).ready(function(){
				
					$("#jquery_jplayer_1").jPlayer({
						ready: function () {
							$(this).jPlayer("setMedia", {
								mp3:"/file/${document.DOCUMENT_FILE}"
							});
						},
						swfPath: "/sy/comm/wenku/jPlayer/js/",
						supplied: "mp3",
						wmode: "window"
					});
				});
				//]]>
				</script>
				<div id="jquery_jplayer_1" class="jp-jplayer"></div>
				<div id="jp_container_1" class="jp-audio">
					<div class="jp-type-single">
						<div class="jp-gui jp-interface">
							<ul class="jp-controls">
								<li><a href="javascript:;" class="jp-play" tabindex="1">play</a></li>
								<li><a href="javascript:;" class="jp-pause" tabindex="1">pause</a></li>
								<li><a href="javascript:;" class="jp-stop" tabindex="1">stop</a></li>
								<li><a href="javascript:;" class="jp-mute" tabindex="1" title="mute">mute</a></li>
								<li><a href="javascript:;" class="jp-unmute" tabindex="1" title="unmute">unmute</a></li>
								<li><a href="javascript:;" class="jp-volume-max" tabindex="1" title="max volume">max volume</a></li>
							</ul>
							<div class="jp-progress">
								<div class="jp-seek-bar" style="width:100%;">
									<div class="jp-play-bar"></div>
								</div>
							</div>
							<div class="jp-volume-bar">
								<div class="jp-volume-bar-value"></div>
							</div>
							<div class="jp-time-holder">
								<div class="jp-current-time"></div>
								<div class="jp-duration"></div>
								<ul class="jp-toggles">
									<li><a href="javascript:;" class="jp-repeat" tabindex="1" title="repeat">repeat</a></li>
									<li><a href="javascript:;" class="jp-repeat-off" tabindex="1" title="repeat off">repeat off</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<!-- 音频播放窗口_end--> 
				
				<#elseif document.DOCUMENT_FILE_SUFFIX=="flv">
				<!-- 视频播放窗口_begin -->
				<div id="a1"></div>
				<script type="text/javascript" src="/sy/comm/wenku/ckplayer/ckplayer.js" charset="utf-8"></script>
				<script type="text/javascript">
					var flashvars={
					f:'/file/${document.DOCUMENT_FILE}',//视频地址
					a:'',//调用时的参数，只有当s>0的时候有效
					s:'0',//调用方式，0=普通方法（f=视频地址），1=网址形式,2=xml形式，3=swf形式(s>0时f=网址，配合a来完成对地址的组装)
					c:'0',//是否读取文本配置,0不是，1是
					x:'',//调用xml风格路径，为空的话将使用ckplayer.js的配置
					i:'',//初始图片地址
					d:'',//暂停时播放的广告，swf/图片
					u:'',//暂停时如果是图片的话，加个链接地址
					l:'',//视频开始前播放的广告，swf/图片/视频
					r:'',//视频开始前播放图片/视频时加一个链接地址
					t:'5',//视频开始前播放swf/图片时的时间
					e:'3',//视频结束后的动作，0是调用js函数，1是循环播放，2是暂停播放，3是调用视频推荐列表的插件
					v:'80',//默认音量，0-100之间
					p:'0',//视频默认0是暂停，1是播放
					h:'1',//播放http视频流时采用何种拖动方法，0是按关键帧，1是按关键时间点
					q:'',//视频流拖动时参考函数，默认是start
					m:'0',//默认是否采用点击播放按钮后再加载视频，0不是，1是,设置成1时不要有前置广告
					g:'',//视频直接g秒开始播放
					j:'',//视频提前j秒结束
					k:'',//提示点时间，如 30|60鼠标经过进度栏30秒，60秒会提示n指定的相应的文字
					n:'',//提示点文字，跟k配合使用，如 提示点1|提示点2
					b:'0x000',//播放器的背景色，如果不设置的话将默认透明
				 	w:''//指定调用自己配置的文本文件,不指定将默认调用和播放器同名的txt文件
					//调用播放器的所有参数列表结束
					};
					var params={bgcolor:'#000000',allowFullScreen:true,allowScriptAccess:'always'};//这里定义播放器的其它参数如背景色（跟flashvars中的b不同），是否支持全屏，是否支持交互
					var attributes={id:'ckplayer_a1',name:'ckplayer_a1'};
					//下面一行是调用播放器了，括号里的参数含义：（播放器文件，要显示在的div容器，宽，高，需要flash的版本，当用户没有该版本的提示，加载初始化参数，加载设置参数如背景，加载attributes参数，主要用来设置播放器的id）
					swfobject.embedSWF('/sy/comm/wenku/ckplayer/ckplayer.swf', 'a1', '832', '500', '10.0.0','/sy/comm/wenku/ckplayer/expressInstall.swf', flashvars, params, attributes); //播放器地址，容器id，宽，高，需要flash插件的版本，flashvars,params,attributes	
					//调用播放器结束
				</script>
				<!-- 视频播放窗口_end -->
				
				<#elseif isSupport>
		        <!-- 此处div用做loading效果 -->
			    <div id="frameprogrssBar" align="center" style="height:600px;width:832px;margin-top:50px;">
			        <img src="/sy/comm/wenku/img/load1.gif" />&nbsp;努力加载中...
			    </div>
				<!--iframe属性src中放入需要加载的页面或页面路径    /file/${document.DOCUMENT_FILE}?act=preview-->
	        	<iframe align="center" frameborder="0" height="600" width="831"  style="overflow-x: hidden; overflow-y:auto;display:none;"
				 src="/file/${document.DOCUMENT_FILE}?act=preview" id="framecontent"></iframe>
				 <script type="text/javascript">
			        startload(document.getElementById("frameprogrssBar"), document.getElementById("framecontent"))
			        function startload(loadstr, iframestr){
			            var loadstr = loadstr;
			            var iframestr = iframestr;
			            loadstr.style.display = "block";//显示进度条
			            iframestr.style.display = "none";//隐藏 数据
			            if (iframestr.attachEvent) {  
						    iframestr.attachEvent("onload", function() {  
						                //以下操作必须在iframe加载完后才可进行  
						        loadstr.style.display = "none";
			                    iframestr.style.display = "block";  
						    });  
						} else {  
						    iframestr.onload = function() {  
						                //以下操作必须在iframe加载完后才可进行  
						        loadstr.style.display = "none";
			                    iframestr.style.display = "block"; 
						    };  
						}  
			        }
			    </script>
				<#else>
				</#if>
		        <div style="display:none;" class="bor321_xu1" id="docContent">
		            <style type="text/css">
		                .bor321_xu1 {
		                    border: 6px #e7e6e6 solid;
		                    width: 728px;
		                    font-size: 12px;
		                } .bor321_xu2 {
		                    border: 1px #c5c3c3 solid;
		                    background: #f8f8f8;
		                    color: #666;
		                    line-height: 20px;
		                    padding: 12px;
		                    height: 563px;
		                    overflow: auto;
		                }
		            </style>
		            <div class="bor321_xu2">
		                
		            </div>
		        </div>
		        <!-- text end --><!-- flash end -->
		        <div class="w741">
		            <div class="w742">
		                <div class="l">
		                    <div class="t">
		                                                                                  文档信息
		                    </div>
		                    <ul>
		                        <li>
		                                                                                                  下载量：
		                            <font id="down">
		                                ${document.DOCUMENT_DOWNLOAD_COUNTER!0}
		                            </font>次  浏览量：
		                            <font id="read">
		                                ${document.DOCUMENT_READ_COUNTER!0}
		                            </font>次
		                        </li>
		                        <li>
		                                                                                           贡献者：<a target="_blank" href="">
								   ${document.S_UNAME!document.S_USER__NAME!document.S_USER}
								   </a>
		                        </li>
		                        <li>
		                                                                                               贡献时间：${document.S_CTIME!""}
		                        </li>
		                        <li class="li1">
		                            <span>关键词：</span>
		                            <div>
		                                ${document.DOCUMENT_KEYWORDS!""}
		                            </div>
		                        </li>
		                    </ul>
		                </div>
		                <div class="r">
		                    <div class="manyd">
		                        <div id="currentRatingAvg" class="ll">
		                            #{(document.DOCUMENT_AVG_SCORE!0)?number;m1M1}
		                        </div>
		                        <div class="rr">
		                            <ul>
		                                <li id="rating">
		                                    <span class="blue">评分：</span>
		                                    <font>
		                                        <img width="14" height="12" v="0" src="/sy/comm/wenku/img/star_1.png">
												<img width="14" height="12" v="1" src="/sy/comm/wenku/img/star_1.png">
												<img width="14" height="12" v="2" src="/sy/comm/wenku/img/star_1.png">
												<img width="14" height="12" v="3" src="/sy/comm/wenku/img/star_1.png">
												<img width="14" height="12" v="4" src="/sy/comm/wenku/img/star_1.png">
		                                    </font>
											<span class="red">欢迎点评</span>
		                                </li>
										<script type="text/javascript">
											jQuery(document).ready(function(){
												var votes = ["很差","较差","还行","推荐","力荐"];
												(function def(){
													jQuery("#rating img").attr("src","/sy/comm/wenku/img/star_1.png");
													jQuery("#rating img:lt(${(document.DOCUMENT_AVG_SCORE!0)?number?int})").attr("src","/sy/comm/wenku/img/star_01.png");
													
												})();
												jQuery("#rating img").mouseover(function(){
													var _this = jQuery(this);
													jQuery("#rating img").attr("src","/sy/comm/wenku/img/star_1.png");
													jQuery("#currentRatingAvg").text(_this.attr("v")-0+1+".0");
													jQuery("#rating img:lt("+(_this.attr('v')-0+1)+")").attr("src","/sy/comm/wenku/img/star_01.png");
													jQuery("#rating .red").text(votes[_this.attr("v")-0]);
													jQuery("#rating img").unbind('click').click(function(){
														if(!jQuery("#currentRatingAvg").text()){
															return false;
														}
														var options = {
															"DATA_ID":"${document.DOCUMENT_ID}",
															"VOTE_SCORE":jQuery("#currentRatingAvg").text()
														}
														var result = top.FireFly.doAct("SY_COMM_WENKU_SCORE","voteScore",options);
														if(!!result["_MSG_"]){
															alert(result["_MSG_"]);
															jQuery("#rating .red").text("谢谢评分");
														}
														if(result["avg"]){
															jQuery("#currentRatingAvg").text(result["avg"]);
														}
														if(result["counter"]){
															jQuery("#ratingSummary").html(result["counter"]+"&nbsp;");
														}
														jQuery("#rating").attr("id","blue1");
														jQuery("#currentRatingAvg").attr("id","currentRatingAvg1");
													});
												});
												/* 判断是否已评 */
												var doc = top.FireFly.doAct("SY_COMM_WENKU_SCORE","show",{"DOCUMENT_ID":"${document.DOCUMENT_ID!''}"});
												if(doc["VOTED"]==1){
													jQuery("#rating img").unbind("mouseover");
													jQuery("#rating .red").text("已点评");
												}
											});
										</script>
		                                <li>
		                                    <span class="gray">已有
		                                        <font id="ratingSummary">
		                                            ${document.DOCUMENT_SCORER_COUNTER!0}
		                                        </font>位用户参与评分
		                                    </span>
		                                </li>
		                            </ul>
		                        </div>
		                    </div>
		                    <div class="h46">
		                        <a rel="nofollow" class="down" id="downloadId2" href="/file/${document.DOCUMENT_FILE}?act=download"></a>
		                    </div>
		                    <div class="size">
		                        	大小：#{((document.DOCUMENT_FILE_SIZE!0)/1024/1024)?number;m1M2}MB 
		                    </div>
		                </div>
		                <div class="clear"></div>
		            </div>
		        </div>
				<#if document.DOCUMENT_COMMENT_STATUS != 0>
				<div style="width:830px;" class="document_comment" id="document_comment">
					
				</div>
				</#if>
				<!-- 评论 end  -->
		    </td>
		    <td class="r1">	
				<!-- 相关文档_begin-->		    
		        <div class="xu_bor6 mb15">
		            <div class="tit11">
		                                                   相关文档
		            </div>
		            <ul class="list13">
		            	<@wenku_list debugName="相关文档" siteId="${root_channel_id}" count="10">
						<#list tag_list as doc>
		                <li class="unknown ${doc.DOCUMENT_FILE_SUFFIX!'txt'}">
		                    <div class="div1">
		                        <a href="javascript:doView('${doc.DOCUMENT_ID}', '${doc.DOCUMENT_TITLE}');">${doc.DOCUMENT_TITLE}</a>
		                    </div>
		                    <div title="文档被评为 ${(doc.DOCUMENT_AVG_SCORE!0)?number} 分" class="div2">
		                        <span style="width:${(doc.DOCUMENT_AVG_SCORE!0)?number * 100/5}%"></span>
		                    </div>
		                </li>
						</#list>
						</@wenku_list>			                
		            </ul>
		        </div>
				<!-- 相关文档_end-->
				<!-- 用户其他文档_begin-->
		        <div class="xu_bor6 mb15">
		            <div class="tit11">
		                                                     用户其他文档
		            </div>
					<@other_list debugName="用户其他文档" userId="${document.S_USER}" docId="${document.DOCUMENT_ID}" count="10">
		            <ul class="list_padd">
		            	<#list tag_list as doc>
		                <li> 
		                    <a href="javascript:doView('${doc.DOCUMENT_ID}', '${doc.DOCUMENT_TITLE}');">${doc.DOCUMENT_TITLE}</a>
		                </li>
						</#list>
		            </ul>
					</@other_list>
		        </div>
		        <!-- 用户其他文档_end-->
				<!-- 文辑推荐_begin-->
		        <div class="xu_bor6 mb15">
		            <div class="tit11">
		                                                          文辑推荐
		            </div>
		            <ul id="tab03_Content0" class="list_padd tab01Cont" style="display: block;">
		                
		            </ul>
					<script type="text/javascript">
						//查询当前文档所有关系的文辑，如果有显示，没有不显示
						var param = {
							"DOCUMENT_ID":"${document.DOCUMENT_ID}",
							"LIST_STATUS":2,
							"_ROWNUM_":5
						};
						var data = top.FireFly.doAct("SY_COMM_WENKU_DOCLIST_ITEM","finds",param,false);
						if(data['_DATA_'].length==0){
							jQuery("#tab03_Content0").parent().hide();
						}
						jQuery.each(data['_DATA_'],function(index,docL){
							jQuery("#tab03_Content0").append(
								jQuery("<li></li>").append(
									jQuery("<a></a>").attr("title",docL.LIST_TITLE)
													.attr("href","javascript:doDocList('"+docL.LIST_ID+"','"+docL.LIST_TITLE+"')")
													.text(docL.LIST_TITLE)
								).append("<br/><font color='#aaa'>所有者："+docL.LIST_UNAME+"</font>")
							);
						});
					</script>
		        </div>
				<!-- 文辑推荐_end-->
		    </td></tr>
		</table>
		<style type="text/css">
			#d-top {
			    bottom: 10px;
			    float: right;
			    position: fixed;
			    right: 20px;
			    z-index: 10;
			}
		</style>
		<div id="d-top">
			<a title="回到顶部" onclick="javascript:document.body.scrollTop=0;document.documentElement.scrollTop=0;parent.document.body.scrollTop=0;parent.document.documentElement.scrollTop=0;this.blur();return false;" href="#">
				<img alt="TOP" src="/sy/comm/news/img/top.png">
			</a>
		</div>    
    </body>
</html>
