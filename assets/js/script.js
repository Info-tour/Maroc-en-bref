// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    const articlesContainer = document.getElementById('articlesContainer');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const refreshBtn = document.getElementById('refreshBtn');
    const loadingElement = document.getElementById('loading');
    const noResultsElement = document.getElementById('noResults');

    // Afficher les articles
    function displayArticles(articles) {
        articlesContainer.innerHTML = '';
        
        if (articles.length === 0) {
            noResultsElement.style.display = 'block';
            return;
        }
        
        noResultsElement.style.display = 'none';
        
        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'article-card';
            
            articleElement.innerHTML = `
                <div class="article-category">${article.category}</div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-description">${article.description}</p>
                <div class="article-meta">
                    <span class="article-source">${article.source}</span>
                    <span class="article-date">${formatDate(article.date)}</span>
                </div>
                <a href="${article.url}" target="_blank" class="article-link">Lire la suite →</a>
            `;
            
            articlesContainer.appendChild(articleElement);
        });
    }

    // Formater la date
    function formatDate(dateString) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    }

    // Filtrer les articles
    function filterArticles() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        
        const filteredArticles = articlesData.filter(article => {
            const matchesSearch = article.title.toLowerCase().includes(searchTerm) || 
                                article.description.toLowerCase().includes(searchTerm);
            const matchesCategory = category === '' || article.category === category;
            
            return matchesSearch && matchesCategory;
        });
        
        displayArticles(filteredArticles);
    }

    // Événements
    searchInput.addEventListener('input', filterArticles);
    categoryFilter.addEventListener('change', filterArticles);
    refreshBtn.addEventListener('click', function() {
        searchInput.value = '';
        categoryFilter.value = '';
        displayArticles(articlesData);
    });

    // Masquer le chargement et afficher les articles
    loadingElement.style.display = 'none';
    displayArticles(articlesData);
});
