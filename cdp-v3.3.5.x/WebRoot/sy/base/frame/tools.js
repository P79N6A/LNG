/**平台级工具类，工具类方法，方法目录
 * -----------------$-----------------------
 * jQuery.parseJSON(jsonStr); //将字符串转化成json
 * jQuery.toJSON(jsonObj);//将json转化成字符串
 * jQuery.contextmenu();//右键菜单
 * jQuery.textSearch(str, options);  //高亮页面文本
 * jQuery.evalJSON(); //--------------
 * jQuery.secureEvalJSON();//-----
 * jQuery.quoteString(str);//-------
 * jQuery.extend(opts,default);//合并两个对象
 * jQuery.timeago(timeago);//给定时间，返回字面显示，如返回“刚刚”，“2分钟前”，“昨天”等
 * JsonToStr(obj);//将json转化成字符串，不推荐使用
 * StrToJson(str);//将字符串转化成对象，不推荐使用
 * "字符串".format(); //替换字符串中含{}的字符
 * -----------------rhDate------------------
 * rhDate.getCurentTime(); //获取系统当前时间，返回结果：2013-01-23 16:28    
 * rhDate.stringToDate();//将时间格式的字符串转化成时间
 * rhDate.getDateTime(); //获取系统当前时间
 * rhDate.getAreaDate(); //根据小时获取当前系统的中文区块时间
 * rhDate.doDateDiff();  //求时间差
 * rhDate.nextDate();  //某个日期减去天数得到另外一个日期
 * rhDate.getTime();//取得格式化事件 2012-03-01 07:06:02
 * rhDate.pattern(fmt,dateStr);//日期格式化，根据格式化类型，返回日期字符串;
 * 1.rhDate.pattern('yyyy/MM/dd');返回当前时间日期格式化
 * 2.可以将一个时间字符串转化成另外的格式，例如：rhDate.pattern('yyyy/MM/dd','2013-03-27');返回的是2013/03/27
 * rhDate.dateDiff(strInterval, dtEnd);//获取传入时间与当前时间差 dateDiff("d","2013-1-28"),返回当前时间与2013-1-28相差天数，
 															//参数d表示天，也可以是y表示年，则返回相差年数
 * -----------------Cookie------------------
 * Cookie.get(cookName);//读cookie操作,参数：cookie名称 返回值：字符串
 * Cookie.set(sName, sValue, oExpires, sPath, sDomain, bSecure);//写cookie操作 sName：cookie名称.sValue：cookie值,oExpires：过期时间
 * Cookie.del(sName);//删除cookie操作sName ：cookie名称
 
 * -----------------Tip---------------------
 * Tip.show(msg, parentFlag, scopeObj);//提示信息条，定时会隐藏, msg显示顶部提示信息,parentFlag 父层对象的标识
 * Tip.showAttention(msg, parentFlag, scopeObj);//提示信息条，定时会隐藏,msg 显示顶部提示信息,parentFlag 父层对象的标识
 * Tip.showError(msg, parentFlag, scopeObj);//提示信息条，定时会隐藏,msg显示顶部提示信息,parentFlag父层对象的标识
 * Tip.showLoad(msg, parentFlag, appendObj, timeout, scopeObj);//加载信息提示,msg显示顶部提示信息, parentFlag父层对象的标识
 * Tip.clear();//外层清除提示信息
 * Tip.clearLoad();//删除加载提示信息条
 
 * ------------------Format------------------
 * Format.formatNum(str);//系统数据格式化方法
 * Format.clearNum(strNum);//去除逗号
 * Format.(size, fix, value) ;//------------------
 * Format.limit(size, value);//--------------
 * Format.substr(start, end, value);//截串
 * Format.replaceDblQuotes(str);// 双引号替换为空串
 * Format.replaceSinQuotes(str);//// 单引号替换为空串
 * Format.RMBCapital(number);//人民币大写转换,numberValue 人民币小写
 
 * -----------------Load--------------------
 * Load.js(pathUrl, viewer);//动态加载js，并执行,pathUrl js的路径viewer 列表/卡片js 中的 viewer 对象
 * Load.scriptJS(pathUrl);//动态加载js,放入骑到<script>标签，判断重复加载
 
 *------------------Tools-------------------
 * Tools.getFileSuffix(fileName);//取出文件扩展名
 * Tools.redirect(url);//重定位url
 * Tools.toMbIndex();//判断当前登录页面，如果为手机登录页则跳转
 * Tools.lTrim(val);//-----------
 * Tools.rTrim(val);//-----------
 * Tools.itemVarReplace(str, data);//系统字段级变量替换
 * Tools.systemVarReplace(str);//系统级变量替换
 * Tools.parVarReplace(str);//父层级级变量替换
 * Tools.rhSetBodyBack();//根据个性化的数据，设置背景的方法
 * Tools.xdocUrlReplace(url);//xdoc的url特殊处理替换
 * Tools.rhReplaceId(url);//替换菜单的info中的字符变量为id可用的字符等
 * Tools.rhReplaceHtmlTag(value);//html格式字符替换
 * Tools.getTreeLeafClass(dictId);//根据字典编号返回对应的叶子节点class
 
 *------------------Debug-------------------
 * Debug.add(text, event);//-----
 * Debug.clear();//------
 
 *------------------RHFile--------------=---
 * RHFile.uploadUrl //ueditor所用上传路径
 * RHFile.bldDestroyBase(viewObj);//存储cardview对象
 * RHFile.destroyFileFlashBug();//调用文件组件的destroy方法
 * RHFile.parProSon(frameId);//调用文件组件的destroy方法
 
 *------------------Browser-----------------
 * Browser.versions();//rh封装的判断浏览器类别,Browser.versions.iPad
 
 *------------------Select------------------
 * Select.usualContent(opts,viewer);//系统公用，弹出查询选择的常用语，可添加、修改、删除;viewer 页面上下文
 * Select.openSendSchem(target);//系统共用，分发方案查询选择框,target 接受选择值的dom对象名称，如：id~name
 
 *------------------Mouse-------------------
 * Mouse.getMousePoint(event);//获取鼠标在页面上的位置
 * Mouse.dialogCoordinate(x,y,width,height);//width 弹出框宽度，height 弹出框高度，x 鼠标x坐标，y鼠标y坐标
 * Mouse.diagonal(x1,y1,x2,y2);//面积，即鼠标与当前窗口围成的上下左右四块面积，用数学解决逻辑问题;
 															//x1,y1弹出框的宽高,x2,y2鼠标和最外边框组成的最大区域坐标
 * Mouse.getScrollTop();//获取当前窗口滚动条高度
 * Mouse.dialogPosition(event,width,height)//获取子页面的弹出框位置坐标，返回 position{"x":x,"y":y}
 
 *------------------Todo--------------------
 * Todo.dbClickGrid(viewer,grid);//响应双击Grid事件，打开待办,viewer 包含grid的Viewer对象,grid 被双击的grid对象
 * Todo.open(sId, title, url, con, todoId, objectID1);//打开待办
 * Todo.getCount ();//获取待办的总数量，如果数量有变化则调用pageView内方法动态更新下拉面板
 * Todo.get(num,rowNum);//代办的获取，系统顶部下拉面板内数据的获取
 * Todo.getData(rowNum);//代办的获取，系统顶部下拉面板内数据的获取
 * Todo.openEntity(_viewer);//对列表上选中行双击查看绑定事件,双击打开该选中行的服务卡片页面
 
 *------------------Window------------------
 * RHWindow.getViewPort(target);//获取指定window的可视区域尺寸
 * RHWindow.getScroll(target);//获取指定window的滚动条的信息
 * RHWindow.searchScrollBegin();//搜索部分启用外部滚动条的监听事件
 
 * -----------------RHWF------------------
 * RHWF.showLeaderMind(grid);//判断列表页中是否存在“S_HAS_PS_MIND”列，如果存在列并有值，则展示“对钩”的小图片。当鼠标放到小图片上后，显示领导意见。
 * RHWF.loadWfUserState(userStateCells, tableObj, colCode);//处理列表（平台或自定义table）数据中工作流活动节点用户状态字段S_WF_USER_STATE的值（本人的行增加属性变色、已看过的数据变色）。
 * RHWF.highLightOverTime(listHandler);//处理超时时间
 *------------------StringUtils--------------------
 * endWith(srcStr,str); //是否以指定字符串结束
 * starWith(srcStr,str); //是否以指定字符串开始
 *------------------其他--------------------
 * showRHDialog(title,content,func,handler,widHeiArray);//显示提示信息框通用方法,title 标题,content 内容,func 回调方法,handler 回调句柄
 * Stopwatch();//辅助调试计时器     

 */       
//window.onerror = function(errorMessage, scriptURL, lineNumber) {
//　　alert("", scriptURL, lineNumber)
//};
/**
 * 字符串转换成JSON对象:  jQuery.parseJSON(jsonStr);
 * 将JSON对象转成字符串:  jQuery.toJSON(jsonObj);
 */
