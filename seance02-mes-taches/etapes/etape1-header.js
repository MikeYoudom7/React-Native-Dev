// Étape 1 : le titre et la phrase deviennent le composant Header
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../src/components/Header';
import { taches } from '../src/data/taches';
import { formaterDate, resume, tachesAFaire, tachesTerminees } from '../src/utils/taches';

// Une fonction qui reçoit une tâche (un objet) et renvoie ce qu'il faut afficher
function ligneTache(tache) {
  const icone = tache.fait ? '✔' : '○';
  return (
    <View key={tache.id} style={styles.carte}>
      <Text style={[styles.titre, tache.fait && styles.fait]}>
        {icone} {tache.titre}
      </Text>
      {tache.description ? (
        <Text style={styles.description}>{tache.description}</Text>
      ) : null}
      <Text style={styles.date}>
        Créée le {formaterDate(tache.creeLe)}
      </Text>
    </View>
  );
}

export default function App() {
  const aFaire = tachesAFaire(taches);
  const terminees = tachesTerminees(taches);

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.contenu}>
      <Header titre="Mes tâches" sousTitre={resume(taches)} />

      <Text style={styles.section}>À faire ({aFaire.length})</Text>
      {aFaire.map((tache) => ligneTache(tache))}

      <Text style={styles.section}>Terminées ({terminees.length})</Text>
      {terminees.map((tache) => ligneTache(tache))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F3F4F6' },
  contenu: { padding: 16, paddingTop: 56 },
  section: { fontSize: 18, fontWeight: '600', color: '#1F2937', marginTop: 16, marginBottom: 8 },
  carte: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 12, marginBottom: 8, elevation: 2 },
  titre: { fontSize: 16, fontWeight: '600', color: '#1F2937' },
  fait: { textDecorationLine: 'line-through', color: '#6B7280' },
  description: { color: '#6B7280', marginTop: 4 },
  date: { color: '#9CA3AF', fontSize: 12, marginTop: 6 },
});
