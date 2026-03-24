import { siteData } from "./site-data.js";
import { setupPage, renderTags, initRevealAnimations, initFilterButtons } from "./site-shell.js";

setupPage("writing");

const hero = document.querySelector("#page-hero");
const page = document.querySelector("#listing-page");

hero.innerHTML = `
  <div class="shell compact-hero">
    <div>
      <p class="eyebrow">Writing</p>
      <h1>Public scholarship and commentary.</h1>
      <p class="compact-hero__body">
        I write beyond academic formats as well, especially when research questions touch public systems,
        care work, inequality, and minority rights. These essays carry field experience into a broader audience.
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
  { key: "health", label: "Health" },
  { key: "public-policy", label: "Public policy" },
  { key: "gender", label: "Gender" },
  { key: "political-economy", label: "Political economy" },
  { key: "education", label: "Education" },
  { key: "inequality", label: "Inequality" }
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
          <article class="story-card listing-card" data-filters="${item.filters.join(" ")}">
            <p class="story-card__meta">${item.outlet} · ${item.year}</p>
            <h2>${item.title}</h2>
            <p class="listing-card__subhead">${item.collaborators}</p>
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

initFilterButtons({
  filterSelector: ".filter-button",
  itemSelector: ".listing-card",
  countSelector: "#listing-count"
});
initRevealAnimations();
