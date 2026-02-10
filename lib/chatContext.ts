/**
 * Contexte limité du chatbot : base de connaissances Rocket Decals.
 * Permet de matcher les questions utilisateur à des réponses sans appel LLM externe.
 */

export type IntentId =
  | 'order'
  | 'install'
  | 'discord'
  | 'wheels'
  | 'who'
  | 'price'
  | 'downloadFree'
  | 'pcOnly'
  | 'alpha'
  | 'tutorial'
  | 'contact'
  | 'greeting'
  | 'thanks'
  | 'default';

export interface Intent {
  id: IntentId;
  /** Mots ou phrases (en minuscules) qui déclenchent cette intention. */
  keywords: string[];
  /** Clé de traduction pour la réponse. */
  replyKey: string;
  /** Poids optionnel pour prioriser (ex: "commander" plus fort que "commande"). */
  weight?: number;
}

/**
 * Intents avec mots-clés FR + EN pour couvrir les deux langues.
 * Plus il y a de synonymes, plus le bot semble "comprendre" la question.
 */
export const CHAT_INTENTS: Intent[] = [
  {
    id: 'order',
    replyKey: 'chat.reply.order',
    weight: 2,
    keywords: [
      'commander', 'commande', 'order', 'achat', 'buy', 'acheter', 'obtenir',
      'avoir un sticker', 'get a decal', 'passer commande', 'place an order',
      'comment avoir', 'how to get', 'where to order', 'où commander', 'ou commander',
      'commander un sticker', 'order a decal', 'acheter un decal', 'buy a decal',
      'custom', 'perso', 'personnalisé', 'personalized', 'sur mesure', 'custom decal',
      'comment commander', 'how to order', 'ou passer commande', 'where can i order',
      'je veux commander', 'i want to order', 'prendre une commande', 'take an order',
    ],
  },
  {
    id: 'install',
    replyKey: 'chat.reply.install',
    weight: 2,
    keywords: [
      'installer', 'install', 'installation', 'bakkesmod', 'bakkes', 'tutoriel',
      'tutorial', 'étape', 'step', 'dossier', 'folder', 'fichier', 'file',
      'decals', 'stickers', 'comment faire', 'how to', 'mettre', 'put',
      'placer', 'decaltextures', 'wheeltextures', 'alpha', 'alphaconsole',
      'comment installer', 'how to install', 'ou mettre les fichiers', 'where to put',
      'open bakkesmod folder', 'data acplugin', 'decal textures', 'wheel textures',
      'ça marche pas', 'not working', 'ne fonctionne pas', 'does not work',
      'aide installation', 'install help', 'probleme', 'problem', 'bug',
    ],
  },
  {
    id: 'wheels',
    replyKey: 'chat.reply.wheels',
    weight: 2,
    keywords: [
      'roues', 'wheels', 'roue', 'wheel', 'wheeltextures', 'wheel textures',
      'looper', 'installer les roues', 'install wheels', 'roues customs',
      'custom wheels', 'ou mettre les roues', 'where to put wheels',
      'wheel textures folder', 'dossier roues',
    ],
  },
  {
    id: 'discord',
    replyKey: 'chat.reply.discord',
    weight: 2,
    keywords: [
      'discord', 'rejoindre', 'join', 'lien', 'link', 'serveur', 'server',
      'communauté', 'community', 'contact discord', 'invite discord',
      'discord invite', 'lien discord', 'discord link', 'rejoins', 'rejoindre le serveur',
      'join the server', 'adresse discord', 'discord url', 'lien du serveur',
    ],
  },
  {
    id: 'who',
    replyKey: 'chat.reply.who',
    weight: 2,
    keywords: [
      'qui', 'who', 'qui êtes-vous', 'who are you', 'c\'est quoi', 'what is',
      'raito', 'erlow', 'équipe', 'team', 'créateur', 'creator',
      'qui a fait', 'who made', 'who created', 'qui a créé', 'qui a cree',
      'c\'est qui qui a fait', 'c est qui qui a fait', 'qui fait', 'who made rocket decals',
      'rocket decals', 'derrière', 'behind', 'fondateur', 'founder', 'fait le site',
      'made the site', 'créé le site', 'created the site', 'auteur', 'author',
      'présenté par', 'presented by', 'c\'est quoi rocket decals', 'what is rocket decals',
      'qui gère', 'who runs', 'qui s\'en occupe', 'artiste', 'artist', 'developpeur', 'developer',
      'qui fait les stickers', 'who makes the decals', 'équipe rocket decals',
    ],
  },
  {
    id: 'price',
    replyKey: 'chat.reply.price',
    weight: 2,
    keywords: [
      'prix', 'price', 'tarif', 'cost', 'costs', 'payant', 'paid',
      'combien', 'how much', 'coût', 'coute', 'coûte', 'coutent', 'ça coûte', 'ca coute',
      'combien ça coûte', 'combien ca coute', 'how much does it cost',
      'payer', 'pay', 'paying', 'tarifs', 'pricing', 'cher', 'expensive', 'pas cher',
      'prix d\'un sticker', 'price of a decal', 'tarif commande', 'order price',
    ],
  },
  {
    id: 'downloadFree',
    replyKey: 'chat.reply.downloadFree',
    weight: 2,
    keywords: [
      'gratuit', 'free', 'c\'est gratuit', 'c est gratuit', 'gratuit ou payant', 'free or paid',
      'is it free', 'telecharger gratuit', 'télécharger gratuit', 'free download', 'download free',
      'decals du site', 'decals sur le site', 'decals on the site', 'stickers du site',
      'site gratuit', 'free on site', 'telecharger', 'télécharger', 'download',
      'téléchargement gratuit', 'free to download', 'sans payer', 'without paying',
      'decals gratuits', 'free decals', 'stickers gratuits', 'gratuitement', 'for free',
    ],
  },
  {
    id: 'pcOnly',
    replyKey: 'chat.reply.pcOnly',
    weight: 2,
    keywords: [
      'pc', 'ordinateur', 'computer', 'console', 'xbox', 'playstation', 'ps4', 'ps5',
      'switch', 'nintendo', 'mac', 'bakkesmod pc', 'only pc', 'que sur pc', 'juste pc',
      'pc seulement', 'pc only', 'marche sur console', 'work on console', 'xbox compatible',
      'playstation compatible', 'epic games', 'steam', 'fonctionne sur', 'works on',
      'compatible console', 'console compatible', 'pas sur console', 'not on console',
    ],
  },
  {
    id: 'alpha',
    replyKey: 'chat.reply.alpha',
    weight: 2,
    keywords: [
      'alphaconsole', 'alpha console', 'f5', 'f2', 'limitless', 'looper',
      'decals universels', 'universal decals', 'press f5', 'appuyer f5',
      'onglet car', 'car tab', 'items tab', 'onglet items', 'decal textures',
      'wheel textures', 'choisir le sticker', 'select decal', 'body car',
    ],
  },
  {
    id: 'tutorial',
    replyKey: 'chat.reply.install',
    weight: 2,
    keywords: [
      'tutoriel', 'tutorial', 'guide', 'aide', 'help', 'étape par étape',
      'step by step', 'comment faire', 'how do i', 'explique', 'explain',
      'procedure', 'procédure', 'marche a suivre', 'instructions', 'mode d\'emploi',
    ],
  },
  {
    id: 'contact',
    replyKey: 'chat.reply.contact',
    weight: 2,
    keywords: [
      'contact', 'contacter', 'email', 'mail', 'écrire', 'write', 'joindre',
      'reach', 'get in touch', 'envoyer un message', 'send a message',
      'section contact', 'contact section', 'équipe', 'team', 'liens', 'links',
    ],
  },
  {
    id: 'greeting',
    replyKey: 'chat.reply.greeting',
    keywords: [
      'salut', 'hello', 'hi', 'bonjour', 'hey', 'coucou', 'yo', 'bonsoir',
      'bonsoir', 'good morning', 'good evening', 'quoi de neuf', 'what\'s up',
    ],
  },
  {
    id: 'thanks',
    replyKey: 'chat.reply.thanks',
    keywords: [
      'merci', 'thanks', 'thank you', 'super', 'parfait', 'ok', 'd\'accord',
      'okay', 'top', 'nickel', 'cool', 'genial', 'awesome', 'great',
    ],
  },
];

