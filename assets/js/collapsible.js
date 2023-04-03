var colls = document.getElementsByClassName("collapsible");

for (var i = 0; i < colls.length; i++) {
    colls[i].addEventListener("click", function() {
        this.classList.toggle("is-active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}