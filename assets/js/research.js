import { siteData } from "./site-data.js";
import { setupPage, renderTags, renderLinks, initRevealAnimations } from "./site-shell.js";

setupPage("research");

const hero = document.querySelector("#page-hero");
const page = document.querySelector("#listing-page");
const totalResearchItems = siteData.papers.length + siteData.presentations.length;
const researchYears = [...siteData.papers, ...siteData.presentations].map((item) => item.year);
const researchSpan = `${Math.min(...researchYears)} - ${Math.max(...researchYears)}`;

hero.innerHTML = `
  <div class="shell compact-hero">
    <div>
      <p class="eyebrow">Research</p>
      <h1>${siteData.pageIntro.research.title}</h1>
      <p class="compact-hero__body">
        ${siteData.pageIntro.research.body}
      </p>
    </div>
    <div class="compact-hero__meta">
      <div>
        <strong>${totalResearchItems}</strong>
        <span>research entries</span>
      </div>
      <div>
        <strong>${researchSpan}</strong>
        <span>current public span</span>
      </div>
    </div>
  </div>
`;

page.innerHTML = `
  <div class="section-stack">
    <section class="listing-section">
      <div class="section-heading">
        <p class="eyebrow">Papers</p>
        <h2>Published and draft work.</h2>
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
        <h2>Conference talks and work in progress.</h2>
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
