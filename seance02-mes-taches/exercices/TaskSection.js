import { StyleSheet, Text, View } from 'react-native';
import Badge from './Badge';
import TaskItem from './TaskItem';

// Exercice 3 (« À vous ») : transmettre afficherDate à chaque carte.
// Exercice final 3 : afficher « Aucune tâche ici. » quand la liste est vide.
// Exercice final 5 (bonus) : le nombre de tâches dans un Badge, à côté du titre.
export default function TaskSection({ titre, taches, afficherDate = true }) {
  return (
    <View>
      <View style={styles.entete}>
        <Text style={styles.titre}>{titre}</Text>
        <Badge texte={`${taches.length}`} />
      </View>
      {taches.length === 0 ? (
        <Text style={styles.vide}>Aucune tâche ici.</Text>
      ) : (
        taches.map((tache) => (
          <TaskItem key={tache.id} tache={tache} afficherDate={afficherDate} />
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  entete: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 16, marginBottom: 8 },
  titre: { fontSize: 18, fontWeight: '600', color: '#1F2937' },
  vide: { color: '#9CA3AF', fontStyle: 'italic' },
});
