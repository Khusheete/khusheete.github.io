function instanciateNavbarBurger(burger) {
    var target = document.getElementById(burger.dataset.target);
    burger.addEventListener("click", function() {
        if (burger.classList.contains("is-active")) {
            burger.classList.remove("is-active");
            target.classList.remove("is-active");
        } else {
            burger.classList.add("is-active");
            target.classList.add("is-active");
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    var burgers = document.getElementsByClassName("navbar-burger");

    for (var i = 0; i < burgers.length; i++) {
        instanciateNavbarBurger(burgers[i]);
    }
});