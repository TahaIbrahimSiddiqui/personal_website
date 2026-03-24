import { siteData } from "./site-data.js?v=20260325f";
import { setupPage, renderTags, renderLinks, initRevealAnimations } from "./site-shell.js?v=20260325f";

setupPage("research");

const hero = document.querySelector("#page-hero");
const page = document.querySelector("#listing-page");
const researchItems = [...siteData.papers, ...siteData.presentations, ...siteData.ongoingWork];
const totalResearchItems = researchItems.length;
const researchYears = researchItems.map((item) => item.year);
const researchSpan = `${Math.min(...researchYears)} - ${Math.max(...researchYears)}`;

const renderResearchCard = (item) => `
  <article class="story-card listing-card">
    <p class="story-card__meta">${item.kind} &middot; ${item.year}</p>
    <h2>${item.title}</h2>
    ${item.collaborators ? `<p class="listing-card__subhead">${item.collaborators}</p>` : ""}
    ${item.status ? `<p class="listing-card__subhead">${item.status}</p>` : ""}
    <p>${item.summary}</p>
    ${item.note ? `<p class="listing-card__note">${item.note}</p>` : ""}
    ${renderTags(item.filters.map((filter) => filter.replace("-", " ")))}
    ${renderLinks(item.links)}
  </article>
`;

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
        <span>current span</span>
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
        ${siteData.papers.map(renderResearchCard).join("")}
      </div>
    </section>
    <section class="listing-section">
      <div class="section-heading">
        <p class="eyebrow">Presentations</p>
        <h2>Conference talks and related materials.</h2>
      </div>
      <div class="listing-grid">
        ${siteData.presentations.map(renderResearchCard).join("")}
      </div>
    </section>
    <section class="listing-section">
      <div class="section-heading">
        <p class="eyebrow">Current work</p>
        <h2>Projects in progress.</h2>
      </div>
      <div class="listing-grid">
        ${siteData.ongoingWork.map(renderResearchCard).join("")}
      </div>
    </section>
  </div>
`;

initRevealAnimations();
