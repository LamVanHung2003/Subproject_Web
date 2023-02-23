let currentBanner = 1;
showBanner(currentBanner);

function showBanner(n) {
	let banners = document.getElementsByClassName("banner");
	let dots = document.getElementsByClassName("dot");

	if (n > banners.length) {
		currentBanner = 1;
	}
	if (n < 1) {
		currentBanner = banners.length;
	}

	for (let i = 0; i < banners.length; i++) {
		banners[i].style.display = "none";
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	banners[currentBanner-1].style.display = "block";
	dots[currentBanner-1].className += " active";
}

function showNext() {
	currentBanner++;
	showBanner(currentBanner);
}

function showPrev() {
	currentBanner--;
	showBanner(currentBanner);
}

let dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
	dots[i].onclick = function() {
		showBanner(i+1);
	}
}
document.addEventListener("DOMContentLoaded", function() {
	let currentBanner = 1;
	showBanner(currentBanner);
  
	function showBanner(n) {
	  let banners = document.getElementsByClassName("banner");
	  let dots = document.getElementsByClassName("dot");
  
	  if (n > banners.length) {
		currentBanner = 1;
	  }
	  if (n < 1) {
		currentBanner = banners.length;
	  }
  
	  for (let i = 0; i < banners.length; i++) {
		banners[i].style.display = "none";
	  }
	  for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	  }
  
	  banners[currentBanner-1].style.display = "block";
	  let dot = document.querySelector('.dot[data-banner="' + currentBanner + '"]');
	  dot.classList.add("active");
	}
  
	function showNext() {
	  currentBanner++;
	  showBanner(currentBanner);
	}
  
	function showPrev() {
	  currentBanner--;
	  showBanner(currentBanner);
	}
  
	let dots = document.getElementsByClassName("dot");
	for (let i = 0; i < dots.length; i++) {
	  dots[i].onclick = function() {
		let banner = this.getAttribute("data-banner");
		currentBanner = banner;
		showBanner(currentBanner);
	  }
	}
  });

//   
  document.addEventListener("DOMContentLoaded", function() {
	let currentBanner = 1;
	showBanner(currentBanner);
  
	function showBanner(n) {
	  let banners = document.getElementsByClassName("banner");
	  let dots = document.getElementsByClassName("dot");
  
	  if (n > banners.length) {
		currentBanner = 1;
	  }
	  if (n < 1) {
		currentBanner = banners.length;
	  }
  
	  for (let i = 0; i < banners.length; i++) {
		banners[i].style.display = "none";
	  }
	  for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	  }
  
	  banners[currentBanner-1].style.display = "block";
	  let dot = document.querySelector('.dot[data-banner="' + currentBanner + '"]');
	  dot.classList.add("active");
	}
  
	function showNext() {
	  currentBanner++;
	  showBanner(currentBanner);
	}
  
	function showPrev() {
	  currentBanner--;
	  showBanner(currentBanner);
	}
  
	let dots = document.getElementsByClassName("dot");
	for (let i = 0; i < dots.length; i++) {
	  dots[i].onclick = function() {
		let banner = this.getAttribute("data-banner");
		currentBanner = banner;
		showBanner(currentBanner);
	  }
	}
  });
	