$(function(){


    //切换
    $(".menu-item").click(function() {
        $("#head").load($(this).data("111"))
        $("#text").load($(this).data("999"))


    })

})