/**
 *  分页获取某新闻评论内容
 */
GLOBAL.namespace("rh.vi");

rh.vi.zhidao_comment = function(options) {
	var defaults={
		id:options.sId+"-rhCommentView",
		"SERV_ID":"SY_COMM_ZHIDAO",
		"NOWPAGE":0,
		"SHOWNUM":10,
		"DATA_ID":"",
		"COMMENT_SERV":"SY_SERV_COMMENT",
		"SAVE_METHOD":"reply",
		pCon:""
	}
	this.opts = jQuery.extend(defaults,options);
	this._id = this.opts.id;
	this._pCon = this.opts.pCon;
	this._data = 0;
	this.servId = this.opts.SERV_ID;
	this.dataId = this.opts.DATA_ID;
	this.nowPage = this.opts.NOWPAGE;
	this.showNum = this.opts.SHOWNUM;
	//评论服务
	this.COMMENT_SERV = this.opts.COMMENT_SERV;
	//评论服务保存方法名
	this.SAVE_METHOD = this.opts.SAVE_METHOD;
	this.pages = 0;
	this._replyId = "";
	
	//初始化当前数据页数
	if (this.nowPage > 0) {
		this.nowPage = 0;
	}
	this.loaded = false;
	
}

rh.vi.zhidao_comment.prototype.show = function() {
	var _self = this;
	_self.loaded = true;
	
	//获取数据
	this._loadComment();
}
/**
 * 创建Editor
 */
rh.vi.zhidao_comment.prototype.createEditor = function(id) {
	
	// 初始化editor
	var fileUrl = "/file/";
	var params = "?SERV_ID=" + this.SERV_ID + "&DATA_ID=" + this.DATA_ID + "&FILE_CAT=";

	// 简单模式
//	toolbars = [
//                ['undo', 'redo', 'bold', 'italic', 'underline', 'strikethrough', 'link', 'unlink', 'insertimage', 'emotion', '|','attachment', 'map']
//          ];
//	
//	var config = {
//		// 比容器宽两像素
//		initialFrameWidth:"100%"			// 初始化编辑器宽度
//		,initialFrameHeight:193 			// 初始化编辑器高度
//		,minFrameHeight:0					// 最小高度
//		,autoHeightEnabled:false			// 关闭默认长高，使用滚动条
//		,zIndex:1050						// 编辑器层级的基数
//		,imageUrl:RHFile.uploadUrl.imageUrl + params + "IMAGE_CAT"            			// 图片上传提交地址
//	    ,scrawlUrl:RHFile.uploadUrl.scrawlUrl + params + "SCRAWL_IMG_CAT"           	// 涂鸦上传地址
//	    ,fileUrl:RHFile.uploadUrl.fileUrl + params +  "ATTACHMENT_CAT"            		// 附件上传提交地址
//	    ,catcherUrl:RHFile.uploadUrl.catcherUrl + params + "REMOTE_IMG_CAT"   			// 处理远程图片抓取的地址
//	    ,imageManagerUrl:RHFile.uploadUrl.imageManagerUrl + params						// 图片在线管理的处理地址
//	    ,snapscreenHost: '127.0.0.1'                    						// 屏幕截图的server端文件所在的网站地址或者ip，请不要加http://
//	    ,snapscreenServerUrl:RHFile.uploadUrl.snapscreenServerUrl + "SNAP_IMG_CAT" 	// 屏幕截图的server端保存程序，UEditor的范例代码为“URL +"server/upload/jsp/snapImgUp.jsp"”
//	    ,wordImageUrl:RHFile.uploadUrl.wordImageUrl + params + "WORD_IMG_CAT"         	// word转存提交地址
//	    ,getMovieUrl:RHFile.uploadUrl.getMovieUrl + params + "MOVIE_CAT"             	// 视频数据获取地址
//	    ,imagePath:fileUrl                // 图片修正地址，引用了fixedImagePath,如有特殊需求，可自行配置
//	    ,scrawlPath:fileUrl               // 图片修正地址，同imagePath
//	    ,filePath:fileUrl                 // 附件修正地址，同imagePath
//	    ,catcherPath:fileUrl              // 图片修正地址，同imagePath
//	    ,imageManagerPath:fileUrl         // 图片修正地址，同imagePath
//	    ,snapscreenPath:fileUrl			  // 图片修正地址，同imagePath
//	    ,wordImagePath:fileUrl            // 图片修正地址，同imagePath
//	    ,toolbars:toolbars
//	    ,initialContent:''
//	    ,maximumWords:2000 
//	};
//	
	//var editor = UE.getEditor(id, config).ready(function(){});
};
/** 
 * 加载评论数据
 */
