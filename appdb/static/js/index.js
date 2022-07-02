let ele = document.querySelector("#cate-fixed");
window.addEventListener("scroll", function(event) {

    if (this.scrollY >= 400) {
        ele.classList.add('fixed');
    } else {
        ele.classList.remove("fixed");
    }
});