import { StyleSheet, Text, View } from 'react-native';
import { formaterDate, icone } from '../src/utils/taches';
import Badge from './Badge';

// « À vous » : la prop afficherDate (true par défaut).
// Exercices finaux 1 et 2 : un Badge « Fait » / « À faire » dans la carte.
export default function TaskItem({ tache, afficherDate = true }) {
  return (
    <View style={styles.carte}>
      <Text style={[styles.titre, tache.fait && styles.fait]}>
        {icone(tache)} {tache.titre}
      </Text>
      {tache.description ? (
        <Text style={styles.description}>{tache.description}</Text>
      ) : null}
      <Badge
        texte={tache.fait ? 'Fait' : 'À faire'}
        couleur={tache.fait ? '#6B7280' : '#E8651A'}
      />
      {afficherDate ? (
        <Text style={styles.date}>Créée le {formaterDate(tache.creeLe)}</Text>
      ) : null}
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