rh.vi.zhidao_comment.prototype._loadComment = function() {
	var _self = this;
	//获取数据 
	var param = {};
	param["SERV_ID"] = this.servId;
	param["DATA_ID"] = this.dataId;
	param["NOWPAGE"] = this.nowPage + 1;
	param["SHOWNUM"] = this.showNum;
	param["_extWhere"] = " and C_STATUS=1";
	param["ORDER"] = "S_CTIME ASC";
	var data = top.FireFly.doAct("SY_SERV_COMMENT","getCommentList",param);
	
	var pageBean = data['_PAGE_'];
	this.nowPage = Number(pageBean.NOWPAGE);
	this.pages = Number(pageBean.PAGES);
	if (this.nowPage >= this.pages) {
		 _self.moreBtn.unbind().text("评论已全部加载!").attr("id","nomore");
	}
	
	jQuery.each(data['_DATA_'],function(index,comment){

		var item = jQuery("<div class='zm-item-comment'></div>").appendTo(_self.listContainer);
		//评论人
		var user = jQuery("<a title='" +comment.S_USER__NAME + "' class='zm-item-link-avatar' href='#'></a>").appendTo(item);
		var img = jQuery("<img class='zm-item-img-avatar'>").appendTo(user);
		img.attr("src","/file/"+comment.S_USER__IMG);
		
		//评论头 用户信息
		var contentWarp = jQuery("<div class='zm-comment-content-wrap'></div>").appendTo(item);
		var header = jQuery("<div class='zm-comment-hd'>").appendTo(contentWarp);
		  jQuery("<a href='#' class='zg-link' title='" + comment.S_USER__NAME + "'></a>").text(comment.S_USER__NAME).appendTo(header);
		  if (comment.REPLY_TO && comment.REPLY_TO_USER) {
			  jQuery("<span class='desc'>回复 </span>").appendTo(header);
			 //显示回复目标信息 
				var replyToUser = comment.REPLY_TO_USER;
				jQuery("<a href='#' class='zg-link' title='" + replyToUser.USER_NAME + "'></a>").text(replyToUser.USER_NAME).appendTo(header);
		  }
		  
		//评论内容
		var content = jQuery("<div class='zm-comment-content'></div>").appendTo(contentWarp);  
		content.text(comment.C_CONTENT);
		 
		//评论尾 按钮区域
		var footer = jQuery("<div class='zm-comment-ft'></div>").appendTo(contentWarp);
		var time = jQuery("<span class='date'>2013-03-23</span></span>").appendTo(footer);
		var likeVoteCount = 0;
		if (comment.LIKE_VOTE) {
			likeVoteCount = comment.LIKE_VOTE;
		}
		
		
		//回复 按钮 
		var reply = jQuery("<a class='reply zm-comment-op-link' name='reply_comment'><i class='zg-icon zg-icon-comment-reply'></i>回复</a>").appendTo(footer);
		reply.bind("click", function() {
		 _self._replyId = comment.C_ID;
		 //编辑内容
		 var replyDiv = jQuery("<div class='zm-comment-form zm-comment-form-editing' style=''></div>").appendTo(contentWarp);
		 var wrap = jQuery("<div class='zm-comment-editable-wrap'></div>").appendTo(replyDiv);
		 var replyCont = jQuery("<div contenteditable='true' aria-label='写下你的回复' class='zm-comment-editable editable' g_editable='true'></div>").appendTo(wrap);
		 var replyBtn = jQuery("<div class='zm-command zg-clear'></div>").appendTo(replyDiv);
		 var replySubBtn = jQuery("<a class='zm-comment-submit zg-right zg-btn-blue' href='javascript:;'>评论</a>").appendTo(replyBtn);
		 var replyCanBtn = jQuery("<a class='zm-comment-close zm-command-cancel' href='javascript:;'>取消</a>").appendTo(replyBtn);
		 //提交回复
		 replySubBtn.bind("click", function() {
			 var replyText = "#回复x楼#" + replyCont.text();
			 _self.submit(comment.C_ID, replyText)
	      });			
		 
		 //取消回复
		 replyCanBtn.bind("click", function() {
			 replyDiv.remove();
	      });	
		 
      });
		
		//支持 按钮
		var likeVote = jQuery("<a class='like zm-comment-op-link' name='like_comment'><i class='zg-icon zg-icon-comment-like'></i>赞 </a> ").appendTo(footer);
		likeVote.bind("click", function() {
			var data = {};
			data["_PK_"] = comment.C_ID;
			var resultData = parent.FireFly.doAct("SY_SERV_COMMENT", "increaseLikevote", data);
			if (resultData["_MSG_"] && resultData["_MSG_"].indexOf("OK") == 0) {
				var afterVote = Number(likeVoteCount) + 1;
				likeVote.unbind();
				likeVote.text("已赞");
				Tip.show("操作成功!");
			} else {
				Tip.showError(resultData["_MSG_"], true);
			}
		});
		
		//是否当前用户
		if(parent && comment.S_USER==parent.System.getVar("@USER_CODE@")){
		//删除按钮
		var delBtn = jQuery("<a name='delcomment' class='del zm-comment-op-link' ><i class='zg-icon zg-icon-comment-del'></i>删除</a>").appendTo(footer);
		delBtn.bind("click", function() {
			if (confirm("确认删除？")) {
				var data = {};
 				data["_PK_"] =  comment.C_ID;
				var resultData = parent.FireFly.doAct("SY_SERV_COMMENT", "delete", data);
				if (resultData[UIConst.RTN_MSG] && resultData[UIConst.RTN_MSG].indexOf(UIConst.RTN_OK) == 0) {
			  		Tip.show("删除成功!");
			  		//刷新页面
			  		_self.refresh();
				} else {
					Tip.showError(resultData[UIConst.RTN_MSG], true);
				}
			}
			return false;
	    });
		}
		
		
		
		//支持人数
		if (0 < likeVoteCount) {
		 jQuery("<span data-tip='s$r$" + likeVoteCount + " 人觉得这个很赞' class='like-num  '> <em>" + likeVoteCount + "</em><span>赞</span></span>").appendTo(footer);
		}
		
		
//		//删除
//		var deleteBtn = jQuery("<a></a>").text("删除").addClass("modify").appendTo(top);
//		deleteBtn.bind("click", function() {
//			if (confirm("确认删除？")) {
//				var data = {};
// 				data["_PK_"] =  comment.C_ID;
//				var resultData = parent.FireFly.doAct("SY_SERV_COMMENT", "delete", data);
//				if (resultData[UIConst.RTN_MSG] && resultData[UIConst.RTN_MSG].indexOf(UIConst.RTN_OK) == 0) {
//			  		Tip.show("删除成功!");
//			  		//刷新页面
//			  		_self.refresh();
//				} else {
//					Tip.showError(resultData[UIConst.RTN_MSG], true);
//				}
//			}
//			return false;
//	    });		
		
	
	
		
		
		
//		
//		
//		
//		//用户头像
//		var userIcon = jQuery("<img width='100' height='100'/>").attr("src","/file/"+comment.S_USER__IMG)
//						.attr("alt",comment.S_USER__NAME)
//						.bind("click", function(event){
//							 new parent.rh.vi.userInfo(event, comment.S_USER);
//						});
//		//评论人
//		var user = jQuery("<div></div>").addClass("user_info").append(
//						jQuery("<div></div>").addClass("authi").text(comment.S_USER__NAME)
//					);
//		
//		//N楼
//		var replyIndex = (_self.nowPage -1) *  _self.showNum  + (index + 1) ;
//		
//		var floor = jQuery("<strong></strong>").append(
//						jQuery("<em></em>").text(replyIndex+"#")
//					);
//		
//		//评论时间
//		var timeago = "";
//		var time = jQuery("<span></span>").addClass("ct").attr("title",comment.S_CTIME)
//			.html("发表于<em>"+timeago+"</em>");
//		
//		var top = jQuery("<div></div>").addClass("top");
//		//是否当前用户
//		if(comment.S_USER==parent.System.getVar("@USER_CODE@")){
//			//修改
//			var modifyBtn = jQuery("<a></a>").text("修改").addClass("modify").appendTo(top);
//			modifyBtn.bind("click", function(event) {
//				
//				if (_self.modifyEditor) {
//					_self.modifyEditor.destroy();
//					_self.modifyEditor = null;
//				}
//				
//				var modifyArea = "modify_" + comment.C_ID;
//				//修改意见弹出框
//				var dialog = jQuery("<div><textarea id='" + modifyArea + "'></textarea></div></div>").addClass("dictDialog").attr("title","修改评论");
//				dialog.appendTo(jQuery("body"));
//				
//				var hei = 300;
//				var wid = 600;
//				
//				var scroll = Window.getScroll(parent.window);
//			    var viewport = Window.getViewPort(parent.window);
//			    var top = scroll.top + viewport.height / 2 - hei / 2 - 88;
//				
//				var posArray = ["", top];
////			    if (event) {
////				    var cy = event.clientY;
////				    posArray[0] = "";
////				    posArray[1] = cy-280;
////			    }
////			    
//				dialog.dialog({
//					autoOpen: true,
//					height: hei,
//					width: wid,
//					show: "bounce", 
//			        hide: "puff",
//					modal: true,
//					resizable: false,
//					position: posArray,
//					buttons: {
//						"保存": function() {
//					    	var data = {};
//					    	data["_PK_"] = comment.C_ID;
//					    	data["C_CONTENT"] = _self.modifyEditor.getContent();
//					    	var resultData = parent.FireFly.doAct("SY_SERV_COMMENT", "updateReply", data);
//					    	if (resultData[UIConst.RTN_MSG] && resultData[UIConst.RTN_MSG].indexOf(UIConst.RTN_OK) == 0) {
//					      		Tip.show("保存成功!");
//					      		_self.modifyEditor.destroy();
//					      		_self.modifyEditor = null;
//					      		dialog.remove();
//					      		//刷新页面
//					      		_self.refresh();
//					    	} else {
//					    		Tip.showError(resultData[UIConst.RTN_MSG], true);
//					    	}
//						},
//						"关闭": function() {
//							_self.modifyEditor.destroy();
//				      		_self.modifyEditor = null;
//							dialog.remove();
//						}
//					}
//				});
//				// 注释掉头部关闭按钮
//				dialog.parent().find(".ui-dialog-titlebar-close").hide();
//				var btns = jQuery(".ui-dialog-buttonpane button",dialog.parent()).attr("onfocus","this.blur()");
//				btns.first().addClass("rh-small-dialog-ok");
//				btns.last().addClass("rh-small-dialog-close");
//				dialog.parent().addClass("rh-small-dialog").addClass("rh-bottom-right-radius");
//			    jQuery(".ui-dialog-titlebar").last().css("display","block");//设置标题显示
//			
//		//		_self.createEditor(modifyArea);
//		//		_self.modifyEditor = UE.getEditor(modifyArea);
//				
//				// 获取引用数据
//				var modifyContent = "";
//				if (comment.REPLY_TO) {
//					var data = {};
//					data["C_ID"] =  comment.C_ID;
//					data["_PK_"] =  comment.C_ID;
//					var replyComment = parent.FireFly.doAct("SY_SERV_COMMENT", "byid", data);
//					var replyNumber = replyComment.C_NUMBER;
//					modifyContent = "#回复 " + replyNumber +"楼# ";
//				}
//				
//				// 截取原始评论内容
//				var content = comment.C_CONTENT;
//				var subIndex = content.lastIndexOf("[/quote]");
//				if (0 < subIndex) {
//					content = content.substring(subIndex + "[/quote]".length);
//				}
//				
//				modifyContent += content;
//				_self.modifyEditor.setContent(modifyContent);
//				_self.modifyEditor.focus(true);
//				
//				return false;
//		    });
//			//删除
//			var deleteBtn = jQuery("<a></a>").text("删除").addClass("modify").appendTo(top);
//			deleteBtn.bind("click", function() {
//				if (confirm("确认删除？")) {
//					var data = {};
//	 				data["_PK_"] =  comment.C_ID;
//					var resultData = parent.FireFly.doAct("SY_SERV_COMMENT", "delete", data);
//					if (resultData[UIConst.RTN_MSG] && resultData[UIConst.RTN_MSG].indexOf(UIConst.RTN_OK) == 0) {
//				  		Tip.show("删除成功!");
//				  		//刷新页面
//				  		_self.refresh();
//					} else {
//						Tip.showError(resultData[UIConst.RTN_MSG], true);
//					}
//				}
//				return false;
//		    });
//		}		
//		
//		//评论内容	
//		var content = jQuery("<div></div>");
//		var test = content;
//		function do_quote(str) {
//			var result = _self._get_quot(str);
//			if (result.quote) {
//				test = jQuery("<div class='quote_content'></div>").html(result.quote).appendTo(test);
//			} else {
//				test = jQuery("<blockquote></blockquote>").appendTo(jQuery("<div class='quote'></div>").appendTo(test));
//				var start = result.start_content;
//				start["time"] = start["time"].substring(0, 19);
//				var quote = start["quote"];
//				var time = start["time"];
//				var user = start["user"] || "";
//				var user_name = user;
//				var user_img = "";
//				
//				//用户信息替换
//				var users = data["COMMENT_USERS"];
//				for(var i=0; i<users.length; i++){
//					if(user==users[i].USER_CODE){
//						user_name = users[i].USER_NAME;
//						user_img = users[i].USER_IMG;
//						break;
//					}
//				}				
//				
//				test.before(
//						jQuery("<img width='30' height='30' style='float:left;margin:0 10px 10px 0;' />").attr("src","/file/"+user_img)
//				).before(
//					jQuery("<div></div>").html(quote+" "+user_name+" 在 <span title='"+start['time']+"' style='color:#F26C4F;'>"+time+"</span> 说：")
//				)
//				test.parent().parent().append(
//					jQuery("<div></div>").html(result.end_content)
//				)
//				do_quote(result.str);
//			}
//		}
//		do_quote(comment.C_QUOTE_CONTENT+comment.C_CONTENT);
//		
//		//支持
//		var likeVoteCount = 0;
//		if (comment.LIKE_VOTE) {
//			likeVoteCount = comment.LIKE_VOTE;
//		}
//		var likeVote = jQuery("<a style='visibility: visible;'></a>").attr("href","javascript:;")
//					   .text(likeVoteCount+"人支持");
//		likeVote.bind("click", function() {
//			var data = {};
//			data["_PK_"] = comment.C_ID;
//			var resultData = parent.FireFly.doAct("SY_SERV_COMMENT", "increaseLikevote", data);
//			if (resultData["_MSG_"] && resultData["_MSG_"].indexOf("OK") == 0) {
//				var afterVote = Number(likeVoteCount) + 1;
//				likeVote.text(afterVote + "人支持");
//				likeVote.unbind();
//		  		Tip.show("操作成功!");
//			} else {
//				Tip.showError(resultData["_MSG_"], true);
//			}
//	    });
//		
//		//反对
//		var dislikeVoteCount = 0;
//		if (comment.DISLIKE_VOTE) {
//			dislikeVoteCount = comment.DISLIKE_VOTE;
//		}
//		var dislikeVote = jQuery(dislikeVoteCount+"人<a style='visibility: visible;'></a>")
//						  .attr("href","javascript:;")
//						  .text(dislikeVoteCount+"人反对");
//		dislikeVote.bind("click", function() {
//			var data = {};
//			data["_PK_"] = comment.C_ID;
//			var resultData = parent.FireFly.doAct("SY_SERV_COMMENT", "increaseDislikevote", data);
//			if (resultData["_MSG_"] && resultData["_MSG_"].indexOf("OK") == 0) {
//				var afterVote = Number(dislikeVoteCount) + 1;
//				dislikeVote.text(afterVote + "人反对");
//				dislikeVote.unbind();
//		  		Tip.show("操作成功!");
//			} else {
//				Tip.showError(resultData["_MSG_"], true);
//			}
//	    });
//		
//		//回复
//		var reply = jQuery("<a style='visibility: visible;'></a>").attr("href","javascript:;").text("回复");
//		reply.bind("click", function() {
//			// _self.editor.setContent("#回复" + replyIndex + "楼#");
//			// _self.editor.focus(true);
//			 _self._replyId = comment.C_ID;
//	    });
//		
//		//每一项
//		var item = jQuery("<div id='post"+index+"'></div>").append(
//			jQuery("<table></table>").append(
//				jQuery("<tr></tr>").append(
//					jQuery("<td></td>").addClass("pls").append(
//						jQuery("<div></div>").append(
//							jQuery("<div></div>").addClass("avatar").append(
//								jQuery("<div></div>").addClass("qz_feed_avatar f_user_head").append(
//									jQuery("<a></a>").addClass("q_namecard f_user_avatar").append(
//										jQuery("<span></span>").addClass("skin_portrait_round")
//									).append(userIcon)
//								).append(user)
//							)
//						)
//					)
//				).append(
//					jQuery("<td></td>").addClass("plc_1").append(
//						jQuery("<div></div>").addClass("plc").append(
//							jQuery("<div></div>").addClass("arrow_l")
//						).append(
//							jQuery("<div></div>").addClass("pi mtn")
//							.append(floor).append(top).append(
//								jQuery("<div></div>").addClass("pti").append(
//									jQuery("<div></div>").addClass("pdbt")
//								).append(
//									jQuery("<div></div>").addClass("authi xg1").append(time)
//								)
//							)
//						).append(
//							jQuery("<div></div>").addClass("pct").append(
//								jQuery("<div></div>").addClass("pcb").append(
//									jQuery("<div></div>").addClass("t_fsz").append(
//										jQuery("<table cellspacing='0' cellpadding='0'></table>").append(
//											jQuery("<tr></tr>").append(
//												jQuery("<td></td>").addClass("t_f").append(content)
//											)
//										)
//									)
//								)
//							)
//						).append(
//							jQuery("<div></div>").addClass("po pbm").attr("id","po_1").append(
//								jQuery("<div></div>").addClass("pob cl").append(
//									jQuery("<p></p>").append(reply).append(likeVote).append(dislikeVote)
//								)
//							)
//						)
//					)
//				)
//			).append(
//				jQuery("<tr></tr>").addClass("ad").append(
//					jQuery("<td></td>").addClass("pls")
//				).append(
//					jQuery("<td></td>").addClass("plc")
//				)
//			)
//		);
//		item.appendTo(_self.listContainer);
	});	 
	
	//当前用户
	var user = parent.System.getVar("@USER_CODE@");
	var user_img = "";
	//用户信息替换
	var users = data["COMMENT_USERS"];
	for(var i=0; i<users.length; i++){
		if(user==users[i].USER_CODE){
			user_img = users[i].USER_IMG;
			break;
		}
	}
	jQuery("#currentUser").attr("src","/file/"+user_img);
};



