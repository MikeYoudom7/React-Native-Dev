import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function ChampDemo() {
  const [prenom, setPrenom] = useState('');

  return (
    <View style={styles.boite}>
      <TextInput
        style={styles.champ}
        placeholder="Votre prénom"
        value={prenom}
        onChangeText={setPrenom}
      />
      <Text>Bonjour {prenom} !</Text>
      <Text>{prenom.length} caractère(s)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  boite: { gap: 8, padding: 24 },
  champ: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
});
