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