/**
 * submit
 */
rh.vi.zhidao_comment.prototype.submit = function(replyId, content) {
	var _self = this;
	
	if (content.length == 0) {
		alert("请输入内容!");
		return;
	}
	var data = {};
	data["SERV_ID"] = _self.servId;
	data["DATA_ID"] = _self.dataId;
	data["C_CONTENT"] = content;
	data["REPLY_TO"] = replyId;
	data["S_CTIME"] = rhDate.getTime();
	var resultData = top.FireFly.doAct(_self.COMMENT_SERV, _self.SAVE_METHOD, data);
	if (resultData["_MSG_"] && resultData["_MSG_"].indexOf("OK") == 0) {
  		top.Tip.show("保存成功!");
  		//刷新页面
  		_self.refresh();
  		//_self.editor.setContent("");
	} else {
		Tip.showError(resultData["_MSG_"], true);
	}
};

/*
 * 刷新
 */
rh.vi.zhidao_comment.prototype.refresh = function() {
	var _self = this;
	_self.reset();
	_self.show();
};


/**
 * 重置
 */
rh.vi.zhidao_comment.prototype.reset = function() {
	var _self = this;
	_self.listContainer.empty();
	_self._replyId = "";
	_self.nowPage = 0;
};


/*
 * 构建列表页面布局
 */
