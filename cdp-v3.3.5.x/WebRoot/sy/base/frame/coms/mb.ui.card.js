/** 手机卡片页面form组件 */
GLOBAL.namespace("mb.ui");
mb.ui.card = function(options) {
   var defaults = {
		"id":options.pId + "-card",
		"act":"",
		"sId":"",
		"pCon":null,
		"pId":"",
		"parHandler":null,
		"readOnly":false,
		"data":null
   };
   this.opts = jQuery.extend(defaults,options);
   this._id = this.opts.id;
   this._pCon = this.opts.pCon;
   this._pkCode = options[UIConst.PK_KEY] || "";
   this.servId = this.opts.sId; 
   this._data = this.opts.data;//服务定义信息
   this._items = this._data.ITEMS; //字段定义信息
   this.dicts = this.opts.data.DICTS;	// 字典定义
   this.origData = null;
   
   this.lTitle = UIConst.ITEM_MOBILE_LTITLE; 					/* 移动列表标题 */
   this.lItem = UIConst.ITEM_MOBILE_LITEM;    					/* 移动列表项 */
   this.cItem = UIConst.ITEM_MOBILE_CITEM;					    /* 移动卡片项 */
   this.cHidden = UIConst.ITEM_MOBILE_CHIDDEN;    				/* 移动卡隐藏项 */
   this.lTime = UIConst.ITEM_MOBILE_LTIME;					    /* 列表时间项 */
   
   this._uItems = {};
};


/*
 * 显示卡片页面，主方法
 */
mb.ui.card.prototype.render = function() {
   this._bldLayout();
   this._afterLoad();
};
mb.ui.card.prototype.fillData = function(data) {
    this.origData = data;
   jQuery.each(this._uItems,function(i,n) {
	   var value = data[i];
	   if (n.setValue) {
		   if (data[i + "__NAME"]) {
			   n.setValue(value,data[i + "__NAME"]);
		   } else {
			   n.setValue(value);
		   }
	   }
   });
};

