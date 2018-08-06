


$(function(){

    $("#head").load("../chat/聊天信息-head.html")
    $("#text").load("../chat/聊天信息-text.html")



    //切换
    $(".menu-item").click(function() {
        $("#head").load($(this).data("111"))
        $("#text").load($(this).data("999"))


    })

})