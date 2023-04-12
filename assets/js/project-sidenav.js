document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname;

    // Open sidenav platform
    var platforms = document.getElementsByClassName("project-platform");

    for (var i = 0; i < platforms.length; i++) {
        var platform = platforms[i];

        if (path.startsWith("/projects/" + platform.dataset.platformName)) {
            platform.activate();
        }
    }

    // Activate current project link
    var links = document.getElementsByClassName("project-link");

    for (var i = 0; i < links.length; i++) {
        var prj = links[i];

        prj.href = "/projects/" + prj.dataset.link;
        if (path.startsWith("/projects/" + prj.dataset.link)) {
            prj.classList.add("is-active");
        }
    }
});