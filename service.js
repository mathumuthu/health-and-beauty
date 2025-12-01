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



















  // const cards = document.querySelectorAll(".service-card");

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.style.opacity = "1";
  //       entry.target.style.transform = "translateY(0)";
  //       entry.target.style.transition = "0.8s ease";
  //     }
  //   });
  // }, { threshold: 0.2 });

  // cards.forEach(card => observer.observe(card));

























// scroll animation
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

animatedElements.forEach(el => observer.observe(el));


// Ripple effect
document.querySelectorAll('.ripple').forEach(btn => {
  btn.addEventListener('click', function(e) {
    let rect = btn.getBoundingClientRect();
    btn.style.setProperty('--x', e.clientX - rect.left + "px");
    btn.style.setProperty('--y', e.clientY - rect.top + "px");
  });
});







