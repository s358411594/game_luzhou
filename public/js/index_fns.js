/**
 * Created by Administrator on 2017/8/17 0017.
 */

//渲染数据
function show_data() {
        $.ajax({
            type: 'get',
            url: "/init",
            success: function (data) {
                console.log(data);
                var member = new Vue({//获取初始化数据
                    el: '#member',
                    data: {
                        names: data
                    }
                });
                        $("select option").eq(data[0].agency).attr("selected","selected");
                        $("#discount").attr("value",data[0].discount);
                        console.log();
//代理详情数据初始化
//                 var NickName=$("#NickName").attr("value",data[0].v_name);
                var message =new Vue({
                    el:'#message',
                    data:{
                        todos:data
                    }
                });
                //会员管理数据初始化
                var manage=new Vue({
                    el:'#manage',
                    data:{
                        vip_data:data
                    }
                })
            }
        });


}
// 代理管理,保存数据
$(".save.am-btn").click(function () {
    var agency=$("#rank option:selected").attr("agency");//获取代理
    // console.log(agency)
    var discount=$("input[id='discount']").val();//获取价格值
    var id=$("#member option:selected").attr("name_id");//获取会员id
    $.ajax({
        type: 'post',
        url: "/agency",
        data: {
            agency: agency,
            id:id,
            discount:discount
               }
            });
});


//初始化大二，麻将数据
$.ajax({
    type: 'get',
    url: "/game_type",
    success:function (data) {
        console.log(data);
        $("#RoomCard_lzd2").attr("value",data[0].money);
        $("#RoomCard_lzmj").attr("value",data[1].money);
    }
});
//房卡类型，保存数据
$(".room").click(function () {
    var RoomCard_lzd2=$("input[id='RoomCard_lzd2']").val();//获取大二数据
    var RoomCard_lzmj=$("input[id='RoomCard_lzmj']").val();//获取麻将数据
    console.log(RoomCard_lzd2);
    console.log(RoomCard_lzmj);
    $.ajax({
        type: 'post',
        url: "/set_game_type",
        data: {
            id:1,
            money:RoomCard_lzd2
        },
        success:function (data) {
            console.log(data)
        }
    });
    $.ajax({
        type: 'post',
        url: "/set_game_type",
        data: {
            id:2,
            money:RoomCard_lzmj
        },
        success:function (data) {
            alert(data)
        }
    })
});
//代理详情
// $(".PlayerID").text(value.PlayerID);
// $(".NickName").text(value.NickName);
// // $("#card_num").text(value.card_num);
// $("#consume").text(value.consume);

//会员管理
function show_vip_data() {
        $.ajax({
            type: 'get',
            url: "/vip"

        });
}

//充值
$(".point_amount_div").click(function () {
    $(this).addClass("border_red").siblings().removeClass("border_red")
});
console.log($(".do_recharge")[0])
$(document).on("click",".do_recharge",function () {
    console.log(3)
    $(".modal_box").css({display:"flex"});
    if($(this).hasClass("do_recharge")){
        $(".recharge").css({display:"block"}).siblings().css({display:"none"})
    }
    if($(this).hasClass("do_s_password")){
        $(".set_password").css({display:"block"}).siblings().css({display:"none"})
    }
});
// 关闭充值窗口
$(".recharge .save").click(function () {
    $(".modal_box").css({display:"none"});
    var recharge=$(".point_amount_div.border_red").hasClass("newInput")?
        $(".point_amount_div.border_red").find("input").val():
        $(".point_amount_div.border_red").text()
    ;
    $.ajax({
        type: 'post',
        url: "/recharge",
        data:{
            recharge:recharge
        },
        success: function (data) {
            console.log(data)
        }
    });
});
// 关闭密码设置
// let app_password = new Vue({
//     el: '.set_password',
//     data: {
//         vip_data:value
//     },
//     methods: {
//         search: function () {
//             var vip_this=this;
//             var name=$("#vip_detail input").val();
//             $.ajax({
//                 type: 'post',
//                 url: "/check",
//                 data:{
//                     name:name
//                 },
//                 success: function (data) {
//                     if(data.length==0){
//                         alert("搜索不到任何东西")
//                     }else {
//                         vip_this.vip_data = data;
//                     }
//                 }
//             });
//         }
//     }
// });
$(".set_password button").click(function () {
    $(".modal_box").css({display:"none"});
    $.ajax({
        type: 'post',
        url: "/set_password",
        data:{
            recharge:recharge
        },
        success: function (data) {
            console.log(data)
        }
    });
});

console.log(66)





