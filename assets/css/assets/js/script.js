// Fonction pour afficher les articles
function displayArticles(articles) {
    console.log('Displaying articles:', articles);
    const container = document.getElementById('articlesContainer');
    const loading = document.getElementById('loading');
    const noResults = document.getElementById('noResults');

    // Masquer le loading
    if (loading) loading.style.display = 'none';

    // Vider le conteneur
    if (container) container.innerHTML = '';

    if (!articles || articles.length === 0) {
        if (noResults) noResults.style.display = 'block';
        return;
    }

    if (noResults) noResults.style.display = 'none';

    // Créer les cartes d'articles
    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';

        articleCard.innerHTML = `
            <div class="article-category">${article.category || 'Général'}</div>
            <h3 class="article-title">${article.title || 'Titre non disponible'}</h3>
            <p class="article-description">${article.description || 'Description non disponible'}</p>
            <div class="article-meta">
                <span class="article-source">${article.source || 'Source inconnue'}</span>
                <span class="article-date">${article.date || 'Date inconnue'}</span>
            </div>
            <a href="${article.link || '#'}" target="_blank" class="article-link">Lire l'article →</a>
        `;

        if (container) container.appendChild(articleCard);
    });
}

// Fonction de filtrage
function filterArticles() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    // Vérifier que actualitesMaroc existe
    if (typeof actualitesMaroc === 'undefined') {
        console.error('actualitesMaroc non défini');
        return;
    }

    const filteredArticles = actualitesMaroc.filter(article => {
        const title = article.title ? article.title.toLowerCase() : '';
        const description = article.description ? article.description.toLowerCase() : '';
        
        const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
        const matchesCategory = category === '' || article.category === category;

        return matchesSearch && matchesCategory;
    });

    displayArticles(filteredArticles);
}

// Fonction pour initialiser la page
function init() {
    console.log('Initialisation du site...');
    
    // Vérifier que actualitesMaroc existe
    if (typeof actualitesMaroc === 'undefined') {
        console.error('ERREUR: actualitesMaroc non défini');
        const loading = document.getElementById('loading');
        if (loading) loading.innerHTML = 'Erreur de chargement des données';
        return;
    }

    console.log('Données chargées:', actualitesMaroc);

    // Afficher tous les articles au chargement
    displayArticles(actualitesMaroc);

    // Événements pour les filtres
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const refreshBtn = document.getElementById('refreshBtn');

    if (searchInput) searchInput.addEventListener('input', filterArticles);
    if (categoryFilter) categoryFilter.addEventListener('change', filterArticles);
    if (refreshBtn) refreshBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        if (categoryFilter) categoryFilter.value = '';
        displayArticles(actualitesMaroc);
    });
}

// Démarrer l'application quand la page est chargée
document.addEventListener('DOMContentLoaded', init);
