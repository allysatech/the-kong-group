export interface BrandCharacter {
  id: 'kingu-kongu' | 'lucky-kong' | 'kingu-ramen' | 'double-cheese-please';
  name: string;
  panelLabelLines: string[];
  characterDescription: string;
  panelColor: string;
  url: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  portraitStyle: {
    top: string;
    height: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  variant?: 'default' | 'primary';
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#home', variant: 'default' },
  { label: 'ABOUT', href: '#about', variant: 'default' },
  { label: 'OUR BRANDS', href: '#brands', variant: 'default' },
  { label: 'EXPLORE', href: '#brands', variant: 'primary' },
];

export const HERO_CHARACTER = {
  name: 'Kingu Kongu',
  image: '/assets/characters/kingu-kongu-daruma.png',
  width: 1290,
  height: 1219,
  alt: 'Black Kingu Kongu daruma character with ivory face and markings, peach eye accents, two stacked K letters, skull motifs and cream furry arms',
};

export const ABOUT_PHOTOS = {
  venue: {
    src: '/assets/about/lucky-kong-venue.jpg',
    width: 1440,
    height: 1920,
    alt: 'Warm timber dining interior at Lucky Kong featuring wooden tables, chairs and Japanese hanging banners',
  },
  food: {
    src: '/assets/about/signature-dish.jpg',
    width: 1280,
    height: 998,
    alt: 'Plated seared salmon rolls topped with creamy mentaiko sauce, microgreens and savoury glaze',
  },
};

export const BRANDS: BrandCharacter[] = [
  {
    id: 'kingu-kongu',
    name: 'Kingu Kongu',
    panelLabelLines: ['KINGU KONGU'],
    characterDescription:
      'Black daruma with ivory face and markings, peach eye accents, two stacked K letters, skull motifs and cream furry arms',
    panelColor: '#BF7255',
    url: 'https://kingu-kongu.vercel.app/',
    image: '/assets/characters/kingu-kongu-daruma.png',
    imageWidth: 1290,
    imageHeight: 1219,
    alt: 'Kingu Kongu — Black daruma with ivory face and markings, peach eye accents, two stacked K letters, skull motifs and cream furry arms',
    portraitStyle: {
      top: '3.50%',
      height: '89.00%',
    },
  },
  {
    id: 'lucky-kong',
    name: 'Lucky Kong',
    panelLabelLines: ['LUCKY KONG'],
    characterDescription:
      'Green daruma with a smiling ivory face, closed green eyelids, cream furry arms and welcoming open hands',
    panelColor: '#86A83A',
    url: 'https://lucky-kong.vercel.app/',
    image: '/assets/characters/lucky-kong-daruma.png',
    imageWidth: 1614,
    imageHeight: 975,
    alt: 'Lucky Kong — Green daruma with a smiling ivory face, closed green eyelids, cream furry arms and welcoming open hands',
    portraitStyle: {
      top: '3.91%',
      height: '88.17%',
    },
  },
  {
    id: 'kingu-ramen',
    name: 'Kingu Ramen',
    panelLabelLines: ['KINGU RAMEN'],
    characterDescription:
      'Golden-yellow daruma with amber eyes, smiling face and one hand against its cheek',
    panelColor: '#ECAF3B',
    url: 'https://kingu-ramen-mu.vercel.app',
    image: '/assets/characters/kingu-ramen-daruma.png',
    imageWidth: 1208,
    imageHeight: 1302,
    alt: 'Kingu Ramen — Golden-yellow daruma with amber eyes, smiling face and one hand against its cheek',
    portraitStyle: {
      top: '3.87%',
      height: '88.25%',
    },
  },
  {
    id: 'double-cheese-please',
    name: 'Double Cheese Please',
    panelLabelLines: ['DOUBLE CHEESE', 'PLEASE'],
    characterDescription:
      'Spiky black-haired streetwear character with cyan sunglasses, black hoodie, crossed arms, chain details and blue/white sneakers',
    panelColor: '#318FAD',
    url: 'https://double-cheese-please.vercel.app/',
    image: '/assets/characters/double-cheese-please-character.png',
    imageWidth: 960,
    imageHeight: 1639,
    alt: 'Double Cheese Please — Spiky black-haired streetwear character with cyan sunglasses, black hoodie, crossed arms, chain details and blue/white sneakers',
    portraitStyle: {
      top: '6.13%',
      height: '114.73%',
    },
  },
];

export const SOCIAL_LINKS = {
  instagramUrl: 'https://www.instagram.com/thekonggroup.my/',
  instagramHandle: '@thekonggroup.my',
};
