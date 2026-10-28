export type LanguageCode = "en" | "yo" | "bilingual";

export interface BilingualHymnVerse {
  verseNumber: number;
  englishLines: string[];
  yorubaLines: string[];
  englishChorus?: string[];
  yorubaChorus?: string[];
}

export interface Hymn {
  id: string;
  titleEnglish: string;
  titleYoruba: string;
  anchoredBy: string;
  totalVerses: number;
  linesPerVerse: number;
  hasChorus: boolean;
  isConfirmed: boolean;
  verses: BilingualHymnVerse[];
}

export interface OfficiatingMinister {
  id: string;
  name: string;
  ecclesiasticalTitle: string;
  church: string;
  confirmed: boolean;
}

export type LiturgicalSectionType =
  | "hymn"
  | "call_to_worship"
  | "prayer"
  | "biography"
  | "favourite_songs"
  | "goodnight_bid"
  | "scripture"
  | "choir"
  | "thanksgiving"
  | "recognition"
  | "appreciation"
  | "benediction"
  | "interment";

export interface ServiceItem {
  id: string;
  order: string;
  type: LiturgicalSectionType;
  title: string;
  anchor: string;
  description?: string;
  hymnId?: string;
  isConfirmed: boolean;
}

export interface FavouriteSong {
  id: string;
  title: string;
  language: LanguageCode;
  note: string;
  verses: BilingualHymnVerse[];
  isConfirmed: boolean;
}

export interface TributeItem {
  id: string;
  authorName: string;
  relationship: string;
  bodyText: string;
  date: string;
  isMock: boolean;
}

export interface MemoryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  featured?: boolean;
}

export interface CelebrationOfLifeProfile {
  fullName: string;
  displayName: string;
  birthDate: string;
  entryIntoGloryDate: string;
  burialDate: string;
  heroPortraitUrl: string;
  closingPortraitUrl: string;
  familyThankYouMessage: string;
  ministers: OfficiatingMinister[];
  servicePartOne: ServiceItem[];
  servicePartTwo: ServiceItem[];
  servicePartThree: ServiceItem[];
  tributes: TributeItem[];
  memories: MemoryPhoto[];
}
