const header = document.getElementById("myHeader");
const headerTop = document.getElementById("headerTop");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add("fixed", "slide-down");
    headerTop.classList.add("hidden");
  } else {
    header.classList.remove("fixed", "slide-down");
    headerTop.classList.remove("hidden");
  }
});
