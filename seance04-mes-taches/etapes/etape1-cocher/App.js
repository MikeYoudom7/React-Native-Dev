import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../../src/components/Header';
import TaskSection from '../../src/components/TaskSection';
import { couleurs, espace } from '../../src/constants/theme';
import { taches } from '../../src/data/taches';
import { basculer, resume, tachesAFaire, tachesTerminees } from '../../src/utils/taches';

export default function App() {
  const [liste, setListe] = useState(taches);

  function basculerTache(id) {
    setListe(basculer(liste, id));
  }

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.contenu}>
      <Header titre="Mes tâches" sousTitre={resume(liste)} />
      <TaskSection titre="À faire" taches={tachesAFaire(liste)} onBasculer={basculerTache} />
      <TaskSection titre="Terminées" taches={tachesTerminees(liste)} onBasculer={basculerTache} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: couleurs.fond },
  contenu: { padding: espace.m, paddingTop: 56 },
});
