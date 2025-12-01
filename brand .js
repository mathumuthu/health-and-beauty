// Fade-in animation on scroll
const items = document.querySelectorAll('.brand-card, .product-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });

items.forEach(item => observer.observe(item));


// Button click animation
const buttons = document.querySelectorAll('.brand-btn');

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.innerText = "Added ✔";
    btn.style.background = "#00a36c";

    setTimeout(() => {
      btn.innerText = "Buy Now";
      btn.style.background = "#ff3e93";
    }, 1500);
  });
});










const hamburger = document.querySelector(".hamburger");
const navBar    = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});






function subscribe() {
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg");

  // Email pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // If email empty
  if (email === "") {
    msg.style.color = "red";
    msg.innerHTML = "⚠ Please enter your email!";
    return false;
  }

  // If invalid format
  if (!emailPattern.test(email)) {
    msg.style.color = "red";
    msg.innerHTML = "⚠ Please enter a valid email!";
    return false;
  }

  // If valid → redirect to another page
  window.location.href = "404.html"; 
}























// Smooth scroll for Book Now button
document.querySelector('.btn').addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#services").scrollIntoView({
    behavior: "smooth"
  });
});







  // SCROLL FADE ANIMATION
  const sections = document.querySelectorAll(".fade-section");

  function revealOnScroll() {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) {
        sec.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);



let slider = document.getElementById("brandSlider");
let scrollValue = 0;

setInterval(() => {
  scrollValue += 1;
  slider.scrollLeft = scrollValue;

  if (scrollValue >= slider.scrollWidth - slider.clientWidth) {
    scrollValue = 0;
  }
}, 20);
