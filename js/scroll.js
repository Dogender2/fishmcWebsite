//Animacje Scroll-a
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky1", window.scrollY > 10);
})





//Autoscroll
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}