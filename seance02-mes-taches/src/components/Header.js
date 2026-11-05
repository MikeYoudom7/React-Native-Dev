import { StyleSheet, Text, View } from 'react-native';

// L'en-tête de l'écran : un titre, et une phrase en dessous.
// Les deux textes arrivent par les props titre et sousTitre.
export default function Header({ titre, sousTitre }) {
  return (
    <View style={styles.header}>
      <Text style={styles.titre}>{titre}</Text>
      <Text style={styles.sousTitre}>{sousTitre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { marginBottom: 8 },
  titre: { fontSize: 28, fontWeight: 'bold', color: '#0F766E' },
  sousTitre: { color: '#6B7280', marginTop: 4 },
});
