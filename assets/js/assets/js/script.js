// Fonction pour afficher les articles
function displayArticles(articles) {
    const container = document.getElementById('articlesContainer');
    const loading = document.getElementById('loading');
    const noResults = document.getElementById('noResults');

    // Masquer le loading
    loading.style.display = 'none';

    // Vider le conteneur
    container.innerHTML = '';

    if (articles.length === 0) {
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    // Créer les cartes d'articles
    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';

        articleCard.innerHTML = `
            <div class="article-category">${article.category}</div>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-description">${article.description}</p>
            <div class="article-meta">
                <span class="article-source">${article.source}</span>
                <span class="article-date">${article.date}</span>
            </div>
            <a href="${article.link}" target="_blank" class="article-link">Lire l'article →</a>
        `;

        container.appendChild(articleCard);
    });
}

// Fonction de filtrage
function filterArticles() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    const filteredArticles = actualitesMaroc.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm) || 
                             article.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === '' || article.category === category;

        return matchesSearch && matchesCategory;
    });

    displayArticles(filteredArticles);
}

// Fonction pour initialiser la page
function init() {
    // Afficher tous les articles au chargement
    displayArticles(actualitesMaroc);

    // Événements pour les filtres
    document.getElementById('searchInput').addEventListener('input', filterArticles);
    document.getElementById('categoryFilter').addEventListener('change', filterArticles);

    // Bouton actualiser
    document.getElementById('refreshBtn').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('categoryFilter').value = '';
        displayArticles(actualitesMaroc);
    });
}

// Démarrer l'application quand la page est chargée
document.addEventListener('DOMContentLoaded', init);
