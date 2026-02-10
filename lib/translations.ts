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
    'hero.cta.playMiniGame': 'Jouer à notre mini-jeu',
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

    // Chatbot
    'chat.title': 'Rocket Decals',
    'chat.bubbleLabel': 'Ouvrir le chat',
    'chat.welcome': 'Salut ! Comment puis-je t\'aider ?',
    'chat.welcomeSub': 'Choisis une question ou écris ton message :',
    'chat.suggest.howOrder': 'Comment commander un sticker ?',
    'chat.suggest.howInstall': 'Comment installer les stickers (BakkesMod) ?',
    'chat.suggest.discord': 'Rejoindre le Discord Rocket Decals',
    'chat.suggest.who': 'Qui est derrière Rocket Decals ?',
    'chat.placeholder': 'Écris ton message...',
    'chat.send': 'Envoyer',
    'chat.reply.order': 'Pour commander un sticker, passe par notre serveur Discord ! Tu y trouveras toutes les infos et pourras passer commande directement : https://discord.gg/hzwB24PfaG',
    'chat.reply.install': 'Consulte la section Tutoriel sur la page : on y explique étape par étape comment installer BakkesMod, AlphaConsole et placer les fichiers dans le bon dossier. En résumé : BakkesMod → Open BakkesMod folder → data/acplugin/DecalTextures (ou WheelTextures pour les roues).',
    'chat.reply.discord': 'Rejoins-nous sur Discord : c\'est là qu\'on gère les commandes, les nouveautés et la communauté : https://discord.gg/hzwB24PfaG',
    'chat.reply.wheels': 'Pour les roues, c\'est la même procédure que les stickers : place les fichiers dans le dossier "data/acplugin/WheelTextures" de BakkesMod. En jeu, appuie sur F2 → onglet Items → sélectionne "Looper" pour voir tes roues customs.',
    'chat.reply.who': 'Rocket Decals, c\'est Raito (création des stickers) et Erlow (site et interface). On propose des stickers customs pour Rocket League, compatibles BakkesMod et AlphaConsole. Tu peux voir l\'équipe dans la section Contact !',
    'chat.reply.price': 'Les infos tarifs et commandes se passent sur notre serveur Discord : https://discord.gg/hzwB24PfaG Rejoins-nous pour voir les prix et passer commande !',
    'chat.reply.downloadFree': 'Les decals présentés sur le site, tu peux les télécharger gratuitement. Par contre, pour commander un decal perso (sur mesure), les tarifs sont sur notre Discord : https://discord.gg/hzwB24PfaG',
    'chat.reply.pcOnly': 'Ça marche uniquement sur PC : BakkesMod (et donc nos decals) n\'existe que sur PC, pas sur console (Xbox, PlayStation, Switch).',
    'chat.reply.alpha': 'On utilise AlphaConsole (via BakkesMod) pour afficher les decals. Après avoir mis les fichiers dans DecalTextures ou WheelTextures, relance le jeu puis F5 pour choisir le sticker, et F2 → Items pour le body (ex. Limitless 2025) ou Looper pour les roues.',
    'chat.reply.contact': 'Tu peux nous joindre sur Discord (idéal pour les commandes) : https://discord.gg/hzwB24PfaG Ou consulte la section Contact du site pour l\'équipe et les autres liens.',
    'chat.reply.greeting': 'Salut ! Je suis là pour t\'aider sur les stickers Rocket Decals : commandes, installation BakkesMod, Discord… Pose ta question ou choisis une suggestion ci-dessous.',
    'chat.reply.thanks': 'Avec plaisir ! Si tu as d\'autres questions, n\'hésite pas. Sinon, à bientôt sur le site ou sur Discord !',
    'chat.reply.default': 'Pour les commandes et l\'installation, tout est sur le site (section Tutoriel et Contact). Pour des questions précises, rejoins notre Discord : https://discord.gg/hzwB24PfaG',
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
    'hero.cta.playMiniGame': 'Play our mini-game',
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

    // Chatbot
    'chat.title': 'Rocket Decals',
    'chat.bubbleLabel': 'Open chat',
    'chat.welcome': 'Hi! How can I help you?',
    'chat.welcomeSub': 'Pick a question or type your message:',
    'chat.suggest.howOrder': 'How do I order a decal?',
    'chat.suggest.howInstall': 'How do I install decals (BakkesMod)?',
    'chat.suggest.discord': 'Join Rocket Decals Discord',
    'chat.suggest.who': 'Who is behind Rocket Decals?',
    'chat.placeholder': 'Type your message...',
    'chat.send': 'Send',
    'chat.reply.order': 'To order a decal, head to our Discord server! You\'ll find all the info and can place your order there: https://discord.gg/hzwB24PfaG',
    'chat.reply.install': 'Check the Tutorial section on the page: we explain step by step how to install BakkesMod, AlphaConsole and where to put the files. In short: BakkesMod → Open BakkesMod folder → data/acplugin/DecalTextures (or WheelTextures for wheels).',
    'chat.reply.discord': 'Join us on Discord: that\'s where we handle orders, news and the community: https://discord.gg/hzwB24PfaG',
    'chat.reply.wheels': 'For wheels, same process as decals: put the files in BakkesMod\'s "data/acplugin/WheelTextures" folder. In-game, press F2 → Items tab → select "Looper" to see your custom wheels.',
    'chat.reply.who': 'Rocket Decals is Raito (decal designs) and Erlow (website and interface). We offer custom Rocket League decals, compatible with BakkesMod and AlphaConsole. Check the Contact section to meet the team!',
    'chat.reply.price': 'Pricing and orders are handled on our Discord server: https://discord.gg/hzwB24PfaG Join us to see prices and place an order!',
    'chat.reply.downloadFree': 'The decals on the site you can download for free. For ordering a custom/personal decal, prices are on our Discord: https://discord.gg/hzwB24PfaG',
    'chat.reply.pcOnly': 'It only works on PC: BakkesMod (and therefore our decals) is only available on PC, not on console (Xbox, PlayStation, Switch).',
    'chat.reply.alpha': 'We use AlphaConsole (via BakkesMod) to display decals. After placing files in DecalTextures or WheelTextures, restart the game then press F5 to pick the decal, and F2 → Items for the body (e.g. Limitless 2025) or Looper for wheels.',
    'chat.reply.contact': 'You can reach us on Discord (best for orders): https://discord.gg/hzwB24PfaG Or check the Contact section for team info and other links.',
    'chat.reply.greeting': 'Hi! I\'m here to help with Rocket Decals: ordering, BakkesMod installation, Discord… Ask a question or pick a suggestion below.',
    'chat.reply.thanks': 'You\'re welcome! If you have more questions, just ask. See you on the site or on Discord!',
    'chat.reply.default': 'For ordering and installation, everything is on the site (Tutorial and Contact sections). For specific questions, join our Discord: https://discord.gg/hzwB24PfaG',
  },
};

/**
 * Get translation by key
 */
export function translate(key: string, language: Language): string {
  return translations[language][key] || key;
}

