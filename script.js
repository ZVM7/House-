
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

/* WHY CHOOSE US */
/* WHY CHOOSE US */
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // reveal once
      }
    });
  }, { threshold: 0.2 });

  // Observe header + subtext + each card
  document.querySelectorAll(
    '.why-choose-header h2, .why-choose-header p.why-choose-sub, .why-card'
  ).forEach(el => observer.observe(el));
});


// Services header elements
const servicesHeaderEls = document.querySelectorAll('.services-header h2, .services-header p');

const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      headerObserver.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.2 });

servicesHeaderEls.forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.2}s`; // small stagger (h2 then p)
  headerObserver.observe(el);
});



// Services section observer
const serviceCards = document.querySelectorAll('.service-cards .card');

const serviceObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      serviceObserver.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.2 }); // 20% visible before triggering

serviceCards.forEach((card, index) => {
  // delay each card for staggered animation
  card.style.transitionDelay = `${index * 0.2}s`; 
  serviceObserver.observe(card);
});


document.addEventListener("DOMContentLoaded", () => {
  const processObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        processObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Observe header, paragraph, and steps
  document.querySelectorAll(
    '.process-title, .process-intro, .process-step'
  ).forEach(el => processObserver.observe(el));
});




// ====================== SUPPORT PACKAGES REVEAL ======================
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(
    ".support-packages .section-header, .support-packages .package-step, .support-packages .support-cta"
  ).forEach(el => observer.observe(el));
});



// ====================== CONTACT SECTION REVEAL ======================
document.addEventListener("DOMContentLoaded", () => {
  const labels = document.querySelectorAll(".label-typewriter");

  // Save original text and clear label
  labels.forEach(label => {
    label.dataset.text = label.textContent.trim(); // store original
    label.textContent = ""; // clear for typing
  });

  // Typewriter function
  const typeLabel = (label, callback) => {
    const text = label.dataset.text;
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        label.textContent += text[index];
        index++;
      } else {
        clearInterval(interval);
        // fade out cursor after typing
        label.classList.add("finished");
        if (callback) callback();
      }
    }, 100); // adjust typing speed here
  };

  // Sequential typing when contact section enters viewport
  const contactSection = document.querySelector(".contact-container");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let i = 0;
        const next = () => {
          if (i < labels.length) {
            typeLabel(labels[i], next);
            i++;
          }
        };
        next();
        obs.disconnect(); // only trigger once
      }
    });
  }, { threshold: 0.5 });

  if (contactSection) observer.observe(contactSection);
});
