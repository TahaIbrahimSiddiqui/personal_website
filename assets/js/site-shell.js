import { siteData } from "./site-data.js";

function linkAttributes(link) {
  const external = link.external || /^https?:\/\//.test(link.url);
  return external ? ' target="_blank" rel="noreferrer"' : "";
}

export function setupPage(pageKey) {
  renderHeader(pageKey);
  renderFooter();
  applyMeta(pageKey);
  bindMobileMenu();
}

function renderHeader(pageKey) {
  const header = document.querySelector("#site-header");
  if (!header) {
    return;
  }

  const navLinks = [
    ...siteData.navigation,
    { label: "CV", href: siteData.cvPath, page: "cv", external: true }
  ];

  header.innerHTML = `
    <div class="shell">
      <div class="site-header__inner">
        <a class="brand" href="index.html" aria-label="Go to homepage">
          <span class="brand__eyebrow">Empirical social scientist</span>
          <span class="brand__name">${siteData.shortName}</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          Menu
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Primary">
          ${navLinks
            .map((link) => {
              const active = link.page === pageKey ? " site-nav__link--active" : "";
              return `<a class="site-nav__link${active}" href="${link.href}"${linkAttributes(link)}>${link.label}</a>`;
            })
            .join("")}
        </nav>
      </div>
    </div>
  `;
}

function renderFooter() {
  const footer = document.querySelector("#site-footer");
  if (!footer) {
    return;
  }

  footer.innerHTML = `
    <div class="shell site-footer__inner">
      <div>
        <p class="site-footer__title">${siteData.name}</p>
        <p class="site-footer__text">${siteData.profile.headline}</p>
      </div>
      <div class="site-footer__meta">
        <a class="text-link" href="mailto:${siteData.email}">${siteData.email}</a>
        <span>${siteData.location}</span>
      </div>
    </div>
  `;
}

function applyMeta(pageKey) {
  const meta = siteData.pageMeta[pageKey];
  if (!meta) {
    return;
  }

  document.title = meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", meta.description);
  }
}

function bindMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) {
    return;
  }

  const close = () => {
    nav.classList.remove("site-nav--open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("site-nav--open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", close);
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("site-nav--open")) {
      return;
    }

    if (!nav.contains(event.target) && event.target !== toggle) {
      close();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      close();
    }
  });
}

export function renderTags(tags = []) {
  if (!tags.length) {
    return "";
  }

  return `
    <ul class="chips" aria-label="Tags">
      ${tags.map((tag) => `<li class="chip">${tag}</li>`).join("")}
    </ul>
  `;
}

export function renderLinks(links = []) {
  if (!links.length) {
    return "";
  }

  return `
    <div class="card-links">
      ${links
        .map(
          (link) =>
            `<a class="text-link" href="${link.url}"${linkAttributes(link)}>${link.label}</a>`
        )
        .join("")}
    </div>
  `;
}

export function initRevealAnimations() {
  const revealNodes = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

export function initFilterButtons({ filterSelector, itemSelector, countSelector }) {
  const buttons = [...document.querySelectorAll(filterSelector)];
  const items = [...document.querySelectorAll(itemSelector)];
  const countNode = document.querySelector(countSelector);

  if (!buttons.length || !items.length) {
    return;
  }

  const applyFilter = (value) => {
    let visibleCount = 0;
    items.forEach((item) => {
      const filters = item.dataset.filters.split(" ");
      const match = value === "all" || filters.includes(value);
      item.hidden = !match;
      if (match) {
        visibleCount += 1;
      }
    });

    buttons.forEach((button) => {
      const pressed = button.dataset.filter === value;
      button.classList.toggle("filter-button--active", pressed);
      button.setAttribute("aria-pressed", String(pressed));
    });

    if (countNode) {
      countNode.textContent = `${visibleCount} item${visibleCount === 1 ? "" : "s"} shown`;
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter));
  });

  applyFilter("all");
}

export function initGallery(trackSelector, prevSelector, nextSelector, lightboxItems) {
  const track = document.querySelector(trackSelector);
  const prevButton = document.querySelector(prevSelector);
  const nextButton = document.querySelector(nextSelector);

  if (track && prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      track.scrollBy({ left: -track.clientWidth * 0.85, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
      track.scrollBy({ left: track.clientWidth * 0.85, behavior: "smooth" });
    });
  }

  const links = [...document.querySelectorAll("[data-gallery-index]")];
  if (!links.length) {
    return;
  }

  const root = document.querySelector("#lightbox-root");
  root.innerHTML = `
    <div class="lightbox" aria-hidden="true">
      <button class="lightbox__close" type="button" aria-label="Close image viewer">Close</button>
      <button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="Previous image">Prev</button>
      <figure class="lightbox__figure">
        <img class="lightbox__image" alt="">
        <figcaption class="lightbox__caption"></figcaption>
      </figure>
      <button class="lightbox__nav lightbox__nav--next" type="button" aria-label="Next image">Next</button>
    </div>
  `;

  const lightbox = root.querySelector(".lightbox");
  const image = root.querySelector(".lightbox__image");
  const caption = root.querySelector(".lightbox__caption");
  const closeButton = root.querySelector(".lightbox__close");
  const prevNav = root.querySelector(".lightbox__nav--prev");
  const nextNav = root.querySelector(".lightbox__nav--next");

  let currentIndex = 0;

  const render = () => {
    const item = lightboxItems[currentIndex];
    image.src = item.src;
    image.alt = item.alt;
    caption.textContent = item.caption;
  };

  const open = (index) => {
    currentIndex = index;
    render();
    lightbox.classList.add("lightbox--open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("has-lightbox");
  };

  const close = () => {
    lightbox.classList.remove("lightbox--open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("has-lightbox");
  };

  const step = (delta) => {
    currentIndex = (currentIndex + delta + lightboxItems.length) % lightboxItems.length;
    render();
  };

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      open(Number(link.dataset.galleryIndex));
    });
  });

  closeButton.addEventListener("click", close);
  prevNav.addEventListener("click", () => step(-1));
  nextNav.addEventListener("click", () => step(1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("lightbox--open")) {
      return;
    }

    if (event.key === "Escape") {
      close();
    }
    if (event.key === "ArrowLeft") {
      step(-1);
    }
    if (event.key === "ArrowRight") {
      step(1);
    }
  });
}
