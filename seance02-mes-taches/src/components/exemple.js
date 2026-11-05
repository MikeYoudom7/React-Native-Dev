import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.texte}>
        Application réalisée par Mike Youdom
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    padding: 20,
  },
  texte: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 14,
  },
});