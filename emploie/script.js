// --- 1. MODÈLE DE DONNÉES (Simule la Base de Données) ---
const offresEmploi = [
    {
        id: 1,
        titre: "Agent Immobilier Senior",
        entreprise: "Bénin Immo Plus",
        localisation: "Cotonou",
        typeContrat: "CDI",
        description: "Gestion d'un portefeuille de biens de luxe et encadrement d'une équipe commerciale.",
        competences: ["Négociation", "Évaluation", "Permis B"]
    },
    {
        id: 2,
        titre: "Développeur Foncier",
        entreprise: "Groupe Akwaba",
        localisation: "Porto-Novo",
        typeContrat: "CDD",
        description: "Recherche et acquisition de terrains pour de nouveaux projets de construction.",
        competences: ["Urbanisme", "Droit Foncier", "Analyse de marché"]
    },
    {
        id: 3,
        titre: "Assistant Commercial (Stage)",
        entreprise: "Immo Jeune",
        localisation: "Calavi",
        typeContrat: "Stage",
        description: "Support à l'équipe commerciale, gestion des visites et des dossiers clients.",
        competences: ["Organisation", "Relation client", "Maîtrise du Pack Office"]
    },
    {
        id: 4,
        titre: "Expert en Évaluation Immobilière",
        entreprise: "Bénin Immo Plus",
        localisation: "Cotonou",
        typeContrat: "CDI",
        description: "Réalisation d'expertises immobilières pour des banques et des particuliers.",
        competences: ["Évaluation", "Rigueur", "Réglementation"]
    }
];

// --- 2. SÉLECTION DES ÉLÉMENTS DU DOM ---
const jobListContainer = document.getElementById('job-list-container');
const filterForm = document.getElementById('filter-form');
const noResultsMessage = document.getElementById('no-results');

// --- 3. FONCTIONS DE RENDU ---

/**
 * Crée la carte HTML pour une offre d'emploi.
 * @param {object} offre - L'objet offre d'emploi.
 * @returns {string} Le HTML de la carte.
 */
function createJobCard(offre) {
    const competencesHtml = offre.competences.map(comp => `<span>${comp}</span>`).join('');

    return `
        <div class="job-card">
            <h3>${offre.titre}</h3>
            <div class="details">
                <span>${offre.entreprise}</span>
                <span>${offre.localisation}</span>
                <span>${offre.typeContrat}</span>
            </div>
            <p>${offre.description}</p>
            <div class="competences">
                ${competencesHtml}
            </div>
        </div>
    `;
}

/**
 * Affiche les offres d'emploi filtrées.
 * @param {array} filteredJobs - Le tableau des offres à afficher.
 */
function renderJobs(filteredJobs) {
    jobListContainer.innerHTML = '';

    if (filteredJobs.length === 0) {
        noResultsMessage.style.display = 'block';
        return;
    }

    noResultsMessage.style.display = 'none';
    
    const jobsHtml = filteredJobs.map(createJobCard).join('');
    jobListContainer.innerHTML = jobsHtml;
}

// --- 4. FONCTION DE FILTRAGE (Le Cœur de l'Architecture) ---

/**
 * Filtre les offres d'emploi en fonction des critères de l'utilisateur.
 */
function filterJobs() {
    const keyword = document.getElementById('keyword-input').value.toLowerCase();
    const location = document.getElementById('location-select').value;
    const contract = document.getElementById('contract-select').value;

    const filteredJobs = offresEmploi.filter(offre => {
        // Filtre 1: Mot-clé (recherche dans le titre, l'entreprise et la description)
        const keywordMatch = offre.titre.toLowerCase().includes(keyword) ||
                             offre.entreprise.toLowerCase().includes(keyword) ||
                             offre.description.toLowerCase().includes(keyword);

        // Filtre 2: Localisation
        const locationMatch = location === '' || offre.localisation === location;

        // Filtre 3: Contrat
        const contractMatch = contract === '' || offre.typeContrat === contract;

        return keywordMatch && locationMatch && contractMatch;
    });

    renderJobs(filteredJobs);
}

// --- 5. GESTION DES ÉVÉNEMENTS ET INITIALISATION ---

// Événement de soumission du formulaire (pour filtrer)
filterForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    filterJobs();
});

// Événement de changement sur les selects (pour filtrer en temps réel si vous voulez)
document.getElementById('location-select').addEventListener('change', filterJobs);
document.getElementById('contract-select').addEventListener('change', filterJobs);

// Initialisation: Afficher toutes les offres au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    renderJobs(offresEmploi);
});
