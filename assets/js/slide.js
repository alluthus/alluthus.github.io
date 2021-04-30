window.onload = function () {
  var sLide = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("featuredph");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    sLide++;
    if (sLide > x.length) {sLide = 1}    
    x[sLide-1].style.display = "block";  
    setTimeout(carousel, 10000);    
  }
}