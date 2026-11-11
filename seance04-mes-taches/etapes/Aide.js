import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

// Un état booléen : afficher ou masquer un texte.
export default function Aide() {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Pressable onPress={() => setVisible(!visible)}>
        <Text>{visible ? 'Masquer l’aide' : 'Afficher l’aide'}</Text>
      </Pressable>
      {visible ? <Text>Touchez une tâche pour la cocher.</Text> : null}
    </View>
  );
}
