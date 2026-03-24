import { siteData } from "./site-data.js?v=20260325d";
import { setupPage, initRevealAnimations } from "./site-shell.js?v=20260325d";

setupPage("resources");

const hero = document.querySelector("#page-hero");
const page = document.querySelector("#resources-page");
const linkAttributes = (url) => (/^https?:\/\//.test(url) ? ' target="_blank" rel="noreferrer"' : "");

const renderResourceCard = (item, ctaLabel) => {
  const hasImage = Boolean(item.image);
  const imageClass = hasImage ? ` resource-card__image--${item.imageFit || "cover"}` : "";

  return `
    <a class="resource-card resource-card--link${hasImage ? " resource-card--media" : ""}" href="${item.url}"${linkAttributes(item.url)}>
      ${
        hasImage
          ? `
            <div class="resource-card__image${imageClass}">
              <img src="${item.image}" alt="${item.imageAlt}">
            </div>
          `
          : ""
      }
      <div class="resource-card__body">
        <p class="resource-card__meta">${item.type} &middot; ${item.access}</p>
        <h2>${item.title}</h2>
        <p>${item.note}</p>
      </div>
      <span class="button button--soft resource-card__button">${ctaLabel}</span>
    </a>
  `;
};

hero.innerHTML = `
  <div class="shell compact-hero">
    <div>
      <p class="eyebrow">Resources</p>
      <h1>${siteData.pageIntro.resources.title}</h1>
      <p class="compact-hero__body">
        ${siteData.pageIntro.resources.body}
      </p>
    </div>
    <div class="compact-hero__meta">
      <div>
        <strong>${siteData.datasets.length}</strong>
        <span>dataset links</span>
      </div>
      <div>
        <strong>${siteData.resources.length}</strong>
        <span>supporting resources</span>
      </div>
    </div>
  </div>
`;

page.innerHTML = `
  <div class="section-stack">
    <section class="listing-section">
      <div class="section-heading">
        <p class="eyebrow">Datasets</p>
        <h2>Open datasets and code repositories.</h2>
      </div>
      <div class="resource-grid">
        ${siteData.datasets.map((item) => renderResourceCard(item, "Open dataset")).join("")}
      </div>
    </section>
    <section class="listing-section">
      <div class="section-heading">
        <p class="eyebrow">Documents</p>
        <h2>Reference notes and site-linked documents.</h2>
      </div>
      <div class="resource-grid">
        ${siteData.resources.map((item) => renderResourceCard(item, "Open resource")).join("")}
      </div>
    </section>
    <div class="contact-grid contact-grid--top-gap">
      <article class="contact-card">
        <p class="panel-card__kicker">Short bio</p>
        ${siteData.profile.docBio.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </article>
      <article class="contact-card contact-card--soft">
        <p class="panel-card__kicker">Working with these materials</p>
        <p>
          If you would like to talk through these materials, or if you need something that is not public here,
          email is the best way to reach me.
        </p>
        <ul class="resource-list">
          <li><a class="text-link" href="research.html">Research archive</a></li>
          <li><a class="text-link" href="writing.html">Public writing</a></li>
          <li><a class="text-link" href="${siteData.cvPath}" target="_blank" rel="noreferrer">Current work CV</a></li>
          <li><a class="text-link" href="mailto:${siteData.email}">${siteData.email}</a></li>
        </ul>
      </article>
    </div>
  </div>
`;

initRevealAnimations();
