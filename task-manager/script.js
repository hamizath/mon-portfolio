// --- 1. MODÈLE DE DONNÉES (Architecture Logicielle) ---
let tasks = [
    { id: 1, title: "Modéliser les données du Task Manager", completed: true },
    { id: 2, title: "Créer l'interface utilisateur (HTML/CSS)", completed: false },
    { id: 3, title: "Implémenter la fonction d'ajout de tâche", completed: false }
];

// --- 2. SÉLECTION DES ÉLÉMENTS DU DOM ---
const taskList = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');

// --- 3. FONCTIONS DE GESTION DE L'ÉTAT ---

/**
 * Génère le HTML à partir du modèle de données 'tasks' et l'affiche.
 * Cette fonction assure la synchronisation entre les données et l'interface.
 */
function renderTasks() {
    // Vide la liste actuelle pour éviter les doublons
    taskList.innerHTML = '';

    tasks.forEach(task => {
        // Création de l'élément <li>
        const listItem = document.createElement('li');
        listItem.textContent = task.title;
        
        // Ajout de l'attribut de données pour identifier la tâche
        listItem.dataset.taskId = task.id;

        // Ajout de la classe 'completed' si la tâche est terminée
        if (task.completed) {
            listItem.classList.add('completed');
        }

        // Ajout de l'écouteur d'événement pour basculer l'état
        listItem.addEventListener('click', () => toggleTask(task.id));

        // Ajout à la liste
        taskList.appendChild(listItem);
    });
}

/**
 * Ajoute une nouvelle tâche au modèle de données.
 * @param {string} title - Le titre de la nouvelle tâche.
 */
function addTask(title) {
    const newTask = {
        // Génère un ID unique (simple incrémentation pour ce projet)
        id: Date.now(), 
        title: title,
        completed: false
    };
    
    // Mise à jour du modèle de données
    tasks.push(newTask);
    
    // Re-rendu de l'interface
    renderTasks();
}

/**
 * Bascule l'état 'completed' d'une tâche spécifique.
 * @param {number} id - L'ID de la tâche à modifier.
 */
function toggleTask(id) {
    // Recherche de la tâche dans le modèle de données
    const taskIndex = tasks.findIndex(task => task.id === id);
    
    if (taskIndex > -1) {
        // Modification de l'état
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        
        // Re-rendu de l'interface
        renderTasks();
    }
}

// --- 4. GESTION DES ÉVÉNEMENTS ---

// Événement de soumission du formulaire
taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    
    const title = taskInput.value.trim();
    
    if (title) {
        addTask(title);
        taskInput.value = ''; // Vide le champ de saisie
    }
});

// --- 5. INITIALISATION ---
// Afficher les tâches initiales au chargement de la page
document.addEventListener('DOMContentLoaded', renderTasks);
