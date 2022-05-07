//scroll

var i = 0;
    var img = ['Batslider1.png', 'Batslider2.png', 'Batslider3.png', 'Batslider4.png', 'Batslider5.png', 'Batslider6.png', 'Batslider7.png', 'Batslider8.png', 'Batslider9.png', 'Batslider10.png']

    function slideimg() {
        document.slider.src = "./Illustrations/Home/" + img[i];
        if (i < img.length - 1) {
            i++;
        } else {
            i = 0;
        }
        setTimeout('slideimg()', 3000);
    };
    window.onload - slideimg();



//Animation


$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        $('.buttonlogo').css("top",scroll,"px") 
    });
});