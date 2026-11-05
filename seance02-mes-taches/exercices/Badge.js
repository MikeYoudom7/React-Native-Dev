import { StyleSheet, Text } from 'react-native';

// Exercices finaux 1 et 2 : une étiquette réutilisable ; couleur a une valeur par défaut
export default function Badge({ texte, couleur = '#0F766E' }) {
  return <Text style={[styles.badge, { backgroundColor: couleur }]}>{texte}</Text>;
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    marginTop: 6,
    overflow: 'hidden',
  },
});
