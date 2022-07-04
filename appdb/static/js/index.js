
let btn = document.querySelector('.icon-scroll-top');
let ele = document.querySelector("#cate-fixed");
window.addEventListener("scroll", function (event) {

    if (this.scrollY >= 400) {
        ele.classList.add('fixed');
    } else {
        ele.classList.remove("fixed");
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $(btn).addClass('show');
    } else {
        $(btn).removeClass('show');
    }
});

$(btn).on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
$(".menu-open").on('click', function (e) {
    e.preventDefault();
    $(".icon-menu-mb").parent().toggleClass('active');
});
$(".menu-close").on('click', function (e) {
    e.preventDefault();
    $(".icon-menu-mb").parent().removeClass('active');
});