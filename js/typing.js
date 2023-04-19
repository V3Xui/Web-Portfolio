const menuBtn = document.querySelector(".menuBtn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", mobileMenu);

function mobileMenu() {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Typing Animation
let typed = new Typed(".typing", {
  strings: [
    "",
    "a Hungry Learner",
    "An Aspiring Web Developer",
    "Adaptable",
    "a Manhwa Reader",
    "An Aspiring Software Developer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

let modal1 = document.getElementById("modal1");
let button1 = document.getElementById("modal-button1");
let span1 = document.getElementsByClassName("close")[0];

button1.onclick = function () {
  modal1.style.display = "block";
};

span1.onclick = function () {
  modal1.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

let modal2 = document.getElementById("modal2");
let button2 = document.getElementById("modal-button2");
let span2 = document.getElementsByClassName("close")[1];

button2.onclick = function () {
  modal2.style.display = "block";
};

span2.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document
    .getElementsByClassName("slides")[0]
    .getElementsByTagName("img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

let prev = document.getElementsByClassName("prev")[0];
let next = document.getElementsByClassName("next")[0];
prev.addEventListener("click", function () {
  plusSlides(-1);
});
next.addEventListener("click", function () {
  plusSlides(1);
});
