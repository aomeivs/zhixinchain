$(function () {
    $.tabs_layout=function () {
        var leftHeight = $('.c-body .c-body-container>div').height();
        var windowHeight = $(window).height();
        if(windowHeight>leftHeight){
            $('.c-body .c-body-left').css({'height':'100%'});
        }else{
            $('.c-body .c-body-left').css({'height':leftHeight});
        }
        console.log(leftHeight)
    }
    // $.tabs_layout();
})
