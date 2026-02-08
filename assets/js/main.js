// PRELOADER
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("page-content");
  const MIN_LOADING_TIME = 1500;

  setTimeout(() => {
    if (preloader) preloader.classList.add("hidden");
    if (content) content.classList.remove("hidden");
  }, MIN_LOADING_TIME);
});

document.addEventListener("DOMContentLoaded", () => {
  // 1. NOTIF DROPDOWN (header)
  const notifButton = document.getElementById("notif-button");
  const notifPanel = document.getElementById("notif-panel");

  if (notifButton && notifPanel) {
    const toggleNotif = () => {
      const isHidden = notifPanel.classList.contains("hidden");
      if (isHidden) {
        notifPanel.classList.remove("hidden");
        requestAnimationFrame(() => {
          notifPanel.classList.remove("opacity-0", "-translate-y-2");
          notifPanel.classList.add("opacity-100", "translate-y-0");
        });
      } else {
        notifPanel.classList.add("opacity-0", "-translate-y-2");
        notifPanel.classList.remove("opacity-100", "translate-y-0");
        setTimeout(() => notifPanel.classList.add("hidden"), 180);
      }
    };

    notifButton.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleNotif();
    });

    document.addEventListener("click", (e) => {
      if (!notifPanel.classList.contains("hidden")) {
        if (!notifPanel.contains(e.target) && !notifButton.contains(e.target)) {
          notifPanel.classList.add("opacity-0", "-translate-y-2");
          notifPanel.classList.remove("opacity-100", "translate-y-0");
          setTimeout(() => notifPanel.classList.add("hidden"), 180);
        }
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !notifPanel.classList.contains("hidden")) {
        notifPanel.classList.add("opacity-0", "-translate-y-2");
        notifPanel.classList.remove("opacity-100", "translate-y-0");
        setTimeout(() => notifPanel.classList.add("hidden"), 180);
      }
    });
  }

  // 2. SEARCH KE PRODUCT PAGE
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");

  if (searchButton && searchInput) {
    searchButton.addEventListener("click", (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `product.html?search=${encodeURIComponent(
          query
        )}`;
      } else {
        window.location.href = "product.html";
      }
    });
  }

  // 3. SCROLL ANIMASI (scroll-fade-*)
  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        if (el.classList.contains("scroll-fade-left")) {
          el.classList.add("animate-fade-left");
        } else if (el.classList.contains("scroll-fade-up")) {
          el.classList.add("animate-slide-down");
        } else if (el.classList.contains("scroll-fade-right")) {
          el.classList.add("animate-fade-right");
        }

        scrollObserver.unobserve(el);
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll(".scroll-fade-up, .scroll-fade-left, .scroll-fade-right")
    .forEach((el) => scrollObserver.observe(el));

  // 4. STAGGERED ANIMATE
  const animatedElements = document.querySelectorAll(
    ".animate-fade-up, .animate-fade-left, .animate-fade-right"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
  });

  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.style.opacity = "1";

        const delay = entry.target.classList.contains("stagger-delay-1")
          ? 100
          : entry.target.classList.contains("stagger-delay-2")
          ? 200
          : entry.target.classList.contains("stagger-delay-3")
          ? 300
          : entry.target.classList.contains("stagger-delay-4")
          ? 400
          : entry.target.classList.contains("stagger-delay-5")
          ? 500
          : 0;

        setTimeout(() => {
          entry.target.style.animationPlayState = "running";
        }, delay);

        staggerObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  animatedElements.forEach((el) => staggerObserver.observe(el));

  // HOVER EFFECT value-card & feature item
  const valueCards = document.querySelectorAll(".value-card");
  valueCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
      this.style.boxShadow = "0 20px 40px rgba(31, 44, 92, 0.15)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "";
    });
  });

  const featureItems = document.querySelectorAll(".bg-cream\\/30");
  featureItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // ORDER FORM
  const orderForm = document.getElementById("orderForm");

  window.openForm = () => {
    if (!orderForm) return;
    orderForm.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  window.closeForm = () => {
    if (!orderForm) return;
    orderForm.classList.add("hidden");
    document.body.style.overflow = "auto";
  };

  window.submitForm = () => {
    alert(
      "Terima kasih! Permintaan pemesanan Anda telah dikirim. Kami akan segera menghubungi Anda melalui WhatsApp."
    );
    window.closeForm();
  };

  // Animasi service-card
  const serviceObserverOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, serviceObserverOptions);

  document.querySelectorAll(".service-card").forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    el.style.transitionDelay = `${index * 0.1}s`;
    serviceObserver.observe(el);
  });
});
