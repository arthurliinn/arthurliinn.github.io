$(window).on('load',function(){
    var ipadwidth = 1024;
    var nowWidth = $(window).width();
    console.log("1212");
    $('body').css("opacity","1");
    $('.circle').css("width","572px")
    $('.circle').css("height","572px")
    $('.stick1').css("left","0px")
    $('.stick1').css("top","714.5px")
    $('.stick2').css("left","-100px")
    $('.stick2').css("top","714.5px")
    $('body').css("overflow-y","scroll")
    if(nowWidth > ipadwidth){
        $(window).scroll(function() {
            var portfolio_height = $('.hideBox_work').offset().top + $('.hideBox_work').outerHeight();
            var window_scrollHeight = $(window).scrollTop() + $(window).height();
            $('.hideBoxs').each(function(i){
                console.log("test11")
                var object_height = $(this).offset().top + $(this).outerHeight();
            
                if( window_scrollHeight > object_height-500){
                    $(this).animate({'opacity':'1'},500);
                };
            
            });

            if(window_scrollHeight > portfolio_height - 1800){
                $('.hideBox_work').animate({'opacity':'1'},500);
            };
        
        });
        console.log($(window).height());
    }else{
        $('.hideBoxs').css("opacity","1");
        $('.hideBox_work').css("opacity","1");
        $('.circle').css("width","300px")
        $('.circle').css("height","300px")
        $('.stick1').css("top","80%");
        $('.stick2').css("top","80%")
    }
    
});