(function($) {
	var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g, meta = {
		'\b' : '\\b',
		'\t' : '\\t',
		'\n' : '\\n',
		'\f' : '\\f',
		'\r' : '\\r',
		'"' : '\\"',
		'\\' : '\\\\'
	};
	$.toJSON = typeof JSON === 'object' && JSON.stringify ? JSON.stringify
			: function(o) {
				if (o === null) {
					return 'null';
				}
				var type = typeof o;
				if (type === 'undefined') {
					return undefined;
				}
				if (type === 'number' || type === 'boolean') {
					return '' + o;
				}
				if (type === 'string') {
					return $.quoteString(o);
				}
				if (type === 'object') {
					if (typeof o.toJSON === 'function') {
						return $.toJSON(o.toJSON());
					}
					if (o.constructor === Date) {
						var month = o.getUTCMonth() + 1, day = o.getUTCDate(), year = o
								.getUTCFullYear(), hours = o.getUTCHours(), minutes = o
								.getUTCMinutes(), seconds = o.getUTCSeconds(), milli = o
								.getUTCMilliseconds();
						if (month < 10) {
							month = '0' + month;
						}
						if (day < 10) {
							day = '0' + day;
						}
						if (hours < 10) {
							hours = '0' + hours;
						}
						if (minutes < 10) {
							minutes = '0' + minutes;
						}
						if (seconds < 10) {
							seconds = '0' + seconds;
						}
						if (milli < 100) {
							milli = '0' + milli;
						}
						if (milli < 10) {
							milli = '0' + milli;
						}
						return '"' + year + '-' + month + '-' + day + 'T'
								+ hours + ':' + minutes + ':' + seconds + '.'
								+ milli + 'Z"';
					}
					if (o.constructor === Array) {
						var ret = [];
						for ( var i = 0; i < o.length; i++) {
							ret.push($.toJSON(o[i]) || 'null');
						}
						return '[' + ret.join(',') + ']';
					}
					var name, val, pairs = [];
					for ( var k in o) {
						type = typeof k;
						if (type === 'number') {
							name = '"' + k + '"';
						} else if (type === 'string') {
							name = $.quoteString(k);
						} else {
							continue;
						}
						type = typeof o[k];
						if (type === 'function' || type === 'undefined') {
							continue;
						}
						val = $.toJSON(o[k]);
						pairs.push(name + ':' + val);
					}
					return '{' + pairs.join(',') + '}';
				}
			};
	$.evalJSON = typeof JSON === 'object' && JSON.parse ? JSON.parse
			: function(src) {
				return eval('(' + src + ')');
			};
	$.secureEvalJSON = typeof JSON === 'object' && JSON.parse ? JSON.parse
			: function(src) {
				var filtered = src
						.replace(/\\["\\\/bfnrtu]/g, '@')
						.replace(
								/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
								']').replace(/(?:^|:|,)(?:\s*\[)+/g, '');
				if (/^[\],:{}\s]*$/.test(filtered)) {
					return eval('(' + src + ')');
				} else {
					throw new SyntaxError(
							'Error parsing JSON, source is not valid.');
				}
			};
	$.quoteString = function(string) {
		if (string.match(escapeable)) {
			return '"'
					+ string.replace(escapeable, function(a) {
						var c = meta[a];
						if (typeof c === 'string') {
							return c;
						}
						c = a.charCodeAt();
						return '\\u00' + Math.floor(c / 16).toString(16)
								+ (c % 16).toString(16);
					}) + '"';
		}
		return '"' + string + '"';
	};
})(jQuery);
/**
 * 基于jQuery的右键菜单扩展，参数示例请看rh.ui.openTab.js
 */
(function(menu) {
    jQuery.fn.contextmenu = function(options) {
        var defaults = {
            offsetX : 2,        //鼠标在X轴偏移量
            offsetY : 2,        //鼠标在Y轴偏移量
            items   : [],       //菜单项
            action  : $.noop()  //自由菜单项回到事件
        };
        var opt = menu.extend(true, defaults, options);
        function create(e,obj) {
            var m = menu('<ul class="simple-contextmenu shadow127"></ul>').appendTo(document.body);
            menu.each(opt.items, function(i, item) {
                if (item) {
                    if(item.type == "split"){ 
                        menu("<div class='m-split'></div>").appendTo(m);
                        return;
                    }
                    var row   = menu('<li><a href="javascript:void(0)"><span></span></a></li>').appendTo(m);
                    item.icon ? menu('<img src="' + item.icon + '">').insertBefore(row.find('span')) : '';
                    item.text ? row.find('span').text(item.text) : '';
                    
                    if (item.action) {
                        row.find('a').click(function() {
                            item.action(e.target,obj);
                        });
                    }
                }
            });
            return m;
        }
        this.bind('contextmenu', function(e) {
            var m = create(e,jQuery(this)).show("fast");
            var left = e.pageX + opt.offsetX, top = e.pageY + opt.offsetY, p = {
                wh : menu(window).height(),
                ww : menu(window).width(),
                mh : m.height(),
                mw : m.width()
            }
            top = (top + p.mh) >= p.wh ? (top -= p.mh) : top;
            //当菜单超出窗口边界时处理
            left = (left + p.mw) >= p.ww ? (left -= p.mw) : left;
            m.css({
                zIndex : 10000,
                left : left,
                top : top
            });
            $(document.body).live('contextmenu click', function() {
                m.hide("fast",function(){
                    m.remove();
                });        
            });
            
            return false;
        });
        return this;
    }
})(jQuery);
/*
 * 文字高亮代码，有一个参数是必须的，就是你要搜索的关键字字符串（默认状况下，使用空格隔开可表示多个关键字），
 * 调用方式：jQuery(".test").textSearch("世界杯",{markColor: "blue"});
 */
(function($) {
	$.fn.textSearch = function(str, options) {
		var defaults = {
			divFlag : true,
			divStr : " ",
			markClass : "",
			markColor : "red",
			nullReport : true,
			callback : function() {
				return false;
			}
		};
		var sets = $.extend({}, defaults, options || {}), clStr;
		if (sets.markClass) {
			clStr = "class='" + sets.markClass + "'";
		} else {
			clStr = "style='color:" + sets.markColor + ";'";
		}
		// 对前一次高亮处理的文字还原
		$("span[rel='mark']").removeAttr("class").removeAttr("style")
				.removeAttr("rel");

		// 字符串正则表达式关键字转化
		$.regTrim = function(s) {
			var imp = /[\^\.\\\|\(\)\*\+\-\$\[\]\?]/g;
			var imp_c = {};
			imp_c["^"] = "\\^";
			imp_c["."] = "\\.";
			imp_c["\\"] = "\\\\";
			imp_c["|"] = "\\|";
			imp_c["("] = "\\(";
			imp_c[")"] = "\\)";
			imp_c["*"] = "\\*";
			imp_c["+"] = "\\+";
			imp_c["-"] = "\\-";
			imp_c["$"] = "\$";
			imp_c["["] = "\\[";
			imp_c["]"] = "\\]";
			imp_c["?"] = "\\?";
			s = s.replace(imp, function(o) {
				return imp_c[o];
			});
			return s;
		};
		$(this).each(
				function() {
					var t = $(this);
					str = $.trim(str);
					if (str === "") {
						alert("关键字为空");
						return false;
					} else {
						// 将关键字push到数组之中
						var arr = [];
						if (sets.divFlag) {
							arr = str.split(sets.divStr);
						} else {
							arr.push(str);
						}
					}
					var v_html = t.html();
					// 删除注释
					v_html = v_html.replace(/<!--(?:.*)\-->/g, "");

					// 将HTML代码支离为HTML片段和文字片段，其中文字片段用于正则替换处理，而HTML片段置之不理
					var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
					var a = v_html.match(tags), test = 0;
					$.each(a, function(i, c) {
						if (!/<(?:.|\s)*?>/.test(c)) {// 非标签
							// 开始执行替换
							$.each(arr, function(index, con) {
								if (con === "") {
									return;
								}
								var reg = new RegExp($.regTrim(con), "g");
								if (reg.test(c)) {
									// 正则替换
									c = c.replace(reg, "♂" + con + "♀");
									test = 1;
								}
							});
							c = c.replace(/♂/g,
									"<span rel='mark' " + clStr + ">").replace(
									/♀/g, "</span>");
							a[i] = c;
						}
					});
					// 将支离数组重新组成字符串
					var new_html = a.join("");

					$(this).html(new_html);

					if (test === 0 && sets.nullReport) {
						alert("没有搜索结果");
						return false;
					}

					// 执行回调函数
					sets.callback();
				});
	};
})(jQuery);

/**
 * 根据给定时间，返回与给定时间的字面显示，如返回“刚刚”，“2分钟前”，“昨天”等
 * jQuery.timeago(timeago)：参数timeago 
 * 可以是Date类型；
 * 可以是能转换成Date类型的字符串（如2012-12-26 11:33:27）；
 * 可以是数字（时间毫秒数）
 */
(function($) {
  $.timeago = function(timestamp) {
    if (timestamp instanceof Date) {
      return inWords(timestamp);
    } else if (typeof timestamp === "string") {
      return inWords($.timeago.parse(timestamp));
    } else if (typeof timestamp === "number") {
      return inWords(new Date(timestamp));
    } else {
      return inWords($.timeago.datetime(timestamp));
    }
  };
  var $t = $.timeago;

  $.extend($.timeago, {
    settings: {
      refreshMillis: 60000,
      allowFuture: false,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "", //前
        suffixFromNow: "from now",
        seconds: "刚刚",//1分钟内
        minute: "1分钟前",
        minutes: "%d分钟前",
        hour: "1小时前",
        hours: "%d小时前",
        day: "1天前",
        days: "%d天前",
        month: "1个月前",
        months: "%d月前",
        year: "1年前",
        years: "%d年前",
        wordSeparator: "",
        numbers: []
      }
    },
    inWords: function(distanceMillis) {
      var $l = this.settings.strings;
      var prefix = $l.prefixAgo;
      var suffix = $l.suffixAgo;
      if (this.settings.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow;
        }
      }

      var seconds = Math.abs(distanceMillis) / 1000;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;
      var years = days / 365;

      function substitute(stringOrFunction, number) {
        var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
        var value = ($l.numbers && $l.numbers[number]) || number;
        return string.replace(/%d/i, value);
      }

      var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
        seconds < 90 && substitute($l.minute, 1) ||
        minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
        minutes < 90 && substitute($l.hour, 1) ||
        hours < 24 && substitute($l.hours, Math.round(hours)) ||
        hours < 42 && substitute($l.day, 1) ||
        days < 30 && substitute($l.days, Math.round(days)) ||
        days < 45 && substitute($l.month, 1) ||
        days < 365 && substitute($l.months, Math.round(days / 30)) ||
        years < 1.5 && substitute($l.year, 1) ||
        substitute($l.years, Math.round(years));

      var separator = $l.wordSeparator === undefined ?  " " : $l.wordSeparator;
      return $.trim([prefix, words, suffix].join(separator));
    },
    parse: function(iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/\.\d+/,""); // remove milliseconds
      s = s.replace(/-/,"/").replace(/-/,"/");
      s = s.replace(/T/," ").replace(/Z/," UTC");
      s = s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
      return new Date(s);
    },
    datetime: function(elem) {
      var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
      return $t.parse(iso8601);
    },
    isTime: function(elem) {
      // jQuery's `is()` doesn't play well with HTML5 in IE
      return $(elem).get(0).tagName.toLowerCase() === "time"; // $(elem).is("time");
    }
  });

  $.fn.timeago = function() {
    var self = this;
    self.each(refresh);

    var $s = $t.settings;
    if ($s.refreshMillis > 0) {
      setInterval(function() { self.each(refresh); }, $s.refreshMillis);
    }
    return self;
  };

  function refresh() {
    var data = prepareData(this);
    if (!isNaN(data.datetime)) {
      $(this).text(inWords(data.datetime));
    }
    return this;
  }

  function prepareData(element) {
    element = $(element);
    if (!element.data("timeago")) {
      element.data("timeago", { datetime: $t.datetime(element) });
      var text = $.trim(element.text());
      if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
        element.attr("title", text);
      }
    }
    return element.data("timeago");
  }

  function inWords(date) {
    return $t.inWords(distance(date));
  }

  function distance(date) {
    return (new Date().getTime() - date.getTime());
  }

  // fix for IE6 suckage
  document.createElement("abbr");
  document.createElement("time");
}(jQuery));
/**
 * 扩展string方法，增加format方法，
 * alert("各种{1}啊{0}木{0}".format("有", "拼串"));
 */
String.prototype.format = function () { 
	var arr = arguments; 
	try { 
		return this.replace(/\{(\d+)\}/g, function (x, i) { return arr[i]; }); 
	} catch (e) { 
		return this; 
	} 
};

/**
 * 日期封装系统方法都写在此，不要定义到外面的全局方法，
 */
