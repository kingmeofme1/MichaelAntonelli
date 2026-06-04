function tagList(tags) {
  return tags.map(tag => `<span class="tag">${tag}</span>`).join("");
}

function renderProfessional() {
  const container = document.querySelector("#professional-list");
  container.innerHTML = professionalExperience.map(item => `
    <article class="experience-card">
      <h3>${item.company}</h3>
      <p class="card-meta">${item.role}</p>
      <p class="card-text">${item.description}</p>
      <div class="tag-list">${tagList(item.tags)}</div>
    </article>
  `).join("");
}

function renderProjects() {
  const container = document.querySelector("#project-list");
  container.innerHTML = projects.map(project => `
    <article class="project-card">
      <a class="project-media" href="${project.links[0]?.url || '#'}" target="_blank" rel="noreferrer" aria-label="Open ${project.title} media">
        <img src="${project.image}" alt="Placeholder artwork for ${project.title}" />
      </a>
      <div class="project-body">
        <p class="eyebrow">${project.subtitle}</p>
        <h3>${project.title}</h3>
        <p class="project-summary">${project.summary}</p>
        <ul>
          ${project.highlights.map(highlight => `<li>${highlight}</li>`).join("")}
        </ul>
        <div class="tag-list">${tagList(project.tags)}</div>
        <div class="project-links">
          ${project.links.map(link => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function renderContent() {
  const container = document.querySelector("#content-list");
  container.innerHTML = contentItems.map(item => `
    <article class="content-card">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank" rel="noreferrer">View work</a>
    </article>
  `).join("");
}

document.querySelector("#year").textContent = new Date().getFullYear();
renderProfessional();
renderProjects();
renderContent();
