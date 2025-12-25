// --- 1. MODÈLE DE DONNÉES (Tarifs des Motos) ---
const motos = [
    {
        id: 1,
        nom: "Scooter Urbain (125cc)",
        tarif: {
            heure: 1500, // 1500 XOF par heure
            jour: 10000, // 10000 XOF par jour (24h)
            semaine: 50000 // 50000 XOF par semaine (7 jours = 168h)
        }
    },
    {
        id: 2,
        nom: "Moto Tout-Terrain (250cc)",
        tarif: {
            heure: 2500,
            jour: 15000,
            semaine: 80000
        }
    },
    {
        id: 3,
        nom: "Maxi-Scooter (400cc)",
        tarif: {
            heure: 3000,
            jour: 20000,
            semaine: 120000
        }
    }
];

// --- 2. SÉLECTION DES ÉLÉMENTS DU DOM ---
const motoSelect = document.getElementById('moto-select');
const rentalForm = document.getElementById('rental-form');
const resultBox = document.getElementById('result-box');
const selectedMotoDisplay = document.getElementById('selected-moto');
const selectedDurationDisplay = document.getElementById('selected-duration');
const bestPriceDisplay = document.querySelector('.price-value');

// --- 3. FONCTION DE CALCUL COMPLEXE (Le Cœur du Projet) ---

/**
 * Calcule le prix de location le plus avantageux.
 * @param {object} tarifs - L'objet tarif de la moto sélectionnée.
 * @param {number} durationInHours - La durée totale de location en heures.
 * @returns {number} Le prix total en XOF.
 */
function calculatePrice(tarifs, durationInHours) {
    const hoursPerDay = 24;
    const hoursPerWeek = 7 * hoursPerDay; // 168 heures

    // Option 1: Calcul basé uniquement sur le tarif horaire
    const priceByHour = durationInHours * tarifs.heure;

    // Option 2: Calcul basé sur le tarif journalier
    // On divise la durée par 24h et on arrondit au supérieur (car on paie le jour entier)
    const days = Math.ceil(durationInHours / hoursPerDay);
    const priceByDay = days * tarifs.jour;

    // Option 3: Calcul basé sur le tarif hebdomadaire
    const weeks = Math.floor(durationInHours / hoursPerWeek);
    const remainingHours = durationInHours % hoursPerWeek;
    
    let priceByWeek = weeks * tarifs.semaine;
    
    // Pour les heures restantes, on calcule le meilleur prix (heure ou jour)
    if (remainingHours > 0) {
        const remainingDays = Math.ceil(remainingHours / hoursPerDay);
        
        // Comparaison entre les heures restantes payées à l'heure ou à la journée
        const remainingPrice = Math.min(
            remainingHours * tarifs.heure,
            remainingDays * tarifs.jour
        );
        
        priceByWeek += remainingPrice;
    }

    // Le prix final est le minimum des trois options
    return Math.min(priceByHour, priceByDay, priceByWeek);
}

// --- 4. FONCTIONS DE RENDU ET D'INITIALISATION ---

/**
 * Remplit le sélecteur de motos au chargement de la page.
 */
function populateMotoSelect() {
    motos.forEach(moto => {
        const option = document.createElement('option');
        option.value = moto.id;
        option.textContent = moto.nom;
        motoSelect.appendChild(option);
    });
}

/**
 * Gère la soumission du formulaire et affiche le résultat.
 */
function handleFormSubmit(event) {
    event.preventDefault();

    const selectedMotoId = parseInt(motoSelect.value);
    const duration = parseInt(document.getElementById('duration-input').value);

    if (isNaN(selectedMotoId) || isNaN(duration) || duration <= 0) {
        alert("Veuillez sélectionner une moto et entrer une durée valide.");
        return;
    }

    const selectedMoto = motos.find(m => m.id === selectedMotoId);

    if (!selectedMoto) return;

    // Appel de la fonction de calcul complexe
    const finalPrice = calculatePrice(selectedMoto.tarif, duration);

    // Affichage des résultats
    selectedMotoDisplay.textContent = `Moto sélectionnée : ${selectedMoto.nom}`;
    selectedDurationDisplay.textContent = `Durée : ${duration} heures`;
    
    // Formatage du prix en XOF
    const formattedPrice = finalPrice.toLocaleString('fr-FR', { style: 'currency', currency: 'XOF' });
    bestPriceDisplay.textContent = formattedPrice;

    resultBox.style.display = 'block';
}

// --- 5. INITIALISATION ---
document.addEventListener('DOMContentLoaded', () => {
    populateMotoSelect();
    rentalForm.addEventListener('submit', handleFormSubmit);
});