mb.ui.card.prototype._bldLayout = function() {
   this.mainContainer = jQuery("<div></div>").addClass("mbCard-form");
   this._bldForm();
   this.mainContainer.appendTo(this._pCon);
};
mb.ui.card.prototype._bindHrClick = function(hrObj) {
  var _self = this;
  if (hrObj.hasClass("mbCard-hr-closeFlag")) {
	  hrObj.next().fadeIn("slow");
	  hrObj.removeClass("mbCard-hr-closeFlag");
	  hrObj.find(".mbCard-hr-close").html(UIConst.FONT_STROKE_close);
  } else {
	  hrObj.next().fadeOut("slow");
	  hrObj.addClass("mbCard-hr-closeFlag");
	  hrObj.find(".mbCard-hr-close").html(UIConst.FONT_STROKE_expand);
  }
  
  
};
mb.ui.card.prototype._bldForm = function() {
    var _self = this;
    var closeHrStr = "";//"<span class='mbCard-hr-close fontomasRegular'>" + UIConst.FONT_STROKE_close + "</span>";
    this.set = jQuery("<div></div>").addClass("mbCard-form-set").appendTo(_self.mainContainer);
    this.table = jQuery("<table></table>").addClass("mbCard-form-table mb-shadow-3 mb-radius-9").appendTo(this.set);
    this.hr = jQuery("<div></div>").html("基本信息" + closeHrStr).addClass("mbCard-form-hr");
    this.set.prepend(this.hr);
//	_self.hr.bind("click",function() {
//		_self._bindHrClick(jQuery(this));
//	});
    var count = 0;
    jQuery.each(this._items,function(i,n) {
    	var type = n.ITEM_INPUT_TYPE;
    	var itemName = n.ITEM_NAME;
    	var mbType = n.ITEM_MOBILE_TYPE;
    	if (mbType && mbType.length > 0 && mbType < _self.cHidden) {//卡片显示：包括卡片项和列表的展示项
    		if ((count == 0) && (type == UIConst.FITEM_ELEMENT_HR)) {//第一个分组框
    			_self.hr.remove();
    			_self.hr = jQuery("<div></div>").html(itemName + closeHrStr).addClass("mbCard-form-hr");
    			_self.set.prepend(_self.hr);
//    			_self.hr.bind("click",function() {
//    				_self._bindHrClick(jQuery(this));
//    			});
    			count++;
    			return true;    		
    		}
    		if ((count > 0) && (type == UIConst.FITEM_ELEMENT_HR)) {//分组框
    			_self.set = jQuery("<div></div>").addClass("mbCard-form-set").appendTo(_self.mainContainer);
    			_self.table = jQuery("<table></table>").addClass("mbCard-form-table mb-shadow-3 mb-radius-9").appendTo(_self.set);
    			_self.hr = jQuery("<div></div>").html(itemName + closeHrStr).addClass("mbCard-form-hr");
    			_self.set.prepend(_self.hr);
//    			_self.hr.bind("click",function() {
//    				_self._bindHrClick(jQuery(this));
//    			});
    			count++;
    			return true;
    		}
    		var rtnTr = _self._bldTr(n);
    		if (rtnTr) {
    			rtnTr.appendTo(_self.table);
    		}
    		count++;
    	}
    });
};
mb.ui.card.prototype._bldTr = function(item) {
	var _self = this;
    var tr = jQuery("<tr></tr>").addClass("mbCard-form-leftTr");
    var leftTd = jQuery("<td></td>").addClass("mbCard-form-leftTd").appendTo(tr);
    var rightTd = jQuery("<td></td>").addClass("mbCard-form-rightTd").appendTo(tr);
   
	// 输入框类型
	var type = item.ITEM_INPUT_TYPE;
	// 输入模式
	var inputMode = item.ITEM_INPUT_MODE;
	// 必填
	var notNull = item.ITEM_NOTNULL;
	var itemCode = item.ITEM_CODE;
	var itemName = item.ITEM_NAME;
	//构造lable
	_self._label({"id":"","item":item}).appendTo(leftTd);
	//构造输入框
	var ui;
	if (type == UIConst.FITEM_ELEMENT_INPUT) {//输入框
		if (inputMode == UIConst.FITEM_INPUT_AUTO) {//字典选择
			var opts = {
					"id":_self._id + "-" + itemCode,
					"item":item
				}
				ui = new mb.ui.input(opts);
				_self._uItems[itemCode] = ui;
				ui.obj.appendTo(rightTd);
		} else if (inputMode == UIConst.FITEM_INPUT_DICT) {
			//alert(itemCode + "===" + item.DICT_ID + "==" + _self.dicts[item.DICT_ID]);
			var opts = {
					"id":_self._id + "-" + itemCode,
					"item":item,
					"data":_self.dicts[item.DICT_ID],
					"dictId":item.DICT_ID
				}
			ui = new mb.ui.dict(opts);
			_self._uItems[itemCode] = ui;
			ui.obj.appendTo(rightTd);
		} else if (inputMode == UIConst.FITEM_INPUT_DATE) {//日期选择
			var opts = {
					"id":_self._id + "-" + itemCode,
					"item":item
				}
			ui = new mb.ui.DateInput(opts);
			_self._uItems[itemCode] = ui;
			ui.obj.appendTo(rightTd);
		}

	} else if (type == UIConst.FITEM_ELEMENT_RADIO) {//单选框
		var opts = {
				"id":_self._id + "-" + itemCode,
				"item":item,
				"data":_self.dicts[item.DICT_ID]
			}
		ui = new mb.ui.radioBoxGroup(opts);
		_self._uItems[itemCode] = ui;
		ui.obj.appendTo(rightTd);
	} else if (type == UIConst.FITEM_ELEMENT_CHECKBOX) {//多选框
		var opts = {
				"id":_self._id + "-" + itemCode,
				"item":item,
				"data":_self.dicts[item.DICT_ID]
			}
		ui = new mb.ui.checkBoxGroup(opts);
		_self._uItems[itemCode] = ui;
		ui.obj.appendTo(rightTd);
	} else if (type == UIConst.FITEM_ELEMENT_SELECT) {//下拉框
		var opts = {
				"id":_self._id + "-" + itemCode,
				"item":item,
				"data":_self.dicts[item.DICT_ID]
			}
		ui = new mb.ui.select(opts);
		_self._uItems[itemCode] = ui;
		ui.obj.appendTo(rightTd);
	} else if (type == UIConst.FITEM_ELEMENT_TEXTAREA) {//大文本框
		var opts = {
				"id":_self._id + "-" + itemCode,
				"item":item
			}
		ui = new mb.ui.textArea(opts);
		_self._uItems[itemCode] = ui;
		ui.obj.appendTo(rightTd);		
	} else if (type == UIConst.FITEM_ELEMENT_FILE) {//文件
		var opts = {
				"id":_self._id + "-" + itemCode,
				"item":item
			}
		ui = new mb.ui.file(opts);
		_self._uItems[itemCode] = ui;
		ui.obj.appendTo(rightTd);		
	} else if (type == UIConst.FITEM_ELEMENT_FILE) {//图片
		var opts = {
				"id":_self._id + "-" + itemCode,
				"item":item
			}
		ui = new mb.ui.img(opts);
		_self._uItems[itemCode] = ui;
		ui.obj.appendTo(rightTd);		
	} else if (type == UIConst.FITEM_ELEMENT_PSW) {//密码框
		var opts = {
				"id":_self._id + "-" + itemCode,
				"item":item
			}
		ui = new mb.ui.pwd(opts);
		_self._uItems[itemCode] = ui;
		ui.obj.appendTo(rightTd);		
	}
	//必填项的支持
	if (notNull == UIConst.STR_YES) {
		jQuery("<span>*</span>").addClass("mbCard-form-notNull mb-icon-notNull").appendTo(leftTd);
	}
	return tr;
};
mb.ui.card.prototype._label = function(options) {
    var defaults = {
			"id":"",
			"item":null			
	};
    var opts = jQuery.extend(defaults,options);
    var itemName = opts.item.ITEM_NAME || "";
	var label = jQuery("<label></label>").addClass("mbCard-form-label").text(itemName); 
	return label;
};

