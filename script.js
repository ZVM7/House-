// ====================== ABOUT DARKEN ======================
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about");
  if (aboutSection) {
    window.addEventListener("scroll", () => {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        aboutSection.classList.add("darkened");
      }
    });
  }
});

// ====================== EXPANDABLE VALUE CARDS ======================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".value-card").forEach(card => {
    const arrow = card.querySelector(".arrow");
    const content = card.querySelector(".value-text");
    if (arrow && content) {
      arrow.addEventListener("click", () => {
        content.classList.toggle("active");
        arrow.classList.toggle("rotated");
      });
    }
  });
});

// ====================== SHOW/HIDE PORTFOLIO ======================
document.addEventListener("DOMContentLoaded", () => {
  const expandArrow = document.querySelector(".expand-arrow");
  const portfolioSlider = document.querySelector(".portfolio-slider");

  if (expandArrow && portfolioSlider) {
    expandArrow.addEventListener("click", () => {
      const isVisible = portfolioSlider.style.display === "flex";
      portfolioSlider.style.display = isVisible ? "none" : "flex";
      expandArrow.textContent = isVisible ? "▼ Show Portfolio" : "▲ Hide Portfolio";
    });
  }
});

// ====================== PORTFOLIO FILTERS ======================
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".portfolio-filters button");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        card.style.display = filter === "all" || card.dataset.category === filter ? "block" : "none";
      });
    });
  });
});

// ====================== ABOUT SECTION REVEALS ======================
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targets = entry.target.querySelectorAll(
          "h2, p, .highlight, .value-card, .expand-arrow, .portfolio-filters, .project-card"
        );

        targets.forEach((el, index) => {
          setTimeout(() => el.classList.add("reveal"), index * 200);
        });

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const aboutSection = document.querySelector(".about");
  if (aboutSection) observer.observe(aboutSection);
});



