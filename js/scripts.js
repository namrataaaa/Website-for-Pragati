
$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 3000, pause: false })
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else {
            $('#mycarousel').carousel('cycle');
            $('#mycarousel ').carousel('next');
            $('#carouselButton').children('span').addClass('fa-pause');
            $('#carouselButton').children('span').removeClass('fa-play');
        }
    });

    $('[data-toggle="tooltip"]').tooltip();

    $(".zoom").mouseenter((e) => {
        e.target.parentElement.style.zIndex = "99";
    })
    $(".zoom").mouseleave((e) => {
        e.target.parentElement.style.zIndex = "80";
    })

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            $(".nav-link").removeClass("text-light");
            $(".nav-link").addClass("text-dark");
            $(".navbar").css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
            if ($(this).scrollTop() < $nav.height()) {
                $(".nav-link").removeClass("text-dark");
                $(".nav-link").addClass("text-light");
                $(".navbar").css("box-shadow", "none");
            }
        });
    });

})

function collapse(e) {
    document.getElementById('navHome').style.paddingLeft = "10px";
    document.getElementById('navEvents').style.paddingLeft = "10px"
    document.getElementById('navAbout').style.paddingLeft = "10px"
    document.getElementById('navContact').style.paddingLeft = "10px"
    document.getElementById('navTeam').style.paddingLeft = "10px"
}