mb.ui.card.prototype._afterLoad = function() {
    this._clickDo();
};
mb.ui.card.prototype._clickDo = function() {
   this.mainContainer.bind("click",function(event) {
	   var tar = event.target;
	   if (jQuery(tar).hasClass("mb-select-a")) {
		   
	   } else {
		   jQuery(".mb-select-active").removeClass("mb-select-active");
		   
	   }
   });
};
mb.ui.card.prototype.getModifyData = function() {
	var _self = this;
	var modiData = {};
	if (_self.origData) {//有初始数据
		var origData = _self.origData;
		jQuery.each(_self._uItems,function(i,n) {
			var origValue = origData[i];
			if (n.getValue() == origValue) {
				
			} else {
				modiData[i] = n.getValue();
			}
		});
		
	} else {
		jQuery.each(this._uItems,function(i,n) {
			modiData[i] = n.getVlaue();
		});		
	}
    return modiData;
};
mb.ui.card.prototype.getItem = function(itemCode) {
	var _self = this;
    var ui = _self._uItems[itemCode];
    return ui;
};
mb.ui.card.prototype.itemValue = function(itemCode) {
	var _self = this;
    var ui = _self.getItem(itemCode);  
    if (ui) {
    	return ui.getValue();
    } else {
    	return "";
    }
};
//==================普通输入框======================
mb.ui.input = function(options) {
    var defaults = {
			"id":"",
			"type":"text"
	};
    var opts = jQuery.extend(defaults,options);
    var item = opts.item;
	this.obj = jQuery("<input type='" + opts + "' value=''></input>").attr("id",opts.id).addClass("mbCard-form-input"); 

};
mb.ui.input.prototype.setValue = function(value) {
	this.obj.val(value);
};
mb.ui.input.prototype.getValue = function() {
	return this.obj.val();
};
//==================大文本框======================
mb.ui.textArea = function(options) {
    var defaults = {
			"id":""
	};
    var opts = jQuery.extend(defaults,options);
    var item = opts.item;
	this.obj = jQuery("<textarea></textarea>").attr("id",opts.id).addClass("mbCard-form-textArea mb-box-shadow-inset mb-radius-9"); 

};
mb.ui.textArea.prototype.setValue = function(value) {
	this.obj.val(value);
};
mb.ui.textArea.prototype.getValue = function() {
	return this.obj.val();
};
//==================日期输入框======================
mb.ui.DateInput = function(options) {
    var defaults = {
			"id":"",
			"type":"date"
	};
    var opts = jQuery.extend(defaults,options);
    var type = opts.type;
    var item = opts.item;
    if (type == "DATETIME") {
    	type = "datetime-local";
    } else if (type == "MONTH") {
    	type = "datetime-local";
    } else if (type == "DATEHM") {
    	type = "time";
    }
	this.obj = jQuery("<input type='" + type + "' value='' height='20px'></input>").attr("id",opts.id).addClass("mbCard-form-input mb-box-shadow-inset mb-radius-9"); 
	this.obj.bind("click",function() {
		
	});

};
mb.ui.DateInput.prototype.setValue = function(value) {
	this.obj.val(value);
};
mb.ui.DateInput.prototype.getValue = function() {
	return this.obj.val();
};
//==================单选输入框======================
mb.ui.radioBoxGroup = function(options) {
	var _self = this;
    var defaults = {
			"id":"",
			"data":null//字典数据
	};
    var opts = jQuery.extend(defaults,options);
    var item = opts.item;
    var data = opts.data;
    this.id = opts.id;
    
//    alert(JsonToStr(item));
    var len = data.length - 1;
    var group = jQuery("<div></div>").addClass("mb-radioGroup");

    jQuery.each(data,function(i,n) {
    	var id = n.ID;
    	var unitId = _self.id + "-" + id;
    	var labelId = unitId + "-label";
    	
    	var radioDiv = jQuery("<div></div>").addClass("mb-radio").appendTo(group);
    	var radioInput = jQuery("<input type='radio'/>").attr({"value":id,"name":unitId,"id":unitId}).addClass("mb-radio-input").appendTo(radioDiv);
    	var radioLabel = jQuery("<label type='radio'></label>").attr({"for":unitId,"id":labelId}).addClass("mb-radio-label").appendTo(radioDiv);
    	if (i == 0) {
    		radioLabel.addClass("mb-radius-left6");
    	} else if (i == len) {
    		radioLabel.addClass("mb-radius-right6");
    	}
    	var radioBtnInner = jQuery("<span></span>").addClass("mb-btn-inner").appendTo(radioLabel);
    	var radioBtnText = jQuery("<span></span>").addClass("mb-btn-text").text(n.NAME).appendTo(radioBtnInner);

    	radioLabel.bind("click", function(event) {
    		_self.setValue(id);
    	});
    });
	this.obj = group; 
};
mb.ui.radioBoxGroup.prototype.setValue = function(value) {
	var unitId = this.id + "-" + value;
	var labelId = unitId + "-label";
	this.obj.find(".mb-radio-labelActive").removeClass("mb-radio-labelActive");
	this.obj.find("#" + labelId).addClass("mb-radio-labelActive");
	this.obj.find(".mb-radio-input").removeAttr("CHECKED");
	this.obj.find("#" + unitId).attr("CHECKED","checked");
};
mb.ui.radioBoxGroup.prototype.getValue = function() {
	var res = this.obj.find(".mb-radio-input[CHECKED=checked]").attr("value");
	return res || '';
};
//==================多选输入框======================
mb.ui.checkBoxGroup = function(options) {
	var _self = this;
    var defaults = {
			"id":"",
			"data":null//字典数据
	};
    var opts = jQuery.extend(defaults,options);
    var item = opts.item;
    var data = opts.data;
    this.id = opts.id;
    
    var len = data.length - 1;
    var group = jQuery("<div></div>").addClass("mb-radioGroup");
//    group.bind("click",function() {
//    	_self.getValue();
//    });
    jQuery.each(data,function(i,n) {
    	var id = n.ID;
    	var unitId = _self.id + "-" + id;
    	var labelId = unitId + "-label";
    	
    	var radioDiv = jQuery("<div></div>").addClass("mb-radio").appendTo(group);
    	var radioInput = jQuery("<input type='radio'/>").attr({"value":id,"name":unitId,"id":unitId}).addClass("mb-radio-input").appendTo(radioDiv);
    	var radioLabel = jQuery("<label type='radio'></label>").attr({"for":unitId,"id":labelId}).addClass("mb-radio-label").appendTo(radioDiv);
    	if (i == 0) {
    		radioLabel.addClass("mb-radius-left6");
    	} else if (i == len) {
    		radioLabel.addClass("mb-radius-right6");
    	}
    	var radioBtnInner = jQuery("<span></span>").addClass("mb-btn-inner").appendTo(radioLabel);
    	var radioBtnText = jQuery("<span></span>").addClass("mb-btn-text").text(n.NAME).appendTo(radioBtnInner);

    	radioLabel.bind("click", function(event) {
    		if (jQuery(this).hasClass("mb-radio-labelActive")) {
    			_self.dsetValue(id);
    		} else {
    			_self.setValue(id);
    		}
    		
    	});
    });
	this.obj = group;
};
mb.ui.checkBoxGroup.prototype.setValue = function(value) {
	var unitId = this.id + "-" + value;
	var labelId = unitId + "-label";
	this.obj.find("#" + labelId).addClass("mb-radio-labelActive");
	this.obj.find("#" + unitId).attr("CHECKED","checked");
};
mb.ui.checkBoxGroup.prototype.dsetValue = function(value) {
	var unitId = this.id + "-" + value;
	var labelId = unitId + "-label";
	this.obj.find("#" + labelId).removeClass("mb-radio-labelActive");
	this.obj.find("#" + unitId).removeAttr("CHECKED");
};
mb.ui.checkBoxGroup.prototype.getValue = function() {
	var res = this.obj.find(".mb-radio-input[CHECKED=checked]");
	var resArray = [];
	jQuery.each(res,function(i,n) {
		
		resArray.push(jQuery(n).attr("value"));
	});
	return resArray.join(",");
};
//==================下拉选择框======================
mb.ui.select = function(options) {
	var _self = this;
    var defaults = {
			"id":"",
			"data":null//字典数据
	};
    var opts = jQuery.extend(defaults,options);
    var item = opts.item;
    this._data = opts.data;
    this.id = opts.id;
    
    var name = item.ITEM_NAME;
    var group = jQuery("<div></div>").addClass("mb-select");
    this.a = jQuery("<a></a>").addClass("mb-select-a").appendTo(group);
    var inner = jQuery("<span></span>").addClass("mb-select-inner").appendTo(this.a);
    this.input = jQuery("<input type='hidden'></input>").addClass("mb-select-input").appendTo(inner);
    this.text = jQuery("<span></span>").addClass("mb-select-text").appendTo(inner);
    var icon = jQuery("<span></span>").addClass("mb-select-icon mb-down-nav mb-radius-18").appendTo(inner);
    group.bind("click",function(event) {
    	jQuery(".mb-select-active").removeClass("mb-select-active");
    	_self.a.addClass("mb-select-active");
		var opts = {
				"id":_self.id,
				"data":_self._data,
				"title":name,
				"parHandler":_self
			}
		var ui = new mb.ui.dialog(opts);
		ui.render();
    });

	this.obj = group;
};
mb.ui.select.prototype.setValue = function(value,text) {
	var _self = this;
	var unitId = this.id + "-" + value;
	var labelId = unitId + "-label";
	var i = 0;
	var len = this._data.length;
	if (text) {
		_self.input.val(value);
		_self.text.text(text);
	} else {
		for (i;i < this._data.length;i++) {
			var obj = _self._data[i];
			if (obj.ID == value) {
				_self.input.val(value);
				_self.text.text(obj.NAME);
				break;
			}
		}
	}
};
mb.ui.select.prototype.getValue = function() {
	var _self = this;
    return _self.input.val();
};
mb.ui.select.prototype.getText = function() {
	var _self = this;
	return _self.text.val();
};
mb.ui.select.prototype.setActive = function() {
	var _self = this;
};
//==================文件查看======================
mb.ui.file = function(options) {
	var _self = this;
    var defaults = {
			"id":"",
			"data":null//字典数据
	};
    var opts = jQuery.extend(defaults,options);
    var item = opts.item;
    this._data = opts.data;
    this.id = opts.id;
    
    var name = item.ITEM_NAME;
    var group = jQuery("<div></div>").addClass("mb-file");
    var icon = jQuery("<span></span>").addClass("mb-file-icon").appendTo(group);
    this.a = jQuery("<a href='#' target='_blank'></a>").addClass("mb-file-a").appendTo(group);
	this.obj = group;
};
mb.ui.file.prototype.setValue = function(value) {
	var _self = this;
	if (value) {
		var array = value.split(";");
		for (i = 0; i< array.length;i++) {
			if (array[i].length > 0) {
				var fileValue = array[i].split(",");
				var href = "/file/" + fileValue[0];
				_self.a.attr("href",href);
				_self.a.text(fileValue[1]);
			}
		}
	}
};
mb.ui.file.prototype.getValue = function() {
	var _self = this;
    return _self.a.text();
};
//==================图片显示======================
mb.ui.img = function(options) {
	var _self = this;
    var defaults = {
			"id":"",
			"data":null//字典数据
	};
    var opts = jQuery.extend(defaults,options);
    var item = opts.item;
    this._data = opts.data;
    this.id = opts.id;
    
    var name = item.ITEM_NAME;
    var group = jQuery("<div></div>").addClass("mb-img-div");
    this.img = jQuery("<img></img>").addClass("mb-img").appendTo(group);
    this.img.attr({width:"30px",height:"20px"});
	this.obj = group;
};
mb.ui.img.prototype.setValue = function(value) {
	var src = "/file/" + value;
	this.img.attr("src",src);
};
mb.ui.img.prototype.getValue = function() {
	var _self = this;
    return this.img.attr("src");
};
//==================密码框======================
mb.ui.pwd = function(options) {
	var _self = this;
    var defaults = {
			"id":"",
			"data":null//字典数据
	};
    var opts = jQuery.extend(defaults,options);
    var item = opts.item;
    this._data = opts.data;
    this.id = opts.id;
    
    var name = item.ITEM_NAME;
	this.obj = jQuery("<input type='password' value=''></input>").attr("id",opts.id).addClass("mbCard-form-input mb-box-shadow-inset mb-radius-9"); 
};
mb.ui.pwd.prototype.setValue = function(value) {
	this.obj.val(value);
};
mb.ui.pwd.prototype.getValue = function() {
	var _self = this;
    return this.obj.val();
};
//==================字典选择======================TODO:异步加载的情况
mb.ui.dict = function(options) {
	var _self = this;
    var defaults = {
			"id":"",
			"dictId":"",
			"data":null//字典数据
	};
    var opts = jQuery.extend(defaults,options);
    var item = opts.item;
    this._data = opts.data;
    this.id = opts.id;
    this.dictId = opts.dictId;
    
    var name = item.ITEM_NAME;
    var group = jQuery("<div></div>").addClass("mb-select");
    this.a = jQuery("<a></a>").addClass("mb-select-a").appendTo(group);
    var inner = jQuery("<span></span>").addClass("mb-select-inner").appendTo(this.a);
    this.input = jQuery("<input type='hidden'></input>").addClass("mb-select-input").appendTo(inner);
    this.text = jQuery("<span></span>").addClass("mb-select-text").appendTo(inner);
    var icon = jQuery("<span></span>").addClass("mb-select-icon mb-down-nav mb-radius-18").appendTo(inner);
    group.bind("click",function(event) {

    	jQuery(".mb-select-active").removeClass("mb-select-active");
    	_self.a.addClass("mb-select-active");
    	
	    var temp = {"dictId":_self.dictId,"pCon":jQuery("body"),"parHandler":_self};
	    var selectView = new mb.vi.selectList(temp);
	    selectView._bldWin(event);
	    selectView.show();
    	
//		var selectListUrl = "/sy/base/view/mbSelectListView.jsp?dictId=" + _self.dictId;
//    	alert(selectListUrl);
//		window.location.href = selectListUrl;
    });

	this.obj = group;
};
mb.ui.dict.prototype.setValue = function(value,text) {
	var _self = this;
	var unitId = this.id + "-" + value;
	var labelId = unitId + "-label";
	var i = 0;
	if (text) {
		_self.input.val(value);
		_self.text.text(text);
	} else {
		_self.pickNode(value,_self._data);
	}
};
mb.ui.dict.prototype.pickNode = function(id,data) {
	var _self = this;
	var len = data.length;
	for (var i = 0; i < len; i++) { // 遍历查找NAME
		if (id == data[i].ID) {
			_self.input.val(id);
			_self.text.text(data[i].NAME);
			return true; // 找到了
		} else if (data[i].CHILD) {
			var ret = _self.pickNode(id,data[i].CHILD);
			if (ret) { // 找到了则直接返回，不进行余下的循环
				return true;
			}
		}
	}
	return false; // 没有找到
};
mb.ui.dict.prototype.getValue = function() {
	var _self = this;
    return _self.input.val();
};
mb.ui.dict.prototype.getText = function() {
	var _self = this;
	return _self.text.val();
};
mb.ui.dict.prototype.setActive = function() {
	var _self = this;
};
