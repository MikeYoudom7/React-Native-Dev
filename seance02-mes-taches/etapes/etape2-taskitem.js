// Étape 2 : ligneTache() devient le composant TaskItem
import { ScrollView, StyleSheet, Text } from 'react-native';
import Header from '../src/components/Header';
import TaskItem from '../src/components/TaskItem';
import { taches } from '../src/data/taches';
import { resume, tachesAFaire, tachesTerminees } from '../src/utils/taches';

export default function App() {
  const aFaire = tachesAFaire(taches);
  const terminees = tachesTerminees(taches);

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.contenu}>
      <Header titre="Mes tâches" sousTitre={resume(taches)} />

      <Text style={styles.section}>À faire ({aFaire.length})</Text>
      {aFaire.map((tache) => (
        <TaskItem key={tache.id} tache={tache} />
      ))}

      <Text style={styles.section}>Terminées ({terminees.length})</Text>
      {terminees.map((tache) => (
        <TaskItem key={tache.id} tache={tache} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F3F4F6' },
  contenu: { padding: 16, paddingTop: 56 },
  section: { fontSize: 18, fontWeight: '600', color: '#1F2937', marginTop: 16, marginBottom: 8 },
});
