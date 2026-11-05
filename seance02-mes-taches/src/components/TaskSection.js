import { StyleSheet, Text, View } from 'react-native';
import TaskItem from './TaskItem';

// Une section de la liste : un titre, puis une carte TaskItem par tâche.
// Le composant reçoit le tableau à afficher dans la prop taches.
export default function TaskSection({ titre, taches }) {
  return (
    <View>
      <Text style={styles.titre}>
        {titre} ({taches.length})
      </Text>
      {taches.map((tache) => (
        <TaskItem key={tache.id} tache={tache} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  titre: { fontSize: 18, fontWeight: '600', color: '#1F2937', marginTop: 16, marginBottom: 8 },
});
