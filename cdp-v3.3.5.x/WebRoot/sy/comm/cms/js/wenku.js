    /** 
	 * 上传文档
	 **/
    function upload(tmplId, siteId){
       // var url = "/wenku/tmpl/${upload_tmpl_id}.html?SITE_ID=${site_id}";
    	 var url = "/wenku/tmpl/" + tmplId + ".html?SITE_ID=" + siteId;
        var opts={'scrollFlag':true , 'url':url,'tTitle':"上传文档",'menuFlag':4};
        parent.Tab.open(opts);
      } 
    
	/**
	 * 公告查看
	 **/
    function openNotice(tmplId, noticeId) {
    	//var url = "/wenku/tmpl/${notice_tmpl_id}.html?NOTICE_ID=" + noticeId;
    	var url = "/wenku/tmpl/" + tmplId + ".html?NOTICE_ID=" + noticeId;
    	  var opts={'scrollFlag':true , 'url':url,'tTitle':"文库公告",'menuFlag':4};
          parent.Tab.open(opts);
    }
	
    /** 
	 * 阅读文档
	 **/
    function view(docId, title){
        var url = "/wenku/content/" + docId + ".html";
        var opts={'scrollFlag':true , 'url':url,'tTitle':title,'menuFlag':1};
        parent.Tab.open(opts);
      } 
    /**
     *分类管理
     */
    function categoryManager(){
    	var opts={'url':'SY_COMM_WENKU_CHNL.list.do','tTitle':'分类管理','menuFlag':2};
    	parent.Tab.open(opts);
    /* 	var servId = "SY_COMM_WENKU_CHNL";
    	var readOnly = "false";
    	var params = "";
    	var url = FireFly.getContextPath() + "/sy/base/view/stdListView.jsp?sId=" + servId + "&readOnly=" + readOnly + "&params=" + params;
    	window.location.href= url; */
    }
    /**
     * 我的文档
     **/
     function myDocuments() {
        var opts={'url':'SY_COMM_WENKU_MYDOCUMENT.list.do','tTitle':'我的文档','menuFlag':2};
        parent.Tab.open(opts); 
    /* 	var servId = "SY_COMM_WENKU_MYDOCUMENT";
    	var readOnly = "false";
    	var params = "";
    	var url = FireFly.getContextPath() + "/sy/base/view/stdListView.jsp?sId=" + servId + "&readOnly=" + readOnly + "&params=" + params;
    	window.location.href= url; */
    }
     /**
      * 我的积分
      **/
    function myWenkuIntegral() {
    	var opts={'url':'SY_COMM_WENKU_MY_INTEGRAL.list.do','tTitle':'我的积分','menuFlag':2};
        parent.Tab.open(opts);
    	/* var servId = "SY_COMM_WENKU_MY_INTEGRAL";
    	var readOnly = "true";
    	var params = "";
    	var url = FireFly.getContextPath() + "/sy/base/view/stdListView.jsp?sId=" + servId + "&readOnly=" + readOnly + "&params=" + params;
    	window.location.href= url; */
    }
    /**
     * 我的文辑
     **/
    function myDoclist() {
    	var opts={'url':'SY_COMM_WENKU_MYDOCLIST.list.do','tTitle':'我的文辑','menuFlag':2};
        parent.Tab.open(opts);
        
    /* 	var servId = "SY_COMM_WENKU_MYDOCLIST";
    	var readOnly = "false";
    	var params = "";
    	var url = FireFly.getContextPath() + "/sy/base/view/stdListView.jsp?sId=" + servId + "&readOnly=" + readOnly + "&params=" + params;
    	window.location.href= url; */
    }
 
    /**
     * 搜索
     **/
    function search() {
    	var filterArray = [];
    	var filter = {};
		filter["id"] = "service";
		filter["data"] = "SY_COMM_WENKU_DOCUMENT";
		filterArray.push(filter);
    	
    	var keywords = $("#kw").val();
    	var param = {};
    	param["KEYWORDS"] = keywords;
    	param["FILTER"] = filterArray;
    	document.getElementById("data").value = jQuery.toJSON(param);
    	document.getElementById("searchForm").submit();
    }