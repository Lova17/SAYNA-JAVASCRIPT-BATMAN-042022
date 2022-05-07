$(document).ready(function(){
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        $('.buttonlogo').css("top",scroll,"px") 
    })
});