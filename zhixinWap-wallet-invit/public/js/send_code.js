/**
 * Created by zhou on 17/2/13.
 */
/***
 ~~~~~~~~~~~~~~~~~~~~~~~~验证码获取~~~~~~~~~~~~~~~~~~~~~~~
 **/

var InterValObj; //timer变量，控制时间
var count = 5; //间隔函数，1秒执行
var curCount;//当前剩余秒数
var $ht_yanzheng = $(".auth-code");//验证按钮

function sendMessage() {
    curCount = count;
    //设置button效果，开始计时
    $ht_yanzheng.attr("disabled", "true");
    $ht_yanzheng.addClass('actived')
    $ht_yanzheng.text("(" + curCount +")后重发" );
    InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
    //向后台发送处理数据
    //$.get("/account/ajax_sendSMS?phone="+$("#h1").val(),function(result_data){
    $("#vcode_c").val(111111)//result_data);
    // });

    /*
     $.ajax({
     　　type: "POST", //用POST方式传输
     　　dataType: "text", //数据格式:JSON
     　　url: '', //目标地址
     　　 data: "",
     　　 error: function (XMLHttpRequest, textStatus, errorThrown) { },
     　　success: function (msg){ }
     });
     */
}

//timer处理函数
function SetRemainTime() {
    if (curCount == 0) {
        window.clearInterval(InterValObj);//停止计时器
        $ht_yanzheng.removeAttr("disabled");//启用按钮
        $ht_yanzheng.removeClass('actived')
        $ht_yanzheng.text("重新发送");
    }
    else {
        curCount--;
        $ht_yanzheng.text("(" + curCount +")后重发");
    }
}
