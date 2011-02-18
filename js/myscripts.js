$(document).ready(function() {
    $(".accordion").accordion({autoHeight: false, header: "h3"});
    $(".tabs").tabs();
    $('.meerkat').hide();
});

$(".navigation a").click(function(event) {
    // get the href and apply meerkat to that object
    var newlink = $(this).attr('href');
    $(newlink).meerkat({
        width: '284px',
        height: '100px',
        position: 'right',
        animationIn: 'slide',
        animationSpeed: 500
    });
});
