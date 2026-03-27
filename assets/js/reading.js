import { siteData } from "./site-data.js?v=20260327a";
import { setupPage, initRevealAnimations } from "./site-shell.js?v=20260327a";

setupPage("reading");

const hero = document.querySelector("#page-hero");
const page = document.querySelector("#reading-page");
const books = siteData.readingBooks;
const latestBook = books[books.length - 1];

const renderBookEntry = (book, index) => `
  <section class="two-column-grid reading-layout reading-entry">
    <article class="panel-card reading-cover-panel">
      <img class="reading-cover" src="${book.cover}" alt="${book.coverAlt}">
    </article>
    <article class="panel-card reading-panel">
      <p class="panel-card__kicker">Book ${String(index + 1).padStart(2, "0")}</p>
      <h2>${book.title} - ${book.author}</h2>
      <p>${book.intro}</p>
      ${book.reflections.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <blockquote class="reading-quote">
        <p>"${book.favoritePassage}"</p>
      </blockquote>
    </article>
  </section>
`;

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
        <strong>${books.length}</strong>
        <span>books on the page so far</span>
      </div>
      <div>
        <strong>${latestBook.title}</strong>
        <span>most recent addition</span>
      </div>
    </div>
  </div>
`;

page.innerHTML = `
  <div class="section-stack">
    ${books.map(renderBookEntry).join("")}
  </div>
`;

initRevealAnimations();
