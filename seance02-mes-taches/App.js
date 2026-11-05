import { ScrollView, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import TaskSection from './src/components/TaskSection';
import { taches } from './src/data/taches';
import { resume, tachesAFaire, tachesTerminees } from './src/utils/taches';

// L'écran ne fait plus qu'assembler des composants et leur passer des données.
export default function App() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.contenu}>
      <Header titre="Mes tâches" sousTitre={resume(taches)} />
      <TaskSection titre="À faire" taches={tachesAFaire(taches)} />
      <TaskSection titre="Terminées" taches={tachesTerminees(taches)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F3F4F6' },
  contenu: { padding: 16, paddingTop: 56 },
});
