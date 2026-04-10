document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  // Sticky scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

});

//================================================================

/* 🔥 Scroll Reveal Animation */
const elements = document.querySelectorAll('.fade-up');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


/* 🎥 Parallax Effect for Video */
window.addEventListener("scroll", () => {
  const video = document.querySelector(".hero-video");
  let offset = window.scrollY;

  video.style.transform = `translateY(${offset * 0.3}px) scale(1.1)`;
});


/* ✨ Smooth Button Click Scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

//============================================================

/* 🎬 Scroll Reveal */
const cards = document.querySelectorAll(".service-card");

const revealCards = () => {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < trigger) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);


/* 🎥 Play Video on Hover */
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {
  const video = card.querySelector("video");

  card.addEventListener("mouseenter", () => {
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

//========================================================

/* 🎬 Scroll Reveal */
const aboutElements = document.querySelectorAll(".fade-up");

const revealAbout = () => {
  const trigger = window.innerHeight * 0.85;

  aboutElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealAbout);
window.addEventListener("load", revealAbout);


/* 🎥 Auto Play Small Video on Hover */
const aboutVideo = document.querySelector(".about-video");

if(aboutVideo){
  aboutVideo.addEventListener("mouseenter", () => {
    aboutVideo.play();
  });

  aboutVideo.addEventListener("mouseleave", () => {
    aboutVideo.pause();
    aboutVideo.currentTime = 0;
  });
}


/* ✨ Subtle Parallax Effect */
window.addEventListener("scroll", () => {
  const img = document.querySelector(".main-img");
  let offset = window.scrollY;

  if(img){
    img.style.transform = `translateY(${offset * 0.05}px)`;
  }
});

//========================================================================

/* 🎬 Scroll Reveal */
const featureCards = document.querySelectorAll(".service-box");

const revealFeatures = () => {
  const trigger = window.innerHeight * 0.85;

  featureCards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < trigger) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealFeatures);
window.addEventListener("load", revealFeatures);


/* 🎥 Play Video on Hover */
document.querySelectorAll(".service-box").forEach(card => {
  const video = card.querySelector("video");

  card.addEventListener("mouseenter", () => {
    if(video){
      video.play();
    }
  });

  card.addEventListener("mouseleave", () => {
    if(video){
      video.pause();
      video.currentTime = 0;
    }
  });
});

//==============================================================

/* 🎬 Scroll Reveal */
const baItems = document.querySelectorAll(".ba-item");

const revealBA = () => {
  const trigger = window.innerHeight * 0.85;

  baItems.forEach(item => {
    const top = item.getBoundingClientRect().top;

    if (top < trigger) {
      item.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealBA);
window.addEventListener("load", revealBA);

//=========================================================================


//==============================================================

/* Scroll Reveal for Offers */
const offerCards = document.querySelectorAll(".offer-card");

const revealOffers = () => {
  const trigger = window.innerHeight * 0.85;

  offerCards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < trigger) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOffers);
window.addEventListener("load", revealOffers);

//======================================================================

/* Scroll reveal */
const ctaOverlay = document.querySelector(".cta-overlay");

const revealCTA = () => {
  const top = ctaOverlay.getBoundingClientRect().top;
  const trigger = window.innerHeight * 0.85;

  if (top < trigger) {
    ctaOverlay.classList.add("show");
  }
};

window.addEventListener("scroll", revealCTA);
window.addEventListener("load", revealCTA);

/* Optional: Smooth form submit */
const bookingForm = document.querySelector(".booking-form");
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your appointment has been booked.");
  bookingForm.reset();
});

//========================================================================

const footerOverlay = document.querySelector(".footer-overlay");

const revealFooter = () => {
  const top = footerOverlay.getBoundingClientRect().top;
  const trigger = window.innerHeight * 0.85;

  if (top < trigger) {
    footerOverlay.classList.add("show");
  }
};

window.addEventListener("scroll", revealFooter);
window.addEventListener("load", revealFooter);

/* Optional: Newsletter form alert */
const newsletterForm = document.querySelector(".newsletter-form");
newsletterForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for subscribing to our newsletter!");
  newsletterForm.reset();
});
