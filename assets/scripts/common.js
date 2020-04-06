$(window).on('load', function () {
    setTimeout(function () {
        $('#preloader').fadeOut(500);
    }, 1000);
});
$(window).on('activate.bs.scrollspy', function (e,o) {
    $(o.relatedTarget).addClass('active');
    $(o.relatedTarget).siblings().removeClass('active');
});
$('.nav-link').click(function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top},500);
    return false;
});
jQuery('#portfolio').find('.btn-group').on("click","[data-filter]",function() {
    jQuery(this).addClass('btn-danger');
    jQuery(this).siblings().removeClass('btn-danger');
    jQuery('#portfolio').find('.item').fadeOut(200);
    setTimeout(() => {
        if (jQuery(this).data('filter')=="*") {
            jQuery('#portfolio').find('.item').fadeIn(200);
        } else {
            jQuery('#portfolio').find(jQuery(this).data('filter')).fadeIn(200);
        }
    }, 800);
});