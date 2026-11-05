// Exercice « un composant Footer » (avant les props) : src/components/Footer.js
import { StyleSheet, Text } from 'react-native';

export default function Footer() {
  return <Text style={styles.footer}>Application réalisée par Awa Diop</Text>;
}

const styles = StyleSheet.create({
  footer: { textAlign: 'center', color: '#9CA3AF', marginTop: 24 },
});
