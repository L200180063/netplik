// Add active class to the current button (highlight it)
var header = document.getElementById("main-menu");
var menus = header.getElementsByClassName("menu");
for (var i = 0; i < menus.length; i++) {
  menus[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("is-active");
  current[0].className = current[0].className.replace(" is-active", "");
  this.className += " is-active";
  });
}
