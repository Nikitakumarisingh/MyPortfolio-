// Toggle Menu Function
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

// Typing Effect Logic
const domains = ["Frontend Developer", "ML Developer", "UI/UX Designer", "Project Lead"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenWords = 2000;

const dynamicTextElement = document.querySelector(".dynamic-text");

function typeEffect() {
  if (!dynamicTextElement) return;

  const currentDomain = domains[index];
  if (isDeleting) {
    dynamicTextElement.textContent = currentDomain.substring(0, charIndex--);
  } else {
    dynamicTextElement.textContent = currentDomain.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentDomain.length) {
    setTimeout(() => (isDeleting = true), delayBetweenWords);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % domains.length;
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();

// Show the button when the user scrolls down 200px
window.onscroll = function () {
  toggleScrollButton();
};

function toggleScrollButton() {
  const scrollButton = document.getElementById("scrollUpBtn");
  if (scrollButton) {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  }
}

// Scroll to the top of the page smoothly
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
  const canvas = document.createElement('canvas');
  document.getElementById('animated-lines-container').appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particlesArray = [];
  const colors = ['#00c4ff', '#0078ff', '#80dfff']; // Color scheme for the lines

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function init() {
    particlesArray = [];
    for (let i = 0; i < 100; i++) {
      particlesArray.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach(particle => {
      particle.update();
      particle.draw();
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  });

  init();
  animate();
  function scrollToSection(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
  // Open Modal Function
function openModal() {
  document.getElementById('certificatesModal').style.display = 'flex';
}
// Open Modal
function openModal() {
  document.getElementById('certificatesModal').style.display = 'flex';
}

// Close Modal
function closeModal() {
  document.getElementById('certificatesModal').style.display = 'none';
}
