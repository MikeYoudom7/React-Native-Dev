// Étape 2 : un titre et le compteur au-dessus de la liste
import { ScrollView, Text } from 'react-native';
import { taches } from '../src/data/taches';
import { resume } from '../src/utils/taches';

export default function App() {
  return (
    <ScrollView style={{ padding: 40 }}>
      <Text style={{ fontSize: 28 }}>Mes tâches</Text>
      <Text>{resume(taches)}</Text>
      {taches.map((tache) => (
        <Text key={tache.id}>{tache.titre}</Text>
      ))}
    </ScrollView>
  );
}
