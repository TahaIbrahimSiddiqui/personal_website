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
      <figure class="portrait-card">
        <img src="${siteData.profile.heroImage}" alt="${siteData.profile.portraitAlt}">
      </figure>
      <div class="hero-stats">
        <article class="hero-stat">
          <span class="hero-stat__label">Current role</span>
          <strong>${siteData.experience[0].role} at ${siteData.experience[0].organization}</strong>
        </article>
        <article class="hero-stat">
          <span class="hero-stat__label">Research focus</span>
          <strong>Development, public services, and the political economy of exclusion</strong>
        </article>
        <article class="hero-stat">
          <span class="hero-stat__label">Public writing</span>
          <strong>${siteData.writing.length} pieces across academic and public outlets</strong>
        </article>
      </div>
    </div>
  </div>
`;

focus.innerHTML = `
  <div class="section-heading">
    <p class="eyebrow">Research focus</p>
    <h2>Survey design, spatial evidence, and policy questions that stay close to everyday life.</h2>
  </div>
  <div class="two-column-grid">
    <article class="panel-card">
      <p class="panel-card__kicker">What I work on</p>
      ${renderTags(siteData.profile.interests)}
      <p>
        Much of my work asks how public systems, documentation, service delivery, and political exclusion
        shape the lived experience of low-income households and minorities.
      </p>
    </article>
    <article class="panel-card">
      <p class="panel-card__kicker">How I work</p>
      ${renderTags(siteData.profile.methods)}
      <p>
        I combine fieldwork, survey design, geospatial analysis, and public-facing writing so research can
        travel beyond the academic silo and still stay grounded in evidence.
      </p>
    </article>
  </div>
`;

work.innerHTML = `
  <div class="section-heading">
    <p class="eyebrow">Selected work</p>
    <h2>A mix of academic research and public writing.</h2>
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
    <h2>From field coordination to data infrastructure.</h2>
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
      <h2>Images from the work behind the writing and analysis.</h2>
      <p class="section-heading__body">
        These images stay close to the places, routines, and relationships that make empirical work real.
        The carousel keeps the full frame visible instead of cropping the photos down.
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
      <h2>Open to collaborative, field-driven research.</h2>
      <p>
        If you are looking to collaborate on empirical work, public writing, or research design in South Asia,
        I would be glad to hear from you.
      </p>
      <div class="button-row">
        <a class="button" href="mailto:${siteData.email}">Email me</a>
        <a class="button button--ghost" href="${siteData.cvPath}" target="_blank" rel="noreferrer">Download CV</a>
      </div>
    </article>
    <article class="contact-card contact-card--soft">
      <p class="panel-card__kicker">Education and location</p>
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
