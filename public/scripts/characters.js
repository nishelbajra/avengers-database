const path = window.location.pathname;

const homeView = document.getElementById('home-view');
const detailView = document.getElementById('detail-view');
const notFoundView = document.getElementById('not-found-view');

// ── HOME: render all characters as cards
const renderCharacters = async () => {
  const response = await fetch('/characters');
  const data = await response.json();
  const grid = document.getElementById('characters-grid');

  data.forEach(character => {
    const card = document.createElement('article');
    card.className = 'character-card';

    const teamClass = character.team.toLowerCase().replace(' ', '');

    card.innerHTML = `
      <img class="card-image" src="${character.image}" alt="${character.name}">

      <!-- Always visible label -->
      <div class="card-label">
        <h2>${character.name}</h2>
        <span class="team-badge ${teamClass}">${character.team}</span>
      </div>

      <!-- Hover overlay with all data -->
      <div class="card-overlay">
        <h2>${character.name}</h2>
        <p><strong>Real Name:</strong> ${character.realName}</p>
        <p><strong>Team:</strong> ${character.team}</p>
        <p><strong>Ability:</strong> ${character.ability}</p>
        <p><strong>First Appearance:</strong> ${character.firstAppearance}</p>
        <p><strong>Threat Level:</strong> 
          <span class="threat ${character.threatLevel.toLowerCase()}">${character.threatLevel}</span>
        </p>
        <a href="/characters/${character.id}">Read More</a>
      </div>
    `;

    grid.appendChild(card);
  });
};

// ── DETAIL: render one character
const renderCharacter = async () => {
  const id = parseInt(path.split('/').pop());
  const response = await fetch('/characters');
  const data = await response.json();
  const character = data.find(c => c.id === id);

  const detail = document.getElementById('character-detail');

  if (!character) {
    homeView.style.display = 'none';
    detailView.style.display = 'none';
    notFoundView.style.display = 'block';
    return;
  }

  document.title = `${character.name} — S.H.I.E.L.D. File`;

  const teamClass = character.team.toLowerCase().replace(' ', '');

  detail.innerHTML = `
    <article class="detail-card">
      <img src="${character.image}" alt="${character.name}">
      <div class="detail-info">
        <h1>${character.name}</h1>
        <p><strong>Real Name:</strong> ${character.realName}</p>
        <p><strong>Team:</strong> <span class="team-badge ${teamClass}">${character.team}</span></p>
        <p><strong>Ability:</strong> ${character.ability}</p>
        <p><strong>First Appearance:</strong> ${character.firstAppearance}</p>
        <p><strong>Threat Level:</strong> 
          <span class="threat ${character.threatLevel.toLowerCase()}">${character.threatLevel}</span>
        </p>
        <hr>
        <p class="description">${character.description}</p>
      </div>
    </article>
  `;

  homeView.style.display = 'none';
  detailView.style.display = 'block';
};

// ── ROUTER
if (path === '/') {
  renderCharacters();
} else if (path.startsWith('/characters/')) {
  renderCharacter();
} else {
  homeView.style.display = 'none';
  notFoundView.style.display = 'block';
}