rh.vi.zhidao_comment.prototype.layout = function() {
	var _self = this;
	
	jQuery("<i class='icon icon-spike zm-comment-bubble'></i>").appendTo(_self._pCon);
	var commentList = jQuery("<div class='zm-comment-list'></div>").appendTo(_self._pCon);
	//列表页面
	_self.listContainer = commentList;
	
	
	//更多评论加载
	var moreBtn = jQuery("<a name='load-more' class='load-more' href='javascript:;'></a>").appendTo(_self._pCon);
	jQuery("<span class='text'>加载更多评论<img class='spinner' src='/sy/comm/zhidao/zhihu_style_files/spinner2_002.gif'></span>").appendTo(moreBtn);
	 moreBtn.bind("click", function() {
		 _self._loadComment();
     });
    _self.moreBtn = moreBtn;

	//评论框
		var form = jQuery("<div class='zm-comment-form zm-comment-box-ft zm-comment-form-expanded'></div>").appendTo(_self._pCon);
		var content = jQuery("<div aria-label='写下你的评论…' class='zm-comment-editable editable' contenteditable='true'></div>").appendTo(form);
		var btns = jQuery("<div class='zm-command zg-clear'></div>").appendTo(form);
		var addBtn = jQuery("<a href=''#' name='addnew' class='zg-right zg-btn-blue'></a>").text("评论").appendTo(btns);
		addBtn.bind("click", function() {
			  var commentText = content.text();
			 _self.submit("", commentText)
	      });		
		
		var cancelBtn = jQuery("<a href='#' name='closeform' class='zm-command-cancel'></a>").text("取消").appendTo(btns);
		jQuery("<div class='zm-comment-info'></div>").appendTo(form);
		
	 
//	 this.createEditor("comment_content");
//	 this.editor = UE.getEditor("comment_content"); 
};

