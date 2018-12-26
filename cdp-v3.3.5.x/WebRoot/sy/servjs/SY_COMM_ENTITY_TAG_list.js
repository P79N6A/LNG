var _viewer = this;
//对列表上数据双击查看绑定事件
_viewer.grid.unbindTrdblClick();
_viewer.grid.dblClick(function() {
	//双击打开该数据的服务卡片页面
	Todo.openEntity(_viewer);
}, _viewer);