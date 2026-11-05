import { StyleSheet, Text, View } from 'react-native';
import { couleurs, espace, rayon } from '../src/constants/theme';

// Exercice 3 : deux cases côte à côte, de la même largeur (flex: 1).
export default function Stats({ aFaire, terminees }) {
  return (
    <View style={styles.ligne}>
      <View style={styles.case}>
        <Text style={styles.nombre}>{aFaire}</Text>
        <Text style={styles.libelle}>à faire</Text>
      </View>
      <View style={styles.case}>
        <Text style={styles.nombre}>{terminees}</Text>
        <Text style={styles.libelle}>terminées</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ligne: { flexDirection: 'row', gap: espace.s, marginTop: espace.m },
  case: {
    flex: 1, alignItems: 'center',
    backgroundColor: couleurs.carte, padding: espace.m, borderRadius: rayon,
  },
  nombre: { fontSize: 24, fontWeight: 'bold', color: couleurs.primaire },
  libelle: { color: couleurs.gris },
});
