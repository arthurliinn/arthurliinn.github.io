//loading
$(window).load(function () {
    $('#loadingPage').fadeOut();
    $('#webBody').animate({ opacity: 1, height: "auto" }, 2000);
    $('body').css("overflow-y", "auto");

});

//scroll show

$(window).scrollTop()