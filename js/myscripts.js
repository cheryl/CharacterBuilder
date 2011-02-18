$(document).ready(function() {
    $(".accordion").accordion({autoHeight: false, header: "h3"});
    $(".tabs").tabs();
    $(".meerkat").hide();
});

$('#btn').click(function () {
    $('.meerkat').slide();
    /*
    $('.meerkat').meerkat({
        height: '100%',
        width: '150px',
        position: 'left',
        close: '.close-meerkat',
        animationIn: 'slide',
        animationSpeed: 500,
        easingIn: 'EaseIn'
    });
    */
});