var rhDate = {
	/**
	 * 获取系统当前时间，返回结果：2013-01-23 16:28
	 */
	getCurentTime : function() {
		var now = new Date();
		var year = now.getFullYear(); // 年
		var month = now.getMonth() + 1; // 月
		var day = now.getDate(); // 日
		var hh = now.getHours(); // 时
		var mm = now.getMinutes(); // 分

		var clock = year + "-";
		if (month < 10)
			clock += "0";
		clock += month + "-";
		if (day < 10)
			clock += "0";
		clock += day + " ";
		if (hh < 10)
			clock += "0";
		clock += hh + ":";
		if (mm < 10)
			clock += '0';
		clock += mm;
		return (clock);		
	},
	stringToDate : function (DateStr) {//TODO：测试，示例
		var converted = Date.parse(DateStr.replace(/-/g, '/'));
		var myDate = new Date(converted);
		if (isNaN(myDate)) {
			// var delimCahar = DateStr.indexOf('/')!=-1?'/':'-';
			var arys = DateStr.split('-');
			myDate = new Date(arys[0], --arys[1], arys[2]);
		}
		return myDate;
	},
	/**
	 * js获取当前系统时间
	 * @paramm type 参数：日期类型
	 * @return String 返回值：字符串
	 */
	getDateTime : function (type) {//TODO：测试，示例说明
		var dateTime = new Date();
		// 取得当前时间
		var nowdate = "";// dateTime.format("yyyy-MM-dd hh:mm:ss");
		if (type == "DATE") {
			var year = dateTime.getFullYear();
			var mon = dateTime.getMonth();
			var day = dateTime.getDay();
			nowdate = year + "-" + mon + "-" + day;
			return nowdate;
		} else if (type == "hh") {
			var hh = dateTime.getHours();
			return hh;
		} else if (type == "mm") {
			var mm = dateTime.getMinutes();
			// var ss=dateTime.getSeconds();
			return mm;
		}
		return nowdate;
	},
	/**
	 * 根据小时获取当前系统的中文区块时间
	 * @paramm hhDate 参数：小时的数字
	 * @return String 返回值：中文的区块时间
	 */
	getAreaDate : function (hhDate) {
		if ((6 <= hhDate) && (hhDate <= 12)) {
			return "上午";
		} else if ((12 < hhDate) && (hhDate <= 18)) {
			return "下午";
		} else if ((18 < hhDate) && (hhDate < 24)) {
			return "晚上";
		} else if ((0 <= hhDate) && (hhDate < 6)) {
			return "凌晨";
		}
	},
	/**
	 * 求时间差
	 * @param  interval ：D表示查询精确到天数的之差 interval ：H表示查询精确到小时之差 interval
	 *            ：M表示查询精确到分钟之差 interval ：S表示查询精确到秒之差 interval ：T表示查询精确到毫秒之差
	 * @param date1  时间1
	 * @param date2 时间2
	 * @param dec 保留几位小数
	 * @return 时间差
	 */
	doDateDiff : function (interval, date1, date2, dec) {
		var objInterval = {
				'D' : 1000 * 60 * 60 * 24,
				'H' : 1000 * 60 * 60,
				'M' : 1000 * 60,
				'S' : 1000,
				'T' : 1
			};
			interval = interval.toUpperCase();
			var dt1 = new Date(Date.parse(date1.replace(/-/g, '/')));
			var dt2 = new Date(Date.parse(date2.replace(/-/g, '/')));
			try {
				if (dec) {
					dec = parseInt(dec);
					return Math.round((dt2.getTime() - dt1.getTime())
							/ eval('objInterval.' + interval) * (dec * 10))
							/ (dec * 10);
				} else {
					return Math.round((dt2.getTime() - dt1.getTime())
							/ eval('objInterval.' + interval));
				}
			} catch (e) {
				return e.message;
			}
	},
	/**
	 * 某个日期减去天数得到另外一个日期
	 * @param oldDate 当前日期字符串
	 * @param diffDay 相差天数
	 */
	nextDate : function (oldDate,diffDay){
		var formitDate = oldDate.split("-");
		oldDate = formitDate[1] + "-" + formitDate[2] + "-" + formitDate[0];
		//可以加上错误处理
		var old = new Date(oldDate);
		old = old.valueOf();
		old = old - diffDay * 24 * 60 * 60 * 1000;
		old = new Date(old);
		var formitM = old.getMonth() + 1 + "";
		var formitD = old.getDate() + "";
		if (formitM.length == 1) {
			formitM = "0" + formitM;
		}
		if (formitD.length == 1) {
			formitD = "0" + formitD;
		}
		return (old.getFullYear() + "-" + formitM + "-" + formitD);
	},
	
	/**
	 * 将时间字符串转化成date类型，字符串类型为 yyyy*MM*dd [HH]*[mm]*[ss]
	 */
	strToDate:function(dateStr){
		//将时间和日期分割开来
		var dateStr = dateStr.split(" ");
		//如果包括时间格式
		if (dateStr.length == 2) {
			var dateChar = dateStr[0].charAt(4);//获取日期之间的连接符
			var timeChar = dateStr[1].charAt(2);//获取时间之间的连接符
			var timeStr = dateStr[1].replace("/"+timeChar+"/gi",":");//将时间之间的连接符替换成 ：
			var dateFullStr = dateStr[0].split(dateChar);//获取日期的年，月，日字符数组
			//将日期转换成 MM-yyyy-dd HH:mm:ss
			var dateFtmStr = dateFullStr[1] + "-" + dateFullStr[2] + "-" + dateFullStr[0] + " " + timeStr;
			return new Date(dateFtmStr);
		//如果只有日期字符串
		} else if (dateStr.length == 1) {
			var dateChar = dateStr[0].charAt(4);
			var dateFullStr = dateStr[0].split(dateChar);
			var dateFtmStr = dateFullStr[1] + "-" + dateFullStr[2] + "-" + dateFullStr[0];
			return new Date(dateFtmStr);
		}
	},
	
	/**
	 * 取得格式化事件
	 * @return 2012-03-01 07:06:02
	 */
	getTime : function() {
		var d = new Date()
		var vYear = d.getFullYear()
		var vMon = d.getMonth() + 1
		var vDay = d.getDate()
		var h = d.getHours();
		var m = d.getMinutes();
		var se = d.getSeconds();
		var s = vYear + "-" + (vMon < 10 ? "0" + vMon : vMon) + "-"
				+ (vDay < 10 ? "0" + vDay : vDay) + " " + (h < 10 ? "0" + h : h)
				+ ":" + (m < 10 ? "0" + m : m) + ":" + (se < 10 ? "0" + se : se);
		return s;
	},
	/**
	 * 日期格式化 TODO 测试 并示例
	 * @param fmt 参数：格式描述
	 * @param dateStr 参数：时间字符串
	 * @return String 返回值：字符串
	 */
	pattern : function(fmt,dateStr) {
		var dateString = dateStr || "";
		var date;
		if (dateString == "") {
			date = new Date();
		} else {
			date = this.strToDate(dateStr);
		}
		var o = {
			"M+" : date.getMonth() + 1, // 月份
			"d+" : date.getDate(), // 日
			"h+" : date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 小时
			"H+" : date.getHours(), // 小时
			"m+" : date.getMinutes(), // 分
			"s+" : date.getSeconds(), // 秒
			"q+" : Math.floor((date.getMonth() + 3) / 3), // 季度
			"S" : date.getMilliseconds()
		// 毫秒
		};
		var week = {
			"0" : "\u65e5",
			"1" : "\u4e00",
			"2" : "\u4e8c",
			"3" : "\u4e09",
			"4" : "\u56db",
			"5" : "\u4e94",
			"6" : "\u516d"
		};
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "")
					.substr(4 - RegExp.$1.length));
		}
		if (/(E+)/.test(fmt)) {
			fmt = fmt
					.replace(
							RegExp.$1,
							((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f"
									: "\u5468")
									: "")
									+ week[date.getDay() + ""]);
		}
		for ( var k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
						: (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return fmt;
	},
	/**
	 * 取当前时间和参数的时间差，TODO:测试，并示例
	 * 如：rhDate.dateDiff("d",time)
	 */
    dateDiff : function(strInterval, dtEnd) {
		var dtStart = new Date();
		if (typeof dtEnd == 'string') {// 如果是字符串转换为日期型
			dtEnd = rhDate.stringToDate(dtEnd);
		}
		switch (strInterval) {
		case 's':
			return parseInt((dtEnd - dtStart) / 1000);
		case 'n':
			return parseInt((dtEnd - dtStart) / 60000);
		case 'h':
			return parseInt((dtEnd - dtStart) / 3600000);
		case 'd':
			return parseInt((dtEnd - dtStart) / 86400000);
		case 'w':
			return parseInt((dtEnd - dtStart) / (86400000 * 7));
		case 'm':
			return (dtEnd.getMonth() + 1)
					+ ((dtEnd.getFullYear() - dtStart.getFullYear()) * 12)
					- (dtStart.getMonth() + 1);
		case 'y':
			return dtEnd.getFullYear() - dtStart.getFullYear();
		}
	}
};
/**
 * 系统封装的读写删Cookie的操作
 */
var Cookie = {
	/**
	 * 读cookie操作
	 * @param name 参数：cookie名称
	 * @return String 返回值：字符串
	 */
	get : function (sName) {
		var sRE = "(?:; )?" + sName + "=([^;]*);?";
		var oRE = new RegExp(sRE);
		if (oRE.test(document.cookie)) {
			return decodeURIComponent(RegExp["$1"]);
		} else {
			return null;
		}
	},
	/**
	 * 写cookie操作
	 * @param name  参数：cookie名称
	 * @param value  参数：cookie值
	 * @param oExpires  参数：过期时间
	 * @return 返回值：无
	 */
	set : function (sName, sValue, oExpires, sPath, sDomain, bSecure) {
		var sCookie = sName + "=" + encodeURIComponent(sValue);
		if (oExpires) {
			var sst = oExpires * 24 * 60 * 60 * 1000;
			date = new Date();
			date.setTime(date.getTime() + sst);
			sCookie += "; expires=" + date.toGMTString();
		}
		if (sPath) {
			sCookie += "; path=" + sPath;
		}
		if (sDomain) {
			sCookie += "; domain=" + sDomain;
		}
		if (bSecure) {
			sCookie += "; secure";
		}
		document.cookie = sCookie;
	},
	/**
	 * 删除cookie操作
	 * @param name  参数：cookie名称
	 */
	del : function (name) {// 为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
		var date = new Date();
		date.setTime(date.getTime() - 10000);
		document.cookie = name + "=a; expires=" + date.toGMTString();
	}
};
/**
 * 将json对象转为字符串,只能返回一层的转换，更深层的转换请使用jQuery.toJSON(jsonObj)方法
 * @param o  参数：json对象
 * @return 返回值：字符串
 */
function JsonToStr(o) {
	/**
	 * 对字符串进行特殊字符编码
	 * @param str 参数：源字符串
	 * @return String 返回值：编码后的字符串
	 */
	function encode(str) {
		var sb = [];
		sb.push("\"");
		var c = "";
		for ( var i = 0; i < str.length; i++) {
			c = str.charAt(i);
			if (c == '\\') {
				sb.push("\\\\");
			} else if (c == '\n') {
				sb.push("\\n");
			} else if (c == '\r') {
				sb.push("\\r");
			} else if (c == '\t') {
				sb.push("\\t");
			} else if (c == '\'') {
				sb.push("\\\'");
			} else if (c == '\"') {
				sb.push("\\\"");
			} else if (c == '%') {
				sb.push("%25");
			} else if (c == '+') {
				sb.push(encodeURIComponent("+"));
			} else {
				sb.push(c);
			}
		}
		sb.push("\"");
		return sb.join("");
	};
	//
	var arr = [];
	var fmt = function(s) {
		if (/^(number)$/.test(typeof s)) {
			return s;
		} else {
			return /^(string)$/.test(typeof s) ? "" + encode(s) + "" : s;
		}

	};
	for ( var i in o) {
		arr.push("\"" + i + "\":" + fmt(o[i]));
	}
	return "{" + arr.join(",") + "}";
};

/**
 * 字符串转换为json对象,简单的一层级的调用，未增加转义等，如使用更复杂的调用，使用jQuery.parseJSON(jsonStr)
 * @param strData 参数：json格式字符串
 * @return 返回值：json对象
 */
function StrToJson(strData) {
	try {
		return (new Function("return " + strData))();
	} catch (e) {
		return {};
	}
};
/**
 *  系统提示信息变量
 */
