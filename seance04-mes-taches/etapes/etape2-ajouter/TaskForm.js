import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { couleurs, espace, rayon } from '../../src/constants/theme';

export default function TaskForm({ onAjouter }) {
  const [titre, setTitre] = useState('');

  function envoyer() {
    onAjouter(titre);
    setTitre('');
  }

  return (
    <View style={styles.formulaire}>
      <TextInput
        style={styles.champ}
        placeholder="Nouvelle tâche"
        value={titre}
        onChangeText={setTitre}
        maxLength={60}
      />
      <Pressable
        style={({ pressed }) => [styles.bouton, pressed && styles.boutonAppuye]}
        onPress={envoyer}
      >
        <Text style={styles.boutonTexte}>Ajouter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  formulaire: {
    marginTop: espace.l, gap: espace.s,
    backgroundColor: couleurs.carte, padding: espace.m,
    borderRadius: rayon, boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)',
  },
  champ: {
    borderWidth: 1, borderColor: couleurs.grisClair, borderRadius: 8,
    paddingHorizontal: espace.m, paddingVertical: espace.s,
    fontSize: 16, color: couleurs.texte,
  },
  bouton: {
    backgroundColor: couleurs.primaire, borderRadius: 8,
    paddingVertical: espace.s + 4, alignItems: 'center',
  },
  boutonAppuye: { opacity: 0.7 },
  boutonTexte: { color: couleurs.blanc, fontSize: 16, fontWeight: 'bold' },
});
