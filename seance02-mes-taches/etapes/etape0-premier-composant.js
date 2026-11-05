// Avant de découper : un tout premier composant, écrit dans App.js
import { ScrollView, StyleSheet, Text } from 'react-native';

// Un composant : une fonction dont le nom commence par une majuscule,
// et qui renvoie du JSX
function Header() {
  return <Text style={styles.entete}>Mes tâches</Text>;
}

export default function App() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.contenu}>
      <Header />
      <Header />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F3F4F6' },
  contenu: { padding: 16, paddingTop: 56 },
  entete: { fontSize: 28, fontWeight: 'bold', color: '#0F766E' },
});
