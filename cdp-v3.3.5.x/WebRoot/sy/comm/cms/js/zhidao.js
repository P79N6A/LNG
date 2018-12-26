	/**
	 * 公告查看
	 **/
    function openNotice(tmplId, noticeId) {
    	//var url = "/wenku/tmpl/${notice_tmpl_id}.html?NOTICE_ID=" + noticeId;
    	var url = "/cms/tmpl/" + tmplId + ".html?NOTICE_ID=" + noticeId;
    	  var opts={'scrollFlag':true , 'url':url,'tTitle':"知道公告",'menuFlag':4};
          parent.Tab.open(opts);
    }
	
    /** 
	 * 查看知道
	 **/
    function view(id, title){
        var url = "/cms/tmpl/26b1CEGLB23FJNpZaDFFHW.html?id=" + id ;
        var opts={'scrollFlag':true , 'url':url,'tTitle':title,'menuFlag':1};
        parent.Tab.open(opts);
      } 
    /**
     *分类管理
     */
    function categoryManager(){
    	var opts={'url':'SY_COMM_ZHIDAO_CHNL.list.do','tTitle':'分类管理','menuFlag':2};
    	parent.Tab.open(opts);
    }
    /**
     * 我的提问
     **/
     function myAsk() {
        var opts={'url':'SY_COMM_ZHIDAOU_MYASK.list.do','tTitle':'我的提问','menuFlag':2};
        parent.Tab.open(opts); 
    }
     /**
      * 我的积分
      **/
    function myZhidaoIntegral() {
    	var opts={'url':'SY_COMM_ZHIDAO_MY_INTEGRAL.list.do','tTitle':'我的积分','menuFlag':2};
        parent.Tab.open(opts);
    }
 
    /**
     * 搜索
     **/
    function search() {
    	var filterArray = [];
    	var filter = {};
		filter["id"] = "service";
		filter["data"] = "SY_COMM_ZHIDAO";
		filterArray.push(filter);
    	
    	var keywords = $("#kw").val();
    	var param = {};
    	param["KEYWORDS"] = keywords;
    	param["FILTER"] = filterArray;
    	document.getElementById("data").value = jQuery.toJSON(param);
    	document.getElementById("searchForm").submit();
    }