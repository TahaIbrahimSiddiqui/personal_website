import { siteData } from "./site-data.js";
import { setupPage, renderTags, renderLinks, initRevealAnimations, initGallery } from "./site-shell.js";

setupPage("home");

const hero = document.querySelector("#page-hero");
const focus = document.querySelector("#home-focus");
const work = document.querySelector("#home-work");
const experience = document.querySelector("#home-experience");
const gallery = document.querySelector("#home-gallery");
const contact = document.querySelector("#home-contact");

const featuredResearch = [...siteData.papers, ...siteData.presentations]
  .filter((item) => item.featured)
  .slice(0, 2);
const featuredWriting = siteData.writing.filter((item) => item.featured).slice(0, 2);

hero.innerHTML = `
  <div class="hero-background" data-hero-background>
    <video
      class="hero-background__video"
      data-hero-video
      muted
      loop
      playsinline
      preload="metadata"
      poster="${siteData.heroVideo.poster}"
      aria-hidden="true"
    >
      <source src="${siteData.heroVideo.src}" type="video/webm">
    </video>
    <img class="hero-background__poster" src="${siteData.heroVideo.poster}" alt="" aria-hidden="true">
    <div class="hero-background__veil"></div>
  </div>
  <div class="shell hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">Empirical social scientist</p>
      <h1>${siteData.name}</h1>
      <p class="hero-copy__lede">${siteData.profile.headline}</p>
      <div class="hero-copy__body">
        ${siteData.profile.bio.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      <div class="button-row">
        <a class="button" href="research.html">View research</a>
        <a class="button button--ghost" href="writing.html">Read public writing</a>
        <a class="button button--soft" href="${siteData.cvPath}" target="_blank" rel="noreferrer">Open CV</a>
      </div>
    </div>
    <div class="hero-media">
      <figure class="portrait-card portrait-card--hero">
        <img src="${siteData.profile.heroImage}" alt="${siteData.profile.portraitAlt}">
      </figure>
      <div class="hero-stats">
        <article class="hero-stat">
          <span class="hero-stat__label">Current role</span>
          <strong>${siteData.experience[0].role} at ${siteData.experience[0].organization}</strong>
        </article>
        <article class="hero-stat">
          <span class="hero-stat__label">Research areas</span>
          <strong>Public services, inequality, health, and the political economy of exclusion</strong>
        </article>
        <article class="hero-stat">
          <span class="hero-stat__label">Public writing</span>
          <strong>${siteData.writing.length} published essays and reported pieces</strong>
        </article>
      </div>
    </div>
  </div>
`;

const heroVideoFrame = hero.querySelector("[data-hero-background]");
const heroVideo = hero.querySelector("[data-hero-video]");

if (heroVideoFrame && heroVideo) {
  const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

  const syncHeroVideo = () => {
    const reduceMotion = motionMedia.matches;
    heroVideoFrame.classList.toggle("hero-background--static", reduceMotion);

    if (reduceMotion) {
      heroVideo.pause();
      heroVideo.removeAttribute("autoplay");
      return;
    }

    heroVideo.setAttribute("autoplay", "");
    heroVideo
      .play()
      .then(() => {
        heroVideoFrame.classList.remove("hero-background--static");
      })
      .catch(() => {
        heroVideoFrame.classList.add("hero-background--static");
      });
  };

  syncHeroVideo();

  if (typeof motionMedia.addEventListener === "function") {
    motionMedia.addEventListener("change", syncHeroVideo);
  } else if (typeof motionMedia.addListener === "function") {
    motionMedia.addListener(syncHeroVideo);
  }
}

focus.innerHTML = `
  <div class="section-heading">
    <p class="eyebrow">Research focus</p>
    <h2>Questions about public systems, care, exclusion, and how institutions meet everyday life.</h2>
  </div>
  <div class="two-column-grid">
    <article class="panel-card">
      <p class="panel-card__kicker">What I work on</p>
      ${renderTags(siteData.profile.interests)}
      <p>
        Much of my work asks how documentation, public systems, service delivery, and political exclusion
        shape the lives of low-income households and minorities.
      </p>
    </article>
    <article class="panel-card">
      <p class="panel-card__kicker">How I work</p>
      ${renderTags(siteData.profile.methods)}
      <p>
        I move between fieldwork, survey design, geospatial analysis, and public writing. I like research
        that can speak across those worlds without losing the detail on the ground.
      </p>
    </article>
  </div>
`;

