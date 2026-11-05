import { StyleSheet, Text, View } from 'react-native';
import { couleurs, espace } from '../src/constants/theme';
import TaskItem from './TaskItem';

// Exercice 1 : un message centré quand la section est vide.
export default function TaskSection({ titre, taches }) {
  return (
    <View style={styles.section}>
      <View style={styles.entete}>
        <Text style={styles.titre}>{titre}</Text>
        <Text style={styles.compteur}>{taches.length}</Text>
      </View>
      {taches.length === 0 ? (
        <Text style={styles.vide}>Aucune tâche ici.</Text>
      ) : (
        taches.map((tache) => <TaskItem key={tache.id} tache={tache} />)
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: espace.l },
  entete: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: espace.s,
  },
  titre: {
    fontSize: 14, fontWeight: 'bold', color: couleurs.gris,
    textTransform: 'uppercase', letterSpacing: 1,
  },
  compteur: {
    backgroundColor: couleurs.primaireClair, color: couleurs.primaire,
    fontWeight: 'bold', paddingHorizontal: espace.s, paddingVertical: 2,
    borderRadius: 10, overflow: 'hidden',
  },
  vide: { textAlign: 'center', fontStyle: 'italic', color: couleurs.grisClair, padding: espace.m },
});
