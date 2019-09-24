//loading
$(window).load(function () {
    $('#loadingPage').fadeOut();
    $('#webBody').animate({ opacity: 1, height: "auto" }, 2000);
    $('body').css("overflow-y", "auto");
    

});

//scroll show
$(window).scroll(function(){
    $('.hideBox').each(function(i){
        var window_scrollHeight =  $(window).scrollTop() + $(window).height() ;
        var object_scrollHeight = $(this).offset().top + $(this).outerHeight()-500;

        if(window_scrollHeight > object_scrollHeight){
            $(this).animate({opacity:1},1000);
            
            
        }

        
    });

    /*$('.level').each(function(i){
        var window_scrollHeight =  $(window).scrollTop() + $(window).height() ;
        var level_scrollHeight = $('.level').offset().top + $('.level').outerHeight();

        if(window_scrollHeight > level_scrollHeight){
            
        }
    });*/
});


//work introduce

/*$('#WalledCity_video').mouseover(function(){
    $('.videoIntro p').css("display","block");
    $('#intro_walledCity').css("opacity","1");
    $('#intro_walledCity').css("left","38vw");
    $('#intro_walledCity').css("height","400px");
    $('#intro_walledCity').css("padding","30px");
    //zoom videobox
    $('.video_game').css("z-index","20");
    $('.video_game').css("position","absolute");
    $('.video_game').css("right","14.2vw");
    $('.video_game').css("top","2880px");
    
    $('#intro_walledCity p').css("opacity","1");
    $('#graySolid').css("height","100vh");

})

$('#WalledCity_video').mouseout(function(){
    $('.videoIntro p').css("display","none");
    $('#intro_walledCity').css("opacity","0");
    $('#intro_walledCity').css("left","39vw");
    $('#intro_walledCity').css("height","0px");
    $('#intro_walledCity').css("padding","0px");
    //zoom videobox
    $('.video_game').css("z-index","1");
    $('.video_game').css("position","relative");
    $('.video_game').css("right","");
    $('.video_game').css("top","");
    
    $('#intro_walledCity p').css("opacity","0");
    $('#graySolid').css("height","00vh");

    $('.videoIntro').ccs("height","0px");

})


$('#album_video').mouseover(function(){
    $('.videoIntro p').css("display","block");
    $('#intro_myAlbum').css("opacity","1");
    $('#intro_myAlbum').css("height","250px");
    $('#intro_myAlbum').css("left","38vw");
    $('#intro_myAlbum').css("padding","30px");
    //zoom videobox
    $('.video_album').css("z-index","20");
    $('.video_album').css("position","absolute");
    $('.video_album').css("left","15.2vw");
    $('.video_album').css("top","3190px");
    
    $('#intro_myAlbum p').css("opacity","1");
    $('#graySolid').css("height","100vh");

})

$('#album_video').mouseout(function(){
    $('.videoIntro p').css("display","none");
    $('#intro_myAlbum').css("opacity","0");
    $('#intro_myAlbum').css("left","39vw");
    $('#intro_myAlbum').css("height","0px");
    $('#intro_myAlbum').css("padding","0px");
    //zoom videobox
    $('.video_album').css("z-index","1");
    $('.video_album').css("position","relative");
    $('.video_album').css("left","");
    $('.video_album').css("top","");
    
    $('#intro_myAlbum p').css("opacity","0");
    $('#graySolid').css("height","0vh");

    $('.videoIntro').ccs("height","0px");
})

$('#MSOP1_video').mouseover(function(){
    $('.videoIntro p').css("display","block");
    $('#intro_MSOP01').css("opacity","1");
    $('#intro_MSOP01').css("height","200px");
    $('#intro_MSOP01').css("left","38vw");
    $('#intro_MSOP01').css("padding","30px");
    //zoom videobox
    $('.video_cut').css("z-index","20");
    $('.video_cut').css("position","absolute");
    $('.video_cut').css("left","39vw");
    $('.video_cut').css("top","3190px");
    
    $('#intro_MSOP01 p').css("opacity","1");
    $('#graySolid').css("height","100vh");

})

$('#MSOP1_video').mouseout(function(){
    $('.videoIntro p').css("display","none");
    $('#intro_MSOP01').css("opacity","0");
    $('#intro_MSOP01').css("left","39vw");
    $('#intro_MSOP01').css("height","0px");
    $('#intro_MSOP01').css("padding","0px");
    //zoom videobox
    $('.video_cut').css("z-index","1");
    $('.video_cut').css("position","relative");
    $('.video_cut').css("left","");
    $('.video_cut').css("top","");
    
    $('#intro_MSOP01 p').css("opacity","0");
    $('#graySolid').css("height","0vh");

    $('.videoIntro').ccs("height","0px");
})

$('#MSOP2_video').mouseover(function(){
    $('.videoIntro p').css("display","block");
    $('#intro_MSOP02').css("opacity","1");
    $('#intro_MSOP02').css("height","200px");
    $('#intro_MSOP02').css("left","38vw");
    $('#intro_MSOP02').css("padding","30px");
    //zoom videobox
    $('.video_cut2').css("z-index","20");
    $('.video_cut2').css("position","absolute");
    $('.video_cut2').css("left","62.5vw");
    $('.video_cut2').css("top","3190px");
    
    $('#intro_MSOP02 p').css("opacity","1");
    $('#graySolid').css("height","100vh");

})

$('#MSOP2_video').mouseout(function(){
    $('.videoIntro p').css("display","none");
    $('#intro_MSOP02').css("opacity","0");
    $('#intro_MSOP02').css("left","39vw");
    $('#intro_MSOP02').css("height","0px");
    $('#intro_MSOP02').css("padding","0px");
    //zoom videobox
    $('.video_cut2').css("z-index","1");
    $('.video_cut2').css("position","relative");
    $('.video_cut2').css("left","");
    $('.video_cut2').css("top","");
    
    $('#intro_MSOP02 p').css("opacity","0");
    $('#graySolid').css("height","0vh");

    $('.videoIntro').ccs("height","0px");
})


*/