work.innerHTML = `
  <div class="section-heading">
    <p class="eyebrow">Selected work</p>
    <h2>A few projects and essays.</h2>
  </div>
  <div class="card-grid">
    ${featuredResearch
      .map(
        (item) => `
          <article class="story-card">
            <p class="story-card__meta">${item.kind} &middot; ${item.year}</p>
            <h3>${item.title}</h3>
            <p class="listing-card__subhead">${item.collaborators}</p>
            <p>${item.summary}</p>
            ${item.note ? `<p class="listing-card__note">${item.note}</p>` : ""}
            ${renderTags(item.filters.map((filter) => filter.replace("-", " ")))}
            ${renderLinks(item.links)}
          </article>
        `
      )
      .join("")}
    ${featuredWriting
      .map(
        (item) => `
          <article class="story-card article-card">
            <a class="article-card__media" href="${item.url}" target="_blank" rel="noreferrer">
              <img src="${item.thumbnail}" alt="${item.thumbnailAlt}">
            </a>
            <div class="article-card__body">
              <p class="story-card__meta">${item.outlet} &middot; ${item.year}</p>
              <h3>${item.title}</h3>
              <p class="listing-card__subhead">${item.collaborators}</p>
              <p>${item.summary}</p>
              ${renderTags(item.filters.map((filter) => filter.replace("-", " ")))}
              <div class="card-links">
                <a class="text-link" href="${item.url}" target="_blank" rel="noreferrer">Read article</a>
              </div>
            </div>
          </article>
        `
      )
      .join("")}
  </div>
`;

experience.innerHTML = `
  <div class="section-heading">
    <p class="eyebrow">Recent experience</p>
    <h2>Recent work.</h2>
  </div>
  <div class="timeline">
    ${siteData.experience
      .map(
        (item) => `
          <article class="timeline-card">
            <p class="timeline-card__period">${item.period}</p>
            <h3>${item.role}</h3>
            <p class="timeline-card__org">${item.organization}</p>
            <p>${item.summary}</p>
            <ul class="timeline-card__list">
              ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
          </article>
        `
      )
      .join("")}
  </div>
`;

gallery.innerHTML = `
  <div class="gallery-panel">
    <div class="section-heading section-heading--light">
      <p class="eyebrow">Field notes</p>
      <h2>Scenes from the work itself.</h2>
      <p class="section-heading__body">
        Fieldwork is rarely tidy. These photographs come from the roads, rooms, kitchens, hospitals, and
        flood sites that sit behind the analysis.
      </p>
    </div>
    <div class="gallery-carousel" id="gallery-carousel">
      <div class="gallery-carousel__viewport">
        ${siteData.gallery
          .map(
            (item, index) => `
              <figure class="carousel-slide${index === 0 ? " is-active" : ""}" data-gallery-slide="${index}"${
                index === 0 ? "" : " hidden"
              }>
                <button class="carousel-slide__button" type="button" data-gallery-index="${index}" aria-label="Open image ${index + 1}: ${item.caption}">
                  <img src="${item.src}" alt="${item.alt}">
                </button>
                <figcaption class="carousel-slide__caption">${item.caption}</figcaption>
              </figure>
            `
          )
          .join("")}
      </div>
      <div class="gallery-carousel__footer">
        <div class="gallery-carousel__meta">
          <span class="gallery-carousel__status" id="gallery-status"></span>
          <div class="gallery-dots" aria-label="Gallery slide selector">
            ${siteData.gallery
              .map(
                (_, index) => `
                  <button
                    class="gallery-dot${index === 0 ? " gallery-dot--active" : ""}"
                    type="button"
                    data-gallery-dot="${index}"
                    aria-label="Show image ${index + 1}"
                    aria-pressed="${index === 0 ? "true" : "false"}"
                  ></button>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="gallery-controls">
          <button class="button button--soft" id="gallery-prev" type="button">Previous</button>
          <button class="button button--soft" id="gallery-next" type="button">Next</button>
        </div>
      </div>
    </div>
  </div>
`;

contact.innerHTML = `
  <div class="contact-grid">
    <article class="contact-card">
      <p class="eyebrow">Contact</p>
      <h2>Open to collaborative, field-based research.</h2>
      <p>
        If you are working on empirical research, public writing, or data projects in South Asia, feel free
        to get in touch.
      </p>
      <div class="button-row">
        <a class="button" href="mailto:${siteData.email}">Email me</a>
        <a class="button button--ghost" href="${siteData.cvPath}" target="_blank" rel="noreferrer">Download CV</a>
      </div>
    </article>
    <article class="contact-card contact-card--soft">
      <p class="panel-card__kicker">Education and base</p>
      <p><strong>${siteData.profile.education.degree}</strong></p>
      <p>${siteData.profile.education.institution} &middot; ${siteData.profile.education.period}</p>
      <p>${siteData.location}</p>
      <p class="contact-card__aside">${siteData.profile.aside}</p>
    </article>
  </div>
`;

initGallery({
  carouselSelector: "#gallery-carousel",
  slideSelector: "[data-gallery-slide]",
  prevSelector: "#gallery-prev",
  nextSelector: "#gallery-next",
  dotSelector: "[data-gallery-dot]",
  statusSelector: "#gallery-status",
  lightboxItems: siteData.gallery
});
initRevealAnimations();
