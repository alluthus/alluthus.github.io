window.onload = function() {
    document.getElementById("menus").onclick = function(evt) {
        bringMenu();
    }

    document.getElementById("exita1").onclick = function(evt) {
        outMenu();
    }
}

function bringMenu() {
    document.getElementById("dropdowns").style.display = "inline-block";
    setTimeout(function() {
        document.getElementById("dropdowns").style.backgroundColor = "rgba(0,0,0,0.5)";
        document.getElementById("mble").style.right = "0";
    }, 50);
}

function outMenu() {
    document.getElementById("dropdowns").style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementById("mble").style.right = "-350px";
    setTimeout(function() {
        document.getElementById("dropdowns").style.display = "none";
    }, 150);
}