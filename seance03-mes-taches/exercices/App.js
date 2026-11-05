import { ScrollView, StyleSheet } from 'react-native';
import Header from './Header';
import { couleurs, espace } from '../src/constants/theme';
import { taches } from '../src/data/taches';
import { resume, tachesAFaire, tachesTerminees } from '../src/utils/taches';
import Footer from './Footer';
import Stats from './Stats';
import TaskSection from './TaskSection';

// Tous les exercices de la séance assemblés. Pour l'essayer : copier ce fichier à la place de App.js
// et remplacer '../src/' par './src/' et './' par './exercices/' dans les import.
export default function App() {
  const aFaire = tachesAFaire(taches);
  const terminees = tachesTerminees(taches);
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.contenu}>
      <Header titre="Mes tâches" sousTitre={resume(taches)} />
      <Stats aFaire={aFaire.length} terminees={terminees.length} />
      <TaskSection titre="À faire" taches={aFaire} />
      <TaskSection titre="Terminées" taches={terminees} />
      <TaskSection titre="Archivées" taches={[]} />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: couleurs.fond },
  contenu: { padding: espace.m, paddingTop: 56 },
});
