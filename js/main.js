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

