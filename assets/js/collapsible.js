function instanciateCollapsible(col) {
    col.child = col.nextElementSibling;

    col.isActive = function() {
        return this.classList.contains("is-active");
    };

    col.activate = function() {
        this.classList.add("is-active");
        this.child.style.maxHeight = this.child.scrollHeight + "px";
    };

    col.deactivate = function() {
        this.classList.remove("is-active");
        this.child.style.maxHeight = null;
    };

    col.toggle = function() {
        if (this.isActive()) {
            this.deactivate();
        } else {
            this.activate();
        }
    };

    col.addEventListener("click", col.toggle);
}

document.addEventListener("DOMContentLoaded", function() {

    var colls = document.getElementsByClassName("collapsible");
    console.log("COLLAPSIBLE INIT");

    for (var i = 0; i < colls.length; i++) {
        instanciateCollapsible(colls[i]);
    }
});
