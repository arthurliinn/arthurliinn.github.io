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

$('#WalledCity_video').mouseover(function(){
    $('.videoIntro').css("display","block");
    $('#intro_walledCity').css("opacity","1");
    $('#intro_walledCity').css("left","38vw");
    $('#intro_walledCity').css("height","400px");
    $('#intro_walledCity').css("padding","30px");
    //zoom videobox
    $('.video_game').css("z-index","20");
    $('.video_game').css("position","absolute");
    $('.video_game').css("right","14.2vw");
    $('.video_game').css("top","2810px");
    
    $('#intro_walledCity p').css("opacity","1");
    $('#graySolid').css("height","100vh");

})

$('#WalledCity_video').mouseout(function(){
    $('.videoIntro').css("display","none");
    $('#intro_walledCity').css("opacity","0");
    $('#intro_walledCity').css("left","39vw");
    $('#intro_myAlbum').css("height","0px");
    $('#intro_walledCity').css("padding","0px");
    //zoom videobox
    $('.video_game').css("z-index","1");
    $('.video_game').css("position","relative");
    $('.video_game').css("right","");
    $('.video_game').css("top","");
    
    $('#intro_walledCity p').css("opacity","0");
    $('#graySolid').css("height","00vh");

})


$('#album_video').mouseover(function(){
    $('.videoIntro').css("display","block");
    $('#intro_myAlbum').css("opacity","1");
    $('#intro_myAlbum').css("height","400px");
    $('#intro_myAlbum').css("left","38vw");
    $('#intro_myAlbum').css("padding","30px");
    //zoom videobox
    $('.video_album').css("z-index","20");
    $('.video_album').css("position","absolute");
    $('.video_album').css("left","15.2vw");
    $('.video_album').css("top","3120px");
    
    $('#intro_myAlbum p').css("opacity","1");
    $('#graySolid').css("height","100vh");

})

$('#album_video').mouseout(function(){
    $('.videoIntro').css("display","none");
    $('#intro_myAlbum').css("opacity","0");
    $('#intro_myAlbum').css("left","39vw");
    $('#intro_myAlbum').css("height","0px");
    $('#intro_myAlbum').css("padding","0px");
    //zoom videobox
    $('.video_album').css("z-index","1");
    $('.video_album').css("position","relative");
    $('.video_album').css("left","");
    $('.video_album').css("top","");
    
    $('#intro_walledCity p').css("opacity","0");
    $('#graySolid').css("height","0vh");

})