var Tip = {
	/**
	 * 提示信息条，定时会隐藏
	 * @param msg  显示顶部提示信息
	 * @param parentFlag 父层对象的标识
	 */
	show:function(msg, parentFlag, scopeObj) {
		msg = Tools.rhReplaceHtmlTag(msg);
		parent.jQuery('.rh-barTip').remove();
		jQuery('.rh-barTip').remove();
		var closeA = jQuery("<a href='javascript:void(0);'></a>").addClass(
				"rh-barTip-close");
		closeA.bind("click", function(event) {
			jQuery(this).parent().remove();
		});
		var obj = jQuery();
		if ((typeof parentFlag == "boolean") && parentFlag) {
			var tip = jQuery("<span></span>").addClass("rh-barTip").addClass(
					"rh-barTipOK").append(msg).appendTo(parent.jQuery(".tabUL"));
			tip.append(closeA);
			obj = tip;
			parent.Tip.clear();
		} else {
			var defaultObj = null;
			var tip = jQuery("<span></span>").addClass("rh-barTip").addClass(
					"rh-barTipOK").append(msg).append(closeA);
			if (parentFlag == "list") {
				defaultObj = jQuery(".conHeaderTitle").last();
			} else if (parentFlag == "listBottom") {
				defaultObj = jQuery(".tabUL-bottom").last();
			} else {
				if (scopeObj) {
					defaultObj = jQuery(scopeObj);
				} else {
					defaultObj = jQuery(".tabUL-top").last();
				}
			}
			tip.appendTo(defaultObj);
			obj = tip;
			setTimeout(function() {
				tip.remove();
			}, 5000);
		}
		return obj;
	},
	/**
	 * 提示信息条，定时会隐藏
	 * @param msg 显示顶部提示信息
	 * @param parentFlag 父层对象的标识
	 */
	showAttention : function(msg, parentFlag, scopeObj) {
		msg = Tools.rhReplaceHtmlTag(msg);
		parent.jQuery('.rh-barTip').remove();
		jQuery('.rh-barTip').remove();
		var closeA = jQuery("<a href='javascript:void(0);'></a>").addClass(
				"rh-barTip-close");
		closeA.bind("click", function(event) {
			jQuery(this).parent().remove();
		});
		if ((typeof parentFlag == "boolean") && parentFlag) {
			var tip = jQuery("<span></span>").addClass("rh-barTip").addClass(
					"rh-barTipAttention").append(msg).appendTo(
					parent.jQuery(".tabUL"));
			tip.append(closeA);
			parent.Tip.clear();
		} else {
			var defaultObj = null;
			var tip = jQuery("<span></span>").addClass("rh-barTip").addClass(
					"rh-barTipAttention").append(msg).append(closeA);
			if (parentFlag == "list") {
				defaultObj = jQuery(".conHeaderTitle").last();
			} else if (parentFlag == "listBottom") {
				defaultObj = jQuery(".tabUL-bottom").last();
			} else {
				if (scopeObj) {
					defaultObj = jQuery(scopeObj);
				} else {
					defaultObj = jQuery(".tabUL-top").last();
				}
			}
			tip.appendTo(defaultObj);
			setTimeout(function() {
				tip.remove();
			}, 5000);
		}
	},
	/**
	 * 提示信息条，定时会隐藏
	 * @param msg  显示顶部提示信息
	 * @param parentFlag  父层对象的标识
	 */
	showError : function(msg, parentFlag, scopeObj) {
		msg = Tools.rhReplaceHtmlTag(msg);
		parent.jQuery('.rh-barTip').remove();
		jQuery('.rh-barTip').remove();
		var closeA = jQuery("<a href='javascript:void(0);'></a>").addClass(
				"rh-barTip-close");
		closeA.bind("click", function(event) {
			jQuery(this).parent().remove();
		});
		if ((typeof parentFlag == "boolean") && parentFlag) {
			var tip = jQuery("<span></span>").addClass("rh-barTip").addClass(
					"rh-barTipError").append(msg).appendTo(parent.jQuery(".tabUL"));
			tip.append(closeA);
			parent.Tip.clear();
		} else {
			var defaultObj = null;
			var tip = jQuery("<span></span>").addClass("rh-barTip").addClass(
					"rh-barTipError").append(msg).append(closeA);
			if (parentFlag == "list") {
				defaultObj = jQuery(".conHeaderTitle").last();
			} else if (parentFlag == "listBottom") {
				defaultObj = jQuery(".tabUL-bottom").last();
			} else {
				if (scopeObj) {
					defaultObj = jQuery(scopeObj);
				} else {
					defaultObj = jQuery(".tabUL-top").last();
				}
			}
			tip.appendTo(defaultObj);
			setTimeout(function() {
				tip.remove();
			}, 5000);
		}
	},
	/**
	 * 加载信息提示
	 * @param msg  显示顶部提示信息
	 * @param parentFlag 父层对象的标识
	 */
	showLoad : function(msg, parentFlag, appendObj, timeout, scopeObj) {
		msg = Tools.rhReplaceHtmlTag(msg);
		parent.jQuery('.rh-barTip').remove();
		jQuery('.rh-barTip').remove();
		var closeA = jQuery("<a href='javascript:void(0);'></a>").addClass(
				"rh-barTip-close");
		closeA.bind("click", function(event) {
			jQuery(this).parent().remove();
		});
		if ((typeof parentFlag == "boolean") && parentFlag) {
			var tip = jQuery("<span></span>")
					.addClass("rh-barTip")
					.addClass("rh-barTipLoad")
					.append(
							"<img src='"
									+ FireFly.contextPath
									+ "/sy/theme/default/images/body/load.gif' class='rh-tipLoadImg'></img>")
					.append(msg).appendTo(parent.jQuery(".tabUL"));
			tip.append(closeA);
		} else {
			var defaultObj = null;
			var tip = jQuery("<span></span>")
					.addClass("rh-barTip")
					.addClass("rh-barTipLoad")
					.append(
							"<img src='"
									+ FireFly.contextPath
									+ "/sy/theme/default/images/body/load.gif' class='rh-tipLoadImg'></img>")
					.append(msg).append(closeA);
			if (parentFlag == "list") {
				defaultObj = jQuery(".conHeaderTitle").last();
			} else if (parentFlag == "listBottom") {
				defaultObj = jQuery(".tabUL-bottom").last();
			} else if (appendObj) {
				tip.addClass("rh-barTipLoad-diffClass");
				appendObj.after(tip);
				return true;
			} else {
				if (scopeObj) {
					defaultObj = jQuery(scopeObj);
				} else {
					defaultObj = jQuery(".tabUL").last();
				}
			}
			tip.appendTo(defaultObj);
			if (timeout) {
				setTimeout(function() {
					tip.remove();
				}, timeout);
			}
		}
	},
	/**
	 * 外层清除提示信息
	 */
	clear : function() {
		setTimeout(function() {
			jQuery('.rh-barTip').remove();
		}, 4000);
	},
	/**
	 * 删除加载提示信息条
	 */
	clearLoad : function() {
		parent.jQuery('.rh-barTipLoad').remove();
		jQuery('.rh-barTipLoad').remove();
	}
};



function listBatchDate(config, node) {
	var _viewer = node;
	var onClickStr;
	var dateType = "DATE";
	var configArray = new Array();
	if(config){
		configArray = config.split(",");
		if (configArray.length > 0) {
			dateType = configArray[0];
		}
	}
	
	var recall_func = " try {_viewer.change();}catch(e){}";

	if (dateType == "DATETIME") {
		onClickStr = "WdatePicker({startDate:'%y-%MM-%dd %H:%m:%ss',dateFmt:'yyyy-MM-dd HH:mm:ss',alwaysUseStartDate:false,onpicked:function(){"
				+ recall_func + "}";
	} else if (dateType == "DATETIMEH") {
		onClickStr = "WdatePicker({startDate:'%y-%MM-%dd %H',dateFmt:'yyyy-MM-dd HH',alwaysUseStartDate:true,onpicked:function(){"
				+ recall_func + "}";
	} else if (dateType == "DATETIMEHM") {
		onClickStr = "WdatePicker({startDate:'%yyyy-%MM-%dd %HH:%mm',dateFmt:'yyyy-MM-dd HH:mm',alwaysUseStartDate:true,onpicked:function(){"
				+ recall_func + "}";
	} else if (dateType == "YEAR") {
		onClickStr = "WdatePicker({startDate:'%yyyy',dateFmt:'yyyy',onpicked:function(){"
				+ recall_func + "}";
	} else if (dateType == "MONTH") {
		onClickStr = "WdatePicker({startDate:'%yyyy-%MM',dateFmt:'yyyy-MM',alwaysUseStartDate:true,onpicked:function(){"
				+ recall_func + "}";
	} else if (dateType == "CUSTOM") {
		onClickStr = "WdatePicker({startDate:'" + configArray[2] + "',dateFmt:'" + configArray[3] + "',alwaysUseStartDate:"
                   + configArray[4] + ",onpicked:function(){" + recall_func + "}";
	} else if (dateType == "TIME") {
		onClickStr = "WdatePicker({startDate:'',dateFmt:'H:mm',alwaysUseStartDate:true,onpicked:function(){"
				+ recall_func + "}";
	} else {
		onClickStr = "WdatePicker({onpicked:function(){" + recall_func + "}";
	}
	onClickStr = onClickStr + "})";
	eval(onClickStr);
}


