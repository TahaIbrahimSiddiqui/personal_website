import { siteData } from "./site-data.js?v=20260325i";
import { setupPage, initRevealAnimations } from "./site-shell.js?v=20260325i";

setupPage("reading");

const hero = document.querySelector("#page-hero");
const page = document.querySelector("#reading-page");
const book = siteData.readingBook;

hero.innerHTML = `
  <div class="shell compact-hero">
    <div>
      <p class="eyebrow">Reading</p>
      <h1>${siteData.pageIntro.reading.title}</h1>
      <p class="compact-hero__body">
        ${siteData.pageIntro.reading.body}
      </p>
    </div>
    <div class="compact-hero__meta">
      <div>
        <strong>${book.title}</strong>
        <span>current featured entry</span>
      </div>
      <div>
        <strong>${book.author}</strong>
        <span>one book, one long afterthought</span>
      </div>
    </div>
  </div>
`;

page.innerHTML = `
  <div class="two-column-grid reading-layout">
    <article class="panel-card reading-cover-panel">
      <img class="reading-cover" src="${book.cover}" alt="${book.coverAlt}">
    </article>
    <article class="panel-card reading-panel">
      <p class="panel-card__kicker">Featured book</p>
      <h2>${book.title} - ${book.author}</h2>
      <p>${book.intro}</p>
      ${book.reflections.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <blockquote class="reading-quote">
        <p>"${book.favoritePassage}"</p>
      </blockquote>
    </article>
  </div>
`;

initRevealAnimations();
