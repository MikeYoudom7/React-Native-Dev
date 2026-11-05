import { StyleSheet, Text, View } from 'react-native';
import { formaterDate, icone } from '../utils/taches';

// La carte d'UNE tâche. La tâche arrive par la prop tache :
// <TaskItem tache={uneTache} />
export default function TaskItem({ tache }) {
  return (
    <View style={styles.carte}>
      <Text style={[styles.titre, tache.fait && styles.fait]}>
        {icone(tache)} {tache.titre}
      </Text>
      {tache.description ? (
        <Text style={styles.description}>{tache.description}</Text>
      ) : null}
      <Text style={styles.date}>Créée le {formaterDate(tache.creeLe)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  carte: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 12, marginBottom: 8, elevation: 2 },
  titre: { fontSize: 16, fontWeight: '600', color: '#1F2937' },
  fait: { textDecorationLine: 'line-through', color: '#6B7280' },
  description: { color: '#6B7280', marginTop: 4 },
  date: { color: '#9CA3AF', fontSize: 12, marginTop: 6 },
});
