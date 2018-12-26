var bdPass = bdPass||{}; bdPass.pop = bdPass.pop || {};
//    入口
bdPass.pop.init = bdPass.pop.init || function( cfg ){

    //    联调、上线环境配置

    var _passDomain = "passport.baidu.com" //上线请改成passport.baidu.com，调试的时候用passport.rdtest.baidu.com
       ,_jsFileDir = "js" //上线请改成js，调试的时候用js_uc
       ,_version  = '20121119' //每次上线的时候都需要改一下时间戳
       //以下的配置可以不用修改。
       ,_passUrl  = "https://"+_passDomain+"/"
       ,_cssDir   = _passUrl+'style/'
       ,_jsApiDir = _passUrl+_jsFileDir+"/"


    //    联调、上线环境配置，如果用户需要自己定义资源和组件的地址，可以传入 cssUrlWrapper、jsUrlWrapper 参数。

    var cfg = cfg || {};
    var cssUrlWrapper = cfg.cssUrlWrapper || [_cssDir,  '?t='+_version];
    var jsUrlWrapper  = cfg.jsUrlWrapper  || [_jsApiDir,'?t='+_version];
    var d = document , instace , cfg = cfg || {} , callback = '_PassUni'+new Date().getTime();;
   //    组件样式资源地址
    var css = cssUrlWrapper.join('uni_login.css');

    instace = {
        show : function(){
            //    开始载入Pass的API，如果参数中有Cache，此Show方法会被重写
            instace.loadPass( cfg.apiopt );
            //    缓存全部加载完毕后将根据 instace.willShow 来决定是否展现
            instace.willShow = true ;
            return instace;
        },
        //    载入 Pass的API，当未cache直接show时，或者只有cache时，执行此步骤。并且重写show方法
        loadPass : function(){
            //    先载入CSS，以免造成样式载入延迟导致界面变化
            var l=d.createElement("link");l.rel="stylesheet";l.type="text/css";l.href=css;l.disabled=false;d.getElementsByTagName("head")[0].appendChild(l);
            if(cfg.plugCss){ l=d.createElement("link");l.rel="stylesheet";l.type="text/css";l.href=cfg.plugCss;l.disabled=false;d.getElementsByTagName("head")[0].appendChild(l); }
            //    重写 show 方法防止重复执行
            instace.show = function(){  instace.willShow = true ; return instace;};
            //    把回调函数链接到 window 对象上
            window[callback] = instace.passCallback;
            //     passport API 参数
            var opt = cfg.apiopt || {} , src = [
                opt.protocol  || 'https://',               //    协议
                opt.passUrl   || _passDomain,              //    环境，联调环境：'passport.rdtest.baidu.com'
                '/v2/api/?getapi&class=',
                opt.apiClass  || 'login',
                '&tpl=',
                opt.tpl       || 'pp',                    //     产品线代码
                '&tangram=',
                opt.tangram   || 'true',                  //    是否加载Tangram，默认为 'true'，值类型：String
                '&callback=',
                callback
            ].join('');
            //    开始载入 PassPort的API 文件
            var s  = d.createElement("script"); s.type = "text/javascript"; s.src = src; d.getElementsByTagName("head")[0].appendChild(s);
            //    删除 loadPass 的操作
            delete instace.loadPass;
        },
        //    载入 Pass 的 API 后,触发的回调， 开始不断的载入缓存
        passCallback: function(){
            //    删除 挂在window的上instace.passCallback的链接,
            window[callback] = null;
            if( instace.components.length > 0 ){
                // 如果还有缓存则继续载入
                bdPass.api.insertScript( instace.components.pop() , instace.passCallback );
            }else{
                //   缓存载入完成后
                bdPass.pop.Login(cfg , instace);
                //    手工加载事件
                instace.ondestory = cfg.ondestory || function(){};
                instace.onhide    = cfg.onhide    || function(){};
                instace.onshow    = cfg.onshow    || function(){};
                //    如果是以 instace.show 触发的操作则进行展现
                if( instace.willShow ){ instace.show() }
                //    删除循环载入缓存的操作以及脚本资源序列
                delete instace.passCallback;
                delete instace.components;
            }
        }
        //    当所有脚本载入完毕后
    };
    instace.components = [ jsUrlWrapper.join('pass_uni_login.js') ];
    if(cfg.authsite instanceof Array ){ instace.components.push('http://passport.baidu.com/phoenix/account/jsapi') } //第三方帐号接入使用上线请改成passport.baidu.com，调试的时候用passport.rdtest.baidu.com
    if(cfg.cache){ instace.loadPass( cfg.apiopt ); }
    if(cfg.id){ if(d.getElementById(cfg.id) ) { d.getElementById(cfg.id).onclick=function(){ instace.show() } }}
    return instace;
};