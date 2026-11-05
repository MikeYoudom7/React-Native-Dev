// Démonstration de Flexbox (partie 3). Pour l'essayer : copier ce fichier à la place de App.js.
import { ScrollView, StyleSheet, Text, View } from 'react-native';

function Carre({ couleur }) {
  return <View style={[styles.carre, { backgroundColor: couleur }]} />;
}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.legende}>1. Par défaut : en colonne</Text>
      <View style={styles.boite}>
        <Carre couleur="#0F766E" />
        <Carre couleur="#E8651A" />
        <Carre couleur="#6B7280" />
      </View>

      <Text style={styles.legende}>2. flexDirection: &apos;row&apos;</Text>
      <View style={[styles.boite, styles.ligne]}>
        <Carre couleur="#0F766E" />
        <Carre couleur="#E8651A" />
        <Carre couleur="#6B7280" />
      </View>

      <Text style={styles.legende}>3. + justifyContent: &apos;space-between&apos;</Text>
      <View style={[styles.boite, styles.ligne, styles.espace]}>
        <Carre couleur="#0F766E" />
        <Carre couleur="#E8651A" />
        <Carre couleur="#6B7280" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 16, paddingTop: 56 },
  legende: { fontSize: 16, fontWeight: 'bold', marginTop: 16, marginBottom: 8 },
  boite: { backgroundColor: '#E5E7EB', padding: 8, gap: 8, borderRadius: 8 },
  ligne: { flexDirection: 'row' },
  espace: { justifyContent: 'space-between' },
  carre: { width: 60, height: 60, borderRadius: 8 },
});