const DEFAULT_REPLY_KEY = 'chat.reply.default';

/**
 * Enlève les accents pour faciliter le matching (coute = coûte, etc.).
 */
function removeAccents(s: string): string {
  return s.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

/**
 * Normalise le texte pour le matching (minuscules, trim, collapse espaces, sans accents).
 */
function normalize(text: string): string {
  return removeAccents(text.toLowerCase().trim().replace(/\s+/g, ' '));
}

/**
 * Calcule un score pour une intention selon le message utilisateur.
 * Plus il y a de mots-clés présents (ou de phrases), plus le score est élevé.
 */
function scoreIntent(message: string, intent: Intent): number {
  const normalized = normalize(message);
  const words = normalized.split(/\s+/);
  let score = 0;

  for (const keyword of intent.keywords) {
    const k = removeAccents(keyword.toLowerCase().trim());
    if (k.length === 0) continue;
    // Match phrase entière = plus fort
    if (normalized.includes(k)) {
      score += k.split(/\s+/).length * 2;
    } else {
      // Match mot par mot (avec accents normalisés)
      const kwWords = k.split(/\s+/);
      for (const w of kwWords) {
        if (w.length < 2) continue;
        if (words.some((word) => word === w || word.includes(w) || w.includes(word))) {
          score += 1;
        }
      }
    }
  }

  return (intent.weight ?? 1) * score;
}

/**
 * Retourne la clé de traduction de la réponse la plus pertinente pour le message.
 * Prend optionnellement en compte le dernier message du bot (contexte) pour les follow-ups.
 */
export function getReplyKey(
  userMessage: string,
  lastBotReplyKey?: string
): string {
  const trimmed = userMessage.trim();
  if (!trimmed) return DEFAULT_REPLY_KEY;

  const lower = normalize(trimmed);

  // Follow-up court après une réponse "install" → wheels ou rappel install
  if (lastBotReplyKey === 'chat.reply.install' && trimmed.length < 80) {
    if (/\b(roues?|wheels?|wheeltextures?|looper)\b/.test(lower)) return 'chat.reply.wheels';
    if (/\b(oui|yes|ok|d\'accord|and|et|sticker|decal)\b/.test(lower)) return 'chat.reply.install';
  }

  // Après "who" : précision sur raito / erlow → garder who
  if (lastBotReplyKey === 'chat.reply.who' && trimmed.length < 50) {
    if (/\b(raito|erlow|artiste|dev|developpeur|3d|site)\b/.test(lower)) return 'chat.reply.who';
  }

  // Après "order" ou "price" : question sur custom/perso → downloadFree (distinction gratuit/payant)
  if ((lastBotReplyKey === 'chat.reply.order' || lastBotReplyKey === 'chat.reply.price') && trimmed.length < 60) {
    if (/\b(gratuit|free|custom|perso|sur mesure|site|telecharger)\b/.test(lower)) return 'chat.reply.downloadFree';
  }

  let bestKey = DEFAULT_REPLY_KEY;
  let bestScore = 0;

  for (const intent of CHAT_INTENTS) {
    const s = scoreIntent(trimmed, intent);
    if (s > bestScore) {
      bestScore = s;
      bestKey = intent.replyKey;
    }
  }

  return bestKey;
}
