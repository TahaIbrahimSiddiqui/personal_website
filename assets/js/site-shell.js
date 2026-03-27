import { siteData } from "./site-data.js?v=20260327a";

const supportedThemes = [
  { value: "fieldwork", label: "Fieldwork", color: "#4e5a46" },
  { value: "river", label: "River", color: "#336b73" },
  { value: "brick", label: "Brick", color: "#8b4f3c" },
  { value: "night", label: "Night", color: "#0f1716" }
];

const themeOptions = supportedThemes.filter((theme) => theme.value !== "night");

const themeStorageKey = "tis-theme";
const previousThemeStorageKey = "tis-theme-previous";

function linkAttributes(link) {
  const external = link.external || /^https?:\/\//.test(link.url);
  return external ? ' target="_blank" rel="noreferrer"' : "";
}

function getSavedTheme() {
  try {
    const stored = window.localStorage.getItem(themeStorageKey);
    if (supportedThemes.some((theme) => theme.value === stored)) {
      return stored;
    }
  } catch (error) {
    // Ignore storage access issues and fall back to the default theme.
  }

  return themeOptions[0].value;
}

function getLastNonNightTheme() {
  try {
    const stored = window.localStorage.getItem(previousThemeStorageKey);
    if (stored && stored !== "night" && themeOptions.some((theme) => theme.value === stored)) {
      return stored;
    }
  } catch (error) {
    // Ignore storage access issues and fall back to the default theme.
  }

  return themeOptions[0].value;
}

function syncThemeControls(selectedTheme) {
  const select = document.querySelector("#theme-select");
  if (select) {
    select.value = selectedTheme === "night" ? getLastNonNightTheme() : selectedTheme;
  }

  const toggle = document.querySelector("#night-toggle");
  if (toggle) {
    const isNight = selectedTheme === "night";
    toggle.setAttribute("aria-pressed", String(isNight));
    toggle.textContent = isNight ? "Day" : "Night";
    toggle.setAttribute("aria-label", isNight ? "Switch back from night mode" : "Switch to night mode");
    toggle.classList.toggle("theme-toggle--active", isNight);
  }
}

function setTheme(theme) {
  const selectedTheme = supportedThemes.some((option) => option.value === theme)
    ? theme
    : themeOptions[0].value;

  document.body.dataset.theme = selectedTheme;

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const themeDefinition = supportedThemes.find((option) => option.value === selectedTheme);
  if (themeMeta && themeDefinition) {
    themeMeta.setAttribute("content", themeDefinition.color);
  }

  try {
    window.localStorage.setItem(themeStorageKey, selectedTheme);
    if (selectedTheme !== "night") {
      window.localStorage.setItem(previousThemeStorageKey, selectedTheme);
    }
  } catch (error) {
    // Ignore storage access issues and keep the page functional.
  }

  syncThemeControls(selectedTheme);
}

export function setupPage(pageKey) {
  setTheme(getSavedTheme());
  renderHeader(pageKey);
  renderFooter();
  applyMeta(pageKey);
  bindMobileMenu();
  bindThemeSelector();
  bindNightToggle();
  syncThemeControls(document.body.dataset.theme || themeOptions[0].value);
}

