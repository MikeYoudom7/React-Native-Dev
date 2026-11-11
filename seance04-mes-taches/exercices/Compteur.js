// Corrigé « À vous » (useState) : -1, +1 et remise à zéro, sans descendre sous 0.
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Compteur() {
  const [nombre, setNombre] = useState(0);

  function ajouter() {
    setNombre(nombre + 1);
  }

  function retirer() {
    if (nombre > 0) {
      setNombre(nombre - 1);
    }
  }

  return (
    <View style={styles.boite}>
      <Text style={styles.texte}>{nombre}</Text>
      <View style={styles.ligne}>
        <Pressable style={styles.bouton} onPress={retirer}>
          <Text style={styles.boutonTexte}>-1</Text>
        </Pressable>
        <Pressable style={styles.bouton} onPress={ajouter}>
          <Text style={styles.boutonTexte}>+1</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => setNombre(0)}>
        <Text style={styles.lien}>Remettre à zéro</Text>
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
  texte: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  ligne: { flexDirection: 'row', gap: 12 },
  lien: {
    color: '#0F766E',
    textDecorationLine: 'underline',
  },
  bouton: {
    backgroundColor: '#0F766E',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  boutonTexte: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
