import { ScrollView, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import TaskSection from './src/components/TaskSection';
import { couleurs, espace } from './src/constants/theme';
import { taches } from './src/data/taches';
import { resume, tachesAFaire, tachesTerminees } from './src/utils/taches';

// L'écran assemble les composants ; le fond et les marges viennent du thème.
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
  page: { flex: 1, backgroundColor: couleurs.fond },
  contenu: { padding: espace.m, paddingTop: 56 },
});