function renderHeader(pageKey) {
  const header = document.querySelector("#site-header");
  if (!header) {
    return;
  }

  const activeTheme = document.body.dataset.theme || themeOptions[0].value;
  const activeDropdownTheme = activeTheme === "night" ? getLastNonNightTheme() : activeTheme;
  const navLinks = [
    ...siteData.navigation,
    { label: "CV", href: siteData.cvPath, page: "cv", external: true }
  ];

  header.innerHTML = `
    <div class="shell">
      <div class="site-header__inner">
        <a class="brand" href="index.html" aria-label="Go to homepage">
          <span class="brand__name">${siteData.shortName}</span>
        </a>
        <div class="site-header__cluster">
          <nav class="site-nav" id="site-nav" aria-label="Primary">
            ${navLinks
              .map((link) => {
                const active = link.page === pageKey ? " site-nav__link--active" : "";
                return `<a class="site-nav__link${active}" href="${link.href}"${linkAttributes(link)}>${link.label}</a>`;
              })
              .join("")}
          </nav>
          <label class="theme-switcher" for="theme-select">
            <span class="theme-switcher__label">Theme</span>
            <select class="theme-select" id="theme-select" aria-label="Select site theme">
              ${themeOptions
                .map(
                  (theme) =>
                    `<option value="${theme.value}"${theme.value === activeDropdownTheme ? " selected" : ""}>${theme.label}</option>`
                )
                .join("")}
            </select>
          </label>
          <button
            class="theme-toggle${activeTheme === "night" ? " theme-toggle--active" : ""}"
            type="button"
            id="night-toggle"
            aria-pressed="${activeTheme === "night"}"
            aria-label="${activeTheme === "night" ? "Switch back from night mode" : "Switch to night mode"}"
          >
            ${activeTheme === "night" ? "Day" : "Night"}
          </button>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
            Menu
          </button>
        </div>
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

function bindThemeSelector() {
  const select = document.querySelector("#theme-select");
  if (!select) {
    return;
  }

  select.addEventListener("change", () => {
    setTheme(select.value);
  });
}

function bindNightToggle() {
  const toggle = document.querySelector("#night-toggle");
  if (!toggle) {
    return;
  }

  toggle.addEventListener("click", () => {
    const currentTheme = document.body.dataset.theme || themeOptions[0].value;
    if (currentTheme === "night") {
      setTheme(getLastNonNightTheme());
      return;
    }

    setTheme("night");
  });
}

export function renderTags(tags = [], options = {}) {
  const { interactive = false, dataAttribute = "data-chip-filter" } = options;
  if (!tags.length) {
    return "";
  }

  const normalizedTags = tags.map((tag) =>
    typeof tag === "string"
      ? { label: tag, value: tag }
      : { label: tag.label, value: tag.value ?? tag.label }
  );

  return `
    <ul class="chips" aria-label="Tags">
      ${normalizedTags
        .map((tag) =>
          interactive
            ? `<li><button class="chip chip--button" type="button" ${dataAttribute}="${tag.value}">${tag.label}</button></li>`
            : `<li class="chip">${tag.label}</li>`
        )
        .join("")}
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
    // Large sections like the field carousel should fade in as soon as they enter view,
    // rather than waiting for a big percentage of the block to be visible.
    { threshold: 0.02 }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

export function initFilterButtons({ filterSelector, itemSelector, countSelector, chipSelector = "[data-chip-filter]" }) {
  const buttons = [...document.querySelectorAll(filterSelector)];
  const items = [...document.querySelectorAll(itemSelector)];
  const chips = [...document.querySelectorAll(chipSelector)];
  const countNode = document.querySelector(countSelector);

  if ((!buttons.length && !chips.length) || !items.length) {
    return;
  }

  const applyFilter = (value) => {
    const normalizedValue = String(value || "all").trim().toLowerCase();
    let visibleCount = 0;

    items.forEach((item) => {
      const filters = String(item.dataset.filters || "")
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);
      const match = normalizedValue === "all" || filters.includes(normalizedValue);
      item.hidden = !match;
      item.classList.toggle("is-filter-hidden", !match);
      item.setAttribute("aria-hidden", String(!match));
      if (match) {
        visibleCount += 1;
      }
    });

    buttons.forEach((button) => {
      const pressed = button.dataset.filter === normalizedValue;
      button.classList.toggle("filter-button--active", pressed);
      button.setAttribute("aria-pressed", String(pressed));
    });

    if (countNode) {
      countNode.textContent = `${visibleCount} item${visibleCount === 1 ? "" : "s"} shown`;
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.filter || "all"));
  });

  chips.forEach((chip) => {
    chip.addEventListener("click", () => applyFilter(chip.dataset.chipFilter || "all"));
  });

  applyFilter("all");
}