/**
 * 评论面板是否已渲染
 */
rh.vi.zhidao_comment.prototype.isShow = function() {
	var _self = this;
	return _self.loaded ;
}

/**
 * 清空布局
 */
rh.vi.zhidao_comment.prototype.remove = function() {
	var _self = this;
	//列表页面
	_self.listContainer.remove();
	_self._pCon.empty();
	_self.reset();
	_self.loaded = false;
};



//对引用内容进行解析
rh.vi.zhidao_comment.prototype._get_quot = function(str) {
	if(!str){
		return {
			"quote" : ""
		};
	}
	var start1 = str.indexOf("[");
	var start2 = str.indexOf("]");
	var end = str.lastIndexOf("[/quote]");

	if (start1<0 || start2<0 || end<0 ) {
		return {
			"quote" : str
		};
	}

	else {
		return {
			"start_content" : getObject(str.substring(start1 + 1, start2)),
			"end_content" : str.substring(end + 8),
			"str" : str.substring(start2 + 1, end)
		}
	}
	
	function getObject(content) {
		var returnObject = {};
		var jsons = content.split(",");
		for(var i=0; i<jsons.length; i++){
			var json = jsons[i].split("=");
			returnObject[json[0]] = json[1];
		}
		return returnObject;
	}
};

//对主题进行修改
rh.vi.zhidao_comment.prototype.modifyTopic = function(obj){
	var _self = this;
	obj.unbind("click").click(function(event){
		
		if (_self.modifyEditor) {
			_self.modifyEditor.destroy();
			_self.modifyEditor = null;
		}
		
		var modifyArea = "modify_${topic.TOPIC_ID}";
		//修改意见弹出框
		var dialog = jQuery("<div><textarea id='" + modifyArea + "'></textarea></div></div>").addClass("dictDialog").attr("title","修改主题");
		dialog.appendTo(jQuery("body"));
		
		var hei = 300;
		var wid = 900;
		
		var scroll = Window.getScroll(parent.window);
	    var viewport = Window.getViewPort(parent.window);
	    var top = scroll.top + viewport.height / 2 - hei / 2 - 88;
		
		var posArray = ["", top];
	  
		dialog.dialog({
			autoOpen: true,
			height: hei,
			width: wid,
			show: "bounce", 
	        hide: "puff",
			modal: true,
			resizable: false,
			position: posArray,
			buttons: {
				"保存": function() {
			    	var data = {};
			    	data["_PK_"] = _self.dataId;
			    	data["TOPIC_BODY"] = _self.modifyEditor.getContent();
			    	var resultData = parent.FireFly.doAct("SY_COMM_BBS_TOPIC", "save", data);
			    	if (resultData[UIConst.RTN_MSG] && resultData[UIConst.RTN_MSG].indexOf(UIConst.RTN_OK) == 0) {
			      		Tip.show("保存成功!");
			      		_self.modifyEditor.destroy();
			      		_self.modifyEditor = null;
			      		dialog.remove();
			      		//刷新页面
			      		window.location.reload();
			    	} else {
			    		Tip.showError(resultData[UIConst.RTN_MSG], true);
			    	}
				},
				"关闭": function() {
					_self.modifyEditor.destroy();
		      		_self.modifyEditor = null;
					dialog.remove();
				}
			}
		});
		// 注释掉头部关闭按钮
		dialog.parent().find(".ui-dialog-titlebar-close").hide();
		var btns = jQuery(".ui-dialog-buttonpane button",dialog.parent()).attr("onfocus","this.blur()");
		btns.first().addClass("rh-small-dialog-ok");
		btns.last().addClass("rh-small-dialog-close");
		dialog.parent().addClass("rh-small-dialog").addClass("rh-bottom-right-radius");
	    jQuery(".ui-dialog-titlebar").last().css("display","block");//设置标题显示

	//	_self.createEditor(modifyArea);
	//	_self.modifyEditor = UE.getEditor(modifyArea);
		
		// 获取主题内容
		var modifyContent = "";
		var data = {
			"_PK_":_self.dataId,
			"TOPIC_ID":_self.dataId,
			"_SELECT_":"TOPIC_BODY"
		};
		
		var resultData = parent.FireFly.doAct("SY_COMM_BBS_TOPIC", "byid", data);
		if(resultData.TOPIC_BODY){
			modifyContent = resultData.TOPIC_BODY;
		}
		_self.modifyEditor.setContent(modifyContent);
		_self.modifyEditor.focus(true);
		
		return false;
	});
};
