// Corrigé « À vous » (Pressable) : masquer ou afficher les tâches terminées.
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import Header from '../../src/components/Header';
import TaskSection from '../../src/components/TaskSection';
import { couleurs, espace } from '../../src/constants/theme';
import { taches } from '../../src/data/taches';
import { basculer, resume, tachesAFaire, tachesTerminees } from '../../src/utils/taches';

export default function App() {
  const [liste, setListe] = useState(taches);
  const [voirTerminees, setVoirTerminees] = useState(true);

  function basculerTache(id) {
    setListe(basculer(liste, id));
  }

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.contenu}>
      <Header titre="Mes tâches" sousTitre={resume(liste)} />
      <TaskSection titre="À faire" taches={tachesAFaire(liste)} onBasculer={basculerTache} />
      <Pressable style={styles.bascule} onPress={() => setVoirTerminees(!voirTerminees)}>
        <Text style={styles.basculeTexte}>
          {voirTerminees ? 'Masquer les terminées' : 'Afficher les terminées'}
        </Text>
      </Pressable>
      {voirTerminees ? (
        <TaskSection titre="Terminées" taches={tachesTerminees(liste)} onBasculer={basculerTache} />
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: couleurs.fond },
  contenu: { padding: espace.m, paddingTop: 56 },
  bascule: { alignSelf: 'center', marginTop: espace.m, padding: espace.s },
  basculeTexte: { color: couleurs.primaire, fontWeight: 'bold' },
});
