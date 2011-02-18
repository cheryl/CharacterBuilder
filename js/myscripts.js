$(document).ready(function() {
    $(".accordion").accordion({autoHeight: false, header: "h3"});
    $(".tabs").tabs();
    $('.meerkat').hide();
});

$("#btn").click(function() {
    $('.meerkat').meerkat({
        width: '284px',
        height: '100px',
        position: 'right',
        close: '.close-meerkat',
        animationIn: 'slide',
        animationSpeed: 500
    });
});
