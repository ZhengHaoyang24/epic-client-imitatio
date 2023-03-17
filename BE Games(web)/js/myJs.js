console.log("aed");


// 登录选项卡
$(function () {
    var $join_style_div = $(' .join_style_con div');
    $join_style_div.each(function (index) {
        $(this).on('click', function () {
            $(this).addClass('active')
                .siblings().removeClass('active');
            $(' .card-body>div').eq(index).css({'display': 'block'})
                .siblings().css({'display': 'none'})
        })
    })

});



// 点击 登录
function showDiv() {

    let status = document.getElementById('join-cover-body').style.display;
    let div = document.getElementById("div");
    // console.log(flag);
    console.log(status);
    //获取要显示的div对象,并显示
    document.getElementById('join-cover-body').style.display = "block";
    if (status == "none") {
        document.getElementById('join-cover-body').style.display = "block";
        // flag = 1;
    }
    if
    (status == "block") {
        document.getElementById('join-cover-body').style.display = "none";
        // flag = 0;
    }

}



// 获取时间
var add = setInterval("getNowDate()", 1000);

function stop() {
    clearInterval(add);
}

function getNowDate() {
    var myDate = new Date;
    var year = myDate.getFullYear(); //获取当前年
    var mon = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate(); //获取当前日
    var hours = myDate.getHours(); //获取当前小时
    var minutes = myDate.getMinutes(); //获取当前分钟
    var seconds = myDate.getSeconds(); //获取当前秒


    var myDate_tomorrow = new Date();
    myDate_tomorrow.setTime(myDate_tomorrow.getTime()+24*60*60*1000);
    var tomorrow = (myDate_tomorrow.getMonth()+1) + "月" + myDate_tomorrow.getDate()+"日";


    var id4 = document.getElementById("tomorrow_date");
    id4.innerHTML = tomorrow;



    // 判断免费时间
    var free_date = date;   //免费时间
    var free_mon = mon;
    if (free_date > 29) {
        free_date = free_date - 29;
        free_mon = free_mon + 1;
        if (free_mon > 12) {
            free_mon = 1;
        }
    }


    var now = year + "-" + mon + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    var freetime = free_mon + "月" + (free_date + 10) + "日" + "23:00结束";
    var daojishitime = "在" + (24 - hours-1) + ":" + (60 - minutes) + ":" + (60 - seconds) + "后解锁";

    var zhibo_time =(24 - hours-1) + "小时" + (60 - minutes-1) + "分钟" + (60 - seconds) + "秒";

    // var id1=document.getElementById("time1");//通过div标签的id多去div标签
    // id1.innerHTML=now;//将时间通过innerHTML属性写入div标签中
    var id5 = document.getElementById("zhibo_time");
    id5.innerHTML = zhibo_time;

    var id2 = document.getElementById("time2");
    id2.innerHTML = freetime;

    // 倒计时
    var id3 = document.getElementById("time3");
    id3.innerHTML = daojishitime;
}



















