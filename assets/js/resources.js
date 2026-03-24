import { siteData } from "./site-data.js";
import { setupPage, initRevealAnimations } from "./site-shell.js";

setupPage("resources");

const hero = document.querySelector("#page-hero");
const page = document.querySelector("#resources-page");

hero.innerHTML = `
  <div class="shell compact-hero">
    <div>
      <p class="eyebrow">Resources</p>
      <h1>Public links connected to ongoing work.</h1>
      <p class="compact-hero__body">
        This page brings together the public dataset and supporting documents linked from the previous site,
        alongside a local copy of the current CV used to build this version.
      </p>
    </div>
    <div class="compact-hero__meta">
      <div>
        <strong>${siteData.resources.length}</strong>
        <span>resource links</span>
      </div>
      <div>
        <strong>${siteData.email}</strong>
        <span>contact for context</span>
      </div>
    </div>
  </div>
`;

page.innerHTML = `
  <div class="resource-grid">
    ${siteData.resources
      .map(
        (item) => `
          <article class="resource-card">
            <p class="resource-card__meta">${item.type} · ${item.access}</p>
            <h2>${item.title}</h2>
            <p>${item.note}</p>
            <a class="button button--soft" href="${item.url}"${/^https?:\/\//.test(item.url) ? ' target="_blank" rel="noreferrer"' : ""}>Open resource</a>
          </article>
        `
      )
      .join("")}
  </div>
  <div class="contact-grid contact-grid--top-gap">
    <article class="contact-card">
      <p class="panel-card__kicker">Working with the material</p>
      <p>
        The dataset and agreement links come directly from the public Google Site. For collaboration,
        interpretation questions, or requests that go beyond the public files, email is the best route.
      </p>
      <a class="button" href="mailto:${siteData.email}">Get in touch</a>
    </article>
    <article class="contact-card contact-card--soft">
      <p class="panel-card__kicker">Also on this site</p>
      <ul class="resource-list">
        <li><a class="text-link" href="research.html">Research archive</a></li>
        <li><a class="text-link" href="writing.html">Public writing</a></li>
        <li><a class="text-link" href="${siteData.cvPath}" target="_blank" rel="noreferrer">Current CV PDF</a></li>
      </ul>
    </article>
  </div>
`;

initRevealAnimations();
