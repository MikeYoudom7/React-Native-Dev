# Corrigés de la formation

| Dossier | Séance | Contenu | Lancer |
|---|---|---|---|
| seance01 | 1 | pair/impair, somme, table, moyenne, FizzBuzz | `node fizzbuzz.js` |
| seance01-mes-taches | 1 (nouveau programme) | premier écran : tâches affichées depuis un tableau JavaScript ; étapes 1 à 3 de l’écran dans `etapes/`, solutions des exercices dans `src/utils/exercices.js` | `npm install` puis `npx expo start` |
| seance02-mes-taches | 2 (nouveau programme) | l’écran découpé en composants Header, TaskSection et TaskItem (props) ; étapes du découpage et exercice JSX dans `etapes/`, solutions des exercices dans `exercices/` (`exercices/App.js` les assemble) | `npm install` puis `npx expo start` |
| seance04-mes-taches | 4 (nouveau programme) | écran final (état dans App, cartes cochables, TaskForm validé) ; `etapes/` : démos (à afficher avec `etapes/AppTemporaire.js`), `etape1-cocher/App.js` (fin de la partie 3), `etape2-ajouter/TaskForm.js` (formulaire sans validation) ; `exercices/` : Compteur.js, masquer/App.js, TaskForm.js | `npm install` puis `npx expo start` |
| seance02 | 2 | liste de produits, palindrome, occurrences, modules | `node produits.js` |
| seance03 | 3 | page web qui appelle une API publique | ouvrir `index.html` |
| seance05 | 5 | première application Expo | copier `App.js` dans un projet Expo |
| seance06 | 6 | carte produit réutilisable | copier `App.js` et `components/` |
| seance07 | 7 | liste de tâches locale (useState, useEffect, FlatList) | copier `App.js` |
| seance08 | 8 | navigation (onglets + pile) et formulaire, données locales | copier `App.js` et `src/` |
| seance09 | 9 | liste et détail chargés depuis l'API | copier `App.js` et `src/`, puis le jeton dans `src/services/api.js` |
| ../app-taches | 10 à 15 | application complète : CRUD, authentification, natif, EAS | `npm install` puis `npx expo start` |
| ../api-taches | 9 à 16 | API Spring Boot | `./mvnw spring-boot:run` |

Pour les séances 5 à 9 : créer un projet avec `npx create-expo-app@latest mon-app --template blank`,
installer les dépendances indiquées dans la séance, puis remplacer les fichiers par ceux du corrigé.
