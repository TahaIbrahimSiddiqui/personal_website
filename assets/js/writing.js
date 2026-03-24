import { siteData } from "./site-data.js";
import { setupPage, renderTags, initRevealAnimations, initFilterButtons } from "./site-shell.js";

setupPage("writing");

const hero = document.querySelector("#page-hero");
const page = document.querySelector("#listing-page");

hero.innerHTML = `
  <div class="shell compact-hero">
    <div>
      <p class="eyebrow">Writing</p>
      <h1>Public scholarship with visual entry points.</h1>
      <p class="compact-hero__body">
        Each article card now carries a thumbnail so the writing page feels less like a plain list and more
        like a readable archive of public-facing work.
      </p>
    </div>
    <div class="compact-hero__meta">
      <div>
        <strong>${siteData.writing.length}</strong>
        <span>published essays</span>
      </div>
      <div>
        <strong>2021 - 2024</strong>
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

initFilterButtons({
  filterSelector: ".filter-button",
  itemSelector: ".listing-card",
  countSelector: "#listing-count"
});
initRevealAnimations();
