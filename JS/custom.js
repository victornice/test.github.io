/*global $, alert, console*/

// header background height

$(function () {
    "use strict";
    
    var scroll = $(".scroll");
        
    $(".header").height($(window).height());
    $(window).resize(function () {
        $(".header").height($(window).height());
    });
    
    $('.bxslider').bxSlider({
        controls: false
    });
    
    $(".bxslider").each(function () {
        
        $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
    });
    
    setTimeout(function () {
        $(".bxslider li").hide().css('visibility', 'visible').fadeIn('slow');
    });
    
    $(".links li").click(function () {
        
        $(this).addClass("active").siblings().removeClass("active");
        
    });
    
    // links scrollTop
    
    $(".navbar-inverse .navbar-nav > li > a").click(function () {
        
        $("html,body").animate({
            
            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 800);
    });
    
    // Nice Scroll
    
    $("html").niceScroll({
        cursorcolor: "#D53939",
        cursorborder: "none",
        cursorwidth: "10",
        cursorborderradius: "0",
        zIndex: "9"
    });
        
    $(window).scroll(function () {
        
        if ($(this).scrollTop() > 120) {
            
            scroll.fadeIn();
        } else {
            
            scroll.fadeOut();
        }
    });
    
    scroll.click(function () {
        
        $("html,body").animate({scrollTop: 0}, 600);
    });
    
    // Navbar Fixed
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() > $(".header").height()) {
            $(".navbar-inverse").css("background", "rgba(51, 51, 51, 0.9)").css("position", "fixed").css("marginTop", "0");
            $(".navbar-right").css("marginTop", "7px");
            $(".navbar .navbar-brand").css("marginTop", "0px");
            $(".navbar span").css("lineHeight", "4.5");
            $(".navbar").css("borderRadius", "0px");
        } else {
            $(".navbar-inverse").css("background", "none").css("position", "absolute").css("marginTop", "30px");
        }
    });
    
});