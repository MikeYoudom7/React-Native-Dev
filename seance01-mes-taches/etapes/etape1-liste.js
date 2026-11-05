// Étape 1 : une ligne de texte par tâche (copier ce fichier dans App.js pour l'essayer)
import { ScrollView, Text } from 'react-native';
import { taches } from '../src/data/taches';

export default function App() {
  return (
    <ScrollView style={{ padding: 40 }}>
      {taches.map((tache) => (
        <Text key={tache.id}>{tache.titre}</Text>
      ))}
    </ScrollView>
  );
}
