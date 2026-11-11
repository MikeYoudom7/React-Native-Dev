import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { couleurs, espace, rayon } from '../src/constants/theme';
import { validerTitre } from '../src/utils/taches';

// Corrigé de l'exercice « À vous » (validation) : compteur de caractères + bouton désactivé.
export default function TaskForm({ onAjouter }) {
  const [titre, setTitre] = useState('');
  const [erreur, setErreur] = useState('');

  function changerTitre(texte) {
    setTitre(texte);
    setErreur('');
  }

  function envoyer() {
    const message = validerTitre(titre);
    if (message !== '') {
      setErreur(message);
      return;
    }
    onAjouter(titre);
    setTitre('');
  }

  const vide = titre.trim() === '';

  return (
    <View style={styles.formulaire}>
      <TextInput
        style={[styles.champ, erreur !== '' && styles.champErreur]}
        placeholder="Nouvelle tâche"
        value={titre}
        onChangeText={changerTitre}
        maxLength={60}
      />
      <Text style={styles.compteur}>{titre.length} / 60</Text>
      {erreur !== '' ? <Text style={styles.erreur}>{erreur}</Text> : null}
      <Pressable
        style={({ pressed }) => [
          styles.bouton,
          pressed && styles.boutonAppuye,
          vide && styles.boutonDesactive,
        ]}
        onPress={envoyer}
        disabled={vide}
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
  champErreur: { borderColor: couleurs.erreur },
  erreur: { color: couleurs.erreur },
  bouton: {
    backgroundColor: couleurs.primaire, borderRadius: 8,
    paddingVertical: espace.s + 4, alignItems: 'center',
  },
  boutonAppuye: { opacity: 0.7 },
  boutonDesactive: { backgroundColor: couleurs.grisClair },
  compteur: { alignSelf: 'flex-end', color: couleurs.gris, fontSize: 12 },
  boutonTexte: { color: couleurs.blanc, fontSize: 16, fontWeight: 'bold' },
});
