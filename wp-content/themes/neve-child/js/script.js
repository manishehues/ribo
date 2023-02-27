(function( $ ) {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 10) {
           $('.siteHeader').addClass('stickyHeader');
        } else {
           $('.siteHeader').removeClass('stickyHeader');
        }
    });
})( jQuery );    