function datePicker(config) {
	var onClickStr;
	var dateType = "DATE";
	var configArray = new Array();
	if(config){
		configArray = config.split(",");
		if (configArray.length > 0) {
			dateType = configArray[0];
		}
	}
	
	var recall_func = " try {}catch(e){}";

	if (dateType == "DATETIME") {
		onClickStr = "WdatePicker({startDate:'%y-%MM-%dd %H:%m:%ss',dateFmt:'yyyy-MM-dd HH:mm:ss',alwaysUseStartDate:false,onpicked:function(){"
				+ recall_func + "}";
	} else if (dateType == "DATETIMEH") {
		onClickStr = "WdatePicker({startDate:'%y-%MM-%dd %H',dateFmt:'yyyy-MM-dd HH',alwaysUseStartDate:true,onpicked:function(){"
				+ recall_func + "}";
	} else if (dateType == "DATETIMEHM") {
		onClickStr = "WdatePicker({startDate:'%yyyy-%MM-%dd %HH:%mm',dateFmt:'yyyy-MM-dd HH:mm',alwaysUseStartDate:true,onpicked:function(){"
				+ recall_func + "}";
	} else if (dateType == "YEAR") {
		onClickStr = "WdatePicker({startDate:'%yyyy',dateFmt:'yyyy',onpicked:function(){"
				+ recall_func + "}";
	} else if (dateType == "MONTH") {
		onClickStr = "WdatePicker({startDate:'%yyyy-%MM',dateFmt:'yyyy-MM',alwaysUseStartDate:true,onpicked:function(){"
				+ recall_func + "}";
	} else if (dateType == "CUSTOM") {
		onClickStr = "WdatePicker({startDate:'" + configArray[2] + "',dateFmt:'" + configArray[3] + "',alwaysUseStartDate:"
		           + configArray[4] + ",onpicked:function(){" + recall_func + "}";
	} else if (dateType == "TIME") {
		onClickStr = "WdatePicker({startDate:'',dateFmt:'H:mm',alwaysUseStartDate:true,onpicked:function(){"
				+ recall_func + "}";
	} else {
		onClickStr = "WdatePicker({onpicked:function(){" + recall_func + "}";
	}
	onClickStr = onClickStr + "})";
	eval(onClickStr);
}
// 系统数据格式化方法
var Format = {
	formatNum : function(strNum) {
		if (strNum.length <= 3) {
			return strNum;
		}
		if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
			return strNum;
		}
		var a = RegExp.$1, b = RegExp.$2, c = RegExp.$3;
		var re = new RegExp();
		re.compile("(\\d)(\\d{3})(,|$)");
		while (re.test(b)) {
			b = b.replace(re, "$1,$2$3");
		}
		return a + "" + b + "" + c;
	},
	clearNum : function(strNum) {
		return strNum.replace(/,/g, "");
	},
	formatSize : function(size, fix, value) {
		var value = parseInt(value);
		var res = value / (size);
		if (fix == -1) {
		} else {
			res = res.toFixed(fix);
		}
		return res;
	},
	limit : function(size, value) {
		var len = value.length;
		if (len > size) {
			return value.substring(0, size) + "..."
		} else {
			return value;
		}
	},
	substr : function(start, end, value) {
		var len = value.length;
		if (len > start) {
			if (len > end) {
				return value.substring(start, end);
			} else {
				return value.substring(start);
			}
		} else {
			return value;
		}
	},
	replaceDblQuotes : function(str) {// 双引号替换为空串
		return str.replace(/\"/g, "");
	},
	replaceSinQuotes : function(str) {// 单引号替换为空串
		return str.replace(/\'/g, "");
	},
	/**
	 * 人民币大写转换
	 * @param {} numberValue 人民币小写
	 * @return {String}
	 */
	RMBCapital : function(numberValue) {
		var numberValue = new String(Math.round(numberValue * 100)); // 数字金额
		var chineseValue = ""; // 转换后的汉字金额
		var String1 = "零壹贰叁肆伍陆柒捌玖"; // 汉字数字
		var String2 = "万仟佰拾亿仟佰拾万仟佰拾元角分"; // 对应单位
		var len = numberValue.length; // numberValue 的字符串长度
		var Ch1; // 数字的汉语读法
		var Ch2; // 数字位的汉字读法
		var nZero = 0; // 用来计算连续的零值的个数
		var String3; // 指定位置的数值
		if (len > 15) {
			throw new Error("超出计算范围");
			;
			return "";
		}
		if (numberValue == 0) {
			chineseValue = "零元整";
			return chineseValue;
		}
		String2 = String2.substr(String2.length - len, len); // 取出对应位数的STRING2的值

		for ( var i = 0; i < len; i++) {
			String3 = parseInt(numberValue.substr(i, 1), 10); // 取出需转换的某一位的值
			if (i != (len - 3) && i != (len - 7) && i != (len - 11)
					&& i != (len - 15)) {
				if (String3 == 0) {
					Ch1 = "";
					Ch2 = "";
					nZero = nZero + 1;
				} else if (String3 != 0 && nZero != 0) {
					Ch1 = "零" + String1.substr(String3, 1);
					Ch2 = String2.substr(i, 1);
					nZero = 0;
				} else {
					Ch1 = String1.substr(String3, 1);
					Ch2 = String2.substr(i, 1);
					nZero = 0;
				}
			} else { // 该位是万亿，亿，万，元位等关键位
				if (String3 != 0 && nZero != 0) {
					Ch1 = "零" + String1.substr(String3, 1);
					Ch2 = String2.substr(i, 1);
					nZero = 0;
				} else if (String3 != 0 && nZero == 0) {
					Ch1 = String1.substr(String3, 1);
					Ch2 = String2.substr(i, 1);
					nZero = 0;
				} else if (String3 == 0 && nZero >= 3) {
					Ch1 = "";
					Ch2 = "";
					nZero = nZero + 1;
				} else {
					Ch1 = "";
					Ch2 = String2.substr(i, 1);
					nZero = nZero + 1;
				}

				if (i == (len - 11) || i == (len - 3)) { // 如果该位是亿位或元位，则必须写上
					Ch2 = String2.substr(i, 1);
				}
			}
			chineseValue = chineseValue + Ch1 + Ch2;
		}
		if (String3 == 0) { // 最后一位（分）为0时，加上“整”
			chineseValue = chineseValue + "整";
		}
		return chineseValue;
	}
};
/**
 * 加载文件系统变量
 */
var Load = {
	/**
	 * 动态加载js，并执行
	 * @param pathUrl js的路径
	 * @param viewer 列表/卡片js 中的 viewer 对象
	 */
	js : function (pathUrl, viewer) {
		jQuery.ajax({
			url : pathUrl,
			type : "GET",
			dataType : "text",
			async : false,
			data : {},
			success : function(data) {
				try {
					var servExt = new Function(data);
					servExt.apply(viewer);
				} catch (e) {
				}
			},
			error : function() {
				;
			}
		});
	},
	/*动态加载js,放入骑到<script>标签，判断重复加载*/
	scriptJS : function (pathUrl) {
		var jsFileUrl = FireFly.getContextPath() + pathUrl;
		if (!window.Scripts) {// 用于保存已经加载过的javascript
			window.Scripts = [];
		}
		jQuery.ajax({
			url : jsFileUrl,
			type : "GET",
			dataType : "text",
			async : false,
			data : {},
			success : function(data) {
				try {
					var head = jQuery(jQuery("head")[0]);
					if (!head) {
						head = jQuery("<head></head>")[0];
					}
					// 检测该脚本有没有被加载过
					var isLoaded = false;
					jQuery.each(head.find("script"), function(index, sc) {// 先在页面上找
						if (sc.src && sc.src.indexOf(pathUrl) != -1) {
							isLoaded = true;
							return;
						}
					});
					if (!isLoaded) {// 然后在Scripts数组里继续找
						jQuery.each(window.Scripts, function(index, url) {
							if (pathUrl == url) {
								isLoaded = true;
								return;
							}
						});
					}
					if (isLoaded) {
						return;
					}
					head.append("<script type='text/javascript'>" + data + "<\/script>");
					// 放入Scripts数组里
					window.Scripts.push(pathUrl);
				} catch (e) {
					alert("加载javascript异常，" + e);
				}
			},
			error : function() {
				;
			}
		});
	}
};
/**
 * 平台级类别的调用方法
 */
var Tools = {
	/* 取出文件扩展名 */
	getFileSuffix : function(fileName) {
		return fileName.substr(fileName.lastIndexOf('.') + 1).toLowerCase();
	},
	redirect : function(url) {//重定位url
		window.location.href = url;
	},
	/* 判断当前登录页面，如果为手机登录页则跳转 */
	toMbIndex : function () {
		// document.writeln(" 是否为移动终端: "+Browser.versions.mobile);
		// document.writeln(" ios终端: "+Browser.versions.ios);
		// document.writeln(" android终端: "+Browser.versions.android);
		// document.writeln(" 是否为iPhone: "+Browser.versions.iPhone);
		// document.writeln(" 是否iPad: "+Browser.versions.iPad);
		// document.writeln(navigator.userAgent);
		if (Browser.versions.android == true) {
			window.location.href = "index_mb.jsp";
		} else if ((Browser.versions.iPhone == true)
				&& (Browser.versions.iPad == false)) {
			window.location.href = "index_mb.jsp";
		}
	},
	lTrim : function(val) {
		return jQuery.trim(val + "@").substr(0,
				jQuery.trim(val + "@").length - 1);
	},
	rTrim : function(val) {
		return jQuery.trim("@" + val).substr(1,
				jQuery.trim("@" + val).length - 1);
	},
	/*系统字段级变量替换*/
	itemVarReplace : function(str, data) {
		if(!data){
			return str;
		}
		var reg = /#.*?#/g;
		var result = str.match(reg);
		if (result != null) {
			for (i = 0; i < result.length; i++) {// 循环区块
				var item = result[i].substring(1, result[i].length - 1);
				if (data[item]) {
					str = str.replace(result[i], data[item]);
				} else if (data[item] == "") {
					str = str.replace(result[i], "");
				}
				str = str.replace(/(\r)|(\n)/, "");
			}
		}
		return str;
	},
	/*系统级变量替换*/
	systemVarReplace : function(str) {
		str = str.replace(/@USER_CODE@/g, System.getVar("@USER_CODE@"))
				.replace(/@USER_NAME@/g, System.getVar("@USER_NAME@"))
				.replace(/@LOGIN_NAME@/g, System.getVar("@LOGIN_NAME@"))
				.replace(/@USER_POST@/g, System.getVar("@USER_POST@"))
				.replace(/@USER_SEX@/g, System.getVar("@USER_SEX@"))
				.replace(/@USER_IMG@/g, System.getVar("@USER_IMG@"))
				.replace(/@USER_IMG_SRC@/g, System.getVar("@USER_IMG_SRC@"))
				.replace(/@CMPY_CODE@/g, System.getVar("@CMPY_CODE@"))
				.replace(/@CMPY_NAME@/g, System.getVar("@CMPY_NAME@"))
				.replace(/@CMPY_FULLNAME@/g, System.getVar("@CMPY_FULLNAME@"))
				.replace(/@DEPT_CODE@/g, System.getVar("@DEPT_CODE@"))
				.replace(/@DEPT_NAME@/g, System.getVar("@DEPT_NAME@"))
				.replace(/@ODEPT_SRC_TYPE1@/g, System.getVar("@ODEPT_SRC_TYPE1@"))
				.replace(/@ODEPT_SRC_TYPE2@/g, System.getVar("@ODEPT_SRC_TYPE2@"))
				.replace(/@TDEPT_CODE@/g, System.getVar("@TDEPT_CODE@"))
				.replace(/@TDEPT_NAME@/g, System.getVar("@TDEPT_NAME@"))
				.replace(/@TDEPT_SRC_TYPE1@/g, System.getVar("@TDEPT_SRC_TYPE1@"))
				.replace(/@TDEPT_SRC_TYPE2@/g, System.getVar("@TDEPT_SRC_TYPE2@"))
				.replace(/@OFFICE_PHONE@/g, System.getVar("@OFFICE_PHONE@"))
				.replace(/@USER_MOBILE@/g, System.getVar("@USER_MOBILE@"))
				.replace(/@USER_EMAIL@/g, System.getVar("@USER_EMAIL@"))
				.replace(/@ROLE_CODES@/g, System.getVar("@ROLE_CODES@"))
				.replace(/@DEPT_CODES@/g, System.getVar("@DEPT_CODES@"))
				.replace(/@ODEPT_CODE@/g, System.getVar("@ODEPT_CODE@"))
				.replace(/@ODEPT_NAME@/g, System.getVar("@ODEPT_NAME@"))
				.replace(/@ODEPT_SRC_TYPE1@/g, System.getVar("@ODEPT_SRC_TYPE1@"))
				.replace(/@ODEPT_SRC_TYPE2@/g, System.getVar("@ODEPT_SRC_TYPE2@"))
				.replace(/@ODEPT_CODE_PATH@/g, System.getVar("@ODEPT_CODE_PATH@"))
				.replace(/@ODEPT_PCODE@/g, System.getVar("@ODEPT_PCODE@"))
				.replace(/@ODEPT_LEVEL@/g, System.getVar("@ODEPT_LEVEL@"))
				.replace(/@SUB_CODES@/g, System.getVar("@SUB_CODES@"))
				.replace(/@JIAN_CODES@/g, System.getVar("@JIAN_CODES@"))
				.replace(/@urlPath@/g, System.getVar("@urlPath@"))
				.replace(/@AGT_FLAG@/g, System.getVar("@AGT_FLAG@"));
		return str;
	},
	/*父层级级变量替换*/
	parVarReplace : function(str) {
		if (str) {
			var reg = /@.*?@/g;
			var data = System.getParParams();

			var result = str.match(reg);
			if (result != null) {
				for (i = 0; i < result.length; i++) {// 循环区块
					var item = result[i];
					if (data[item]) {
						str = str.replace(result[i], data[item]).replace(/\^/g,
								"'");
					} else {
						str = str.replace(/\^/g, "'");
					}
				}
			}

			return str;
		} else {
			return "";
		}
	},
	/*根据个性化的数据，设置背景的方法*/
	rhSetBodyBack : function () {
		if (parent.GLOBAL.style.SS_STYLE_BACK) {// 背景图片
			jQuery(".bodyBack").addClass(parent.GLOBAL.style.SS_STYLE_BACK);
		} else {
			jQuery(".bodyBack").addClass("bodyBack-white");
		}
	},
	/*xdoc的url特殊处理替换*/
	xdocUrlReplace : function (url) {
		if (url && url.indexOf("@HTTP") >= 0) { // 判断是否需要变量替换
			var httpUrl = FireFly.getHttpHost();
			url = url.replace(/@HTTP_URL@/i, httpUrl);
			url = url.replace(/@HTTP_URL_ENCODE@/i, encodeURIComponent(httpUrl));
			if (url.indexOf("@XDOC_URL@") >= 0) {
				var xdocUrl = System.getVar("@XDOC_URL@");// 获取xdoc_url
				url = url.replace(/@XDOC_URL@/i, xdocUrl);
				var extUrl = "&USER_NAME="
						+ encodeURIComponent(System.getVar("@USER_NAME@"))
						+ "&CMPY_NAME="
						+ encodeURIComponent(System.getVar("@CMPY_NAME@"))
						+ "&CMPY_FULLNAME="
						+ encodeURIComponent(System.getVar("@CMPY_FULLNAME@"))
						+ "&DEPT_NAME="
						+ encodeURIComponent(System.getVar("@DEPT_NAME@"))
						+ "&TDEPT_NAME="
						+ encodeURIComponent(System.getVar("@TDEPT_NAME@"))
						+ "&LOGO_URL="
						+ encodeURIComponent(System.getVar("@LOGO_URL@"))
						+ "&ODEPT_NAME="
						+ encodeURIComponent(System.getVar("@ODEPT_NAME@"))
						+ "&HTTP_URL=" + encodeURIComponent(httpUrl);
				url += extUrl;
			}
		} else {
			url = this.systemVarReplace(url);
		}
		return url;
	},
	/*  替换菜单的info中的字符变量为id可用的字符等 */
	rhReplaceId : function (url) {
		if (url) {
			url = url.replace(/\./g, "-").replace(/&/g, "").replace(/=/g, "").replace(/\$/g, "").replace(/\#/g, "").replace(/\:/g, "")
					.replace(/\?/g, "").replace(/\//g, "").replace(/\:/g, "").replace(/\,/g, "").replace(/\;/g, "").replace(/\</g, "")
					.replace(/\@/g, "").replace(/\^/g, "").replace(/\{/g, "").replace(/\}/g, "").replace(/\%/g, "").replace(/\'/g, "")
					.replace(/\>/g, "").replace(/\//g, "").replace(/\[/g, "").replace(/\]/g, "").replace(/\"/g, "").replace(/\ /g, "")
					.replace(/\(/g, "").replace(/\)/g, "");
		}
		return url;
	},
	/* html格式字符替换 */
	rhReplaceHtmlTag : function (value) {
	    value = value.replace(/\</gi, "&lt;").replace(/\>/gi, "&gt;");
		return value;
	},
	/**
	 * 根据字典编号返回对应的叶子节点class
	 */
	getTreeLeafClass : function (dictId) {
		// 特殊字典的图标替换
		var res = "";
		if ((dictId == "SY_ORG_DEPT_USER") || (dictId == "SY_ORG_ROLE_USER")) {// 用户树
			res = "user";
		} else if ((dictId == "SY_ORG_DEPT") || (dictId == "SY_ORG_DEPT_IN_ORG")) {// 部门
			res = "org";
		} else if (dictId == "SY_ORG_ROLE") {// 角色
			res = "role";
		} else if (dictId == "SY_ORG_CMPY") {// 公司
			res = "cmpy";
		}
		return res;
	}
};
/**
 * 显示提示信息框通用方法
 * @param title  标题
 * @param content 内容
 * @param func 回调方法
 * @param handler 回调句柄
 */
function showRHDialog(title, content, func, handler, widHeiArray) {
	jQuery("#TEMP_RH_DIALOG").dialog("destroy");
	// 构造dialog
	var hei = 200;
	var wid = 350;
	if (widHeiArray) {
		hei = widHeiArray[0];
		wid = widHeiArray[1];
	}
	if ((title.length > 16) && (wid == 350)) {
		title = title.substring(0, 16) + "..";
	} else if ((title.length > 10) && (wid < 350)) {
		title = title.substring(0, 10) + "..";
	}
	var winDialog = jQuery("<div></div>").addClass("showRHDialog").attr("id",
			"TEMP_RH_DIALOG").attr("title", title);
	winDialog.appendTo(jQuery("body"));

	var posArray = [];
	if (event) {
		var cy = event.clientY;
		posArray[0] = "";
		posArray[1] = cy - 100;
	}
	jQuery("#TEMP_RH_DIALOG").dialog({
		autoOpen : false,
		height : hei,
		width : wid,
		modal : true,
		resizable : false,
		position : posArray,
		open : function() {

		},
		close : function() {
			winDialog.remove();
		},
		buttons : {
			确定 : function() {
				jQuery(this).dialog("close");
				if (func && handler) {
					func.apply(handler);
				}
			}
		}
	});
	jQuery("#TEMP_RH_DIALOG").dialog("open");
	jQuery("#TEMP_RH_DIALOG").focus();
	jQuery("#TEMP_RH_DIALOG").parent().addClass("showRHDialog-parent");
	jQuery(".ui-dialog-titlebar").last().css("display", "block");// 设置标题显示
	jQuery("<div></div>").addClass("showRHDialog-con").text(content).appendTo(
			winDialog);
};
/**
 * 系统前端调试对象
 */
var Debug = {
	handler : null,
	add : function(text, event) {
		if (System.getUser("USER_NAME") == "系统管理员") {
			if (this.handler == null) {
				var debug = new rh.ui.popPrompt({
					"id" : "debug",
					"title" : "调试信息"
				});
				debug.render(event, null, [ 400, 300 ]);
				debug.display(text);
				this.handler = debug;
			} else {

			}
		}
	},
	clear : function() {

	}
};
/**
 * 系统封装处理文件相关方法
 */
var RHFile = {
	/**
	 * ueditor所用上传路径
	 */
  //TODO: url = FireFly.getContextPath() + url 
	uploadUrl : {
		imageUrl: "/sy/base/frame/coms/ueditor/jsp/imageUp.jsp",           		// 图片上传提交地址
	    scrawlUrl: "/sy/base/frame/coms/ueditor/jsp/scrawlUp.jsp",           	// 涂鸦上传地址
	    fileUrl: "/sy/base/frame/coms/ueditor/jsp/fileUp.jsp",            		// 附件上传提交地址
	    catcherUrl: "/sy/base/frame/coms/ueditor/jsp/getRemoteImage.jsp",   		// 处理远程图片抓取的地址
	    imageManagerUrl: "/sy/base/frame/coms/ueditor/jsp/imageManager.jsp",		// 图片在线管理的处理地址
	    snapscreenServerUrl: "/sy/base/frame/coms/ueditor/jsp/imageUp.jsp", 		// 屏幕截图的server端保存程序，UEditor的范例代码为“URL +"server/upload/jsp/snapImgUp.jsp"”
	    wordImageUrl: "/sy/base/frame/coms/ueditor/jsp/imageUp.jsp",         	// word转存提交地址
	    getMovieUrl: "/sy/base/frame/coms/ueditor/jsp/getMovie.jsp"            	// 视频数据获取地址
	},
	/**
	 * 存储cardview对象
	 */
	bldDestroyBase : function (viewObj) {
		if (jQuery("#rhDestroyFileFlashBug").size() == 0) {
			jQuery("<input type='hidden' onclick='RHFile.destroyFileFlashBug()' id='rhDestroyFileFlashBug'></input>")
					.appendTo(jQuery("body").first());
		}
		GLOBAL.cardView.push(viewObj);
	},
	/**
	 * 调用文件组件的destroy方法
	 */
	destroyFileFlashBug : function () {
		jQuery.each(GLOBAL.cardView, function(i, n) {
			n.destroyUI();
		});
	},
	/**
	 * 调用文件组件的destroy方法
	 */
	parProSon : function (frameId) {
		if ((jQuery("#" + frameId).contents().find("#rhDestroyFileFlashBug").size() == 1)) {
			jQuery("#" + frameId).contents().find("#rhDestroyFileFlashBug").click();
		}
	}	
};
/**
 * rh封装的判断浏览器类别
 * 如：Browser.versions.iPad
 */
var Browser = {
	versions : function() {
		var u = navigator.userAgent, app = navigator.appVersion;
		return {
			trident : u.indexOf('Trident') > -1, // IE内核
			presto : u.indexOf('Presto') > -1, // opera内核
			webKit : u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
			gecko : u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
			mobile : !!u.match(/AppleWebKit.*Mobile.*/)
					|| !!u.match(/AppleWebKit/), // 是否为移动终端
			ios : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
			android : u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
			iPhone : u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器 || u.indexOf('Mac') > -1
			iPad : u.indexOf('iPad') > -1, // 是否iPad
			webApp : u.indexOf('Safari') == -1
		};
	}
};
var Select = {
	/**
	 * 系统公用，弹出查询选择的常用语，可添加、修改、删除
	 * @param viewer  页面上下文
	 * @param opts {typeCode 类型编码,optionType 选项类型,fieldCode 字段编码,optObj} optObj
	 * 按钮对象或者例如下面超链接对象 var setSearch = jQuery(" <a href='#'>【常用批语】</a>").appendTo(searchFlag.obj.parent());
	 */
	usualContent : function (opts, viewer) {
		opts.optObj.bind("click", function(event) { // 为对象添加一个单击事件
			var configStr = "SY_COMM_USUAL,{'SOURCE':'USUAL_ID~TITLE~S_PUBLIC',"
					+ "'TARGET':'~" + opts.fieldCode + "~',"
					+ "'EXTWHERE':'and TYPE_CODE=^" + opts.typeCode
					+ "^ and (S_USER=^@USER_CODE@^ or  S_PUBLIC = 1 ) ',"
					+ "'TYPE':'" + opts.optionType
					+ "','ADDBTN':'true','DELETEBTN':'true','MODIFYBTN':'true'}";
			var options = {
				"config" : configStr,
				"params" : {
					"TYPE_CODE" : opts.typeCode
				},
				"parHandler" : this,
				"replaceCallBack" : function(arr) {
					if(opts.fieldCode){
						var data = arr["TITLE"];
						if (opts.optionType == "multi") {
							data = data.replace(new RegExp(/(,)/g), ',\n');
						}
						viewer.getItem(opts.fieldCode).setValue(data);
					}else if(opts.fieldObj){
						opts.fieldObj.val(arr["TITLE"]);
					}
				}
			};
			var queryView = new rh.vi.rhSelectListView(options); // 调用查询选择组件
			queryView.show(event);
		});
	},
	/**
	 * 系统共用，分发方案查询选择框
	 * @param target 接受选择值的dom对象名称，如：id~name
	 */
	openSendSchem : function (target) {
		var configStr = "SY_COMM_SEND_SELECT,{'TARGET':'" + target + "','SOURCE':'SEND_ID~SEND_NAME~SEND_MEMO',"
						+ "'PKHIDE':true,'EXTWHERE':' and 1=1 and S_FLAG = 1 and (S_USER = ^@USER_CODE@^ or S_PUBLIC = 1)',"
						+ "'TYPE':'multi','ADDBTN':true}";
		var options = {
			"config" : configStr,
			"parHandler" : this,
			"replaceCallBack" : function(arr) {
				var targerArr = target.split("~");
				$("[name$='"+ targerArr[0] +"']").val(arr["SEND_ID"]);
				$("[name$='"+ targerArr[1] +"']").val(arr["SEND_NAME"].replace(/,/g, ' '));
			},
			"title":"选择分发方案"
		};
		var queryView = new rh.vi.rhSelectListView(options);
		queryView.show(event);
		//queryView.winDialog.append("TEST");
//		queryView.addHeaderBtn({"name":"分发方案","callback":function(){
//			alert("test");
//		}});
	}
};
/**
 * 鼠标事件对象公共方法
 */
var Mouse = {
	/**
	 * 获取鼠标在页面上的位置
	 * @param e		触发的事件
	 * @return	x:鼠标在页面上的横向位置, y:鼠标在页面上的纵向位置
	 *例如：Mouse._getMousePoint(e); 返回 point = {x:123,y:123}。point.x 鼠标x坐标，point.y鼠标y坐标
	*/
	getMousePoint : function (e) {
			var point = {x:0,y:0};// 定义鼠标在视窗中的位置
			// 如果浏览器支持 pageYOffset, 通过 pageXOffset 和 pageYOffset 获取页面和视窗之间的距离
			if(typeof window.pageYOffset != 'undefined') {
				point.x = window.pageXOffset;
				point.y = window.pageYOffset;
			}else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
				// 如果浏览器支持 compatMode, 并且指定了 DOCTYPE, 通过 documentElement 获取滚动距离作为页面和视窗间的距离
				// IE 中, 当页面指定 DOCTYPE, compatMode 的值是 CSS1Compat, 否则 compatMode 的值是 BackCompat
				point.x = document.documentElement.scrollLeft;
				point.y = document.documentElement.scrollTop;
			}else if(typeof document.body != 'undefined') {
				// 如果浏览器支持 document.body, 可以通过 document.body 来获取滚动高度
				point.x = document.body.scrollLeft;
				point.y = document.body.scrollTop;
			}
			// 加上鼠标在视窗中的位置
			point.x += e.clientX;
			point.y += e.clientY;
			// 返回鼠标在视窗中的位置
			return point;
	},
	
	/**
	 * 返回弹出框确定区域后的x，y坐标
	 * width 弹出框宽度
	 * height 弹出卡U难过高度
	 */
	dialogPosition : function(e,width,height) {
		var xVal = Mouse.getMousePoint(e).x;
		var yVal = Mouse.getMousePoint(e).y;
		var rtnVal = Mouse.dialogCoordinate( xVal, yVal,width, height);
		var position = {};
		if ((rtnVal == 0) || (rtnVal == 1)) {
			position.x = xVal + 15;
			position.y = yVal + 15; 
		} else if (rtnVal == 2) {
			position.x = xVal - width - 15;
			position.y = yVal + 15; 
		} else if (rtnVal == 3) {
			position.x = xVal - width - 15;
			position.y = yVal - height - 15; 
		} else if (rtnVal == 4) {
			position.x = xVal + 15;
			position.y = yVal - height - 15; 
		}
		return position;
	},
	
	/**
	 * 确定弹出框位置
	 * width 弹出框宽度，height 弹出框高度，x 鼠标x坐标，y鼠标y坐标
	 * 例如 ： Mouse.dialogCoordinate(123,123,275,225) ，返回：弹出框位置标示位，0和1 表示鼠标右下角，2表示鼠标左下角
	 * 3表示鼠标左上角，4表示鼠标右上角，默认为右下角
	 */
	  dialogCoordinate : function( x, y,width, height){
			var bodyWidth = jQuery("body").width();
			var scrollVal = parent.jQuery("body").scrollTop();
			if (scrollVal == 0) {
				scrollVal = jQuery("body").scrollTop();
			}
			var bodyHeight = top.GLOBAL.getDefaultFrameHei();
			var objStr = new Array();
			var obj1 = {xVal:(bodyWidth - x),yVal:(bodyHeight - y)};
			var obj2 = {xVal:x,yVal:(bodyHeight - y)};
			var obj3 = {xVal:x, yVal:y};
			var obj4 = {xVal:(bodyWidth - x), yVal:y};
			//得到四个方向区域的对象数组，分别是 右下角、左下角、左上角、右上角
			objStr[0] = obj1;
			objStr[1] = obj2;
			objStr[2] = obj3;
			objStr[3] = obj4;
			for (var i = 1; i <= objStr.length; i++) {
				if (Mouse.diagonal(width, height, objStr[i-1].xVal, objStr[i-1].yVal)) {
					return i;
				}
			}
			return 0;
	},

	/**
	 * 面积，即鼠标与当前窗口围成的上下左右四块面积，用数学解决逻辑问题
	 * x1,y1弹出框的宽高
	 * x2,y2鼠标和最外边框组成的最大区域坐标
	 * @returns 此区域是否可用，可用返回true；不可用返回false。
	 * 例如：Mouse.diagonal(225,275,300,100) 返回false，因为鼠标围成的面积为 100 * 100 < 225* 275，即不可用，鼠标围成面积是
	 * 宽，高中较小的那个
	 */
	diagonal:function (x1,y1,x2,y2){
			//弹出框对角线长度
			var divSqrt = x1 * y1;
			var bodySqrt = Math.min(x2, y2) - 40;
			bodySqrt = bodySqrt * bodySqrt;
			if (bodySqrt < divSqrt) {
				return false;
			}
			return true;
	},
	
	/**
	 * 获取当前窗口滚动条高度
	 */
	getScrollTop : function(){
			var yScroll;//取滚动条高度
			if (window.pageYOffset) {
				yScroll = window.pageYOffset;
			} else if (document.documentElement && document.documentElement.scrollTop){
				yScroll = document.documentElement.scrollTop;
			} else if (document.body) {
				yScroll = document.body.scrollTop;
			}
			return yScroll;
	}
};
/**
 * 待办系统变量
 */
var Todo = {
	count : 0,
	/**
	 * 响应双击Grid事件，打开待办
	 * @param viewer 包含grid的Viewer对象
	 * @param grid 被双击的grid对象
	 */
	dbClickGrid : function(viewer,grid){
		var sid = grid.getSelectItemVal("SERV_ID");
		var url = grid.getSelectItemVal("TODO_URL");
		var objectID1 = grid.getSelectItemVal("TODO_OBJECT_ID1");	
		var title = grid.getSelectItemVal("TODO_TITLE");
		var con = grid.getSelectItemVal("TODO_CONTENT");
		var id = grid.getSelectItemVal("TODO_ID");
		
		Todo.viewer = viewer;
		Todo.open(sid, title, url, con, id,objectID1);
	},
	/**
	 * 打开待办
	 * @param sId 服务ID
	 * @param title 待办标题
	 * @param url 待办的url
	 * @param content 待办的内容，如果有内容，且URL中包含“.showDialog.do”关键字，那么就直接弹出提示框，显示此内容。
	 * @param todoId 待办ID
	 * @param objectID1 对象ID1
	 */
	open : function(sId, title, url, con, todoId, objectID1) {
		
		if (url.indexOf(".showDialog.do") > 0) {
			showRHDialog(title,con,function exeToDo() {
				var data = {};
				data[UIConst.PK_KEY] = todoId;
				data["TODO_ID"] = todoId;
				var res = FireFly.doAct("SY_COMM_TODO","endReadCon",data,false);
				if (res[UIConst.RTN_MSG].indexOf(UIConst.RTN_OK) == 0) {
					this.viewer.refresh();
					var con = jQuery("#SY_COMM_TODO .portal-box-con");
					var params = {};
					var dataUrl = con.attr("dataUrl");
					if(dataUrl){
						params["config"] = dataUrl.substring(2,dataUrl.length-2);
						getBlockCon(con,params);						
					}
				}
	        }, this);
		} else if (url.indexOf(".byid.do") > 0) {
			var params = {"from":"todo"};
			params.handlerRefresh = this.viewer;
			var options = {"url":sId + ".card.do?pkCode=" + objectID1, "tTitle":title, "menuFlag":4, "replaceUrl":url,"params":params};
			Tab.open(options);
		} else {
			var params = {"replaceUrl":url, "areaId":"","from":"todo"};
			var options = {"url":url, "tTitle":title, "params":params};
			Tab.open(options);
		}
	},
	/**
	 * 获取待办的总数量，如果数量有变化则调用pageView内方法动态更新下拉面板
	 */
	getCount : function () {//获取数量和返回数据
		var count = 0;
		jQuery.ajax({    //加载后台数据
	        type: 'get',
	        url: "SY_COMM_TODO.getTodoCount.do",
	        dataType:"json",
		    data : "",
	        cache:false,
	        async:false,
	        timeout:60000,
	        success:function(data) { 
				if (data) {
					var dataJson = data._DATA_;
					count = parseInt(dataJson[0]);
					if (Todo.count != count) {
						//pageView.alertDataInsert();
					}
					Todo.count = count;
				}
		    }
	    });
	    return count;
	},
	/**
	 * 待办的获取，系统顶部下拉面板内数据的获取
	 * @param num 服务ID
	 * @param rowNum 待办标题
	 */
	get : function (num,rowNum,listDataFlag) {//获取数量和返回数据
		var res = {"count":0,"data":null};
		jQuery.ajax({    //加载后台数据
	        type: 'post',
	        url: "SY_COMM_TODO.getTodoCount.do",
	        dataType:"json",
		    data : "",
	        cache:false,
	        async:false,
	        timeout:60000,
	        success:function(data) { 
				if (data) {
					var count = 0;
					var dataJson = data._DATA_;
					jQuery.each(dataJson,function(i,n) {
						res["count_" + i] = parseInt(n);
					});
					count = dataJson[0];
					//根据getTodoCount()的返回值，如果总数不变，不去处理更新数据；若总数变化，则去调用getTodo()更新内部数据内容
					res.count = count;
					if (typeof listDataFlag == "boolean" && listDataFlag == false) {
						return;
					}
					if (count == num) {
						return;
					} else {
						res.data = Todo.getData(rowNum);
					}
				}
		    }
	    });
	    return res;
	},
	/**
	 * 代办的获取，系统顶部下拉面板内数据的获取
	 * @param rowNum 显示的条数
	 */
	getData : function (rowNum) {//获取返回的数据
		var res = {};
		var urlStr = "SY_COMM_TODO.getTodo.do";
		if (rowNum) {
			urlStr += "?data={'rownum':'" + rowNum + "'}";
		}
		jQuery.ajax({    //加载后台数据
	        type: 'post',
	        url: urlStr,
	        dataType:"json",
		    data : "",
	        cache:false,
	        async:false,
	        timeout:60000,
	        success:function(data) { 
				if (data) {
					res = data;
				}
		    }
	    });
		return res;
	},	
	 /* 对列表上选中行双击查看绑定事件,双击打开该选中行的服务卡片页面
	  * (对应的服务上应该有SERV_ID，DATA_ID，TITLE)
	 *  例如：_viewer.grid.unbindTrdblClick();
	 *		_viewer.grid.dblClick(function() {
	 *			Todo.openEntity(_viewer);//双击打开该选中行的服务卡片页面
	 *		}, _viewer);
	 */
	openEntity : function(_viewer){
		//取得服务ID
		var sid = _viewer.grid.getSelectItemVal("SERV_ID");
		var url = sid + ".card.do?pkCode=" + _viewer.grid.getSelectItemVal("DATA_ID");
		var options = {
			"url" : url,
			"tTitle" : _viewer.grid.getSelectItemVal("TITLE"),
			"params" : {},
			"menuFlag" : 3
		};
		Tab.open(options);	
	}
};
/**
 * 窗口的相关系统包装处理
 */
var RHWindow = {
	/**
	 * 获取指定window的可视区域尺寸
	 * @param target window
	 */
	getViewPort : function(target) {
		var theWidth,theHeight;
	    if (target.innerWidth) { 
	        theWidth = target.innerWidth 
	        theHeight = target.innerHeight 
	    } else if (target.document.compatMode=='CSS1Compat') { 
	        theWidth = target.document.documentElement.clientWidth 
	        theHeight = target.document.documentElement.clientHeight 
	    } else if (target.document.body) { 
	        theWidth = target.document.body.clientWidth 
	        theHeight = target.document.body.clientHeight 
	    } 
	    return {height:theWidth, height:theHeight};
	},	
	/**
	 * 获取指定window的滚动条的信息
	 * @param target window
	 */
	getScroll : function(target) {
		var top, left, width, height; 
	    if (target.document.documentElement && target.document.documentElement.scrollTop) { 
	    	top = target.document.documentElement.scrollTop; 
	    	left = target.document.documentElement.scrollLeft; 
	    	width = target.document.documentElement.scrollWidth; 
	    	height = target.document.documentElement.scrollHeight; 
	    } else if (document.body) { 
	    	top = target.document.body.scrollTop; 
	    	left = target.document.body.scrollLeft; 
	    	width = target.document.body.scrollWidth; 
	    	height = target.document.body.scrollHeight; 
	    } 
		return {top:top, left:left, width:width, height:height}; 
	},
	/**
	 * 搜索部分启用外部滚动条的监听事件
	 */
	searchScrollBegin : function () {
		jQuery(window).scroll(
			function() {
				var top = document.documentElement.scrollTop + document.body.scrollTop;
				jQuery("#SEARCH-RES-tabsIframe").contents().find("#tempScrollTop").val(top);
		});
	}
};
/**
 * 计时器,辅助调试时查看执行时间。调用如：
 * 	var stopWatch = new Stopwatch();
 * 	stopWatch.start();
 *  //执行代码
 * 	stopWatch.time() + "毫秒"
 */
function Stopwatch() {
	// Private vars
	var startAt = 0; // Time of last start / resume. (0 if not running)
	var lapTime = 0; // Time on the clock when last stopped in milliseconds

	var now = function() {
		return (new Date()).getTime();
	};
	// 启动计时器，或者继续计时
	this.start = function() {
		startAt = now();
		return lapTime;
	};
	// 停止或暂停计时
	this.stop = function() {
		lapTime = startAt ? lapTime + now() - startAt : 0;
		startAt = 0; // 暂停

		return lapTime;
	};
	// 耗时
	this.time = function() {
		return lapTime + (startAt ? now() - startAt : 0);
	};
}; 
/**
 * 判断列表页中是否存在“S_HAS_PS_MIND”列，如果存在列并有值，则展示“对钩”的小图片。当鼠标放到小图片上后，显示领导意见。
 */
var RHWF = {
	showLeaderMind : function(grid) {
		var colDef = grid.getColumnDef("S_HAS_PS_MIND");
		//如果字段不存在则返回
		if(!colDef){
			return;
		}
		var winDlg = new rh.vi.HoverDlg();
		jQuery("td[icode='S_HAS_PS_MIND']", grid.getTable())
				.each(function() {
							var psMind = jQuery(this).text();
							if (psMind != "" && psMind != undefined) {
								jQuery(this).text("");
								jQuery("<img src='" + FireFly.getContextPath() + "/sy/theme/default/images/icons/ok.png'/>").appendTo(jQuery(this));
								jQuery(this).find("img").hover(function(e) {
													winDlg.removeContent();
													winDlg.show(e);
													var rowId = grid.getRowPkByElement(jQuery(this));
													var data = {
														"SERV_ID" : grid.getRowItemValue(rowId,"SERV_ID"),
														"DATA_ID" : grid.getRowItemValue(rowId,"DATA_ID")};
													var content = jQuery(this).attr("leaderMind");
													if (!content) {
														var resultVal = FireFly.doAct("SY_COMM_MIND","leaderMind",data);
														content = getLeaderMind(resultVal);
														jQuery(this).attr("leaderMind",content);
													}
													winDlg.container.append(content);
												}, function() {
													winDlg.hide();
												});
							}
						});
		function getLeaderMind(datas) {
			var vals = new Array();
			for ( var i = 0; i < datas["_DATA_"].length; i++) {
				vals.push("<div class='mt10' style='overflow:hidden;border-bottom: 1px dashed #CCC'>");
				vals.push("<div style='margin-left:5px;float:left;width:29%'>");
				vals.push(datas["_DATA_"][i]["S_UNAME"] + "：");
				vals.push("</div>");
				vals.push("<div style='float:left;width:67%;'>");
				vals.push(datas["_DATA_"][i]["MIND_CONTENT"]);
				vals.push("</div>");
				vals.push("</div>");
			}
			return vals.join("");
		}
	},
	/**
	 * 处理列表（平台或自定义table）数据中工作流活动节点用户状态字段S_WF_USER_STATE的值（本人的行增加属性变色、已看过的数据变色）
	 * userStateCells 整个列所有td的jQuery对象
	 * tableObj table的jQuery对象
	 * colCode 取消排序的列字段
	 */
	loadWfUserState : function(userStateCells, tableObj, colCode) {
		//取消办理用户字段排序事件
		if(colCode){
			tableObj.children("thead").find("th[icode='" + colCode + "']").unbind("click");
		}
		userStateCells.each(function() {
			var cellObj = jQuery(this);
			var val = cellObj.text();
			//处理办理用户与流程环节			
			if (val.length > 0) {
				cellObj.text("");
				var userStateList = StrToJson(val);
				var cellState = cellObj.parent().find("td[icode='S_WF_NODE']");
				var state = cellState.text();
				//多个办理用户
				if(userStateList.length > 1){
					if(state.length > 0){
						var spanObj = jQuery("<SPAN>" + state + "</SPAN>").appendTo(cellObj);
						var usersDiv = jQuery("<tr></tr>").css({"display":"none","width":"auto","position":"absolute","right":"0px"}).insertAfter(cellObj.parent());
						usersDiv.css({"background-color":"whitesmoke","padding":"20px"});
						if(!tableObj){
							tableObj = cellObj.parent().parent().parent();
						}
							tableObj.css({"position":"relative"});						
						for ( var i = 0; i < userStateList.length; i++) {
							var userStateObj = userStateList[i];
							if(userStateObj.U == System.getVars()["@USER_CODE@"]){
								cellObj.parent().addClass("WF-USER-ACTIVE");
							}
							var htmlVal = "<SPAN style='display:inline-block;margin:5px;' class='WF-USER-STATE-" + userStateObj.O + "' userCode='" + userStateObj.U + "'>" + userStateObj.N + "</SPAN>";
							jQuery(htmlVal).appendTo(usersDiv).bind("click", function(event) {
								//取得UserCode
								var userCode = jQuery(this).attr("userCode");
								if(userCode && userCode.length > 0){
									new rh.vi.userInfo(event, userCode);
								}
							});
						}												
						cellObj.bind("click", function(event) {
							if(usersDiv.css("display") == "none"){
								usersDiv.show("slow");
							}else{
								usersDiv.hide("slow");
							}
							
						});												
					} else {
						//遍历所有用户的状态对象
						for ( var i = 0; i < userStateList.length; i++) {
							var userStateObj = userStateList[i];
							if(userStateObj.U == System.getVars()["@USER_CODE@"]){
								cellObj.parent().addClass("WF-USER-ACTIVE");
							}
							var htmlVal = "<SPAN class='WF-USER-STATE-" + userStateObj.O + "' userCode='" + userStateObj.U + "'>" + userStateObj.N + "</SPAN>";
							jQuery(htmlVal).appendTo(cellObj).bind("click", function(event) {
								//取得UserCode
								var userCode = jQuery(this).attr("userCode");
								if(userCode && userCode.length > 0){
									new rh.vi.userInfo(event, userCode);
								}
							});
						}
					}
				//单个办理用户
				} else if(userStateList.length == 1) {
					var userStateObj = userStateList[0];
					if(userStateObj.U == System.getVars()["@USER_CODE@"]){
						cellObj.parent().addClass("WF-USER-ACTIVE");
					}
					var htmlVal = "<SPAN class='WF-USER-STATE-" + userStateObj.O + "' userCode='" + userStateObj.U + "'>" + userStateObj.N + "</SPAN>";
					jQuery(htmlVal).appendTo(cellObj).bind("click", function(event) {
						//取得UserCode
						var userCode = jQuery(this).attr("userCode");
						if(userCode && userCode.length > 0){
							new rh.vi.userInfo(event, userCode);
						}
					});
				}		
			}
		});	
	},
	/**
	 * 处理超时时间
	 * 列表jQuery句柄
	 */
	highLightOverTime: function(listHandler) {
		var dataList = listHandler._listData._DATA_;	
		jQuery(dataList).each(function(i) {
			var data = dataList[i];
			var overTimeStr = data["TODO_OVERTIME_S"];
			if(overTimeStr.indexOf("超时") >= 0){
				jQuery("tr[id='" + data._PK_ + "']").find("td[icode='TODO_OVERTIME_S']").css({"color":"red"});
			}
		});	
	}
};

/**
 * 打开菜单
 * @param menuInfo 菜单信息
 * @param type 类型：服务、链接
 * @param name 菜单名
 * @param menuId 菜单ID
 */
var MenuAccess = {
	open:function(menuInfo,type,name,menuId){
		if(type == 1){
			var options = {
					"url":menuInfo+".list.do",
					"tTitle":name,
					"menuFlag":2,
					"menuId":menuId
				};
			Tab.open(options);
		}else if(type == 2){
			var options = {"url":menuInfo,"tTitle":name,"menuFlag":2,"menuId":menuId};
			Tab.open(options);
		}else if(type == 3){
			eval(menuInfo);
		}
	}
};

/**
 * IFrame关闭之前，移除flash，避免出现错误提示
 * @param flashId
 */
function removeFlashObject(flashId){
	//页面关闭之前，移除flash
	var flashObj = document.getElementById(flashId);
	try {
		if(flashObj) {
			flashObj.removeNode(true);
		}
	} catch (ex) {
		
	}
};
/**
 * 字符串处理相关通用方法
 */
var StringUtils = {
		/**字符串对象增加方法：是否以指定字符串结束**/
		"endWith" : function(srcStr,str){
			if(str==null || str=="" || srcStr==null || srcStr.length==0 || str.length>srcStr.length) 
			  return false; 
			if(srcStr.substring(srcStr.length-str.length)==str) 
			  return true; 
			else 
			  return false; 
			return true; 
		} ,
		/**字符串对象增加方法：是否以指定字符串开始**/
		"startWith" : function(srcStr,str){
			if(str==null||str=="" || srcStr==null || srcStr.length==0||str.length>srcStr.length) 
			  return false; 
			if(srcStr.substr(0,str.length)==str) 
			  return true; 
			else 
			  return false; 
			return true; 
		}	
};

