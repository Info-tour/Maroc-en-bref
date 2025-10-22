console.log('✅ script.js chargé');

// Fonction pour afficher les articles
function displayArticles(articles) {
    console.log('🔄 Affichage des articles:', articles);
    
    const container = document.getElementById('articlesContainer');
    const loading = document.getElementById('loading');
    const noResults = document.getElementById('noResults');

    // Masquer le loading
    if (loading) {
        loading.style.display = 'none';
        console.log('✅ Loading masqué');
    }

    // Vider le conteneur
    if (container) {
        container.innerHTML = '';
        console.log('✅ Conteneur vidé');
    }

    // Vérifier s'il y a des articles
    if (!articles || articles.length === 0) {
        console.log('❌ Aucun article à afficher');
        if (noResults) noResults.style.display = 'block';
        return;
    }

    // Masquer "Aucun résultat"
    if (noResults) noResults.style.display = 'none';

    console.log(`✅ Création de ${articles.length} cartes d'articles`);

    // Créer les cartes d'articles
    articles.forEach((article, index) => {
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

        if (container) {
            container.appendChild(articleCard);
        }
    });
}

// Fonction de filtrage
function filterArticles() {
    console.log('🔍 Filtrage en cours...');
    
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    console.log('Terme de recherche:', searchTerm);
    console.log('Catégorie:', category);

    // Vérifier que actualitesMaroc existe
    if (typeof actualitesMaroc === 'undefined') {
        console.error('❌ ERREUR: actualitesMaroc non défini');
        return;
    }

    const filteredArticles = actualitesMaroc.filter(article => {
        const title = article.title ? article.title.toLowerCase() : '';
        const description = article.description ? article.description.toLowerCase() : '';
        
        const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
        const matchesCategory = category === '' || article.category === category;

        return matchesSearch && matchesCategory;
    });

    console.log(`📊 ${filteredArticles.length} articles après filtrage`);
    displayArticles(filteredArticles);
}

// Fonction pour initialiser la page
function init() {
    console.log('🚀 Initialisation du site...');
    
    // Vérifier que actualitesMaroc existe
    if (typeof actualitesMaroc === 'undefined') {
        console.error('❌ ERREUR CRITIQUE: actualitesMaroc non défini');
        const loading = document.getElementById('loading');
        if (loading) {
            loading.innerHTML = '❌ Erreur: Données non chargées. Vérifiez la console.';
            loading.style.color = 'red';
        }
        return;
    }

    console.log('✅ Données chargées:', actualitesMaroc);
    console.log(`📰 ${actualitesMaroc.length} articles disponibles`);

    // Afficher tous les articles au chargement
    displayArticles(actualitesMaroc);

    // Événements pour les filtres
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const refreshBtn = document.getElementById('refreshBtn');

    if (searchInput) {
        searchInput.addEventListener('input', filterArticles);
        console.log('✅ Écouteur de recherche ajouté');
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterArticles);
        console.log('✅ Écouteur de catégorie ajouté');
    }

    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            console.log('🔄 Actualisation manuelle');
            if (searchInput) searchInput.value = '';
            if (categoryFilter) categoryFilter.value = '';
            displayArticles(actualitesMaroc);
        });
        console.log('✅ Écouteur de rafraîchissement ajouté');
    }
}

// Vérifier que le DOM est chargé avant d'initialiser
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

console.log('✅ script.js entièrement chargé et prêt');
