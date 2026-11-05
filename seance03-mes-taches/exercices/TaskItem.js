import { StyleSheet, Text, View } from 'react-native';
import { couleurs, espace, rayon } from '../src/constants/theme';
import { formaterDate } from '../src/utils/taches';

// Exercice 2 : une bordure colorée à gauche des cartes à faire.
export default function TaskItem({ tache }) {
  return (
    <View style={[styles.carte, tache.fait ? styles.carteFaite : styles.carteAFaire]}>
      <View style={[styles.pastille, tache.fait && styles.pastilleFaite]}>
        {tache.fait ? <Text style={styles.coche}>✔</Text> : null}
      </View>
      <View style={styles.infos}>
        <Text style={[styles.titre, tache.fait && styles.titreFait]}>{tache.titre}</Text>
        {tache.description ? (
          <Text style={styles.description}>{tache.description}</Text>
        ) : null}
        <Text style={styles.date}>Créée le {formaterDate(tache.creeLe)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carte: {
    flexDirection: 'row', alignItems: 'center', gap: espace.m,
    backgroundColor: couleurs.carte, padding: espace.m,
    borderRadius: rayon, marginBottom: espace.s,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)',
  },
  carteFaite: { opacity: 0.6 },
  carteAFaire: { borderLeftWidth: 4, borderLeftColor: couleurs.primaire },
  pastille: {
    width: 28, height: 28, borderRadius: 14,
    borderWidth: 2, borderColor: couleurs.primaire,
    justifyContent: 'center', alignItems: 'center',
  },
  pastilleFaite: { backgroundColor: couleurs.primaire },
  coche: { color: couleurs.blanc, fontWeight: 'bold' },
  infos: { flex: 1 },
  titre: { fontSize: 16, fontWeight: '600', color: couleurs.texte },
  titreFait: { textDecorationLine: 'line-through' },
  description: { color: couleurs.gris, marginTop: 2 },
  date: { color: couleurs.grisClair, fontSize: 12, marginTop: 4 },
});
