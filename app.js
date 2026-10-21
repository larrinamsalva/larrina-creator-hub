(() => {
  'use strict';
  const projects = Object.freeze(window.LARRINA_PROJECTS || []);
  const cards = document.getElementById('project-grid');
  const search = document.getElementById('project-search');
  const count = document.getElementById('result-count');
  const surprise = document.getElementById('surprise-button');
  const empty = document.getElementById('empty-state');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const toast = document.getElementById('toast');
  let currentFilter = 'all';
  let visibleProjects = projects;
  let toastTimeout;

  document.getElementById('year').textContent = String(new Date().getFullYear());

  function projectCard(project) {
    const article = document.createElement('article');
    article.className = `project-card theme-${project.color || 'violet'}`;
    article.dataset.id = project.id;

    const graphic = document.createElement('div');
    graphic.className = 'card-visual';
    graphic.setAttribute('aria-hidden', 'true');
    const scene = document.createElement('span');
    scene.className = 'card-emoji';
    scene.textContent = project.icon;
    graphic.append(scene);
    const orbit = document.createElement('span');
    orbit.className = 'card-visual-ring';
    graphic.append(orbit);
    const star = document.createElement('span');
    star.className = 'card-visual-star';
    star.textContent = '✦';
    graphic.append(star);
    const badge = document.createElement('span');
    badge.className = 'project-badge';
    badge.textContent = project.badge;
    graphic.append(badge);

    const content = document.createElement('div');
    content.className = 'card-content';
    const eyebrow = document.createElement('span');
    eyebrow.className = 'card-category';
    const categoryNames = {games:'THE PLAYROOM',apps:'THE TOOLBOX',music:'THE STUDIO',creative:'THE IDEA GARDEN'};
    eyebrow.textContent = categoryNames[project.category] || 'PROJECT';
    const title = document.createElement('h3');
    title.textContent = project.name;
    const description = document.createElement('p');
    description.textContent = project.description;
    const link = document.createElement('a');
    link.className = 'card-link';
    link.href = project.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    const label = document.createElement('span');
    label.textContent = project.action;
    const arrow = document.createElement('span');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    link.append(label, arrow);
    content.append(eyebrow, title, description, link);
    article.append(graphic, content);
    return article;
  }

  function render() {
    const term = search.value.trim().toLocaleLowerCase();
    visibleProjects = projects.filter(project => {
      const matchesCategory = currentFilter === 'all' || project.category === currentFilter;
      const haystack = [project.name, project.description, project.badge, project.category, project.keywords].join(' ').toLocaleLowerCase();
      return matchesCategory && haystack.includes(term);
    });
    cards.replaceChildren(...visibleProjects.map(projectCard));
    count.textContent = `${visibleProjects.length} of ${projects.length} creations to explore`;
    empty.hidden = visibleProjects.length > 0;
    surprise.disabled = visibleProjects.length === 0;
    filters.forEach(button => {
      const active = button.dataset.filter === currentFilter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }
  function chooseFilter(filter) {
    currentFilter = filter;
    render();
  }
  filters.forEach(button => button.addEventListener('click', () => chooseFilter(button.dataset.filter)));
  document.querySelectorAll('[data-jump-filter]').forEach(link => link.addEventListener('click', () => {
    search.value = '';
    chooseFilter(link.dataset.jumpFilter);
  }));
  document.getElementById('reset-filter').addEventListener('click', () => {search.value = '';chooseFilter('all');search.focus();});
  search.addEventListener('input', render);
  surprise.addEventListener('click', () => {
    if (!visibleProjects.length) return;
    // Only randomize in response to a real user click; don't auto-navigate.
    const playable = visibleProjects.filter(project => project.href);
    const choice = playable[Math.floor(Math.random() * playable.length)];
    window.open(choice.href, '_blank', 'noopener,noreferrer');
    showToast(`✨ Exploring ${choice.name}!`);
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), 3400);
  }
  document.getElementById('share-button').addEventListener('click', async () => {
    try {
      if (navigator.share) {
        await navigator.share({title:document.title, url:window.location.href});
        return;
      }
      await navigator.clipboard.writeText(window.location.href);
      showToast('♥ Link copied! Share the love.');
    } catch(error) {
      if (error?.name !== 'AbortError') showToast('Use the address bar to copy this page link.');
    }
  });
  render();
})();