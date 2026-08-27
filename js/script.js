/* ============================================================
   RITU DHUMANKHEDE — PORTFOLIO SCRIPT
   Handles: mobile nav, smooth scroll, scroll-reveal animations,
   active nav link highlighting, back-to-top button.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Mobile hamburger menu ---------- */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  function closeMenu() {
    navMenu.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close mobile menu whenever a nav link is tapped
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  /* ---------- Scroll-reveal animations ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback: just show everything if IntersectionObserver isn't supported
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    let currentId = "";
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });
  }

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();

  /* ---------- Back to top button ---------- */
  const backToTop = document.getElementById("backToTop");

  function toggleBackToTop() {
    backToTop.classList.toggle("is-visible", window.scrollY > 480);
  }

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Subtle parallax on hero pond visual (mouse move) ---------- */
  const pond = document.querySelector(".pond");
  const heroVisual = document.querySelector(".hero__visual");

  if (pond && heroVisual && window.matchMedia("(hover: hover)").matches) {
    heroVisual.addEventListener("mousemove", (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      pond.style.transform = `translate(${x * 12}px, ${y * 12}px)`;
    });

    heroVisual.addEventListener("mouseleave", () => {
      pond.style.transform = "translate(0, 0)";
    });
  }

});
