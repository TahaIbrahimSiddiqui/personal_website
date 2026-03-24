import { siteData } from "./site-data.js";
import { setupPage, renderTags, renderLinks, initRevealAnimations, initGallery } from "./site-shell.js";

setupPage("home");

const hero = document.querySelector("#page-hero");
const focus = document.querySelector("#home-focus");
const work = document.querySelector("#home-work");
const experience = document.querySelector("#home-experience");
const gallery = document.querySelector("#home-gallery");
const contact = document.querySelector("#home-contact");

const featuredResearch = siteData.research.filter((item) => item.featured).slice(0, 2);
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
          <strong>Research Assistant at r.i.c.e.</strong>
        </article>
        <article class="hero-stat">
          <span class="hero-stat__label">Research focus</span>
          <strong>Health, development, and political economy</strong>
        </article>
        <article class="hero-stat">
          <span class="hero-stat__label">Public scholarship</span>
          <strong>${siteData.writing.length} essays across national outlets</strong>
        </article>
      </div>
    </div>
  </div>
`;

focus.innerHTML = `
  <div class="section-heading">
    <p class="eyebrow">Research focus</p>
    <h2>Survey design, fieldwork, and policy questions that stay close to everyday life.</h2>
  </div>
  <div class="two-column-grid">
    <article class="panel-card">
      <p class="panel-card__kicker">What I work on</p>
      ${renderTags(siteData.profile.interests)}
      <p>
        Much of my work asks how documentation, service delivery, care systems, and public institutions
        interact with the lived experience of low-income households and minorities.
      </p>
    </article>
    <article class="panel-card">
      <p class="panel-card__kicker">How I work</p>
      ${renderTags(siteData.profile.methods)}
      <p>
        I combine primary survey work, phone-based follow-up, close engagement with field realities,
        and clear public communication so research can travel beyond the usual academic silo.
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
            <p class="story-card__meta">${item.kind} · ${item.year}</p>
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
            ${renderTags(item.filters.map((filter) => filter.replace("-", " ")))}
            ${renderLinks(item.links)}
          </article>
        `
      )
      .join("")}
    ${featuredWriting
      .map(
        (item) => `
          <article class="story-card">
            <p class="story-card__meta">${item.outlet} · ${item.year}</p>
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
            ${renderTags(item.filters.map((filter) => filter.replace("-", " ")))}
            <div class="card-links">
              <a class="text-link" href="${item.url}" target="_blank" rel="noreferrer">Read article</a>
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
    <h2>From field coordination to evidence building.</h2>
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
        The public site that came before this one foregrounded fieldwork, and that felt worth preserving.
        These images stay close to the places, routines, and relationships that make empirical work real.
      </p>
    </div>
    <div class="gallery-controls">
      <button class="button button--soft" id="gallery-prev" type="button">Prev</button>
      <button class="button button--soft" id="gallery-next" type="button">Next</button>
    </div>
    <div class="gallery-track" id="gallery-track">
      ${siteData.gallery
        .map(
          (item, index) => `
            <a class="gallery-card" href="${item.src}" data-gallery-index="${index}">
              <img src="${item.src}" alt="${item.alt}">
              <span class="gallery-card__caption">${item.caption}</span>
            </a>
          `
        )
        .join("")}
    </div>
  </div>
`;

contact.innerHTML = `
  <div class="contact-grid">
    <article class="contact-card">
      <p class="eyebrow">Contact</p>
      <h2>Open to collaborative, action-oriented research.</h2>
      <p>
        If you are looking to collaborate on empirical work, public writing, or field-driven research
        in South Asia, I would be glad to hear from you.
      </p>
      <div class="button-row">
        <a class="button" href="mailto:${siteData.email}">Email me</a>
        <a class="button button--ghost" href="${siteData.cvPath}" target="_blank" rel="noreferrer">Download CV</a>
      </div>
    </article>
    <article class="contact-card contact-card--soft">
      <p class="panel-card__kicker">Education and location</p>
      <p><strong>${siteData.profile.education.degree}</strong></p>
      <p>${siteData.profile.education.institution} · ${siteData.profile.education.period}</p>
      <p>${siteData.location}</p>
      <p class="contact-card__aside">${siteData.profile.aside}</p>
    </article>
  </div>
`;

initGallery("#gallery-track", "#gallery-prev", "#gallery-next", siteData.gallery);
initRevealAnimations();
