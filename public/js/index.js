/**
 * Created by Administrator on 2017/8/16 0016.
 */
$(".sideMenu h3").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    var t_id = $(this).attr("id");
    var view_id = "#" + t_id + "_detail";
    $(view_id).css({display: "block"}).siblings(".details").css({display: "none"});
});
// 初始化
show_data();
//会员管理
show_vip_data();
//折扣
function discount(obj){
    obj.value = obj.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符
    obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d).*$/,'$1$2.$3');//只能输入个小数
    if(obj.value.indexOf(".")< 0 && obj.value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
        obj.value= parseFloat(obj.value);
    }
    if(obj.value< 0 || obj.value >=10 ){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
        obj.value=(obj.value).substring(0,1);
    }
}



