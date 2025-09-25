// secure-launch.js
document.addEventListener("DOMContentLoaded", () => {
  const animatedEls = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // run only once
      }
    });
  }, { threshold: 0.2 });

  animatedEls.forEach(el => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("cta-modal");
  const closeBtn = document.querySelector(".close-btn");
  const popupForm = document.getElementById("popup-form");

  // Open modal only from CTA buttons outside modal
  const allCtas = document.querySelectorAll(".cta-btn");
  allCtas.forEach(btn => {
    if (!btn.closest(".modal")) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
        modal.classList.add("show");
      });
    }
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modal.classList.remove("show");
  });

  // Close modal on outside click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modal.classList.remove("show");
    }
  });

  // ✅ Handle form submission
  if (popupForm) {
    popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Form submitted ✅ redirecting...");
      window.location.href = "thank-you.html"; // same folder
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const stickyBtn = document.querySelector(".sticky-cta");

  // Sections that already have their own CTA buttons
  const ctaSections = document.querySelectorAll(
    ".next-step, .footer-cta, .cta-section"
  );

  function toggleStickyButton() {
    let showButton = true;

    ctaSections.forEach(section => {
      const rect = section.getBoundingClientRect();

      // If section is in view, hide sticky button
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        showButton = false;
      }
    });

    stickyBtn.style.display = showButton ? "inline-block" : "none";
  }

  window.addEventListener("scroll", toggleStickyButton);
  window.addEventListener("resize", toggleStickyButton);
  toggleStickyButton(); // run on load
});
