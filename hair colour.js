/* Gallery modal */
document.querySelectorAll('.gallery-item').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    modalImg.src = img.src.replace('600x600','1200x900') || img.src;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  });
});
document.querySelector('.img-modal .modal-close').addEventListener('click', () => {
  const modal = document.getElementById('imgModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
});

/* Close modal when clicking outside the image */
document.getElementById('imgModal').addEventListener('click', (e) => {
  if (e.target.id === 'imgModal') {
    e.currentTarget.classList.remove('open');
    e.currentTarget.setAttribute('aria-hidden','true');
  }
});

/* Swatch name show */
document.querySelectorAll('.swatch').forEach(s => {
  s.addEventListener('click', () => {
    const name = s.dataset.name || 'Shade';
    const out = document.getElementById('swatch-name');
    out.textContent = name;
  });
});

/* Simple testimonial slider */
let testiIndex = 0;
const slides = document.querySelectorAll('.testi-slide');
function showTesti(i) {
  slides.forEach(s => s.classList.remove('active'));
  slides[i].classList.add('active');
}
if (slides.length) {
  showTesti(0);
  setInterval(() => {
    testiIndex = (testiIndex + 1) % slides.length;
    showTesti(testiIndex);
  }, 4500);
}



























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
