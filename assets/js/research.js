import { siteData } from "./site-data.js";
import { setupPage, renderTags, renderLinks, initRevealAnimations } from "./site-shell.js";

setupPage("research");

const hero = document.querySelector("#page-hero");
const page = document.querySelector("#listing-page");
const totalResearchItems = siteData.papers.length + siteData.presentations.length;

hero.innerHTML = `
  <div class="shell compact-hero">
    <div>
      <p class="eyebrow">Research</p>
      <h1>Papers first, presentations folded into the same project where possible.</h1>
      <p class="compact-hero__body">
        The research page now avoids repeating the same project twice. If a paper also has a presentation,
        those links stay together on one card instead of appearing as duplicate entries.
      </p>
    </div>
    <div class="compact-hero__meta">
      <div>
        <strong>${totalResearchItems}</strong>
        <span>research entries</span>
      </div>
      <div>
        <strong>2022 - 2025</strong>
        <span>current public span</span>
      </div>
    </div>
  </div>
`;

page.innerHTML = `
  <div class="section-stack">
    <section class="listing-section">
      <div class="section-heading">
        <p class="eyebrow">Paper</p>
        <h2>Published and draft work with links kept on the same card.</h2>
      </div>
      <div class="listing-grid">
        ${siteData.papers
          .map(
            (item) => `
              <article class="story-card listing-card">
                <p class="story-card__meta">${item.kind} &middot; ${item.year}</p>
                <h2>${item.title}</h2>
                <p class="listing-card__subhead">${item.collaborators}</p>
                <p>${item.summary}</p>
                ${item.note ? `<p class="listing-card__note">${item.note}</p>` : ""}
                ${renderTags(item.filters.map((filter) => filter.replace("-", " ")))}
                ${renderLinks(item.links)}
              </article>
            `
          )
          .join("")}
      </div>
    </section>
    <section class="listing-section">
      <div class="section-heading">
        <p class="eyebrow">Presentations</p>
        <h2>Standalone conference presentations and ongoing project talks.</h2>
      </div>
      <div class="listing-grid">
        ${siteData.presentations
          .map(
            (item) => `
              <article class="story-card listing-card">
                <p class="story-card__meta">${item.kind} &middot; ${item.year}</p>
                <h2>${item.title}</h2>
                <p class="listing-card__subhead">${item.collaborators}</p>
                <p>${item.summary}</p>
                ${item.note ? `<p class="listing-card__note">${item.note}</p>` : ""}
                ${renderTags(item.filters.map((filter) => filter.replace("-", " ")))}
                ${renderLinks(item.links)}
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  </div>
`;

initRevealAnimations();
