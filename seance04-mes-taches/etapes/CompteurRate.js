import { Pressable, Text, View } from 'react-native';

export default function CompteurRate() {
  let nombre = 0;

  function ajouter() {
    nombre = nombre + 1;
    console.log(nombre); // 1, 2, 3… dans le terminal
  }

  return (
    <View>
      <Text>Appuis : {nombre}</Text>
      <Pressable onPress={ajouter}>
        <Text>+1</Text>
      </Pressable>
    </View>
  );
}
