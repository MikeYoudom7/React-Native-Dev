// Compteur.js après la diapositive « Montrer que l'élément est touché ».
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Compteur() {
  const [nombre, setNombre] = useState(0);

  function ajouter() {
    setNombre(nombre + 1);
  }

  return (
    <View style={styles.boite}>
      <Text style={styles.texte}>Appuis : {nombre}</Text>
      <Pressable
        style={({ pressed }) => [styles.bouton, pressed && styles.boutonAppuye]}
        onPress={ajouter}
      >
        <Text style={styles.boutonTexte}>+1</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  boite: {
    alignItems: 'center',
    gap: 12,
    padding: 24,
  },
  texte: { fontSize: 24 },
  bouton: {
    backgroundColor: '#0F766E',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  boutonAppuye: { opacity: 0.7 },
  boutonTexte: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
