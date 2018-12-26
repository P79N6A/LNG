var _viewer = this;
var typecode = _viewer.getParams().TYPE_CODE;
if(typecode!=""&&typecode!=null){
    _viewer.getItem("TYPE_CODE").setValue(_viewer.getParams().TYPE_CODE); //给TYPE_CODE字段设值
}