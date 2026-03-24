import { siteData } from "./site-data.js";
import { setupPage, renderTags, renderLinks, initRevealAnimations, initFilterButtons } from "./site-shell.js";

setupPage("research");

const hero = document.querySelector("#page-hero");
const page = document.querySelector("#listing-page");

hero.innerHTML = `
  <div class="shell compact-hero">
    <div>
      <p class="eyebrow">Research</p>
      <h1>Papers, working papers, and presentations.</h1>
      <p class="compact-hero__body">
        My research sits across health, development, survey methods, and the political economy of exclusion.
        The archive below combines published work, current working papers, and presentations drawn from the CV.
      </p>
    </div>
    <div class="compact-hero__meta">
      <div>
        <strong>${siteData.research.length}</strong>
        <span>entries</span>
      </div>
      <div>
        <strong>2019 - 2024</strong>
        <span>current span</span>
      </div>
    </div>
  </div>
`;

const filters = [
  { key: "all", label: "All" },
  { key: "publication", label: "Publication" },
  { key: "working-paper", label: "Working papers" },
  { key: "presentation", label: "Presentations" },
  { key: "health", label: "Health" },
  { key: "political-economy", label: "Political economy" },
  { key: "survey-methods", label: "Survey methods" }
];

page.innerHTML = `
  <div class="filter-bar" aria-label="Research filters">
    ${filters
      .map(
        (filter) =>
          `<button class="filter-button" type="button" data-filter="${filter.key}" aria-pressed="false">${filter.label}</button>`
      )
      .join("")}
  </div>
  <p class="listing-count" id="listing-count"></p>
  <div class="listing-grid">
    ${siteData.research
      .map(
        (item) => `
          <article class="story-card listing-card" data-filters="${item.filters.join(" ")}">
            <p class="story-card__meta">${item.kind} · ${item.year}</p>
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
`;

initFilterButtons({
  filterSelector: ".filter-button",
  itemSelector: ".listing-card",
  countSelector: "#listing-count"
});
initRevealAnimations();
