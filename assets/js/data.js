// Données des actualités marocaines - Dates mises à jour
const actualitesMaroc = [
    {
        title: "Le Maroc renforce sa coopération économique avec l'Union Européenne",
        description: "Signature d'un nouvel accord de partenariat visant à doubler les échanges commerciaux d'ici 2026. Le ministre de l'Économie a souligné les opportunités pour les PME marocaines.",
        category: "economie",
        source: "Medias24",
        date: new Date().toISOString().split('T')[0], // Aujourd'hui
        link: "https://example.com/article1"
    },
    {
        title: "L'équipe nationale U20 se prépare pour le championnat d'Afrique",
        description: "Les jeunes Lions de l'Atlas entament leur stage de préparation à Rabat en vue des éliminatoires. Le sélectionneur annonce une liste de 25 joueurs.",
        category: "sport",
        source: "Hespress",
        date: new Date().toISOString().split('T')[0], // Aujourd'hui
        link: "https://example.com/article2"
    },
    {
        title: "Lancement du nouveau programme de digitalisation des administrations",
        description: "Le gouvernement dévoile son plan 'Maroc Digital 2025' avec un budget de 2 milliards de dirhams pour moderniser les services publics.",
        category: "politique",
        source: "L'Économiste",
        date: new Date(Date.now() - 86400000).toISOString().split('T')[0], // Hier
        link: "https://example.com/article3"
    },
    {
        title: "Festival des Musiques Sacrées de Fès : édition 2024 annoncée",
        description: "La 28ème édition du festival se tiendra en mai avec des artistes de 15 pays. Thème : 'Dialogue des cultures et paix mondiale'.",
        category: "culture",
        source: "Aujourd'hui le Maroc",
        date: new Date(Date.now() - 86400000).toISOString().split('T')[0], // Hier
        link: "https://example.com/article4"
    },
    {
        title: "Croissance record du tourisme avec 14 millions de visiteurs en 2023",
        description: "Le secteur touristique marocain dépasse les prévisions avec une croissance de 23% par rapport à 2022. La France et l'Espagne principales marchés émetteurs.",
        category: "economie",
        source: "Le Matin",
        date: new Date(Date.now() - 172800000).toISOString().split('T')[0], // Avant-hier
        link: "https://example.com/article5"
    }
];
