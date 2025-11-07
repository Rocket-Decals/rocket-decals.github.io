// Translation dictionaries

import { Language } from '@/types';

export const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navbar
    'nav.stickers': 'Stickers',
    'nav.discover': 'Découvrir',
    'nav.reviews': 'Avis',
    'nav.tutorial': 'Tutoriel',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Rocket Decals',
    'hero.subtitle': 'Téléchargez nos stickers customs !',
    'hero.cta.discover': 'Découvrir les stickers',
    'hero.cta.order': 'Commander un sticker',
    'hero.latestAdditions': 'Derniers ajouts :',
    
    // Decals
    'decals.search.placeholder': 'Rechercher un sticker...',
    'decals.teams': 'Équipes & Créateurs',
    'decals.clients': 'Clients',
    'decals.view': 'Voir',
    'decals.new': 'Nouveau',
    'decals.downloadAll': 'Télécharger tout',
    'decals.share': 'Partager',
    'decals.linkCopied': 'Lien copié !',
    'decals.noResults.teams': 'Aucun résultat dans Équipes & Créateurs',
    'decals.noResults.clients': 'Aucun résultat dans Clients',
    'decals.cta.text': 'Commande ton sticker via notre serveur Discord',
    
    // Downloads
    'download.fennec': 'Télécharger pour Fennec',
    'download.dominus': 'Télécharger pour Dominus',
    'download.octane': 'Télécharger pour Octane',
    'download.wheels': 'Télécharger les roues',
    
    // Reviews
    'reviews.title': 'Avis',
    
    // Tutorial
    'tutorial.title': 'Tutoriel',
    'tutorial.step': 'Étape',
    'tutorial.step1.title': 'Étape 1',
    'tutorial.step1.text': 'Ouvrir BakkesMod et Rocket League, puis installer AlphaConsole via le lien suivant :',
    'tutorial.step2.title': 'Étape 2',
    'tutorial.step2.text1': 'Sur la fenêtre de BakkesMod, ouvrir la section "File" puis cliquer sur "Open BakkesMod folder".',
    'tutorial.step2.text2': 'Suivre le chemin "data/acplugin/DecalTextures" pour les stickers et "data/acplugin/WheelTextures" pour les roues.',
    'tutorial.step3.title': 'Étape 3',
    'tutorial.step3.text1': 'Dans ce dossier, glisser les fichiers du dossier zip et relancer le jeu.',
    'tutorial.step3.text2': 'Une fois le jeu relancé, presser F5. Une fenêtre va s\'ouvrir, dans l\'onglet "Car", sélectionner le sticker voulu dans la catégorie "Decal Textures" ou "Wheel Textures" pour les roues.',
    'tutorial.step4.title': 'Étape 4',
    'tutorial.step4.text': 'Presser F2 et accéder à l\'onglet "Items". Sélectionner le sticker "{nom_voiture} : Complexity (Visiteurs) (2)" pour les stickers de voitures ou "Limitless 2025" pour les stickers universels. Sélectionner "Looper" pour les roues.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.raito.role': 'Artiste 3D',
    'contact.raito.description': 'Créateur des designs de stickers Rocket League',
    'contact.erlow.role': 'Développeur Web',
    'contact.erlow.description': 'Créateur du site web et de l\'interface, assistant dans la création de stickers',
    'contact.rd.role': 'Contact',
    'contact.rd.description': 'Contactez-nous par email ou rejoignez notre communauté Discord',
    'contact.pxr.role': 'Partenaire',
    'contact.pxr.description': 'Team esport partenaire',
    'contact.trustedUs': 'Ils nous ont fait confiance',
    'contact.thanks': 'Remerciements',
    'contact.seeMore': 'Autres réseaux',
    'contact.raito.linksLabel': 'Voir les autres réseaux de Raito',
    'contact.erlow.linksLabel': 'Voir les autres réseaux d\'Erlow',
    
    // Footer
    'footer.copyright': '© Rocket Decals. Tous droits réservés.',
    'footer.credits': 'Decals by Raito · Website by Erlow',
    
    // Modal
    'modal.close': 'Fermer',
    
    // Collection
    'collection.title': 'Collection de Cartes',
    'collection.progress': 'Progression :',
    'collection.discovered': 'cartes découvertes',
    'collection.downloadReward': '🏆 Télécharger le Sticker Exclusif',
    
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Une erreur est survenue',
    'common.videoNotSupported': 'Votre navigateur ne supporte pas la lecture de vidéos.',
  },
  
  en: {
    // Navbar
    'nav.stickers': 'Decals',
    'nav.discover': 'Discover',
    'nav.reviews': 'Reviews',
    'nav.tutorial': 'Tutorial',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Rocket Decals',
    'hero.subtitle': 'Download our custom decals!',
    'hero.cta.discover': 'Discover decals',
    'hero.cta.order': 'Order a decal',
    'hero.latestAdditions': 'Latest additions:',
    
    // Decals
    'decals.search.placeholder': 'Search a decal...',
    'decals.teams': 'Teams & Creators',
    'decals.clients': 'Customers',
    'decals.view': 'View',
    'decals.new': 'New',
    'decals.downloadAll': 'Download all',
    'decals.share': 'Share',
    'decals.linkCopied': 'Link copied!',
    'decals.noResults.teams': 'No results in Teams & Creators',
    'decals.noResults.clients': 'No results in Customers',
    'decals.cta.text': 'Order your decal via our Discord server',
    
    // Downloads
    'download.fennec': 'Download for Fennec',
    'download.dominus': 'Download for Dominus',
    'download.octane': 'Download for Octane',
    'download.wheels': 'Download wheels',
    
    // Reviews
    'reviews.title': 'Reviews',
    
    // Tutorial
    'tutorial.title': 'Tutorial',
    'tutorial.step': 'Step',
    'tutorial.step1.title': 'Step 1',
    'tutorial.step1.text': 'Open BakkesMod and Rocket League, then install AlphaConsole via the following link:',
    'tutorial.step2.title': 'Step 2',
    'tutorial.step2.text1': 'In the BakkesMod window, open the "File" section and click on "Open BakkesMod folder".',
    'tutorial.step2.text2': 'Follow the path "data/acplugin/DecalTextures" for decals and "data/acplugin/WheelTextures" for wheels.',
    'tutorial.step3.title': 'Step 3',
    'tutorial.step3.text1': 'In this folder, drag the files from the zip folder and restart the game.',
    'tutorial.step3.text2': 'Once the game is relaunched, press F5. A window will open, and in the "Car" tab, select the desired decal in the "Decal Textures" category or "Wheel Textures" for wheels.',
    'tutorial.step4.title': 'Step 4',
    'tutorial.step4.text': 'Press F2 and go to the "Items" tab. Select the decal "{car_name}: Complexity (Visitors) (2)" for car decals or "Limitless 2025" for universal decals. Select "Looper" for wheels.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.raito.role': '3D Artist',
    'contact.raito.description': 'Creator of Rocket League decal designs',
    'contact.erlow.role': 'Web Developer',
    'contact.erlow.description': 'Creator of the website and interface, assistant in decal creation',
    'contact.rd.role': 'Contact',
    'contact.rd.description': 'Contact us by email or join our Discord community',
    'contact.pxr.role': 'Partner',
    'contact.pxr.description': 'Partner esport team',
    'contact.trustedUs': 'They trusted us',
    'contact.thanks': 'Thanks',
    'contact.seeMore': 'Other networks',
    'contact.raito.linksLabel': 'View Raito\'s other networks',
    'contact.erlow.linksLabel': 'View Erlow\'s other networks',
    
    // Footer
    'footer.copyright': '© Rocket Decals. All rights reserved.',
    'footer.credits': 'Decals by Raito · Website by Erlow',
    
    // Modal
    'modal.close': 'Close',
    
    // Collection
    'collection.title': 'Card Collection',
    'collection.progress': 'Progress:',
    'collection.discovered': 'cards discovered',
    'collection.downloadReward': '🏆 Download Exclusive Decal',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.videoNotSupported': 'Your browser does not support video playback.',
  },
};

/**
 * Get translation by key
 */
export function translate(key: string, language: Language): string {
  return translations[language][key] || key;
}

