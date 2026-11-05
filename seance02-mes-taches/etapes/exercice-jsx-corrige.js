// Exercice « corriger le JSX » : la version corrigée
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.page}>
      <Text style={styles.titre}>Mes tâches</Text>
      <View>
        <Text>Il reste {3} tâches</Text>
      </View>
      <Image source={require('../assets/icon.png')} style={styles.icone} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, padding: 16, paddingTop: 56 },
  titre: { fontSize: 28, fontWeight: 'bold', color: '#0F766E' },
  icone: { width: 64, height: 64, marginTop: 8 },
});