export function initGallery({
  carouselSelector,
  slideSelector,
  prevSelector,
  nextSelector,
  dotSelector,
  thumbSelector,
  statusSelector,
  openSelector,
  lightboxItems,
  autoPlayMs = 7000
}) {
  const carousel = document.querySelector(carouselSelector);
  const slides = [...document.querySelectorAll(slideSelector)];
  const dots = dotSelector ? [...document.querySelectorAll(dotSelector)] : [];
  const thumbs = thumbSelector ? [...document.querySelectorAll(thumbSelector)] : [];
  const prevButton = document.querySelector(prevSelector);
  const nextButton = document.querySelector(nextSelector);
  const statusNode = document.querySelector(statusSelector);
  const openButtons = [
    ...(openSelector ? [...document.querySelectorAll(openSelector)] : []),
    ...[...document.querySelectorAll("[data-gallery-index]")]
  ];
  const advanceButtons = [...document.querySelectorAll("[data-gallery-advance]")];
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let currentIndex = 0;
  let autoPlayTimer = null;
  let isAnimating = false;

  const renderSlides = () => {
    slides.forEach((slide, index) => {
      const active = index === currentIndex;
      slide.hidden = !active;
      slide.classList.toggle("is-active", active);
      slide.classList.remove("carousel-slide--leaving", "carousel-slide--entering");
      slide.style.opacity = "";
      slide.style.transform = "";
    });

    dots.forEach((dot, index) => {
      const active = index === currentIndex;
      dot.classList.toggle("gallery-dot--active", active);
      dot.setAttribute("aria-pressed", String(active));
    });

    thumbs.forEach((thumb, index) => {
      const active = index === currentIndex;
      thumb.classList.toggle("gallery-thumb--active", active);
      thumb.setAttribute("aria-pressed", String(active));
    });

    if (statusNode) {
      statusNode.textContent = `${currentIndex + 1} / ${slides.length}`;
    }
  };

  const commitIndex = (nextIndex) => {
    currentIndex = nextIndex;
    renderSlides();
  };

  const stopAutoPlay = () => {
    if (autoPlayTimer) {
      window.clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  };

  const goTo = (nextIndex, direction = 1) => {
    if (!slides.length || isAnimating) {
      return false;
    }

    const normalized = (nextIndex + slides.length) % slides.length;
    if (normalized === currentIndex) {
      return false;
    }

    const shouldAnimate = !prefersReducedMotion.matches;
    if (!shouldAnimate) {
      commitIndex(normalized);
      return true;
    }

    const currentSlide = slides[currentIndex];
    const targetSlide = slides[normalized];
    const offset = direction >= 0 ? 42 : -42;

    isAnimating = true;
    targetSlide.hidden = false;
    targetSlide.classList.add("is-active", "carousel-slide--entering");
    currentSlide.classList.add("carousel-slide--leaving");
    targetSlide.style.opacity = "0";
    targetSlide.style.transform = `translateX(${offset}px) scale(0.985)`;
    currentSlide.style.opacity = "1";
    currentSlide.style.transform = "translateX(0) scale(1)";

    window.requestAnimationFrame(() => {
      targetSlide.style.opacity = "1";
      targetSlide.style.transform = "translateX(0) scale(1)";
      currentSlide.style.opacity = "0";
      currentSlide.style.transform = `translateX(${offset * -1}px) scale(0.985)`;
    });

    window.setTimeout(() => {
      isAnimating = false;
      commitIndex(normalized);
    }, 340);

    return true;
  };

  const step = (delta) => {
    goTo(currentIndex + delta, delta);
  };

  const startAutoPlay = () => {
    if (slides.length < 2) {
      return;
    }

    stopAutoPlay();
    autoPlayTimer = window.setInterval(() => step(1), autoPlayMs);
  };

  if (slides.length) {
    renderSlides();

    prevButton?.addEventListener("click", () => {
      step(-1);
      startAutoPlay();
    });

    nextButton?.addEventListener("click", () => {
      step(1);
      startAutoPlay();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        goTo(index, index > currentIndex ? 1 : -1);
        startAutoPlay();
      });
    });

    thumbs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        goTo(index, index > currentIndex ? 1 : -1);
        startAutoPlay();
      });
    });

    advanceButtons.forEach((button) => {
      button.addEventListener("click", () => {
        step(1);
        startAutoPlay();
      });
    });

    carousel?.addEventListener("mouseenter", stopAutoPlay);
    carousel?.addEventListener("mouseleave", startAutoPlay);
    carousel?.addEventListener("focusin", stopAutoPlay);
    carousel?.addEventListener("focusout", (event) => {
      if (!carousel.contains(event.relatedTarget)) {
        startAutoPlay();
      }
    });

    startAutoPlay();
  }

  if (!openButtons.length) {
    return;
  }

  const root = document.querySelector("#lightbox-root");
  if (!root) {
    return;
  }

  root.innerHTML = `
    <div class="lightbox" aria-hidden="true">
      <button class="lightbox__close" type="button" aria-label="Close image viewer">Close</button>
      <button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="Previous image">Prev</button>
      <figure class="lightbox__figure">
        <img class="lightbox__image" alt="">
      </figure>
      <button class="lightbox__nav lightbox__nav--next" type="button" aria-label="Next image">Next</button>
    </div>
  `;

  const lightbox = root.querySelector(".lightbox");
  const image = root.querySelector(".lightbox__image");
  const closeButton = root.querySelector(".lightbox__close");
  const prevNav = root.querySelector(".lightbox__nav--prev");
  const nextNav = root.querySelector(".lightbox__nav--next");

  const renderLightbox = () => {
    const item = lightboxItems[currentIndex];
    image.src = item.src;
    image.alt = item.alt;
  };

  const open = (index) => {
    commitIndex(index);
    renderLightbox();
    lightbox.classList.add("lightbox--open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("has-lightbox");
    stopAutoPlay();
  };

  const close = () => {
    lightbox.classList.remove("lightbox--open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("has-lightbox");
    startAutoPlay();
  };

  const stepLightbox = (delta) => {
    const nextIndex = (currentIndex + delta + lightboxItems.length) % lightboxItems.length;
    commitIndex(nextIndex);
    renderLightbox();
  };

  openButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const explicitIndex = Number(button.dataset.galleryIndex);
      open(Number.isNaN(explicitIndex) ? currentIndex : explicitIndex);
    });
  });

  closeButton.addEventListener("click", close);
  prevNav.addEventListener("click", () => stepLightbox(-1));
  nextNav.addEventListener("click", () => stepLightbox(1));
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
      stepLightbox(-1);
    }
    if (event.key === "ArrowRight") {
      stepLightbox(1);
    }
  });
}
