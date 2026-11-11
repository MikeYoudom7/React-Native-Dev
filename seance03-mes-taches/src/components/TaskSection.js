import { StyleSheet, Text, View } from 'react-native';
import { couleurs, espace } from '../constants/theme';
import TaskItem from './TaskItem';

// Une section : le titre à gauche, le compteur à droite, puis les cartes.
export default function TaskSection({ titre, taches }) {
  return (
    <View style={styles.section}>
      <View style={styles.entete}>
        <Text style={styles.titre}>{titre}</Text>
        <Text style={styles.compteur}>{taches.length}</Text>
      </View>
      {taches.map((tache) => (
        <TaskItem key={tache.id} tache={tache} />
      ))}
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
    borderRadius: 10, 
  },
});
