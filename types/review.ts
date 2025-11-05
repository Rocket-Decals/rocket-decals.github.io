// Types for reviews

import { LocalizedText } from './decal';

export interface ReviewUser {
  name: string;
  firstLetter: string;
}

export interface Review {
  id: string;
  user: ReviewUser;
  text: LocalizedText;
}

