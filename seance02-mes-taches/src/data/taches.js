// Les tâches de l'application : un tableau d'objets.
// Chaque objet a exactement les champs que renvoie l'API (GET /api/taches) :
// plus tard, on remplacera ce tableau par l'appel à l'API sans changer l'écran.
export const taches = [
  {
    id: 1,
    titre: 'Installer Node.js',
    description: 'Version 22 avec nvm',
    fait: true,
    creeLe: '2026-10-20T09:00:00',
  },
  {
    id: 2,
    titre: 'Créer le projet Expo',
    description: 'npx create-expo-app@latest mes-taches',
    fait: true,
    creeLe: '2026-10-20T10:30:00',
  },
  {
    id: 3,
    titre: 'Réviser map() et filter()',
    description: '',
    fait: false,
    creeLe: '2026-10-21T08:15:00',
  },
  {
    id: 4,
    titre: 'Afficher la liste des tâches',
    description: 'Livrable de la séance 1',
    fait: false,
    creeLe: '2026-10-22T14:00:00',
  },
  {
    id: 5,
    titre: 'Préparer la séance 2',
    description: 'Relire les composants et les props',
    fait: false,
    creeLe: '2026-10-23T18:45:00',
  },
];
