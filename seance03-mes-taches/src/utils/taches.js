// Fonctions qui travaillent sur le tableau des tâches.
// Aucune ne modifie le tableau reçu : elles renvoient toujours un nouveau résultat.

// filter() garde les éléments pour lesquels la fonction renvoie true
export function tachesAFaire(liste) {
  return liste.filter((tache) => !tache.fait);
}

export const tachesTerminees = (liste) => liste.filter((tache) => tache.fait);

// Une condition avec if, puis un gabarit `${...}` pour construire la phrase
export function resume(liste) {
  const restantes = tachesAFaire(liste).length;
  if (liste.length === 0) {
    return 'Aucune tâche pour le moment.';
  }
  if (restantes === 0) {
    return 'Bravo, tout est fait !';
  }
  const mot = restantes > 1 ? 'tâches' : 'tâche';
  return `${restantes} ${mot} à faire sur ${liste.length}`;
}

// '✔' si la tâche est faite, '○' sinon
export const icone = (tache) => (tache.fait ? '✔' : '○');

// '2026-10-20T09:00:00'  ->  '20/10/2026'
export function formaterDate(dateIso) {
  const [date] = dateIso.split('T');
  const [annee, mois, jour] = date.split('-');
  return `${jour}/${mois}/${annee}`;
}

// find() renvoie le premier élément qui correspond, ou undefined
export function trouverTache(liste, id) {
  return liste.find((tache) => tache.id === id);
}

// map() renvoie un nouveau tableau : la tâche visée est copiée avec ... puis modifiée
export function basculer(liste, id) {
  return liste.map((tache) => (tache.id === id ? { ...tache, fait: !tache.fait } : tache));
}
