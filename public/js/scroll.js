window.addEventListener("load", function () {
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 100) {
            document.querySelector('#header').classList.add("header");
        } else {
            document.querySelector('#header').classList.remove("header");
        }
    });
});
