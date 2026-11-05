// Les fonctions ne modifient jamais le tableau reçu :
// elles renvoient un nouveau résultat.

// filter() garde les tâches pour lesquelles le test est vrai
export function tachesAFaire(liste) {
  return liste.filter((tache) => !tache.fait);
}

export const tachesTerminees = (liste) =>
  liste.filter((tache) => tache.fait);

// '2026-10-20T09:00:00'  ->  '20/10/2026'
export function formaterDate(dateIso) {
  const [date] = dateIso.split('T');
  const [annee, mois, jour] = date.split('-');
  return `${jour}/${mois}/${annee}`;
}

// Une phrase qui résume la liste, pour l'en-tête de l'écran
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

// find() renvoie la première tâche qui correspond, ou undefined
export function trouverTache(liste, id) {
  return liste.find((tache) => tache.id === id);
}

// map() renvoie un nouveau tableau : seule la tâche visée est copiée et inversée
export function basculer(liste, id) {
  return liste.map((tache) =>
    tache.id === id ? { ...tache, fait: !tache.fait } : tache
  );
}
