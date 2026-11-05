// Étape 3 : deux sections, construites avec filter puis map
import { ScrollView, Text } from 'react-native';
import { taches } from '../src/data/taches';
import { resume, tachesAFaire, tachesTerminees } from '../src/utils/taches';

export default function App() {
  const aFaire = tachesAFaire(taches);
  const terminees = tachesTerminees(taches);

  return (
    <ScrollView style={{ padding: 40 }}>
      <Text style={{ fontSize: 28 }}>Mes tâches</Text>
      <Text>{resume(taches)}</Text>

      <Text style={{ marginTop: 16 }}>À faire ({aFaire.length})</Text>
      {aFaire.map((tache) => (
        <Text key={tache.id}>○ {tache.titre}</Text>
      ))}

      <Text style={{ marginTop: 16 }}>Terminées ({terminees.length})</Text>
      {terminees.map((tache) => (
        <Text key={tache.id}>✔ {tache.titre}</Text>
      ))}
    </ScrollView>
  );
}
