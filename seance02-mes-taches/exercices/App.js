import { ScrollView, StyleSheet, Text } from 'react-native';
import Header from '../src/components/Header';
import { taches } from '../src/data/taches';
import { resume, tachesAFaire, tachesTerminees } from '../src/utils/taches';
import Footer from './Footer';
import TaskItem from './TaskItem';
import TaskSection from './TaskSection';

// Tous les exercices de la séance assemblés. Pour l'essayer : copier ce fichier à la place de App.js
// et remplacer '../src/' par './src/' et './' par './exercices/' dans les import.
export default function App() {
  const derniere = taches[taches.length - 1];
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.contenu}>
      <Header titre="Mes tâches" sousTitre={resume(taches)} />
      {/* Exercice 5 (bonus) : le même TaskItem, réutilisé pour une seule tâche */}
      <Text style={styles.section}>Dernière ajoutée</Text>
      <TaskItem tache={derniere} />
      <TaskSection titre="À faire" taches={tachesAFaire(taches)} />
      <TaskSection titre="Terminées" taches={tachesTerminees(taches)} afficherDate={false} />
      <Footer auteur="Awa Diop" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F3F4F6' },
  contenu: { padding: 16, paddingTop: 56, paddingBottom: 32 },
  section: { fontSize: 18, fontWeight: '600', color: '#1F2937', marginTop: 16, marginBottom: 8 },
});
