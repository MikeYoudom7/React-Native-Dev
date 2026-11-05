// Exercices progressifs de la séance 3 : les corrigés des niveaux 1 à 6, et le niveau 7 (écran Profil).
// Chaque composant s'essaie seul : le placer dans App.js à la place de l'écran.
// Le chemin ../../ part de exercices/niveaux ; depuis src/components, il serait aussi ../../.
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { couleurs, espace, rayon } from '../../src/constants/theme';

// Niveau 1 : modifier une couleur et une taille
export function Niveau1() {
  return <Text style={n1.titre}>Mes tâches</Text>;
}

const n1 = StyleSheet.create({
  titre: { fontSize: 28, color: '#E8651A' },
});

// Niveau 2 : une carte avec padding et margin
export function Niveau2() {
  return (
    <View style={n2.page}>
      <View style={n2.carte}>
        <Text>Réviser Flexbox</Text>
      </View>
      <View style={n2.carte}>
        <Text>Préparer le thème</Text>
      </View>
    </View>
  );
}

const n2 = StyleSheet.create({
  page: { backgroundColor: '#F3F4F6', padding: 8 },
  carte: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 8,
    borderRadius: 12,
  },
});

// Niveau 3 : aligner deux éléments avec Flexbox
export function Niveau3() {
  return (
    <View style={n3.entete}>
      <Text style={n3.titre}>À faire</Text>
      <Text style={n3.compteur}>3</Text>
    </View>
  );
}

const n3 = StyleSheet.create({
  entete: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  titre: { fontSize: 18, fontWeight: 'bold' },
  compteur: { fontSize: 18, color: '#0F766E', fontWeight: 'bold' },
});

// Niveau 4 : flex: 1
export function Niveau4() {
  return (
    <View style={n4.ligne}>
      <View style={n4.logo} />
      <View style={n4.textes}>
        <Text style={n4.titre}>Mes tâches</Text>
        <Text>
          Un texte assez long pour passer à la ligne au lieu de sortir de l’écran.
        </Text>
      </View>
    </View>
  );
}

const n4 = StyleSheet.create({
  ligne: { flexDirection: 'row', gap: 16, padding: 8 },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0F766E',
  },
  textes: { flex: 1 },
  titre: { fontSize: 18, fontWeight: 'bold' },
});

// Niveau 5 : utiliser le thème
export function Niveau5() {
  return (
    <View style={n5.carte}>
      <Text style={n5.titre}>Réviser Flexbox</Text>
      <Text style={n5.texte}>Toutes les valeurs viennent du thème.</Text>
    </View>
  );
}

const n5 = StyleSheet.create({
  carte: {
    backgroundColor: couleurs.primaireClair,
    padding: espace.m,
    borderRadius: rayon,
  },
  titre: { fontSize: 16, fontWeight: 'bold', color: couleurs.primaire },
  texte: { color: couleurs.gris, marginTop: espace.s },
});

// Niveau 6 : afficher une image
export function Niveau6() {
  return (
    <View style={n6.ligne}>
      <Image source={require('../../assets/logo.png')} style={n6.logo} />
      <Image source={require('../../assets/icon.png')} style={n6.avatar} />
    </View>
  );
}

const n6 = StyleSheet.create({
  ligne: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    backgroundColor: '#0F766E',
  },
  logo: { width: 56, height: 56 },
  avatar: { width: 64, height: 64, borderRadius: 32 },
});

// Niveau 7 : un écran complet, « Mon profil »
export function Niveau7() {
  return (
    <ScrollView style={n7.page} contentContainerStyle={n7.contenu}>
      <View style={n7.bandeau}>
        <Image source={require('../../assets/icon.png')} style={n7.avatar} />
        <View style={n7.identite}>
          <Text style={n7.nom}>Awa Diallo</Text>
          <Text style={n7.role}>Apprenante React Native</Text>
        </View>
      </View>

      <View style={n7.stats}>
        <View style={n7.stat}>
          <Text style={n7.nombre}>3</Text>
          <Text style={n7.libelle}>à faire</Text>
        </View>
        <View style={n7.stat}>
          <Text style={n7.nombre}>2</Text>
          <Text style={n7.libelle}>terminées</Text>
        </View>
      </View>

      <View style={n7.carte}>
        <Text style={n7.titre}>Objectif de la semaine</Text>
        <Text style={n7.texte}>Terminer l’écran principal de mes-taches.</Text>
      </View>
    </ScrollView>
  );
}

const n7 = StyleSheet.create({
  page: { flex: 1, backgroundColor: couleurs.fond },
  contenu: { padding: espace.m, gap: espace.m },
  bandeau: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: espace.m,
    backgroundColor: couleurs.primaire,
    padding: espace.m,
    borderRadius: rayon,
  },
  avatar: { width: 64, height: 64, borderRadius: 32 },
  identite: { flex: 1 },
  nom: { fontSize: 20, fontWeight: 'bold', color: couleurs.blanc },
  role: { color: couleurs.primaireClair, marginTop: 4 },
  stats: { flexDirection: 'row', gap: espace.s },
  stat: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: couleurs.carte,
    padding: espace.m,
    borderRadius: rayon,
  },
  nombre: { fontSize: 24, fontWeight: 'bold', color: couleurs.primaire },
  libelle: { color: couleurs.gris },
  carte: {
    backgroundColor: couleurs.carte,
    padding: espace.m,
    borderRadius: rayon,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)',
  },
  titre: { fontSize: 16, fontWeight: '600', color: couleurs.texte },
  texte: { color: couleurs.gris, marginTop: espace.s },
});
