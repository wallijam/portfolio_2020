//nav-bar background
// $(window).on("scroll", function() {
//   if ($(window).scrollTop()) {
//     $("nav").addClass("black");
//   } else {
//     $("nav").removeClass("black");
//   }
// });
//burger-menu
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //toggle menu
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
};

navSlide();

//skills
$(window).bind("load", function() {
  $(".skillbar").each(function() {
    $(this)
      .find(".skillbar-bar")
      .animate(
        {
          width: $(this).attr("data-percent")
        },
        6000
      );
  });
});

//smooth scroll

$(function() {
  $("a").bind("click", function(event) {
    var $anchor = $(this);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top
        },
        800
      );
    event.preventDefault();
  });
});

// Active link switching

$(document).ready(function() {
  var scrollLink = $(".scroll");

  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 50;

      if (sectionOffset <= scrollbarLocation) {
        $(this)
          .parent()
          .addClass("blue");
        $(this)
          .parent()
          .siblings()
          .removeClass("blue");
      }
    });
  });
});

//animation-project

window.sr = ScrollReveal();
sr.reveal(".anim");

//project pop up

// Open popup
$(".project1").click(function() {
  $(".popup").css("opacity", 1);
  $(".popup").css("display", "block");
});
// close popup
$(".popup-close").click(function() {
  $(".popup").css("opacity", 0);
  setTimeout(function() {
    $(".popup").css("display", "none");
  }, 1000);
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// RequestAnimFrame: a browser API for getting smooth animations
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     ||  
		function( callback ){
			return window.setTimeout(callback, 1000 / 60);
		};
})();


