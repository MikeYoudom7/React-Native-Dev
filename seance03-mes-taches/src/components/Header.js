import { Image, StyleSheet, Text, View } from 'react-native';
import { couleurs, espace, rayon } from '../constants/theme';

// L'en-tête : le logo à gauche, le titre et la phrase à droite.
export default function Header({ titre, sousTitre }) {
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <View style={styles.textes}>
        <Text style={styles.titre}>{titre}</Text>
        <Text style={styles.sousTitre}>{sousTitre}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', alignItems: 'center', gap: espace.m,
    backgroundColor: couleurs.primaire,
    padding: espace.m, borderRadius: rayon,
  },
  logo: { width: 56, height: 56 },
  textes: { flex: 1 },
  titre: { fontSize: 24, fontWeight: 'bold', color: couleurs.blanc },
  sousTitre: { color: couleurs.primaireClair, marginTop: 4 },
});
