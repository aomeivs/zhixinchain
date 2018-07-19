(function(window,document){
    var win = window,
        doc = document,
        draw = 375;//出图大小,也是1：1的标准尺寸
    function setFontSize() {
        var winWidth = win.innerWidth;
        //draw这个数字是根据你的设计图的实际大小来的，所以值具体根据设计图的大小
        var size = (winWidth / draw) * 100;
        //最大只支持到640物理屏自适配
        doc.documentElement.style.fontSize = (size < 200 ? size : 200) + 'px';
    };
    setFontSize();
})(window,document)
