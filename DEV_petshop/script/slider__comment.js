var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__comment");
  var dots = document.getElementsByClassName("dot__comment");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var prevBtn = document.querySelector(".prev__comment");
var nextBtn = document.querySelector(".next__comment");
var dots = document.querySelectorAll(".dot__comment");

prevBtn.addEventListener("click", function() {
  plusSlides(-1);
});

nextBtn.addEventListener("click", function() {
  plusSlides(1);
});

dots.forEach(function(dot, index) {
  dot.addEventListener("click", function() {
    currentSlide(index + 1);
  });
});
