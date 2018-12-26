<!DOCTYPE html>
<!--STATUS OK-->
<html>
<head>
<#include "/SY_COMM_ZHIDAO/config_constant.ftl">
<script type="text/javascript"> var FireFlyContextPath =''; </script>
<script type="text/javascript" src="/sy/base/frame/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="/sy/base/frame/constant.js"></script>
<script type="text/javascript" src="/sy/base/frame/tools.js"></script>
<script type="text/javascript" src="/sy/base/frame/platform.js"></script>
<script type="text/javascript" src="/sy/comm/cms/js/zhidao.js"></script>
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<title>
			软虹知道 - 企业互动问答平台
		</title>
		<meta name="description" content="软虹知道是 基于搜索的互动式知识问答分享平台。用户可以根据自身的需求，有针对性地提出问题；同时，这些答案又将作为搜索结果，满足有相同或类似问题的用户需求。">
		<script type="text/javascript">
			var arrBaiduAds = new Array();
			function BaiduAdsDisplay(index) {
				if (typeof(arrBaiduAds[index]) != "undefined" && arrBaiduAds[index] != "") {
					document.write(arrBaiduAds[index]);
				}
			}
		</script>
		<script type="text/javascript">
			(function() {
				function b(f) {
					if (f >= 0) {
						for (var e = 0; e < 75; e += 25) {
							if (f >= e && f < e + 25) {
								return e / 25
							}
						}
						if (f >= 75 && f < 500) {
							return 3
						}
						return 4
					}
				}
				var d = function(e) {
					this.name = e;
					this.dataArray = [0, 0, 0, 0, 0]
				};
				d.prototype.start = function() {
					var g = 50,
					j, f, i = this;
					function e() {
						f = new Date;
						var k = f - j - g;
						k = k < 0 ? 0 : k;
						i.dataArray[b(k)]++;
						h()
					}
					function h() {
						j = new Date;
						i.timer = setTimeout(e, g)
					}
					h()
				};
				d.prototype.end = function() {
					this.timer = clearTimeout(this.timer)
				};
				d.prototype.toString = function() {
					return '"' + this.name + '":[' + this.dataArray.join(",") + "]"
				};
				var a = {};
				var c = {
					start: function(e, f) {
						f = f || a;
						if (f) {
							if (!f[e]) {
								f[e] = new d(e)
							}
							f[e].start()
						}
					},
					end: function(e, f) {
						f = f || a;
						if (f) {
							if (f[e]) {
								f[e].end()
							}
						}
					},
					toString: function(g) {
						g = g || a;
						var e = [];
						if (g) {
							for (var f in g) {
								if (g.hasOwnProperty(f)) {
									e.push(g[f].toString())
								}
							}
						}
						return "{" + e.join(",") + "}"
					},
					length: function() {
						return a.length
					}
				};
				window.CPU_MONITOR = c
			})(window);
			var PDC = {
				_version: "0.8",
				_render_start: new Date().getTime(),
				_analyzer: {
					loaded: false,
					url: "http://static.tieba.baidu.com/tb/pms/wpo.pda.js?v=0.8",
					callbacks: []
				},
				_opt: {
					is_login: false,
					sample: 0,
					product_id: 0,
					page_id: 0,
					special_pages: [],
					display: false
				},
				_cpupool: {},
				_timingkey: "start",
				_timing: {},
				init: function(d) {
					for (var c in d) {
						if (d.hasOwnProperty(c)) {
							this._opt[c] = d[c]
						}
					}
				},
				mark: function(b) {
					this._timing[b] = new Date().getTime();
					if (window.CPU_MONITOR) {
						CPU_MONITOR.end(this._lastkey + "-" + this._timingkey, this._cpupool);
						if (b != "let") {
							CPU_MONITOR.start(this._timingkey + "-" + b, this._cpupool);
							this._lastkey = this._timingkey;
							this._timingkey = b
						}
					}
				},
				view_start: function() {
					this.mark("vt")
				},
				tti: function() {
					this.mark("tti")
				},
				page_ready: function() {
					this.mark("fvt")
				},
				metadata: function() {
					var c = this._opt;
					var e = {
						env: {
							user: (c.is_login == true ? 1 : 0),
							product_id: c.product_id,
							page_id: PDC._is_sample(c.sample) ? c.page_id: 0
						},
						common_resources: c.common_resources,
						special_resources: c.special_resources,
						render_start: this._render_start,
						timing: this._timing,
						display: c.display
					};
					var a = [];
					var d = c.special_pages;
					for (var b = 0; b < d.length; b++) {
						if (PDC._is_sample(d[b]["sample"])) {
							a.push(d[b]["id"])
						}
					}
					if (a.length > 0) {
						e.env["special_id"] = "[" + a.join(",") + "]"
					}
					return e
				}
			}; (function() {
				if (document.attachEvent) {
					window.attachEvent("onload",
					function() {
						PDC.mark("let");
						PDC._load_analyzer()
					})
				} else {
					window.addEventListener("load",
					function() {
						PDC.mark("lt")
					},
					false)
				}
			})();
		</script>
		<!--[if lte IE 8]>
			<script>
				(function() {
					var e = "abbr,article,aside,audio,canvas,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(","),
					i = e.length;
					while (i--) {
						document.createElement(e[i])
					}
				})();
			</script>
		<![endif]-->
		<link rel="stylesheet" type="text/css" href="/sy/comm/zhidao/baidu_style_files/module_fe8dd525.css">
		<link rel="stylesheet" type="text/css" href="/sy/comm/zhidao/baidu_style_files/module_c595d1cf.css">
		<script type="text/javascript" src="/sy/comm/zhidao/baidu_style_files/base_aa43e0c6.js">
		</script>
		<script type="text/javascript" src="/sy/comm/zhidao/baidu_style_files/module_7087aaee.js">
		</script>
		
		<script type="text/javascript">
			F._fileMap({
				'/sy/comm/zhidao/baidu_style_files/framework_ae621eb1.js': ['/static/common/lib/tangram/base/base.js', '/static/common/lib/magic/control/Dialog/Dialog.js', '/static/common/lib/magic/Dialog/Dialog.js', '/static/common/lib/magic/control/Dialog/$mask/$mask.js', '/static/common/lib/magic/control/Dialog/$button/$button.js', '/static/common/lib/magic/setup/suggestion/suggestion.js', '/static/common/lib/magic/control/Carousel/Carousel.js', '/static/common/lib/magic/Carousel/Carousel.js', '/static/common/lib/magic/control/Carousel/$fx/$fx.js', '/static/common/lib/magic/control/Carousel/$autoScroll/$autoScroll.js', '/static/common/lib/magic/magic.js', '/static/common/lib/magic/Base/Base.js', '/static/common/lib/magic/Calendar/Calendar.js', '/static/common/lib/magic/control/control.js', '/static/common/lib/magic/control/Carousel/$button/$button.js', '/static/common/lib/magic/Carousel/$button/$button.js', '/static/common/lib/magic/control/Layer/Layer.js', '/static/common/lib/magic/control/Popup/Popup.js', '/static/common/lib/magic/Background/Background.js', '/static/common/lib/magic/Popup/Popup.js', '/static/common/lib/magic/control/DatePicker/DatePicker.js', '/static/common/lib/magic/control/DatePicker/$title/$title.js', '/static/common/lib/magic/Mask/Mask.js', '/static/common/lib/magic/Pager/Pager.js', '/static/common/lib/magic/setup/setup.js', '/static/common/lib/magic/setup/datePicker/datePicker.js', '/static/common/lib/magic/control/Suggestion/Suggestion.js', '/static/common/lib/magic/control/Tab/Tab.js', '/static/common/lib/magic/setup/tab/tab.js']
			});
		</script>
		<script type="text/javascript">
			F._fileMap({
				'/sy/comm/zhidao/baidu_style_files/module_640a726e.js': ['/static/widget/home/push-login/push-login.js', '/static/home/ui/lazyload/lazyload.js', '/static/widget/home/promotion/promotion.js', '/static/widget/home/interest/interest.js', '/static/widget/home/hot-topic/hot-topic.js', '/static/widget/home/user-rank/user-rank.js', '/static/widget/home/zhidao-info/zhidao-info.js', '/static/widget/home/enterprise-rank/enterprise-rank.js', '/static/widget/home/recommend/recommend.js', '/static/widget/home/category/category.js', '/static/widget/home/enterprise-logo/enterprise-logo.js']
			});
		</script>
		<script type="text/javascript">
			PDC.mark("ht"); (function() {
				var a = PDC.ready = function() {
					var g = false,
					f = [],
					c;
					if (document.addEventListener) {
						c = function() {
							document.removeEventListener("DOMContentLoaded", c, false);
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
							for (var k = 0,
							h = f.length; k < h; k++) {
								f[k]()
							}
						}
					}
					function b() {
						try {
							document.documentElement.doScroll("left")
						} catch(h) {
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
								} catch(i) {}
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
				} ();
				a.isReady = false
			})();
			PDC.ready(function() {
				PDC.mark("drt")
			});
			PDC.mark("vt");
		</script>
		<link rel="stylesheet" type="text/css" href="/sy/comm/zhidao/baidu_style_files/bdimBubble.css">
		<style type="text/css" charset="utf-8">
			/* See license.txt for terms of usage */ /** reset styling **/ .firebugResetStyles
			{ z-index: 2147483646 !important; top: 0 !important; left: 0 !important;
			display: block !important; border: 0 none !important; margin: 0 !important;
			padding: 0 !important; outline: 0 !important; min-width: 0 !important;
			max-width: none !important; min-height: 0 !important; max-height: none
			!important; position: fixed !important; -moz-transform: rotate(0deg) !important;
			-moz-transform-origin: 50% 50% !important; border-radius: 0 !important;
			box-shadow: none !important; background: transparent none !important; pointer-events:
			none !important; } .firebugBlockBackgroundColor { background-color: transparent
			!important; } .firebugResetStyles:before, .firebugResetStyles:after { content:
			"" !important; } /**actual styling to be modified by firebug theme**/ .firebugCanvas
			{ display: none !important; } /* * * * * * * * * * * * * * * * * * * *
			* * * * * * * * * * * * * * * * * * * * * * * * * * * * */ .firebugLayoutBox
			{ width: auto !important; position: static !important; } .firebugLayoutBoxOffset
			{ opacity: 0.8 !important; position: fixed !important; } .firebugLayoutLine
			{ opacity: 0.4 !important; background-color: #000000 !important; } .firebugLayoutLineLeft,
			.firebugLayoutLineRight { width: 1px !important; height: 100% !important;
			} .firebugLayoutLineTop, .firebugLayoutLineBottom { width: 100% !important;
			height: 1px !important; } .firebugLayoutLineTop { margin-top: -1px !important;
			border-top: 1px solid #999999 !important; } .firebugLayoutLineRight { border-right:
			1px solid #999999 !important; } .firebugLayoutLineBottom { border-bottom:
			1px solid #999999 !important; } .firebugLayoutLineLeft { margin-left: -1px
			!important; border-left: 1px solid #999999 !important; } /* * * * * * *
			* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
			* * * * * */ .firebugLayoutBoxParent { border-top: 0 none !important; border-right:
			1px dashed #E00 !important; border-bottom: 1px dashed #E00 !important;
			border-left: 0 none !important; position: fixed !important; width: auto
			!important; } .firebugRuler{ position: absolute !important; } .firebugRulerH
			{ top: -15px !important; left: 0 !important; width: 100% !important; height:
			14px !important; background: url("data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%13%88%00%00%00%0E%08%02%00%00%00L%25a%0A%00%00%00%04gAMA%00%00%D6%D8%D4OX2%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C9e%3C%00%00%04%F8IDATx%DA%EC%DD%D1n%E2%3A%00E%D1%80%F8%FF%EF%E2%AF2%95%D0D4%0E%C1%14%B0%8Fa-%E9%3E%CC%9C%87n%B9%81%A6W0%1C%A6i%9A%E7y%0As8%1CT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AATE9%FE%FCw%3E%9F%AF%2B%2F%BA%97%FDT%1D~K(%5C%9D%D5%EA%1B%5C%86%B5%A9%BDU%B5y%80%ED%AB*%03%FAV9%AB%E1%CEj%E7%82%EF%FB%18%BC%AEJ8%AB%FA'%D2%BEU9%D7U%ECc0%E1%A2r%5DynwVi%CFW%7F%BB%17%7Dy%EACU%CD%0E%F0%FA%3BX%FEbV%FEM%9B%2B%AD%BE%AA%E5%95v%AB%AA%E3E5%DCu%15rV9%07%B5%7F%B5w%FCm%BA%BE%AA%FBY%3D%14%F0%EE%C7%60%0EU%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5JU%88%D3%F5%1F%AE%DF%3B%1B%F2%3E%DAUCNa%F92%D02%AC%7Dm%F9%3A%D4%F2%8B6%AE*%BF%5C%C2Ym~9g5%D0Y%95%17%7C%C8c%B0%7C%18%26%9CU%CD%13i%F7%AA%90%B3Z%7D%95%B4%C7%60%E6E%B5%BC%05%B4%FBY%95U%9E%DB%FD%1C%FC%E0%9F%83%7F%BE%17%7DkjMU%E3%03%AC%7CWj%DF%83%9An%BCG%AE%F1%95%96yQ%0Dq%5Dy%00%3Et%B5'%FC6%5DS%95pV%95%01%81%FF'%07%00%00%00%00%00%00%00%00%00%F8x%C7%F0%BE%9COp%5D%C9%7C%AD%E7%E6%EBV%FB%1E%E0(%07%E5%AC%C6%3A%ABi%9C%8F%C6%0E9%AB%C0'%D2%8E%9F%F99%D0E%B5%99%14%F5%0D%CD%7F%24%C6%DEH%B8%E9rV%DFs%DB%D0%F7%00k%FE%1D%84%84%83J%B8%E3%BA%FB%EF%20%84%1C%D7%AD%B0%8E%D7U%C8Y%05%1E%D4t%EF%AD%95Q%BF8w%BF%E9%0A%BF%EB%03%00%00%00%00%00%00%00%00%00%B8vJ%8E%BB%F5%B1u%8Cx%80%E1o%5E%CA9%AB%CB%CB%8E%03%DF%1D%B7T%25%9C%D5(%EFJM8%AB%CC'%D2%B2*%A4s%E7c6%FB%3E%FA%A2%1E%80~%0E%3E%DA%10x%5D%95Uig%15u%15%ED%7C%14%B6%87%A1%3B%FCo8%A8%D8o%D3%ADO%01%EDx%83%1A~%1B%9FpP%A3%DC%C6'%9C%95gK%00%00%00%00%00%00%00%00%00%20%D9%C9%11%D0%C0%40%AF%3F%EE%EE%92%94%D6%16X%B5%BCMH%15%2F%BF%D4%A7%C87%F1%8E%F2%81%AE%AAvzr%DA2%ABV%17%7C%E63%83%E7I%DC%C6%0Bs%1B%EF6%1E%00%00%00%00%00%00%00%00%00%80cr%9CW%FF%7F%C6%01%0E%F1%CE%A5%84%B3%CA%BC%E0%CB%AA%84%CE%F9%BF)%EC%13%08WU%AE%AB%B1%AE%2BO%EC%8E%CBYe%FE%8CN%ABr%5Dy%60~%CFA%0D%F4%AE%D4%BE%C75%CA%EDVB%EA(%B7%F1%09g%E5%D9%12%00%00%00%00%00%00%00%00%00H%F6%EB%13S%E7y%5E%5E%FB%98%F0%22%D1%B2'%A7%F0%92%B1%BC%24z3%AC%7Dm%60%D5%92%B4%7CEUO%5E%F0%AA*%3BU%B9%AE%3E%A0j%94%07%A0%C7%A0%AB%FD%B5%3F%A0%F7%03T%3Dy%D7%F7%D6%D4%C0%AAU%D2%E6%DFt%3F%A8%CC%AA%F2%86%B9%D7%F5%1F%18%E6%01%F8%CC%D5%9E%F0%F3z%88%AA%90%EF%20%00%00%00%00%00%00%00%00%00%C0%A6%D3%EA%CFi%AFb%2C%7BB%0A%2B%C3%1A%D7%06V%D5%07%A8r%5D%3D%D9%A6%CAu%F5%25%CF%A2%99%97zNX%60%95%AB%5DUZ%D5%FBR%03%AB%1C%D4k%9F%3F%BB%5C%FF%81a%AE%AB'%7F%F3%EA%FE%F3z%94%AA%D8%DF%5B%01%00%00%00%00%00%00%00%00%00%8E%FB%F3%F2%B1%1B%8DWU%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*UiU%C7%BBe%E7%F3%B9%CB%AAJ%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5*%AAj%FD%C6%D4%5Eo%90%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5%86%AF%1B%9F%98%DA%EBm%BBV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%AD%D6%E4%F58%01%00%00%00%00%00%00%00%00%00%00%00%00%00%40%85%7F%02%0C%008%C2%D0H%16j%8FX%00%00%00%00IEND%AEB%60%82")
			repeat-x !important; border-top: 1px solid #BBBBBB !important; border-right:
			1px dashed #BBBBBB !important; border-bottom: 1px solid #000000 !important;
			} .firebugRulerV { top: 0 !important; left: -15px !important; width: 14px
			!important; height: 100% !important; background: url("data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0E%00%00%13%88%08%02%00%00%00%0E%F5%CB%10%00%00%00%04gAMA%00%00%D6%D8%D4OX2%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C9e%3C%00%00%06~IDATx%DA%EC%DD%D1v%A20%14%40Qt%F1%FF%FF%E4%97%D9%07%3BT%19%92%DC%40(%90%EEy%9A5%CB%B6%E8%F6%9Ac%A4%CC0%84%FF%DC%9E%CF%E7%E3%F1%88%DE4%F8%5D%C7%9F%2F%BA%DD%5E%7FI%7D%F18%DDn%BA%C5%FB%DF%97%BFk%F2%10%FF%FD%B4%F2M%A7%FB%FD%FD%B3%22%07p%8F%3F%AE%E3%F4S%8A%8F%40%EEq%9D%BE8D%F0%0EY%A1Uq%B7%EA%1F%81%88V%E8X%3F%B4%CEy%B7h%D1%A2E%EBohU%FC%D9%AF2fO%8BBeD%BE%F7X%0C%97%A4%D6b7%2Ck%A5%12%E3%9B%60v%B7r%C7%1AI%8C%BD%2B%23r%00c0%B2v%9B%AD%CA%26%0C%1Ek%05A%FD%93%D0%2B%A1u%8B%16-%95q%5Ce%DCSO%8E%E4M%23%8B%F7%C2%FE%40%BB%BD%8C%FC%8A%B5V%EBu%40%F9%3B%A72%FA%AE%8C%D4%01%CC%B5%DA%13%9CB%AB%E2I%18%24%B0n%A9%0CZ*Ce%9C%A22%8E%D8NJ%1E%EB%FF%8F%AE%CAP%19*%C3%BAEKe%AC%D1%AAX%8C*%DEH%8F%C5W%A1e%AD%D4%B7%5C%5B%19%C5%DB%0D%EF%9F%19%1D%7B%5E%86%BD%0C%95%A12%AC%5B*%83%96%CAP%19%F62T%86%CAP%19*%83%96%CA%B8Xe%BC%FE)T%19%A1%17xg%7F%DA%CBP%19*%C3%BA%A52T%86%CAP%19%F62T%86%CA%B0n%A9%0CZ%1DV%C6%3D%F3%FCH%DE%B4%B8~%7F%5CZc%F1%D6%1F%AF%84%F9%0F6%E6%EBVt9%0E~%BEr%AF%23%B0%97%A12T%86%CAP%19%B4T%86%CA%B8Re%D8%CBP%19*%C3%BA%A52huX%19%AE%CA%E5%BC%0C%7B%19*CeX%B7h%A9%0C%95%E1%BC%0C%7B%19*CeX%B7T%06%AD%CB%5E%95%2B%BF.%8F%C5%97%D5%E4%7B%EE%82%D6%FB%CF-%9C%FD%B9%CF%3By%7B%19%F62T%86%CA%B0n%D1R%19*%A3%D3%CA%B0%97%A12T%86uKe%D0%EA%B02*%3F1%99%5DB%2B%A4%B5%F8%3A%7C%BA%2B%8Co%7D%5C%EDe%A8%0C%95a%DDR%19%B4T%C66%82fA%B2%ED%DA%9FC%FC%17GZ%06%C9%E1%B3%E5%2C%1A%9FoiB%EB%96%CA%A0%D5qe4%7B%7D%FD%85%F7%5B%ED_%E0s%07%F0k%951%ECr%0D%B5C%D7-g%D1%A8%0C%EB%96%CA%A0%A52T%C6)*%C3%5E%86%CAP%19%D6-%95A%EB*%95q%F8%BB%E3%F9%AB%F6%E21%ACZ%B7%22%B7%9B%3F%02%85%CB%A2%5B%B7%BA%5E%B7%9C%97%E1%BC%0C%EB%16-%95%A12z%AC%0C%BFc%A22T%86uKe%D0%EA%B02V%DD%AD%8A%2B%8CWhe%5E%AF%CF%F5%3B%26%CE%CBh%5C%19%CE%CB%B0%F3%A4%095%A1%CAP%19*Ce%A8%0C%3BO*Ce%A8%0C%95%A12%3A%AD%8C%0A%82%7B%F0v%1F%2FD%A9%5B%9F%EE%EA%26%AF%03%CA%DF9%7B%19*Ce%A8%0C%95%A12T%86%CA%B8Ze%D8%CBP%19*Ce%A8%0C%95%D1ae%EC%F7%89I%E1%B4%D7M%D7P%8BjU%5C%BB%3E%F2%20%D8%CBP%19*Ce%A8%0C%95%A12T%C6%D5*%C3%5E%86%CAP%19*Ce%B4O%07%7B%F0W%7Bw%1C%7C%1A%8C%B3%3B%D1%EE%AA%5C%D6-%EBV%83%80%5E%D0%CA%10%5CU%2BD%E07YU%86%CAP%19*%E3%9A%95%91%D9%A0%C8%AD%5B%EDv%9E%82%FFKOee%E4%8FUe%A8%0C%95%A12T%C6%1F%A9%8C%C8%3D%5B%A5%15%FD%14%22r%E7B%9F%17l%F8%BF%ED%EAf%2B%7F%CF%ECe%D8%CBP%19*Ce%A8%0C%95%E1%93~%7B%19%F62T%86%CAP%19*Ce%A8%0C%E7%13%DA%CBP%19*Ce%A8%0CZf%8B%16-Z%B4h%D1R%19f%8B%16-Z%B4h%D1R%19%B4%CC%16-Z%B4h%D1R%19%B4%CC%16-Z%B4h%D1%A2%A52%CC%16-Z%B4h%D1%A2%A52h%99-Z%B4h%D1%A2%A52h%99-Z%B4h%D1%A2EKe%98-Z%B4h%D1%A2EKe%D02%5B%B4h%D1%A2EKe%D02%5B%B4h%D1%A2E%8B%96%CA0%5B%B4h%D1%A2E%8B%96%CA%A0e%B6h%D1%A2E%8B%96%CA%A0e%B6h%D1%A2E%8B%16-%95a%B6h%D1%A2E%8B%16-%95A%CBl%D1%A2E%8B%16-%95A%CBl%D1%A2E%8B%16-Z*%C3l%D1%A2E%8B%16-Z*%83%96%D9%A2E%8B%16-Z*%83%96%D9%A2E%8B%16-Z%B4T%86%D9%A2E%8B%16-Z%B4T%06-%B3E%8B%16-Z%B4T%06-%B3E%8B%16-Z%B4h%A9%0C%B3E%8B%16-Z%B4h%A9%0CZf%8B%16-Z%B4h%A9%0CZf%8B%16-Z%B4h%D1R%19f%8B%16-Z%B4h%D1R%19%B4%CC%16-Z%B4h%D1R%19%B4%CC%16-Z%B4h%D1%A2%A52%CC%16-Z%B4h%D1%A2%A52h%99-Z%B4h%D1%A2%A52h%99-Z%B4h%D1%A2EKe%98-Z%B4h%D1%A2EKe%D02%5B%B4h%D1%A2EKe%D02%5B%B4h%D1%A2E%8B%96%CA0%5B%B4h%D1%A2E%8B%96%CA%A0e%B6h%D1%A2E%8B%96%CA%A0e%B6h%D1%A2E%8B%16-%95a%B6h%D1%A2E%8B%16-%95A%CBl%D1%A2E%8B%16-%95A%CBl%D1%A2E%8B%16-Z*%C3l%D1%A2E%8B%16-Z*%83%96%D9%A2E%8B%16-Z*%83%96%D9%A2E%8B%16-Z%B4T%86%D9%A2E%8B%16-Z%B4T%06-%B3E%8B%16-Z%B4T%06-%B3E%8B%16-Z%B4h%A9%0C%B3E%8B%16-Z%B4h%A9%0CZf%8B%16-Z%B4h%A9%0CZf%8B%16-Z%B4h%D1R%19f%8B%16-Z%B4h%D1R%19%B4%CC%16-Z%B4h%D1R%19%B4%CC%16-Z%B4h%D1%A2%A52%CC%16-Z%B4h%D1%A2%A52h%99-Z%B4h%D1%A2%A52h%99-Z%B4h%D1%A2EKe%98-Z%B4h%D1%A2EKe%D02%5B%B4h%D1%A2EKe%D02%5B%B4h%D1%A2E%8B%96%CA0%5B%B4h%D1%A2E%8B%96%CA%A0e%B6h%D1%A2E%8B%96%CA%A0e%B6h%D1%A2E%8B%16-%95a%B6h%D1%A2E%8B%16-%95A%CBl%D1%A2E%8B%16-%95A%CBl%D1%A2E%8B%16-Z*%C3l%D1%A2E%8B%16-Z*%83%96%D9%A2E%8B%16-Z*%83%96%D9%A2E%8B%16-Z%B4T%86%D9%A2E%8B%16-Z%B4T%06-%B3E%8B%16-Z%B4%AE%A4%F5%25%C0%00%DE%BF%5C'%0F%DA%B8q%00%00%00%00IEND%AEB%60%82")
			repeat-y !important; border-left: 1px solid #BBBBBB !important; border-right:
			1px solid #000000 !important; border-bottom: 1px dashed #BBBBBB !important;
			} .overflowRulerX > .firebugRulerV { left: 0 !important; } .overflowRulerY
			> .firebugRulerH { top: 0 !important; } /* * * * * * * * * * * * * * *
			* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ .fbProxyElement
			{ position: fixed !important; pointer-events: auto !important; }
		</style>
	</head>
	<body class="layout-center" style="background-color: #FAFAFA;">
		<script type="text/javascript">
			F.context('user', {
				isLogin: '1',
				name: 'test_user',
				id: '',
				gradeIndex: '3'
			});
		</script>
		
		

		
		
		<div class="line">
			<!-- userbar -->
		</div>
		<header id="header" class="container">
			<div id="search-box" class="search-box line pt-20">
				<a class="logo" href="#" title="软虹知道">
				</a>
				<ul class="channel">
					<!-- channel -->
				</ul>
				<form action="/SY_PLUG_SEARCH.query.do" name="search-form" method="get" id="search-form"
				class="search-form">
					<div class="box" style="position:relative;width:650px">
						<span class="search-box-bg">
						</span>
						<input class="hdi" id="kw" maxlength="256" tabindex="1" size="46" name="word">
						<span class="btn-wrap">
							<input alog-action="g-search-anwser" id="search-btn" hidefocus="true"
							onlick="javascript:search();"
							onmouseover="this.className='btn-global btn-hover';" onmouseout="this.className='btn-global';"
							onmousedown="this.className='btn-global btn-active'" tabindex="2" value="搜索答案"
							class="btn-global" type="submit">
						</span>
						<a href="#" alog-action="g-i-ask" id="ask-btn">
							提问
						</a>
					</div>
					<input name="data" id="data" value="" type="hidden">
				</form>
			</div>
		</header>
		<div id="body" class="container">
			<div id="menu">
				<ul>
					<li class="first current">
						<a class="first" log="action:menuclick,index:0" href="/cms/channel/${root_channel_id}/index.html">
							知道首页
						</a>
					</li>
					
					<@channel_list debugName="首页导航" count="7" channelId="${root_channel_id}"> 
					<#list tag_list as channel>
					<li>
						<a log="action:menuclick,index:1" rel="nofollow" href="/cms/channel/${channel.CHNL_ID}/index.html">
							${channel.CHNL_NAME}
						</a>
					</li>
					</#list>
					</@channel_list>
					
					
				</ul>
				<a rel="nofollow" href="#" target="_self"
				class="ucenter">
				</a>
			</div>
			
			<div id="sub-menu">
				<ul>
				<!-- 
					<li>
						<a alog-group="sub-menu" log="action:submenu,index:0" rel="nofollow" href="http://zhidao.baidu.com/expert/">
							知道专家
						</a>
					</li>
					<li>
						<a alog-group="sub-menu" log="action:submenu,index:1" rel="nofollow" href="http://zhidao.baidu.com/team">
							知道团队
						</a>
					</li>
				 -->	
				</ul>
			</div>
			 
			 
			<script>
				if (typeof PDC != 'undefined') {
					PDC.view_start();
				}
			</script>
			<div id="main-content">
				<div class="content-left">
				<@zhidao_topic_list debugName="专题" count="3"> 
					<div id="recommend-info">
					
					<#list tag_list as topic>
					 <#if topic_index == 0 >
					   <div style="" class="block-info">
					<#else>
						<div style="display:none;" class="block-info" >
					  </#if>
						
							<a class="recommend-pic" alog-action="recom-pic" target="_self" href="#"
							title="${topic.TOPIC_TITLE}" data-img="/file/${topic.TOPIC_IMAGE}">
								<img src="/file/${topic.TOPIC_IMAGE}" alt="">
							</a>
							<#list topic.ITEMS as askItem>
							<#if askItem_index == 0>
							<dl>
								<dt>
									<a alog-group="recom-title" target="_self" href="#">
									${askItem.Q_TITLE}
									</a>
								</dt>
								<dd class="info-content">
									<span class="answer">
									</span>
									
										<#if askItem.ANSWER.A_CONTENT?length gt 40>
											${askItem.ANSWER.A_CONTENT[0..40]}...
										<#else>
											${askItem.ANSWER.A_CONTENT}	
										</#if>
								</dd>
								<dd class="info-user">
									回答者：${askItem.ANSWER.S_USER}
									<span class="value-num i-evaluate">
										342
									</span>
								</dd>
							</dl>
							<ul class="other">
							 <#else>
								<li>
									<a class="f-simsun" alog-group="recom-title" target="_self" href="javascript:view('${askItem.Q_ID}','${askItem.Q_TITLE}');">
										${askItem.Q_TITLE}
									</a>
									<span>
										scl0507
									</span>
								</li>
							 </#if>
						   <#if askItem?size == askItem_index +1 >
							</ul>
							</#if>
							</#list>
						</div>
						</#list>
						
						
						<!-- 	
						<div class="block-info" style="display: none;">
							<a class="recommend-pic" alog-action="recom-pic" target="_blank" href="http://zhidao.baidu.com/search?lm=0&amp;rn=10&amp;pn=0&amp;fr=search&amp;ie=gbk&amp;word=%B1%B4%B6%E0%B7%D2%B5%C4%BE%AD%B5%E4%D7%F7%C6%B7%D3%D0%C4%C4%D0%A9"
							title="贝多芬逝世186周年，他有哪些传世之作？" data-img="http://img.iknow.bdimg.com/jctuijian/bei.jpg?t=1364313619">
								<img src="/sy/comm/zhidao/baidu_style_files/bei.jpg">
							</a>
							<dl>
								<dt>
									<a alog-group="recom-title" target="_blank" href="http://zhidao.baidu.com/search?lm=0&amp;rn=10&amp;pn=0&amp;fr=search&amp;ie=gbk&amp;word=%B1%B4%B6%E0%B7%D2%B5%C4%BE%AD%B5%E4%D7%F7%C6%B7%D3%D0%C4%C4%D0%A9">
										贝多芬逝世186周年，他有哪些传世之作？
									</a>
								</dt>
								<dd class="info-content">
									<span class="answer">
									</span>
									贝多芬于公元1827年3月26日逝世，他只在人世间停留了57年，但却完成了一百多部作品。主要作品有交响乐9部；管弦...
								</dd>
								<dd class="info-user">
									回答者：软虹知道
									<span class="value-num i-evaluate">
									</span>
								</dd>
							</dl>
							<ul class="other">
								<li>
									<a class="f-simsun" alog-group="recom-title" target="_blank" href="http://zhidao.baidu.com/question/47988603.html">
										贝多芬死亡真相是什么？
									</a>
									<span>
										⒎⒋⒎⒋
									</span>
								</li>
								<li>
									<a class="f-simsun" alog-group="recom-title" target="_blank" href="http://zhidao.baidu.com/question/12043323.html">
										贝多芬耳朵失聪后是如何创作的？
									</a>
									<span>
										jiujiu
									</span>
								</li>
								<li>
									<a class="f-simsun" alog-group="recom-title" target="_blank" href="http://zhidao.baidu.com/question/38738974.html">
										《第九交响曲》为何历经10年才创作出来？
									</a>
									<span>
										qq88026099
									</span>
								</li>
							</ul>
						</div>
						<div class="block-info" style="display: none;">
							<a class="recommend-pic" alog-action="recom-pic" target="_blank" href="http://zhidao.baidu.com/topic/zhichangshejiao/index.html"
							title="工作中如何化解自己与同事之间的矛盾？" data-img="http://img.iknow.bdimg.com/jctuijian/shejiao.jpg?t=1364313619">
								<img src="/sy/comm/zhidao/baidu_style_files/shejiao.jpg">
							</a>
							<dl>
								<dt>
									<a alog-group="recom-title" target="_blank" href="http://zhidao.baidu.com/topic/zhichangshejiao/index.html">
										工作中如何化解自己与同事之间的矛盾？
									</a>
								</dt>
								<dd class="info-content">
									<span class="answer">
									</span>
									身在职场的人天天都在社交，无论是巧言妙语说“动”人心的技巧，还是“赞美他人”、“察言观色”的切入方法，在...
								</dd>
								<dd class="info-user">
									回答者：软虹知道
									<span class="value-num i-evaluate">
									</span>
								</dd>
							</dl>
							<ul class="other">
								<li>
									<a class="f-simsun" alog-group="recom-title" target="_blank" href="http://zhidao.baidu.com/question/534833853.html">
										如何让自己成为老板的“自己人”？
									</a>
									<span>
										素问2011
									</span>
								</li>
								<li>
									<a class="f-simsun" alog-group="recom-title" target="_blank" href="http://zhidao.baidu.com/question/534834115.html">
										工作不顺心时该用什么方式摆脱困境？
									</a>
									<span>
										姑凉粉粉
									</span>
								</li>
								<li>
									<a class="f-simsun" alog-group="recom-title" target="_blank" href="http://zhidao.baidu.com/question/534834344.html">
										与老板的意见产生了分歧该怎么处理？
									</a>
									<span>
										热心网友
									</span>
								</li>
							</ul>
						</div>
						
					 -->
						
						<div class="select-bar-back">
							<span class="border-first">
							</span>
							<span class="border-second">
							</span>
							<span class="border-third">
							</span>
							<div style="top: 0px; left: 0px;" class="selected-back">
							</div>
							<div class="select-bar">
							<#list tag_list as topic>
							 <#if topic_index ==0>
							 <div class="recommend-title current" data-index="${topic_index}">
									${topic.TOPIC_TITLE}
								</div>
							  <#else>
							  <div class="recommend-title" data-index="${topic_index}">
							  	${topic.TOPIC_TITLE}
								</div>
							  </#if>
							</#list>
							<!-- 
								<a alog-action="recom-more" class="more" target="_self" href="#">
									更多
								</a>
							 -->	
							</div>
						</div>
						
						
						<script type="text/javascript">
						F.use('/static/widget/home/recommend/recommend.js');
					</script>
						
					</div>
				</div>
				</@zhidao_topic_list>
				
				<div class="content-right">
					
					<div id="user-info">
						<div class="user">
							<div class="user-img">
								<a alog-alias="user-img" href="#" target="_self">
								</a>
							</div>
							<div class="user-msg">
							</div>
						</div>
						<div class="user-record">
							<div class="ask-reply-button">
								<div class="button-left">
								</div>
								<div class="button-center">
									
								</div>
								<div class="button-right">
								</div>
							</div>
							<p class="help-num">
								新的一天从答题助人开始
							</p>
							<p class="help-more">
								<a alog-alias="user-helpmore" href="#"
								target="_self">
									去答题，开启知道之旅吧！
								</a>
							</p>
						</div>
					</div>
			<!-- my zhidao info -->
								<script>
								/* 我的知道信息 */
							 	var result = parent.FireFly.doAct("SY_COMM_ZHIDAO_QUESTION","getMyInfo",{"S_FLAG":1},false,false);
								var user = result["USER"];
								var userIntegral = result["USER_INTEGRAL"];
								var pubDocs = result["QUESTION_COUNT"];
								var doclistCount = result["ANSWER_COUNT"];
								
								//用户
								var userImg = $(".user-img");
								var imgBtn = jQuery("<a alog-alias='user-info-name'></a>").appendTo(userImg);
								jQuery("<img src='/sy/comm/zhidao/baidu_style_files/r6s1g3.gif'>").appendTo(imgBtn);
								
								var userMsg = $(".user-msg");
								var p1 =jQuery("<p></p>").appendTo(userMsg);
								var userName = jQuery("<a alog-alias='user-info-name' href='#' class='user-name' title='test_user'>").appendTo(p1);
								userName.text(user.USER_NAME);
								
								
								var p2 = jQuery("<p></p>").appendTo(userMsg);
								var integral =  jQuery("<span class='wealth'></span>").appendTo(p2);
								integral.text("积分值：" + userIntegral);
								
								
							    //积分
							    var integral = jQuery("<li class='wealth'></li>").appendTo($(".userData"));
							    var integralBtn = jQuery("<a href='#' target='_self'></a>").appendTo(integral);
							    integralBtn.append("<b>" + userIntegral + "</b><br> <span>积分值</span>");
							    integralBtn.bind("click", function() {
							    	myWenkuIntegral();
						        });
							    
								//知道统计
								var myZhidao = jQuery(".button-center");
								var myAsk = jQuery("<a alog-alias='user-ask' href='#' target='_blank'>").appendTo(myZhidao);
								jQuery("<p class='center-num'>4</p>").appendTo(myAsk);
								jQuery("<p class='center-info'>我的提问</p>").appendTo(myAsk);
								
								jQuery("<span></span>").appendTo(myZhidao);
								
								var myAnswer = jQuery("<a alog-alias='user-answer' href='#' target='_blank'>").appendTo(myZhidao);
								jQuery("<p class='center-num'>0</p>").appendTo(myAnswer);
								jQuery("<p class='center-info'>我的回答</p>").appendTo(myAnswer);
							 
							    
								/* 我的知道信息 */
								</script>
								
		<!-- userinfo demo
		<div id="user-info">
						<div class="user">
							<div class="user-img">
								<a alog-alias="user-img" href="http://zhidao.baidu.com/uhome" target="_blank">
									<img src="/sy/comm/zhidao/baidu_style_files/r6s1g3.gif">
								</a>
							</div>
							<div class="user-msg">
								<p>
									<a alog-alias="user-info-name" href="http://zhidao.baidu.com/uhome" class="user-name"
									title="test_user" target="_blank">
										test_user
									</a>
								</p>
								<p>
									<a title="查看知道升级新规则" href="http://www.baidu.com/search/zhidao_help.html#%E7%9F%A5%E9%81%93%E7%AD%89%E7%BA%A7"
									target="_blank" class="user-grade">
										三级
										<span class="new">
										</span>
									</a>
								</p>
								<p>
									<span class="wealth">
										财富值：34
									</span>
								</p>
							</div>
						</div>
						<div class="user-record">
							<div class="ask-reply-button">
								<div class="button-left">
								</div>
								<div class="button-center">
									<a alog-alias="user-ask" href="http://zhidao.baidu.com/uhome#ask" target="_blank">
										<p class="center-num">
											4
										</p>
										<p class="center-info">
											我的提问
										</p>
									</a>
									<span>
									</span>
									<a alog-alias="user-answer" href="http://zhidao.baidu.com/uhome#answer"
									target="_blank">
										<p class="center-num">
											0
										</p>
										<p class="center-info">
											我的回答
										</p>
									</a>
								</div>
								<div class="button-right">
								</div>
							</div>
							<p class="help-num">
								新的一天从答题助人开始
							</p>
							<p class="help-more">
								<a alog-alias="user-helpmore" href="http://zhidao.baidu.com/uhome#push"
								target="_blank">
									去答题，开启知道之旅吧！
								</a>
							</p>
						</div>
					</div>
		 -->			
					
					
					
					
				</div>
			</div>
			<div id="info-content">
				<div class="info-left">
					
					<@channel_list debugName="分类导航" channelId="${root_channel_id}"> 
					<div class="info-left-leftside">
						<div id="category-list">
							<h3>
								问题分类
							</h3>
							<#list tag_list as channel>
							<dl alog-group="hm-cate" data-cid="${channel_index + 100}">
								<dt class="more-flag">
									<a href="#" target="_self">
										${channel.CHNL_NAME}
									</a>
								</dt>
								<dd>
									<@channel_list debugName="${channel.CHNL_NAME}子分类" channelId="${channel.CHNL_ID}"> 
									<#list tag_list as sub>
									<#if sub_index < 3>
									<a href="#">
										${sub.CHNL_NAME}
									</a>
									</#if>
									</#list>
									</@channel_list>
								</dd>
							</dl>
								</#list>
						<!-- 	category demo	
							<dl alog-group="hm-cate" data-cid="80">
								<dt class="more-flag">
									<a href="http://zhidao.baidu.com/browse/80" target="_blank">
										生活
									</a>
								</dt>
								<dd>
									<a href="http://zhidao.baidu.com/browse/149">
										服装/首饰
									</a>
									<a href="http://zhidao.baidu.com/browse/147">
										美容/塑身
									</a>
									<a href="http://zhidao.baidu.com/browse/152">
										购物
									</a>
								</dd>
							</dl>
						 -->	
						</div>
						<script type="text/javascript">
			F.context('category', {
				
				<#list tag_list as channel>
				${channel_index + 100} : [
				      
				<@channel_list debugName="${channel.CHNL_NAME}子分类" channelId="${channel.CHNL_ID}"> 
				<#list tag_list as sub>
				{
					"name": "${sub.CHNL_NAME}",
					"id": "${sub.CHNL_ID}"
				},
				</#list>
				</@channel_list>
				{
					"name": "",
					"id": ""
				}
				],
				</#list>
				
				
				
				
				999 : [{
					"name": "天津",
					"id": 239
				},
				{
					"name": "重庆",
					"id": 241
				},
				{
					"name": "河北",
					"id": 242
				},
				{
					"name": "辽宁",
					"id": 243
				},
				{
					"name": "黑龙江",
					"id": 244
				},
				{
					"name": "吉林",
					"id": 245
				},
				{
					"name": "山西",
					"id": 247
				},
				{
					"name": "安徽",
					"id": 248
				},
				{
					"name": "浙江",
					"id": 249
				},
				{
					"name": "江苏",
					"id": 250
				},
				{
					"name": "江西",
					"id": 251
				},
				{
					"name": "广东",
					"id": 252
				},
				{
					"name": "福建",
					"id": 253
				},
				{
					"name": "海南",
					"id": 254
				},
				{
					"name": "河南",
					"id": 255
				},
				{
					"name": "湖北",
					"id": 256
				},
				{
					"name": "湖南",
					"id": 257
				},
				{
					"name": "四川",
					"id": 258
				},
				{
					"name": "云南",
					"id": 259
				},
				{
					"name": "贵州",
					"id": 260
				},
				{
					"name": "陕西",
					"id": 261
				},
				{
					"name": "甘肃",
					"id": 262
				},
				{
					"name": "青海",
					"id": 263
				},
				{
					"name": "宁夏",
					"id": 264
				},
				{
					"name": "内蒙古",
					"id": 265
				},
				{
					"name": "广西",
					"id": 266
				},
				{
					"name": "西藏",
					"id": 267
				},
				{
					"name": "新疆",
					"id": 268
				},
				{
					"name": "香港",
					"id": 269
				},
				{
					"name": "澳门",
					"id": 270
				},
				{
					"name": "台湾",
					"id": 271
				},
				{
					"name": "海外地区",
					"id": 760
				}]
			});
			F.context('interest', {
				'totalNum': parseInt("50"),
				'data': [{
					"title": "老鼠&猫",
					"questionTitle": "老鼠比猫大时,猫该怎么办?",
					"url": "http:\/\/zhidao.baidu.com\/question\/149638965.html",
					"answer": "猫吃老鼠并不是因为老鼠好欺负，而是老鼠体内有猫必须的营养成分。如果一开始老鼠就比猫大，猫会被淘汰。但如果以后老鼠才比猫大…"
				},
				{
					"title": "中国&癌症村",
					"questionTitle": "中国癌症村在哪些地方？",
					"url": "http:\/\/zhidao.baidu.com\/question\/529740139.html",
					"answer": "癌症村是一种在改革开放后在中国大陆出现的群体疾病现像。由于环境污染，大多是饮用了上游企业排出派出的未经处理的污水，造成某一村庄大规模的癌症病发…"
				},
				{
					"title": "男女&寿命",
					"questionTitle": "为何女性寿命普遍比男性长?",
					"url": "http:\/\/zhidao.baidu.com\/question\/530255429.html",
					"answer": "在男人和女人“谁活得更久”这场终极战争中，女人通常是最后的赢家。英国一名科学家最新研究发现，女人寿命普遍比男人长，这是因为男人的身体在…"
				},
				{
					"title": "辣椒&唾液",
					"questionTitle": "吃辣椒后为何唾液会很粘？",
					"url": "http:\/\/zhidao.baidu.com\/question\/531336276.html",
					"answer": "当辣椒的辣味刺激舌头、嘴的神经末梢，大脑会立即命令全身“戒备”：心跳加速、唾液或汗液分泌增加、肠胃加倍“工作”，同时释放出内啡肽…"
				},
				{
					"title": "胡子&硬度",
					"questionTitle": "胡子真的是越刮越硬吗？",
					"url": "http:\/\/zhidao.baidu.com\/question\/27612217.html",
					"answer": "刮胡子使人感觉胡子越来越硬纯属错觉，这是因为胡子太短看似粗硬造成的，就如同头发理短了也会给人以硬质的感觉…"
				}]
			});
		</script>
		
						<script type="text/javascript">
							F.use('/static/widget/home/category/category.js');
						</script>
					</div>
			 </@channel_list>	
			 
			 
			 
			 
			 
			 
			 
					
					<div class="dotted-line">
					</div>
					<div class="info-left-content">
						<div id="push-login">
							<h3>
								等待您来回答
							</h3>
							<a name="key" class="anchor">
							</a>
							<!-- 
							<div class="push-tab">
								<a alog-alias="my-care-tag" id="my-care-tag" class="push-tab-a " href="http://zhidao.baidu.com/q?ct=24&amp;cm=16&amp;tn=ucframework#push-2"
								target="_blank">
									我关注的关键词
								</a>
								<a alog-alias="my-care-cate" id="my-care-cate" class="push-tab-a  tab-middle"
								href="http://zhidao.baidu.com/q?ct=24&amp;cm=16&amp;tn=ucframework#push-3"
								target="_blank">
									我关注的分类
								</a>
								<a alog-alias="more-que" id="more-que" class="push-tab-a select" href="http://zhidao.baidu.com/q?ct=24&amp;cm=16&amp;tn=ucframework#push"
								target="_blank">
									为我推荐的问题
								</a>
							</div>
							 -->
							<div class="content">
								<div style="display: none;" class="set-bar">
								</div>
								<div class="question-list" alog-group="push-data">
									<@ask_list count="14" debugName="最新提问"> 
									<#list tag_list as ques>
									<dl data-qid="535450661" class="">
										<dt>
										<!-- 
											<span class="i-wealth">
												100
											</span>
										 -->	
											<a title="${ques.Q_TITLE}" href="#"
											target="_self">
												
												<#if ques.Q_TITLE?length gt 20>
																${ques.Q_TITLE[0..20]}...
																<#else>
																${ques.Q_TITLE}	
												</#if>
												
											</a>
											<span class="answer-num">
												${ques.Q_ANSWER_COUNTER}回答
											</span>
										</dt>
									</dl>
									</#list>
									</@ask_list>
									<!--  zhidao demo
									<dl data-qid="535450791" class="">
										<dt>
											<span class="no-score">
											</span>
											<a title="住楼问题,一般购买第几层好?好像有个说法是第几楼一下的灰尘少什么的,不太记得了" href="http://zhidao.baidu.com/question/535450791.html?push=cookie"
											target="_blank">
												住楼问题,一般购买第几层好?好像有个说法是第几楼一下的...
											</a>
											<span class="answer-num">
												0回答
											</span>
										</dt>
									</dl>
									 -->

								</div>
								<div class="change-button">
									<a href="#key" id="update-q-list" alog-alias="push-change">
									</a>
								</div>
							</div>
						</div>
						
					</div>
					<script>
						if (typeof PDC != 'undefined') {
							PDC.tti();
						}
					</script>
					<div class="info-left-ad">
						<div id="bottom-ad">
						</div>
						
						
							<a title="文库学院专题：过日子要有技术含量" target="_self" href="#"> <img alt="文库学院专题：过日子要有技术含量" src="/sy/comm/wenku/baidu_style_files/0dc9d19e4f6fef9a351d13546794a913.jpg">
											<div class="img-border"></div>
										</a>
										
					<!-- ad				
						<script>
							F.use(['/static/common/lib/tangram/base/base.js', '/static/home/ui/lazyload/lazyload.js'],
							function(T, lazyload) {
								lazyload.add('#bottom-ad',
								function() {
									T.sio('http://a.baidu.com/ecom?di=642&tm=baiduASPGBannerTRH&word=%CA%D7%D2%B3&tn=iknow&asp_refer=' + document.referrer).callByBrowser(function() {
										T('#bottom-ad').html(arrBaiduAds[642]);
									});
								},
								{
									method: 'callback'
								});
							});
						</script>
						 -->	
						
					</div>
					
					
					<div class="info-left-leftside">
						<div class="rank-block" id="expert-rank">
							<h3>
								优秀专家排行
							</h3>
							<a alog-alias="expert-rank-more" rel="nofollow" href="#"
							class="more-expert" target="_self">
								更多
							</a>
							
<!--专家排行demo 
							
							<div class="rank-one">
								<div class="inner-left">
									<a class="expert-img" alog-group="expert-rank-title" data-img="http://img.baidu.com/img/iknow/expert/xiewen.jpg"
									rel="nofollow" href="http://zhidao.baidu.com/expert/view/%25D6%25F7%25B3%25D6%25CF%25B2%25CE%25C5"
									target="_blank">
										<img src="/sy/comm/zhidao/baidu_style_files/xiewen.jpg">
									</a>
									<a class="btn btn-24-white fixed-ask" target="_blank" data-username="主持喜闻"
									href="#">
										<em>
											<b>
												<span>
													咨询专家
												</span>
											</b>
										</em>
									</a>
								</div>
								<div class="inner-right">
									<a rel="nofollow" href="http://zhidao.baidu.com/expert/view/%25D6%25F7%25B3%25D6%25CF%25B2%25CE%25C5"
									target="_blank">
										婚庆礼仪师谢文
									</a>
									<p>
										精通领域：婚庆
									</p>
									<p>
										上周回答数：4605
									</p>
								</div>
							</div>
 -->
							
					<@zhidao_specialist count="6" debugName="专家排行"> 
					<#list tag_list as specialist>
						<div class="rank-one">
								<div class="inner-left">
									<a class="expert-img" alog-group="expert-rank-title" 
									data-img="<@setUserImg specialist/>"
									rel="nofollow" href="#"
									target="_self">
									</a>
									<a class="btn btn-24-white fixed-ask" target="_blank" data-username="主持喜闻"
									href="#">
										<em>
											<b>
												<span>
													咨询专家
												</span>
											</b>
										</em>
									</a>
								</div>
								<div class="inner-right">
									<a rel="nofollow" href="#"
									target="_self">
										${specialist.USER_NAME}
									</a>
									<p><!-- 
										精通领域：
										 -->
									</p>
									<p>
										上周回答数：${specialist.A_COUNTER}
									</p>
								</div>
							</div>
					</#list>	
					</@zhidao_specialist>
							
							
			<!-- 	专家-文字列表
							<div class="rank-middle-line">
							</div>
							<dl>
								<dt class="rank1">
									<a alog-group="expert-rank-title" rel="nofollow" href="http://zhidao.baidu.com/expert/view/%25D7%25B0%25D0%25DE%25BE%25CD%25D5%25D2%25CD%25C1%25B0%25CD%25CD%25C3"
									target="_blank">
										室内设计师曾雄伟
									</a>
								</dt>
								<dt class="rank2">
									<a alog-group="expert-rank-title" rel="nofollow" href="http://zhidao.baidu.com/expert/view/%25C2%25C3%25D3%25CE%25D7%25A8%25BC%25D2%25CD%25C5"
									target="_blank">
										度假旅游顾问专家团
									</a>
								</dt>
								<dt class="rank3">
									<a alog-group="expert-rank-title" rel="nofollow" href="http://zhidao.baidu.com/expert/view/scl0507"
									target="_blank">
										手机数码发烧友孙春雷
									</a>
								</dt>
								<dt class="rank4">
									<a alog-group="expert-rank-title" rel="nofollow" href="http://zhidao.baidu.com/expert/view/%25B2%25BB%25D6%25AA%25B2%25BB%25BE%25F5aiy"
									target="_blank">
										手机购买咨询师陈特坤
									</a>
								</dt>
							</dl>
						 -->		
							
						</div>
						<script>
							F.use(['/static/common/lib/tangram/base/base.js', '/static/home/ui/lazyload/lazyload.js', '/static/common/ui/fixed-ask/fixed-ask.js'],
							function(T, lazyload, fixedAsk) {
								lazyload.add('#expert-rank', '#expert-rank .expert-img');
								T('#expert-rank .fixed-ask').click(function(e) {
									e.preventDefault();
									fixedAsk(T(this).data('username'));
								});
							});
						</script>
					</div>
					
					
					
					<div class="info-left-content">
						<div class="recommend-user famous-user">
							<h3>
								热门问答
							</h3>
							
	<@zhidao_hotlist count="5" debugName="热门问答"> 
	<#list tag_list as zhidao>						
							<div class="inner">
								<div class="inner-left">
									<div class="famous-logo">
									</div>
									<a alog-action="famous-img" rel="nofollow" href="#"
									target="_self" data-img="<@setUserImg zhidao.ANSWER_USER/>">
									</a>
									<a alog-action="famous-help" class="btn btn-24-white" target="_blank"
									rel="nofollow" href="#">
										<em>
											<b>
												向TA求助
											</b>
										</em>
									</a>
								</div>
								<div class="inner-right">
									<h5>
										<a alog-action="famous-title" rel="nofollow" href="#"
										target="_self">
											${zhidao.ANSWER_USER.USER_NAME}
										</a>
									</h5>
									<div class="content">
										<p>
											回答数
											<b>
												${zhidao.Q_ANSWER_COUNTER}
											</b>
											<span class="split">
											</span>
											帮助了
											<b>
													${zhidao.Q_READ_COUNTER}
											</b>
											人
										</p>
										<!-- 
										<p>
											消费者权益保护专家，打假第一人，王海热线负责人
										</p>
										 -->
									</div>
									<div class="question">
										<p class="ask">
											<a alog-action="famous-question" target="_self" href="#">
											<#if zhidao.Q_TITLE?length gt 30>
																${zhidao.Q_TITLE[0..30]}...
																<#else>
																${zhidao.Q_TITLE}	
												</#if>
											</a>
										</p>
										<p class="answer">
										
											<#if zhidao.ANSWER.A_CONTENT?length gt 25>
												${zhidao.ANSWER.A_CONTENT[0..25]}...
											<#else>
												${zhidao.ANSWER.A_CONTENT}	
											</#if>
											<!-- 
											<span class="value-num i-evaluate">
												51
											</span>
											 -->
										</p>
									</div>
								</div>
							</div>
	</#list>
	</@zhidao_hotlist>				
							
							
							
							<!-- 
							<div class="other">
								<h4>
									推荐名人
								</h4>
								<ul>
									<li>
										<a alog-action="famous-other" target="_blank" rel="nofollow" href="http://zhidao.baidu.com/s/wowen13.html?fr=mingren">
											交管局李勤处长
										</a>
									</li>
									<li>
										<a alog-action="famous-other" target="_blank" rel="nofollow" href="http://zhidao.baidu.com/s/wowen08.html?fr=mingren">
											海军少将张召忠
										</a>
									</li>
									<li class="last">
										<a alog-action="famous-other" target="_blank" rel="nofollow" href="http://zhidao.baidu.com/s/wowen07.html?fr=mingren">
											儿科医生崔玉涛
										</a>
									</li>
								</ul>
							</div>
						 -->	
							
							
						</div>
						<script>
							F.use(['/static/common/lib/tangram/base/base.js', '/static/home/ui/lazyload/lazyload.js', '/static/common/ui/fixed-ask/fixed-ask.js'],
							function(T, lazyload, fixedAsk) {
								lazyload.add('.famous-user', '.famous-user .inner-left a');
								T('.famous-user .fixed-ask').click(function(e) {
									e.preventDefault();
									fixedAsk(T(this).data('username'));
								});
							});
						</script>
					</div>
					<div class="block-line">
					</div>
	<!-- 		
					<div class="info-left-leftside">
						<div id="user-rank">
							<div class="tab" alog-group="user-rank-tab">
								<a rel="nofollow" href="http://zhidao.baidu.com/upf/?uscore&amp;fr=idup"
								class="select" target="_blank">
									周积分上升排行
								</a>
								<a rel="nofollow" href="http://zhidao.baidu.com/upf/?tscore&amp;fr=idtt"
								class="not-selected-total" target="_blank">
									总积分排行
								</a>
							</div>
							<div class="block-tab-content" alog-group="user-rank-title">
								<div class="info-block">
									<div class="rank-block">
										<div class="rank-one rank-one-buf">
											<div class="inner-left">
												<a rel="nofollow" href="http://www.baidu.com/p/phk1021?from=zhidao" data-img="http://himg.bdimg.com/sys/portrait/item/e69c70686b31303231f52b.jpg"
												target="_blank">
												</a>
												<a alog-action="user-rank-help" target="_blank" href="#" data-username="phk1021"
												class="btn btn-24-white fixed-ask">
													<em>
														<b>
															<span>
																向TA求助
															</span>
														</b>
													</em>
												</a>
											</div>
											<div class="inner-right">
												<a rel="nofollow" href="http://www.baidu.com/p/phk1021?from=zhidao" target="_blank">
													phk1021
												</a>
												<p>
													全部回答数：22033
												</p>
												<p>
													上升采纳数：1606
												</p>
											</div>
										</div>
										<div class="rank-middle-line-buf1">
										</div>
										<dl>
											<dt class="rank1">
												<a rel="nofollow" href="http://www.baidu.com/p/cqjiangyong?from=zhidao"
												target="_blank">
													cqjiangyong
												</a>
											</dt>
											<dt class="rank2">
												<a rel="nofollow" href="http://www.baidu.com/p/%E7%B2%BE%E8%8B%B1%E5%B0%8F%E6%9D%8E?from=zhidao"
												target="_blank">
													精英小李
												</a>
											</dt>
											<dt class="rank3">
												<a rel="nofollow" href="http://www.baidu.com/p/%E4%B8%8D%E7%9F%A5%E4%B8%8D%E8%A7%89aiy?from=zhidao"
												target="_blank">
													不知不觉aiy
												</a>
											</dt>
											<dt class="rank4">
												<a rel="nofollow" href="http://www.baidu.com/p/%E9%9D%92%E5%B8%9D%E4%BA%92%E8%81%94?from=zhidao"
												target="_blank">
													青帝互联
												</a>
											</dt>
										</dl>
									</div>
								</div>
								<div class="info-block" style="display:none;">
									<div class="rank-block">
										<div class="rank-one rank-one-buf">
											<div class="inner-left">
												<a rel="nofollow" href="http://www.baidu.com/p/12345A%E5%B8%AE%E5%8A%A9?from=zhidao"
												data-img="http://himg.bdimg.com/sys/portrait/item/515f313233343541b0efd6faf303.jpg"
												target="_blank">
												</a>
												<a alog-action="user-rank-help" target="_blank" href="#" data-username="12345A帮助"
												class="btn btn-24-white fixed-ask">
													<em>
														<b>
															<span>
																向TA求助
															</span>
														</b>
													</em>
												</a>
											</div>
											<div class="inner-right">
												<a rel="nofollow" href="http://www.baidu.com/p/12345A%E5%B8%AE%E5%8A%A9?from=zhidao"
												target="_blank">
													12345A帮助
												</a>
												<p>
													全部回答数：401872
												</p>
												<p>
													全部经验值：10320193
												</p>
											</div>
										</div>
										<div class="rank-middle-line-buf1">
										</div>
										<dl>
											<dt class="rank1">
												<a rel="nofollow" href="http://www.baidu.com/p/%E5%90%B4%E7%94%B0%E7%94%B0?from=zhidao"
												target="_blank">
													吴田田
												</a>
											</dt>
											<dt class="rank2">
												<a rel="nofollow" href="http://www.baidu.com/p/%E6%88%91%E4%B8%8D%E6%98%AF%E4%BB%96%E8%88%85?from=zhidao"
												target="_blank">
													我不是他舅
												</a>
											</dt>
											<dt class="rank3">
												<a rel="nofollow" href="http://www.baidu.com/p/%E5%A6%99%E9%85%92?from=zhidao"
												target="_blank">
													妙酒
												</a>
											</dt>
											<dt class="rank4">
												<a rel="nofollow" href="http://www.baidu.com/p/%E6%96%B0%E7%9F%B3%E5%AE%B6%E5%BA%84?from=zhidao"
												target="_blank">
													新石家庄
												</a>
											</dt>
										</dl>
									</div>
								</div>
							</div>
						</div>
						<script type="text/javascript">
							F.use("/static/widget/home/user-rank/user-rank.js");
						</script>
					</div>
	 -->						
					
	<!--				
					<div class="info-left-content">
						<div class="recommend-user master-user">
							<h3>
								达人风采
							</h3>
							<div class="inner">
								<div class="inner-left">
									<div class="master-logo">
									</div>
									<a alog-action="master-img" rel="nofollow" href="http://www.baidu.com/p/love%E8%88%9E%E5%A4%95?from=zhidao"
									target="_blank" data-img="http://img.iknow.bdimg.com/shouyeguanliy.jpg?t=1364186216">
									</a>
									<a alog-action="master-help" class="btn btn-24-white fixed-ask" target="_blank"
									data-username="love舞夕" href="#">
										<em>
											<b>
												<span>
													向TA求助
												</span>
											</b>
										</em>
									</a>
								</div>
								<div class="inner-right">
									<h5>
										<a alog-action="master-title" rel="nofollow" href="http://www.baidu.com/p/love%E8%88%9E%E5%A4%95?from=zhidao"
										target="_blank">
											love舞夕：烦恼分类管理员
										</a>
									</h5>
									<div class="content">
										<p>
											被赞同数:
											<b>
												707
											</b>
											<span class="split">
											</span>
											管理员等级:
											<b>
												14
											</b>
										</p>
										<p>
											<span class="split">
											</span>
											<a href="http://hi.baidu.com/zhishibole/item/a0ef244e1fe34416896d100f"
											style="display:none" class="interview" target="_blank">
												达人访谈
											</a>
										</p>
									</div>
									<div class="question">
										<p class="ask">
											<a alog-action="master-question" target="_blank" href="http://zhidao.baidu.com/question/534665443.html">
												18岁了，对自己没信心，没耐心...
											</a>
										</p>
										<p class="answer">
											18岁，是还在读书？还是走向社会了，不成熟很正常...
											<span class="value-num i-evaluate">
												2
											</span>
										</p>
									</div>
								</div>
							</div>
							<div class="other">
								<h4>
									推荐达人
								</h4>
								<ul>
									<li>
										<a alog-action="master-other" target="_blank" rel="nofollow" href="http://www.baidu.com/p/%E5%B9%BB%E7%B4%ABcx%E5%86%B0%E6%99%B6?from=zhidao">
											幻紫cx冰晶：生活团明星团员
										</a>
									</li>
									<li>
										<a alog-action="master-other" target="_blank" rel="nofollow" href="http://www.baidu.com/p/%E6%B2%99%E6%BC%A0%E4%B9%9F%E9%95%BF%E8%8D%89?from=zhidao">
											沙漠也长草：分类名人
										</a>
									</li>
									<li class="last">
										<a alog-action="master-other" target="_blank" rel="nofollow" href="http://www.baidu.com/p/mikechang77?from=zhidao">
											mikechang77：团长
										</a>
									</li>
								</ul>
							</div>
						</div>
						<script>
							F.use(['/static/common/lib/tangram/base/base.js', '/static/home/ui/lazyload/lazyload.js', '/static/common/ui/fixed-ask/fixed-ask.js'],
							function(T, lazyload, fixedAsk) {
								lazyload.add('.master-user', '.master-user .inner-left a');
								T('.master-user .fixed-ask').click(function(e) {
									e.preventDefault();
									fixedAsk(T(this).data('username'));
								});
							});
						</script>
					</div>
					
					<div class="block-line">
					</div>
  -->					
					
					
	<!-- 					
					<div class="info-left-leftside">
						<div class="rank-block" id="enterprise-rank">
							<h3>
								明星企业知道周排行榜
							</h3>
							<a href="http://zhidao.baidu.com/c/rank/view" class="more-enterprise"
							target="_blank">
								更多
							</a>
							<div class="rank-one rank-one-enterprise">
								<div class="inner-left">
									<a alog-action="enterprise-rank-img" href="http://zhidao.baidu.com/c/xiaomi"
									target="_blank">
										<img src="/sy/comm/zhidao/baidu_style_files/4610b912c8fcc3ceca0a3c3b9345d688d53f20eb.jpg"
										alt="">
									</a>
									<a alog-action="enterprise-rank-help" target="_blank" rel="nofollow" href="http://zhidao.baidu.com/new?opensiteid=283013&amp;opencid=0"
									class="btn btn-24-white">
										<em>
											<b>
												<span>
													求助客服
												</span>
											</b>
										</em>
									</a>
								</div>
								<div class="inner-right">
									<a alog-group="enterprise-rank-title" href="http://zhidao.baidu.com/c/xiaomi"
									target="_blank">
										小米企业平台
									</a>
									<p>
										周回答数：5261
									</p>
									<p>
										周满意回答数：1169
									</p>
								</div>
							</div>
							<div class="rank-middle-line">
							</div>
							<dl>
								<dt class="rank1">
									<a alog-group="enterprise-rank-title" class="enterprise" href="http://zhidao.baidu.com/c/samsung"
									target="_blank">
										三星数字服务平台
									</a>
								</dt>
								<dt class="rank2">
									<a alog-group="enterprise-rank-title" class="enterprise" href="http://zhidao.baidu.com/c/dell"
									target="_blank">
										戴尔企业平台
									</a>
								</dt>
								<dt class="rank3">
									<a alog-group="enterprise-rank-title" class="enterprise" href="http://zhidao.baidu.com/c/offcn"
									target="_blank">
										中公教育企业平台
									</a>
								</dt>
								<dt class="rank4">
									<a alog-group="enterprise-rank-title" class="enterprise" href="http://zhidao.baidu.com/c/ijinshan"
									target="_blank">
										金山网络企业平台
									</a>
								</dt>
							</dl>
						</div>
						<script type="text/javascript">
							F.use('/static/widget/home/enterprise-rank/enterprise-rank.js');
						</script>
					</div>
	 -->			
		<!-- 
					<div class="info-left-content">
						<div id="logo-wall">
							<h3>
								<a rel="nofollow" href="http://zhidao.baidu.com/s/enterprise/">
									企业知道
								</a>
							</h3>
							<a rel="nofollow" href="http://zhidao.baidu.com/s/enterprise/#logo-section"
							target="_blank" id="logo-wall-more">
								更多
							</a>
							<div alog-group="qiye-title" id="logo-content">
								<div id="logo-back">
									<div class="big-one">
										<a href="http://zhidao.baidu.com/c/lenovo" data-img="http://hiphotos.baidu.com/openiknow/pic/item/a686c917afb39297c83d6d48.jpg"
										class="big-one-a" target="_blank">
										</a>
										<img src="/sy/comm/zhidao/baidu_style_files/a686c917afb39297c83d6d48.jpg">
										<div class="info" style="display:none;">
											<p class="b-info-title">
												联想企业平台
											</p>
											<p class="b-info-content">
												全球领先pc企业，享誉全球的Think及Idea品牌。
											</p>
										</div>
									</div>
									<div class="small-imgs location-up">
										<a href="http://zhidao.baidu.com/c/xiaomi" data-img="http://hiphotos.baidu.com/openiknow/pic/item/728da97725914685b151b946.jpg"
										class="small-imgs-a" target="_blank">
										</a>
										<img src="/sy/comm/zhidao/baidu_style_files/728da97725914685b151b946.jpg">
										<div class="info" style="display:none;">
											<p class="b-small-info-title">
												小米企业平台
											</p>
											<p class="b-info-content">
											</p>
										</div>
									</div>
									<div class="small-imgs location-up">
										<a href="http://zhidao.baidu.com/c/samsung" data-img="http://hiphotos.baidu.com/openiknow/pic/item/c75c103809dfea58b311c722.jpg"
										class="small-imgs-a" target="_blank">
										</a>
										<img src="/sy/comm/zhidao/baidu_style_files/c75c103809dfea58b311c722.jpg">
										<div class="info" style="display:none;">
											<p class="b-small-info-title">
												三星数字服务平台
											</p>
											<p class="b-info-content">
											</p>
										</div>
									</div>
									<div class="small-imgs location-up">
										<a href="http://zhidao.baidu.com/c/ah189" data-img="http://hiphotos.baidu.com/openiknow/pic/item/024f78f0879c3f717831aa39.jpg"
										class="small-imgs-a" target="_blank">
										</a>
										<img src="/sy/comm/zhidao/baidu_style_files/024f78f0879c3f717831aa39.jpg">
										<div class="info" style="display:none;">
											<p class="b-small-info-title">
												安徽电信企业平台
											</p>
											<p class="b-info-content">
											</p>
										</div>
									</div>
									<div class="small-imgs location-up">
										<a href="http://zhidao.baidu.com/c/meiling" data-img="http://hiphotos.baidu.com/openiknow/pic/item/0b55b31959e5e4ed43a9adae.jpg"
										class="small-imgs-a" target="_blank">
										</a>
										<img src="/sy/comm/zhidao/baidu_style_files/0b55b31959e5e4ed43a9adae.jpg">
										<div class="info" style="display:none;">
											<p class="b-small-info-title">
												美菱数字服务平台
											</p>
											<p class="b-info-content">
											</p>
										</div>
									</div>
									<div class="small-imgs location-down">
										<a href="http://zhidao.baidu.com/c/chinaunicom" data-img="http://hiphotos.baidu.com/openiknow/pic/item/a2cc7cd9fe97115a38012f5e.jpg"
										class="small-imgs-a" target="_blank">
										</a>
										<img src="/sy/comm/zhidao/baidu_style_files/a2cc7cd9fe97115a38012f5e.jpg">
										<div class="info" style="display:none;">
											<p class="b-small-info-title">
												联通企业平台
											</p>
											<p class="b-info-content">
											</p>
										</div>
									</div>
									<div class="small-imgs location-down">
										<a href="http://zhidao.baidu.com/c/cmbchina" data-img="http://hiphotos.baidu.com/openiknow/pic/item/f2deb48fbaaff228f11f36a5.jpg"
										class="small-imgs-a" target="_blank">
										</a>
										<img src="/sy/comm/zhidao/baidu_style_files/f2deb48fbaaff228f11f36a5.jpg">
										<div class="info" style="display:none;">
											<p class="b-small-info-title">
												招商银行企业知道平台
											</p>
											<p class="b-info-content">
											</p>
										</div>
									</div>
									<div class="small-imgs location-down">
										<a href="http://zhidao.baidu.com/c/oppo" data-img="http://hiphotos.baidu.com/openiknow/pic/item/ac6eddc4bd5e745538db4947.jpg"
										class="small-imgs-a" target="_blank">
										</a>
										<img src="/sy/comm/zhidao/baidu_style_files/ac6eddc4bd5e745538db4947.jpg">
										<div class="info" style="display:none;">
											<p class="b-small-info-title">
												OPPO企业知道平台
											</p>
											<p class="b-info-content">
											</p>
										</div>
									</div>
									<div class="small-imgs location-down">
										<a href="http://zhidao.baidu.com/c/ijinshan" data-img="http://hiphotos.baidu.com/openiknow/pic/item/f91986181cc5361c4bedbc0c.jpg"
										class="small-imgs-a" target="_blank">
										</a>
										<img src="/sy/comm/zhidao/baidu_style_files/f91986181cc5361c4bedbc0c.jpg">
										<div class="info" style="display:none;">
											<p class="b-small-info-title">
												金山网络企业平台
											</p>
											<p class="b-info-content">
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<script type="text/javascript">
							F.use('/static/widget/home/enterprise-logo/enterprise-logo.js');
						</script>
					</div>
				 -->				
					
					
					
					
				</div>
				<div class="info-right">
					<div id="announcement">
						<h3>
							<a alog-alias="announ-more" rel="nofollow" href="#"
							target="_self">
								更多
							</a>
							公告区
						</h3>
						<ul alog-group="hm-gg-title">
									<@zhidao_notice_list debugName="知道公告" count="6"> 
										<#list tag_list as notice>
										<li>
								<a target="_self"
								 onclick="javascript:openNotice('${notice_tmpl_id}','${notice.NOTICE_ID}');"
								 style="color:#090;" rel="nofollow" href="#">
									${notice.NOTICE_TITLE}
								</a>
								</li>
										</#list>
									</@zhidao_notice_list>	
							
						</ul>
					</div>
					
					
					
					<div class="info-left-leftside">
						<div id="user-rank">
							<div class="tab" alog-group="user-rank-tab">
								<a rel="nofollow" href="#"
								class="select" target="_self">
									周积分上升排行
								</a>
								<a rel="nofollow" href="#"
								class="not-selected-total" target="_self">
									总积分排行
								</a>
							</div>
							<div class="block-tab-content" alog-group="user-rank-title">
								<div class="info-block">
									<div class="rank-block">
									
									<@zhidao_integralTop debugName="本周积分排行" type="week" count="5"> 
									<#list tag_list as integral>
									<#if integral_index ==0 >
										<div class="rank-one rank-one-buf">
											<div class="inner-left">
												<a rel="nofollow" href="#" data-img="<@setUserImg integral.USER/>"
												target="_self">
												</a>
												<a alog-action="user-rank-help" target="_blank" href="#" data-username="phk1021"
												class="btn btn-24-white fixed-ask">
													<em>
														<b>
															<span>
																向TA求助
															</span>
														</b>
													</em>
												</a>
											</div>
											<div class="inner-right">
												<a rel="nofollow" href="#" target="_self">
													${integral.USER.USER_NAME}
												</a>
												<p>
													 积分：${integral.SCORE}
												</p>
												<!-- 
												<p>
													上升采纳数：1606
												</p>
												 -->
											</div>
										</div>
										<div class="rank-middle-line-buf1">
										</div>
										<dl>
									 <#else>
											<dt class="rank1">
												<a rel="nofollow" href="#"
												target="_self">
													${integral.USER.USER_NAME}
												</a>
												<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${integral.INTEGRAL_VALUE}</span>
											</dt>
										</#if>
										</dl>
										</#list>
										</@zhidao_integralTop>
									</div>
								</div>
								<div class="info-block" style="display:none;">
									<div class="rank-block">
									<@zhidao_integralTop debugName="本周积分排行" type="total" count="5"> 
									<#list tag_list as integral>
									<#if integral_index ==0 >
										<div class="rank-one rank-one-buf">
											<div class="inner-left">
												<a rel="nofollow" href="#"
												data-img="<@setUserImg integral.USER/>"
												target="_self">
												</a>
												<a alog-action="user-rank-help" target="_blank" href="#" data-username="12345A帮助"
												class="btn btn-24-white fixed-ask">
													<em>
														<b>
															<span>
																向TA求助
															</span>
														</b>
													</em>
												</a>
											</div>
											<div class="inner-right">
												<a rel="nofollow" href="#"
												target="_blank">
														${integral.USER.USER_NAME}
												</a>
												<p>
													积分：${integral.INTEGRAL_VALUE}
												</p>
												<!-- 
												<p>
													全部经验值：10320193
												</p>
												 -->
											</div>
										</div>
										
										<div class="rank-middle-line-buf1">
										</div>
										<dl>
										 <#else>
											<dt class="rank4">
												<a rel="nofollow" href="#"
												target="_self">
													${integral.USER.USER_NAME}
												</a>
													<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${integral.INTEGRAL_VALUE}</span>
											</dt>
										</#if>
										</dl>
										</#list>
										</@zhidao_integralTop>
									</div>
								</div>
							</div>
						</div>
						<script type="text/javascript">
							F.use("/static/widget/home/user-rank/user-rank.js");
						</script>
					</div>
					
					
					
					<div id="site-promotion">
						<div class="tang-ui tang-carousel" id="imgs-block">
							<div id="TANGRAM__35__container" class="tang-carousel-container">
								<ul style="width: 212px;" id="TANGRAM__35__element" class="tang-carousel-element">
									<li id="TANGRAM__38-carousel-item" class="tang-carousel-item tang-carousel-item-selected">
										<a alog-action="ad-banner" href="#"
										target="_self" data-img="http://img.iknow.bdimg.com/loregrowth/zylq_212_132.jpg?t=1364309237"
										title="">
											<img src="/sy/comm/zhidao/baidu_style_files/zylq_212_132.jpg" class="promotion-img">
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div style="left: 69.5px;" id="site-navigator">
							<a href="#" id="position_left">
							</a>
							<a href="#" class="site-disc">
							</a>
							<a href="#" class="site-disc">
							</a>
							<a href="#" class="site-disc site-select">
							</a>
							<a href="#" id="position_right">
							</a>
						</div>
					</div>
					<div id="hot-topic" alog-group="hot-topic-title">
						
					<!-- 	
					<a href="http://zhidao.baidu.com/topic/zhichangshejiao/index.html" target="_blank"
						class="title-img" data-img="http://img.iknow.bdimg.com/tuiguang/shejiao212.jpg?t=1364193299">
						</a>
						<a href="http://zhidao.baidu.com/topic/zhichangshejiao/index.html" class="topic-title"
						target="_blank">
							职场社交，你还缺点啥？
						</a>
						
						<div class="hot-topic">
							<a href="http://zhidao.baidu.com/question/534833770.html" class="title"
							target="_blank">
								如何化解同事间的矛盾？
							</a>
							<div class="answer">
								距离产生美，就算是关系很好的同事，也要保持一定的距离。这样才能...
							</div>
						</div>
						<div class="hot-topic">
							<a href="http://zhidao.baidu.com/question/534833853.html" class="title"
							target="_blank">
								如何成为老板的自己人？
							</a>
							<div class="answer" style="display:none">
								适当的交心会让老板觉得你是自己人，但要适可而止。绝大部分人，都...
							</div>
						</div>
						<div class="hot-topic">
							<a href="http://zhidao.baidu.com/question/534834115.html" class="title"
							target="_blank">
								不顺心时怎么摆脱困境？
							</a>
							<div class="answer" style="display:none">
								所有事情背后都有人存在。人会因工作、职位的重要性，而忽略人的决...
							</div>
						</div>
						
						 -->
					</div>
					<div id="interest">
						<div class="content" alog-group="interest-content">
							<div class="content-block">
								<a href="http://zhidao.baidu.com/question/149638965.html" class="topic-title">
									老鼠&amp;猫
								</a>
								<div class="hot-topic">
									<a class="title" href="http://zhidao.baidu.com/question/149638965.html">
										老鼠比猫大时,猫该怎么办?
									</a>
									<span class="answer">
										猫吃老鼠并不是因为老鼠好欺负，而是老鼠体内有猫必须的营养成分。如果一开始老鼠就比猫...
									</span>
								</div>
								<div class="next-knowledge">
									<a href="#">
										下一个知识
									</a>
								</div>
							</div>
						</div>
						<img src="/sy/comm/zhidao/baidu_style_files/staus_2fe72496.png" alt="pic" class="page-img">
						<a href="#" class="next-more" hidefocus="">
						</a>
					</div>
					<div id="info-block-bottom">
					</div>
				</div>
			</div>
		</div>
		<footer id="footer">
			<p>
				<a target="_self" rel="nofollow" href=#>
					帮助
				</a>
				|
				<a target="_self" rel="nofollow" href="#">
					反馈建议
				</a>
				|
				<a target="_self" rel="nofollow" href="#">
					投诉举报
				</a>
			</p>
			<p>
				&#169;2013 Ruaho&nbsp;&nbsp;
				<a rel="nofollow" href="#" target="_self">
					使用软虹前必读
				</a>
				|
				<a rel="nofollow" href="#"
				target="_self">
					知道协议
				</a>
				|
				<a rel="nofollow" href="#" target="_self">
					软虹知道平台
				</a>
			</p>
		</footer>
		
		<script>
			F.use('/static/common/lib/tangram/base/base.js',
			function(T) {
				T('#user-info .user-grade').prop('title', '查看知道升级新规则');
				var p = T('#user-rank .inner-right p').eq(1),
				h = p.html();
				p.html(h.replace(/经验值/, '采纳数'));
			})
		</script>
	
		<script src="/sy/comm/zhidao/baidu_style_files/h.js" type="text/javascript">
		</script>
		<script type="text/javascript">
			PDC._load_js = function(b, c) {
				var a = document.createElement("script");
				a.setAttribute("type", "text/javascript");
				a.setAttribute("src", b);
				a.onload = a.onreadystatechange = function() {
					if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
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
				var c = this._opt.special_pages;
				var d = [this._opt.sample];
				for (var b = 0; b < c.length; b++) {
					d.push(c[b]["sample"])
				}
				var a = Math.max.apply(null, d);
				if (PDC._is_sample(a) == false) {
					return
				}
				PDC._analyzer.loaded = true;
				PDC._load_js(PDC._analyzer.url,
				function() {
					var g = PDC._analyzer.callbacks;
					for (var f = 0,
					e = g.length; f < e; f++) {
						g[f]()
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
			PDC._is_sample = function(a) {
				if (!PDC._random) {
					PDC._random = Math.random()
				}
				return PDC._random <= a
			}; (function() {
				if (document.attachEvent) {
					window.attachEvent("onload",
					function() {
						PDC.mark("lt")
					},
					false)
				} else {
					window.addEventListener("load",
					function() {
						PDC.mark("let");
						PDC._load_analyzer()
					})
				}
			})();
//			with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://img.iknow.bdimg.com/hunter/zd_d1.js?st=' + ~ (new Date() / 864e5)];
		</script>
		<script>
			var _trace_page_logid = 3230116480;
		</script>
	</body>

</html>
<!--32301164800859713034032709-->