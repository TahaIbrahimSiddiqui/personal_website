import { siteData } from "./site-data.js";
import { setupPage, initRevealAnimations } from "./site-shell.js";

setupPage("resources");

const hero = document.querySelector("#page-hero");
const page = document.querySelector("#resources-page");

hero.innerHTML = `
  <div class="shell compact-hero">
    <div>
      <p class="eyebrow">Resources</p>
      <h1>Datasets, documents, and a short profile note.</h1>
      <p class="compact-hero__body">
        The datasets now live in their own section, separate from supporting documents. I have also added
        the short bio material from the Word document to this page.
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
        <h2>Open data and repositories tied to current work.</h2>
      </div>
      <div class="resource-grid">
        ${siteData.datasets
          .map(
            (item) => `
              <article class="resource-card">
                <p class="resource-card__meta">${item.type} &middot; ${item.access}</p>
                <h2>${item.title}</h2>
                <p>${item.note}</p>
                <a class="button button--soft" href="${item.url}" target="_blank" rel="noreferrer">Open dataset</a>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
    <section class="listing-section">
      <div class="section-heading">
        <p class="eyebrow">Documents</p>
        <h2>Supporting files linked from the site.</h2>
      </div>
      <div class="resource-grid">
        ${siteData.resources
          .map(
            (item) => `
              <article class="resource-card">
                <p class="resource-card__meta">${item.type} &middot; ${item.access}</p>
                <h2>${item.title}</h2>
                <p>${item.note}</p>
                <a class="button button--soft" href="${item.url}"${
                  /^https?:\/\//.test(item.url) ? ' target="_blank" rel="noreferrer"' : ""
                }>Open resource</a>
              </article>
            `
          )
          .join("")}
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
          For collaboration, interpretation questions, or requests that go beyond the public files, email is
          still the best route.
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
