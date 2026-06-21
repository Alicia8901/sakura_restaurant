// Smooth reveal animation on scroll

const sections = document.querySelectorAll(
  ".about, .menu, .reviews, .hours, .contact"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Contact form

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert(
    "Thank you! Your reservation request has been received. We will contact you shortly."
  );

  form.reset();
});

// Navbar shadow effect

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow =
      "0 5px 20px rgba(0,0,0,0.15)";
  } else {
    navbar.style.boxShadow =
      "0 3px 15px rgba(0,0,0,0.08)";
  }
});

// Menu card hover enhancement

const cards = document.querySelectorAll(".menu-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform =
      "translateY(-12px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "translateY(0) scale(1)";
  });
});