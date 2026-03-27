import { siteData } from "./site-data.js?v=20260327b";
import { setupPage, renderTags, initRevealAnimations, initFilterButtons } from "./site-shell.js?v=20260327b";

setupPage("writing");

const hero = document.querySelector("#page-hero");
const page = document.querySelector("#listing-page");
const writingYears = siteData.writing.map((item) => item.year);
const writingSpan = `${Math.min(...writingYears)} - ${Math.max(...writingYears)}`;

hero.innerHTML = `
  <div class="shell compact-hero">
    <div>
      <p class="eyebrow">Writing</p>
      <h1>${siteData.pageIntro.writing.title}</h1>
      <p class="compact-hero__body">
        ${siteData.pageIntro.writing.body}
      </p>
    </div>
    <div class="compact-hero__meta">
      <div>
        <strong>${siteData.writing.length}</strong>
        <span>published essays</span>
      </div>
      <div>
        <strong>${writingSpan}</strong>
        <span>current span</span>
      </div>
    </div>
  </div>
`;

const filters = [
  { key: "all", label: "All" },
  { key: "public-policy", label: "Public policy" },
  { key: "health", label: "Health" },
  { key: "political-economy", label: "Political economy" },
  { key: "urban-poverty", label: "Urban poverty" },
  { key: "minorities", label: "Minorities" },
  { key: "gender", label: "Gender" },
  { key: "inequality", label: "Inequality" },
  { key: "education", label: "Education" }
];

page.innerHTML = `
  <div class="filter-bar" aria-label="Writing filters">
    ${filters
      .map(
        (filter) =>
          `<button class="filter-button" type="button" data-filter="${filter.key}" aria-pressed="false">${filter.label}</button>`
      )
      .join("")}
  </div>
  <p class="listing-count" id="listing-count"></p>
  <div class="listing-grid">
    ${siteData.writing
      .map(
        (item) => `
          <article class="story-card listing-card article-card" data-filters="${item.filters.join(" ")}">
            <a class="article-card__media" href="${item.url}" target="_blank" rel="noreferrer">
              <img src="${item.thumbnail}" alt="${item.thumbnailAlt}">
            </a>
            <div class="article-card__body">
              <p class="story-card__meta">${item.outlet} &middot; ${item.year}</p>
              <h2>${item.title}</h2>
              <p class="listing-card__subhead">${item.collaborators}</p>
              <p>${item.summary}</p>
              ${renderTags(
                item.filters.map((filter) => ({
                  value: filter,
                  label: filter.replace("-", " ")
                })),
                { interactive: true }
              )}
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

initFilterButtons({
  filterSelector: ".filter-button",
  itemSelector: ".listing-card",
  countSelector: "#listing-count"
});
initRevealAnimations();
