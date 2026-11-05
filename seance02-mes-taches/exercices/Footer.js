import { StyleSheet, Text } from 'react-native';

// Un pied de page qui reçoit le nom de l'auteur (« un anonyme » par défaut)
export default function Footer({ auteur = 'un anonyme' }) {
  return <Text style={styles.footer}>Application réalisée par {auteur}</Text>;
}

const styles = StyleSheet.create({
  footer: { textAlign: 'center', color: '#9CA3AF', marginTop: 24 },
});
