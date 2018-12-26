/**
*�ṩ2�������� 
*1��str2hex�������ַ���ת����16�����ַ���������:�ѡ��й���ת���ɡ�e4b8ade59bbd��
*2��hex2str������16�����ַ���ת�����ַ���������:�ѡ�e4b8ade59bbd��ת���ɡ��й���
**/
var Hex = {
	"encode" : function(s) {
	  var i, l, o = "", n;
	  s += "";
	  s = this._utf8_encode(s);

	  for (i = 0, l = s.length; i < l; i++) {
		n = s.charCodeAt(i).toString(16)
		o += n.length < 2 ? "0" + n : n;
	  }

	  return o;
	},
	
	"decode": function(hex){
		var bytes = [], str;
		try{
			for(var i=0; i< hex.length-1; i+=2){
				bytes.push(parseInt(hex.substr(i, 2), 16));
			}
		}catch(e){
			bytes = []
		}
		var result = String.fromCharCode.apply(String, bytes);
		return this._utf8_decode(result);    
	},
	
	// ���ַ���ת��UTF-8����
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	//��UTF-8�����ַ���ת�ɱ����ַ�
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while ( i < utftext.length ) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	}
};