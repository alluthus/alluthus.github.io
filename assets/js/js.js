window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("bars").style.backgroundColor = "rgb(216, 216, 216)";
    document.getElementById("bars").style.color = "black";
    document.getElementById("bars").style.textShadow = "0px 0px 0px rgba(0, 0, 0, 0)";
    document.getElementById("bars").style.boxShadow = "0px 0px 16px -2px rgba(0,0,0,0.4)";
    document.getElementById("im-na").style.filter = "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))";
  } else {
    document.getElementById("bars").style.backgroundColor = "transparent";
    document.getElementById("bars").style.color = "white";
    document.getElementById("bars").style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0)";
    document.getElementById("bars").style.textShadow = "0px 0px 15px rgba(0, 0, 0, 0.788)";
    document.getElementById("im-na").style.filter = "drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.788))";
  }
}

window.onload = function () {
document.getElementById("menus").onclick = function (evt) {
  bringMenu();
}
}

function bringMenu () {
  document.getElementById("dropdowns").style.display = "inline-block";
  setTimeout(function () {
    document.getElementById("dropdowns").style.backgroundColor = "rgba(0,0,0,0.5)";
    document.getElementById("mble").style.right = "0";
  }, 50);
}