// Exercice final de la séance 3 : l'écran « Mes contacts ».
// Il vérifie toutes les notions : styles combinés, Flexbox, espacements, thème, image.
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { couleurs, espace, rayon } from '../../src/constants/theme';

const contacts = [
  { id: 1, nom: 'Awa Diallo', metier: 'Développeuse mobile', favori: true, actif: true },
  { id: 2, nom: 'Paul Mbarga', metier: 'Designer d’interfaces', favori: false, actif: true },
  { id: 3, nom: 'Inès Kamga', metier: 'Testeuse', favori: false, actif: false },
];

function ContactCard({ contact }) {
  return (
    <View style={[styles.carte, !contact.actif && styles.carteInactive]}>
      <Image source={require('../../assets/icon.png')} style={styles.avatar} />
      <View style={styles.infos}>
        <Text style={styles.nom}>{contact.nom}</Text>
        <Text style={styles.metier}>{contact.metier}</Text>
      </View>
      {contact.favori ? <Text style={styles.favori}>Favori</Text> : null}
    </View>
  );
}

export default function MesContacts() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.contenu}>
      <View style={styles.entete}>
        <Text style={styles.titre}>Mes contacts</Text>
        <Text style={styles.compteur}>{contacts.length}</Text>
      </View>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: couleurs.fond },
  contenu: { padding: espace.m },
  entete: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: espace.m,
  },
  titre: { fontSize: 24, fontWeight: 'bold', color: couleurs.texte },
  compteur: {
    backgroundColor: couleurs.primaireClair,
    color: couleurs.primaire,
    fontWeight: 'bold',
    paddingHorizontal: espace.s,
    borderRadius: 10,
    overflow: 'hidden',
  },
  carte: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: espace.m,
    backgroundColor: couleurs.carte,
    padding: espace.m,
    marginBottom: espace.s,
    borderRadius: rayon,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)',
  },
  carteInactive: { opacity: 0.5 },
  avatar: { width: 48, height: 48, borderRadius: 24 },
  infos: { flex: 1 },
  nom: { fontSize: 16, fontWeight: '600', color: couleurs.texte },
  metier: { color: couleurs.gris, marginTop: 2 },
  favori: { color: couleurs.primaire, fontWeight: 'bold' },
});
