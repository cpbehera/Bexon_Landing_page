var acc = document.getElementsByClassName("accordion");
var panel = document.querySelectorAll(".panel");
var item = document.getElementsByClassName("item");
console.log(panel);
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    if (item.style.height === "200px") {
      item.style.height = "50px";
    } else {
      item.style.height = "50px";
      // panel.style.display = "block";
    }
  });
}