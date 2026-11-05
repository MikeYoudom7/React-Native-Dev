import { Image, StyleSheet, Text, View } from 'react-native';
import { couleurs, espace } from '../src/constants/theme';

// Exercice 4 : l'icône de l'application et un texte, en ligne et centrés.
export default function Footer() {
  return (
    <View style={styles.footer}>
      <Image source={require('../assets/icon.png')} style={styles.icone} />
      <Text style={styles.texte}>Mes tâches · Séance 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    gap: espace.s, marginTop: espace.l,
  },
  icone: { width: 24, height: 24, borderRadius: 6 },
  texte: { color: couleurs.grisClair },
});
