var _com_favormy_plugin = _com_favormy_plugin || {};

(function(S, undefined) {
	S.Constants = {
          	API_SERVER : ('https:' == document.location.protocol) ? 'https://fmapi.sinaapp.com/' : 'http://fmapi.sinaapp.com/',//'http://58.215.189.199/api/',
		S_SERVER : ('https:' == document.location.protocol) ? "https://favormy.sinaapp.com/" : "http://58.215.189.199/",
		GA_ACCOUNT : "UA-28263363-3"
	};
})(_com_favormy_plugin);

var _gaq = _gaq || [];
_gaq.push(['favormy._setAccount', _com_favormy_plugin.Constants.GA_ACCOUNT]);
_gaq.push(['favormy._setAllowLinker', true]);
_gaq.push(['favormy._setDomainName', "auto"]);
_gaq.push(['favormy._trackPageview']);
_gaq.push(['favormy._setSiteSpeedSampleRate', 100]);

(function() {
	var url = document.location.href;
  	var regexp = new RegExp("http://pay.360buy.com/.*");
	if(!regexp.test(url)) {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        }
})();

(function(S, window, undefined) {
	S.window = window;
	var document = window.document;
	if (document) {
		S.loadJS = function(url, callback) {
			var js = document.createElement('script');
			js.type = 'text/javascript';
			js.async = true;
			js.src = url;
			var s = document.getElementsByTagName('script')[0];

			// Handle Script loading
			var done = false;

			js.onload = js.onreadystatechange = function() {
				if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
					done = true;
					var endTime = new Date().getTime();
					var timeSpent = endTime - S.startLoadJSTime[this.src];
					if (timeSpent >= 0) {
						_gaq.push([ 'favormy._trackTiming', 'FavorMy', 'Load JS', timeSpent, url ]);
					}
					callback();
					// Handle memory leak in IE
					js.onload = js.onreadystatechange = null;
				}
			};
			S.startLoadJSTime = S.startLoadJSTime || {};
			S.startLoadJSTime[url] = new Date().getTime();

			s.parentNode.insertBefore(js, s);
		};
		var url = document.location.href;
		var regexp = new RegExp("^(http://book\.douban\.com/.*|http://detail\.zol\.com\.cn/.*|http://.*\.amazon\.com/.*|http://.*\.001town\.com/.*|http://.*\.01goo\.com/.*|http://.*\.03l\.cn/.*|http://.*\.133china\.com/.*|http://.*\.139shop\.com/.*|http://yxp\.163\.com/.*|http://.*\.168dg\.com/.*|http://.*\.186mall\.com/.*|http://.*\.18to82\.com/.*|http://.*\.1mall\.com/.*|http://.*\.1j\.cn/.*|http://.*\.22shop\.com/.*|http://.*\.24dq\.com/.*|http://.*\.24quan\.com/.*|http://.*\.258sd\.com/.*|http://.*\.2688\.com/.*|http://.*\.(360buy|jd)\.com/.*|http://.*\.360hqb\.com/.*|http://.*\.360kxr\.com/.*|http://.*\.360mart\.com/.*|http://.*\.365goba\.com/.*|http://.*\.38hzt\.com/.*|http://.*\.39ty\.com/.*|http://.*\.4inlook\.com/.*|http://.*\.5188bag\.com/.*|http://.*\.51buy\.com/.*|http://.*\.51dg\.com/.*|http://.*\.51eng\.com/.*|http://.*\.51sheyuan\.com/.*|http://.*\.51youpin\.com/.*|http://.*\.520eye\.com/.*|http://.*\.52shehua\.com/.*|http://.*\.5366\.com/.*|http://t\.58\.com/.*|http://.*\.58hua\.com/.*|http://.*\.5lux\.com/.*|http://.*\.5yth\.com/.*|http://.*\.6919\.com/.*|http://.*\.6sbuy\.com/.*|http://.*\.77toy\.com/.*|http://.*\.7caihua\.com/.*|http://.*\.7cv\.com/.*|http://.*\.7sev\.com/.*|http://.*\.80ebus\.com/.*|http://.*\.8801\.net/.*|http://.*\.919it\.com/.*|http://.*\.929\.cn/.*|http://.*\.942radio\.com/.*|http://b2c\.958shop\.com/.*|http://.*\.96128\.com/.*|http://.*\.99pto\.com/.*|http://.*\.99read\.com/.*|http://.*\.9dadao\.com/.*|http://.*\.afffff\.com/.*|http://.*\.ai356\.com/.*|http://.*\.aidai\.com/.*|http://.*\.aiju\.com/.*|http://.*\.aim36\.com/.*|http://.*\.aimer\.com\.cn/.*|http://.*\.aiyingshi\.com/.*|http://.*\.aizhigu\.com\.cn/.*|http://.*\.amazon\.cn/.*|http://.*\.anni\.com/.*|http://.*\.apabi\.com/.*|http://.*\.augshow\.com/.*|http://.*\.autosup\.com/.*|http://.*\.baiyjk\.com/.*|http://.*\.bbesports\.com/.*|http://.*\.bearbuy\.com\.cn/.*|http://.*\.beautyplus\.cn/.*|http://.*\.beifabook\.com/.*|http://.*\.benq\.com\.cn/.*|http://.*\.best1\.com/.*|http://.*\.biaoshang\.hk/.*|http://.*\.binggo\.com/.*|http://.*\.bloves\.com/.*|http://.*\.bobomobi\.com/.*|http://.*\.bookschina\.com/.*|http://.*\.boqii\.com/.*|http://.*\.buding\.com/.*|http://.*\.buy007\.com/.*|http://.*\.buy361\.cn/.*|http://.*\.buyfine\.net/.*|http://.*\.buynow\.com\.cn/.*|http://.*\.caistv\.com/.*|http://.*\.caomeipai\.com/.*|http://.*\.car339\.com\.cn/.*|http://.*\.car6688\.com/.*|http://(.*\.)?carrefour\.com\.cn/.*|http://.*\.cdream\.com/.*|http://.*\.ceetop\.com/.*|http://.*\.chashu\.cn/.*|http://.*\.chedangjia\.com/.*|http://.*\.chengdecs\.com/.*|http://.*\.china-gift\.com/.*|http://.*\.china-pub\.com/.*|http://emall\.chinapay\.com/.*|http://.*\.chinayrs\.com/.*|http://.*\.chris-tina\.com/.*|http://.*\.clady\.com/.*|http://.*\.clinique\.com\.cn/.*|http://.*\.cncard\.com/.*|http://.*\.cnfse\.com/.*|http://.*\.colebuy\.com/.*|http://.*\.conslive\.com/.*|http://.*\.coo8\.com/.*|http://.*\.cosize\.com/.*|http://.*\.cosme-de\.com/.*|http://.*\.cw100\.com/.*|http://.*\.d1\.com\.cn/.*|http://.*\.daisonghua\.com/.*|http://(.*\.)?dangdang\.com/.*|http://.*\.daoyao\.com/.*|http://.*\.dazhe\.cn/.*|http://.*\.dazhongdianqi\.com\.cn/.*|http://.*\.dianpu\.com/.*|http://.*\.didatuan\.com/.*|http://.*\.disiqu\.cn/.*|http://.*\.dixintong\.com/.*|http://.*\.doulaimai\.com/.*|http://.*\.dsgoo\.com/.*|http://.*\.dtoto\.com/.*|http://.*\.duhub\.com/.*|http://.*\.duoding\.com/.*|http://.*\.e-giordano\.com/.*|http://.*\.e-lining\.com/.*|http://.*\.e-my\.com\.cn/.*|http://.*\.easy361\.com/.*|http://.*\.ebaimi\.com/.*|http://.*\.eboxbuy\.com/.*|http://.*\.ebtea\.com/.*|http://.*\.ecosme\.cn/.*|http://.*\.efeihu\.com/.*|http://.*\.ehaier\.com/.*|http://.*\.ejia\.com/.*|http://.*\.enjoyeye\.com/.*|http://.*\.epetbar\.com/.*|http://.*\.et5155\.com/.*|http://.*\.f508\.com/.*|http://.*\.fclub\.cn/.*|http://.*\.flowerby\.com/.*|http://.*\.flowercn\.com/.*|http://.*\.gap\.cn/.*|http://.*\.godida\.com/.*|http://.*\.gome\.com\.cn/.*|http://.*\.goocctv\.cn/.*|http://.*\.goodjd\.com/.*|http://.*\.goodnourish\.cn/.*|http://.*\.gou3618\.com/.*|http://.*\.gouduo\.com/.*|http://.*\.gouwulian\.com/.*|http://.*\.gouxie\.com/.*|http://.*\.goyahome\.com/.*|http://.*\.guobuy\.com/.*|http://.*\.guopi\.com/.*|http://.*\.guuoo\.com/.*|http://.*\.hany\.cn/.*|http://.*\.happigo\.com/.*|http://.*\.hit168\.com\.cn/.*|http://.*\.hitao\.com/.*|http://.*\.homeold\.cn/.*|http://.*\.homevv\.com/.*|http://.*\.hongkouzi\.com/.*|http://.*\.hopebook\.net/.*|http://.*\.huachu\.com\.cn/.*|http://.*\.huimeifang\.cn/.*|http://.*\.hw2008\.cn/.*|http://.*\.icaifeng\.com/.*|http://.*\.icson\.com/.*|http://.*\.ideemall\.com/.*|http://.*\.ihush\.com/.*|http://.*\.iloveyou\.com\.cn/.*|http://.*\.ilovezuan\.com/.*|http://.*\.imeelee\.com/.*|http://.*\.inoble\.com\.cn/.*|http://.*\.inshion\.com/.*|http://.*\.ishop\.cn/.*|http://.*\.it88\.com\.cn/.*|http://.*\.itzm\.com/.*|http://.*\.iyuyou\.com/.*|http://.*\.jiajiajk\.com/.*|http://.*\.jiaju\.com/.*|http://.*\.jiatx\.com/.*|http://.*\.jiayougo\.com/.*|http://.*\.jinbaidu\.com/.*|http://.*\.jmeishop\.com/.*|http://.*\.joyran\.com/.*|http://.*\.jsbcmall\.com/.*|http://.*\.jtlhome\.com/.*|http://.*\.jumei\.com/.*|http://.*\.junph\.com/.*|http://.*\.justonline\.cn/.*|http://.*\.jxdyf\.com/.*|http://.*\.k121\.com/.*|http://.*\.kadang\.com/.*|http://.*\.keede\.com\.cn/.*|http://.*\.kela\.cn/.*|http://.*\.kuaishubao\.com/.*|http://.*\.kxtkx\.com/.*|http://.*\.ladypk\.com/.*|http://.*\.laeibelle\.com/.*|http://.*\.lafaso\.com/.*|http://.*\.lamiu\.com/.*|http://.*\.lancome\.com\.cn/.*|http://.*\.lashou\.com/.*|http://.*\.ledaojia\.com/.*|http://.*\.leftlady\.com/.*|http://.*\.lens2005\.com/.*|http://.*\.letao\.com/.*|http://.*\.leyou\.com/.*|http://.*\.leyou\.com\.cn/.*|http://.*\.lijiababy\.com\.cn/.*|http://.*\.lijigou\.com/.*|http://.*\.likebuy\.com/.*|http://.*\.likeface\.com/.*|http://.*\.lingshi\.com/.*|http://.*\.liqunshop\.com/.*|http://.*\.liyi99\.com/.*|http://.*\.locknlock\.com\.cn/.*|http://.*\.lovo\.cn/.*|http://.*\.luckigo\.com/.*|http://.*\.lusen\.com/.*|http://.*\.lyceem\.com/.*|http://.*\.m18\.com/.*|http://.*\.maichawang\.com/.*|http://.*\.maimaike\.cn/.*|http://.*\.mamabb\.com/.*|http://.*\.mamahao\.cn/.*|http://.*\.mangocity\.com/.*|http://.*\.manzuo\.com/.*|http://.*\.masamaso\.com/.*|http://.*\.maxfunbuy\.com/.*|http://.*\.maywon\.com/.*|http://.*\.mbaobao\.com/.*|http://.*\.meici\.com/.*|http://.*\.meilele\.com/.*|http://.*\.meilieasy\.com/.*|http://.*\.meituan\.com/.*|http://.*\.menglu\.com/.*|http://.*\.mengmai\.com/.*|http://.*\.minibuy\.com/.*|http://.*\.mmgw\.cn/.*|http://.*\.mmuses\.com/.*|http://.*\.mobi001\.com/.*|http://.*\.mokamall\.com/.*|http://.*\.momoyoyo\.com/.*|http://.*\.montrosechina\.com/.*|http://.*\.mooiee\.com/.*|http://.*\.moonbasa\.com/.*|http://.*\.motostore\.com\.cn/.*|http://.*\.mpshow\.com\.cn/.*|http://.*\.naccoo\.com/.*|http://.*\.naguu\.com/.*|http://.*\.nayao\.com/.*|http://.*\.newegg\.com\.cn/.*|http://.*\.newgo5\.com/.*|http://.*\.nmlch\.com/.*|http://.*\.no5\.com\.cn/.*|http://.*\.nokia\.com\.cn/.*|http://.*\.nonmin88\.com/.*|http://.*\.obuy\.cn/.*|http://.*\.ofcard\.com/.*|http://.*\.ogage\.cn/.*|http://.*\.okbig\.com/.*|http://.*\.okbuy\.com/.*|http://.*\.okddy\.com/.*|http://.*\.okgolf\.cn/.*|http://.*\.olomo\.com/.*|http://.*\.olympus\.com\.cn/.*|http://.*\.olymsports\.com/.*|http://.*\.ono\.com\.cn/.*|http://.*\.orange3c\.com/.*|http://.*\.ouku\.com/.*|http://.*\.ourtasty\.com/.*|http://.*\.outice\.com/.*|http://.*\.oyego\.com/.*|http://.*\.paixie\.net/.*|http://.*\.palcent\.com/.*|http://.*\.pb89\.com/.*|http://.*\.pcarm\.com/.*|http://.*\.petyoo\.com/.*|http://.*\.pgbao\.com/.*|http://.*\.piaoliang100\.com/.*|http://.*\.pirateship\.com\.cn/.*|http://.*\.popyj\.com/.*|http://.*\.pupai\.cn/.*|http://.*\.purcotton\.com/.*|http://.*\.qianxun\.com/.*|http://.*\.qingci\.com/.*|http://.*\.qinqinbaby\.com/.*|http://.*\.qmango\.com/.*|http://.*\.qumei\.com/.*|http://.*\.quwan\.com/.*|http://.*\.qxian\.com/.*|http://.*\.rayi\.cn/.*|http://.*\.redbaby\.com\.cn/.*|http://.*\.robam\.com/.*|http://.*\.salala\.com\.cn/.*|http://.*\.samsclub\.cn/.*|http://.*\.sanfo\.com/.*|http://.*\.sapo\.com\.hk/.*|http://.*\.sasa\.com/.*|http://.*\.sasacity\.com/.*|http://.*\.sawbuy\.com/.*|http://.*\.shanghai-sports\.com/.*|http://.*\.shentop\.com/.*|http://.*\.shishangqiyi\.com/.*|http://.*\.shjdq\.com/.*|http://.*\.shnn\.com/.*|http://.*\.shopin\.net/.*|http://.*\.shoubiao\.com\.cn/.*|http://.*\.sigo\.cn/.*|http://.*\.sinobuy\.cn/.*|http://.*\.skcoo\.com/.*|http://.*\.skomart\.com/.*|http://.*\.snyun\.com/.*|http://.*\.sonmai\.cn/.*|http://.*\.sport2008\.com\.cn/.*|http://.*\.strawberrynet\.com/.*|http://.*\.suning\.com/.*|http://.*\.sz-esun\.com/.*|http://.*\.tao3c\.com/.*|http://item\.taobao\.com/.*|http://.*\.taoxie\.cn/.*|http://.*\.the365\.com/.*|http://.*\.thinkshop\.cn/.*|http://.*\.tian10\.com/.*|http://.*\.tiantian\.com/.*|http://item\.tmall\.com/.*|http://detail\.tmall\.com/.*|http://.*\.togj\.com/.*|http://.*\.tooogooo\.com/.*|http://.*\.toy90\.com/.*|http://.*\.toys365\.com/.*|http://.*\.tpy100\.com/.*|http://.*\.tztart\.com/.*|http://.*\.ugou\.cn/.*|http://.*\.uipmall\.com/.*|http://.*\.uiyi\.cn/.*|http://.*\.ushan\.cn/.*|http://.*\.uushouji\.com/.*|http://.*\.uya100\.com/.*|http://.*\.vaakav\.com/.*|http://.*\.vafox\.com/.*|http://.*\.vancl\.com/.*|http://.*\.vcotton\.com/.*|http://.*\.veedl\.com/.*|http://.*\.vegoos\.com/.*|http://.*\.venusveil\.com/.*|http://.*\.veryok\.cn/.*|http://.*\.viccol\.com/.*|http://.*\.vipshop\.com/.*|http://.*\.vipstore\.com/.*|http://.*\.vivian\.cn/.*|http://.*\.vjia\.com/.*|http://.*\.vnasi\.com/.*|http://.*\.voipyeah\.com/.*|http://.*\.w1\.cn/.*|http://.*\.waipowang\.com/.*|http://.*\.wangshanghai\.com/.*|http://.*\.wg365\.com/.*|http://.*\.winenice\.com/.*|http://.*\.wl\.cn/.*|http://.*\.womai\.com/.*|http://.*\.woye\.com/.*|http://.*\.wtaotao\.com/.*|http://.*\.wumeiwang\.com/.*|http://.*\.x-playboy\.com/.*|http://.*\.xiaokang\.com/.*|http://.*\.xiaozhuren\.com/.*|http://.*\.xinbaigo\.com/.*|http://.*\.xindou\.com/.*|http://.*\.xing800\.com/.*|http://.*\.xinhuabookstore\.com/.*|http://.*\.xiu\.com/.*|http://.*\.xtpo\.cn/.*|http://.*\.xzuan\.com/.*|http://.*\.yaja\.com\.cn/.*|http://.*\.yaofang\.cn/.*|http://.*\.yasai\.cn/.*|http://.*\.yeecare\.com/.*|http://.*\.yesmytea\.com/.*|http://.*\.yesmywine\.com/.*|http://.*\.yide\.com/.*|http://.*\.yifu\.com/.*|http://.*\.yihaodian\.com/.*|http://.*\.yintai\.com/.*|http://.*\.yinyuehe\.net/.*|http://.*\.yjcs\.cn/.*|http://.*\.yobrand\.com/.*|http://.*\.yoger\.com\.cn/.*|http://.*\.yoho\.cn/.*|http://.*\.yongle\.com\.cn/.*|http://.*\.yougou\.com/.*|http://.*\.youjk\.com/.*|http://.*\.yoyo18\.com/.*|http://.*\.yumaoclub\.com/.*|http://.*\.yyosso\.com/.*|http://.*\.zbird\.com/.*|http://.*\.zgcbb\.com/.*|http://.*\.zm7\.cn/.*|http://.*\.zopo\.com/.*|http://.*\.junph\.com/*|http://.*\.ocj\.com\.cn/.*|http://.*\.bookuu\.com/.*|http://.*\.woyo\.com/.*|http://.*\.ibuying\.com/.*|http://.*\.33go\.com\.cn/.*|http://.*\.xijie\.com/.*|http://.*\.nop\.cn/.*|http://.*\.asyp\.com/.*|http://.*\.sparty\.cn/.*|http://.*\.yizhedian\.com/.*|http://.*\.lvhezi\.com/.*|http://.*\.aishangbaobao\.com/.*|http://.*\.sportica\.cn/.*|http://.*\.jstsilk\.cn/.*|http://.*\.camel\.com\.cn/.*|http://.*\.cottonpop\.net/.*|http://.*\.hyj\.com/.*|http://.*\.myxiequ\.com/.*|http://.*\.mfplaza\.com/.*|http://.*\.do93\.com/.*|http://.*\.3guo\.cn/.*|http://.*\.yaqifushi\.com/.*|http://.*\.trura\.com/.*|http://.*\.lbaobao\.cn/.*|http://.*\.xiutuan\.com/.*|http://.*\.usashopcn\.com/.*|http://.*\.ihaveu\.com/.*|http://.*\.vipku\.com/.*|http://.*\.vipchina\.com/.*|http://.*\.fanrry\.cn/.*|http://.*\.lesunvip\.com/.*|http://.*\.nala\.com\.cn/.*|http://.*\.miqi\.cn/.*|http://.*\.meiribuy\.com/.*|http://.*\.pufung\.com/.*|http://.*\.xiaoye\.com/.*|http://.*\.hmeili\.com/.*|http://.*\.oulybuy\.com/.*|http://.*\.meifenzi\.com/.*|http://.*\.caomeishop\.com/.*|http://.*\.meifu360\.com/.*|http://.*\.bapashop\.com/.*|http://.*\.bulangxiongdi\.com/.*|http://.*\.gusubuy\.com/.*|http://.*\.opearl\.net/.*|http://.*\.ruci\.cn/.*|http://.*\.rax\.cn/.*|http://.*\.jiuxian\.com/.*|http://.*\.maimaicha\.com/.*|http://.*\.pinwine\.cn/.*|http://.*\.meiweidao\.com/.*|http://.*\.okliang\.com/.*|http://.*\.365wine\.com/.*|http://.*\.jjlg\.com\.cn/.*|http://.*\.bianlishe\.com/.*|http://.*\.epkmall\.com/.*|http://.*\.gdcct\.com/.*|http://.*\.500ccc\.com/.*|http://.*\.me361\.com/.*|http://.*\.malatamobile\.com/.*|http://.*\.trioo\.com/.*|http://.*\.oohdear\.com/.*|http://.*\.yaahe\.cn/.*|http://.*\.easeeyes\.com/.*|http://.*\.dbox\.cn/.*|http://.*\.haotehui\.com/.*|http://.*\.m6go\.com/.*|http://.*\.bianyigo\.com/.*|http://.*\.okjee\.com/.*|http://.*\.mygeek\.cn/.*|http://.*\.tbb\.cn/.*|http://.*\.ushare360\.com/.*|http://.*\.gqt168\.com/.*|http://.*\.konjoy\.com/.*|http://.*\.aoliz\.com/.*|http://.*\.jianianle\.com/.*|http://.*\.akajia\.com/.*|http://.*\.miqi\.com\.cn/.*|http://.*\.lehuimai\.com/.*|http://.*\.lifevc\.com/.*|http://nuomi\.com/.*|http://buy\.yesky\.com/.*|http://www.ouku.com/.*|http://www.ouku.com/.*|http://www.new7.com/.*)$");
		if(regexp.test(url)) {
			_gaq.push(['favormy._trackEvent', 'MatchedURL', window.location.host, url]);
			S.loadJS(S.Constants.S_SERVER + "scripts/jquery.fm.min.js", function() {
				S.loadJS(S.Constants.S_SERVER + "scripts/enhancement.js", function() {
					S.loadJS(S.Constants.S_SERVER + "scripts/favormy.js", function() {
						
					});
				});
			});
		}
	}
})(_com_favormy_plugin, window);