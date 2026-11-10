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
    left?: string;
  };
}

export interface AssembleCharacter {
  id: string;
  brandName: string;
  url: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  scaleHeight: string;
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

export const ABOUT_CHARACTERS = {
  dcp: {
    src: '/assets/about/about-dcp.png',
    width: 306,
    height: 212,
    alt: 'Double Cheese Please character with black spiky hair and cyan sunglasses lying on his stomach with his sneakered feet raised',
  },
  kinguKongu: {
    src: '/assets/about/about-kingu-kongu.png',
    width: 260,
    height: 231,
    alt: 'Black Kingu Kongu daruma with cream furry arms, one hand near its forehead and orange accent marks',
  },
  luckyKong: {
    src: '/assets/about/about-lucky-kong.png',
    width: 300,
    height: 257,
    alt: 'Green smiling Lucky Kong daruma with raised cream furry arms',
  },
  kinguRamen: {
    src: '/assets/about/about-kingu-ramen.png',
    width: 281,
    height: 248,
    alt: 'Yellow Kingu Ramen daruma with raised hands',
  },
};

export const ASSEMBLE_CHARACTERS: AssembleCharacter[] = [
  {
    id: 'assemble-kingu-kongu',
    brandName: 'Kingu Kongu',
    url: 'https://kingu-kongu.vercel.app/',
    src: '/assets/characters/stage-kingu-kongu.png',
    width: 747,
    height: 887,
    alt: 'Kingu Kongu — Smiling black daruma character with hands together',
    scaleHeight: '59%',
  },
  {
    id: 'assemble-lucky-kong',
    brandName: 'Lucky Kong',
    url: 'https://lucky-kong.vercel.app/',
    src: '/assets/characters/stage-lucky-kong.png',
    width: 785,
    height: 851,
    alt: 'Lucky Kong — Shy green daruma character touching index fingers together',
    scaleHeight: '57%',
  },
  {
    id: 'assemble-kingu-ramen',
    brandName: 'Kingu Ramen',
    url: 'https://kingu-ramen-mu.vercel.app',
    src: '/assets/characters/stage-kingu-ramen.png',
    width: 775,
    height: 893,
    alt: 'Kingu Ramen — Playful golden-yellow daruma character sticking its tongue out',
    scaleHeight: '59%',
  },
  {
    id: 'assemble-dcp-1',
    brandName: 'Double Cheese Please',
    url: 'https://double-cheese-please.vercel.app/',
    src: '/assets/characters/stage-dcp-1.png',
    width: 506,
    height: 1001,
    alt: 'Double Cheese Please character in black hoodie and cyan sunglasses flashing double peace signs',
    scaleHeight: '83%',
  },
  {
    id: 'assemble-dcp-2',
    brandName: 'Double Cheese Please',
    url: 'https://double-cheese-please.vercel.app/',
    src: '/assets/characters/stage-dcp-2.png',
    width: 402,
    height: 941,
    alt: 'Double Cheese Please character in blue cap, cream tee and dark cargo pants with arms crossed',
    scaleHeight: '78%',
  },
];

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
      top: '11%',
      height: '62%',
      left: '49.5%',
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
      top: '19.5%',
      height: '43%',
      left: '50%',
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
      top: '10.5%',
      height: '63.5%',
      left: '50.5%',
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
      top: '5.5%',
      height: '88.5%',
      left: '52.5%',
    },
  },
];

export const SOCIAL_LINKS = {
  instagramUrl: 'https://www.instagram.com/thekonggroup.my/',
  instagramHandle: '@thekonggroup.my',
};
