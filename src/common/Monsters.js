const MONSTER_IMAGE_PATH = './images/monsters/'

const MONSTERS = {
  NONE: null,

  BLUE_SLIME: {
    label: 'Blue Slime',
    path: MONSTER_IMAGE_PATH + 'blue-slime.webp',
    scale: 1.15,
    x: -90,
    y: -7,
    max_health: 5,
    health: 5,
    attack: 2,
  },

  DEATH_KNIGHT: {
    label: 'Death Knight',
    path: MONSTER_IMAGE_PATH + 'death-knight.webp',
    scale: 1.5,
    x: -22,
    y: -4,
    max_health: 250,
    health: 250,
    attack: 30,
  },

  GIANT_RAT: {
    label: 'Giant Rat',
    path: MONSTER_IMAGE_PATH + 'giant-rat.webp',
    x: -80,
    y: -11,
    max_health: 50,
    health: 50,
    attack: 10,
  },

  GOBLIN: {
    label: 'Goblin',
    path: MONSTER_IMAGE_PATH + 'goblin.webp',
    scale: 1.1,
    x: -14,
    y: -33,
    max_health: 20,
    health: 20,
    attack: 5,
  },

  GREEN_SLIME: {
    label: 'Green Slime',
    path: MONSTER_IMAGE_PATH + 'green-slime.webp',
    scale: 1.2,
    x: -17,
    y: -18,
    max_health: 10,
    health: 10,
    attack: 3,
  },

  GRIM_REAPER: {
    label: 'Grim Reaper',
    path: MONSTER_IMAGE_PATH + 'grim-reaper.webp',
    scale: 1.2,
    x: -14,
    y: -25,
    max_health: 150,
    health: 150,
    attack: 40,
  },

  HOBGOBLIN: {
    label: 'Hobgoblin',
    path: MONSTER_IMAGE_PATH + 'hobgoblin.webp',
    scale: 1.1,
    x: -73,
    y: -20,
    max_health: 80,
    health: 80,
    attack: 15,
  },

  KOBOLD: {
    label: 'Kobold',
    path: MONSTER_IMAGE_PATH + 'kobold.webp',
    scale: 1.4,
    x: -30,
    y: -30,
    max_health: 25,
    health: 25,
    attack: 5,
  },

  LIZARDMAN: {
    label: 'Lizardman',
    path: MONSTER_IMAGE_PATH + 'lizard-man.webp',
    scale: 1.05,
    x: -20,
    y: -14,
    max_health: 40,
    health: 40,
    attack: 10,
  },

  MIMIC: {
    label: 'Mimic',
    path: MONSTER_IMAGE_PATH + 'mimic.webp',
    scale: 1.25,
    x: -65,
    y: 4,
    max_health: 50,
    health: 50,
    attack: 12,
  },

  MINOTAUR: {
    label: 'Minotaur',
    path: MONSTER_IMAGE_PATH + 'minotaur.webp',
    scale: 1.35,
    x: -56,
    y: -2,
    max_health: 150,
    health: 150,
    attack: 20,
  },

  ORC: {
    label: 'Orc',
    path: MONSTER_IMAGE_PATH + 'orc.webp',
    scale: 1.1,
    x: -27,
    y: -27,
    max_health: 60,
    health: 60,
    attack: 15,
  },

  PYTHON: {
    label: 'Python',
    path: MONSTER_IMAGE_PATH + 'python.webp',
    scale: 1.2,
    x: -99,
    y: 82,
    max_health: 30,
    health: 30,
    attack: 8,
  },

  RAT: {
    label: 'Rat',
    path: MONSTER_IMAGE_PATH + 'rat.webp',
    x: -80,
    y: 3,
    max_health: 10,
    health: 10,
    attack: 3,
  },

  SKELETON: {
    label: 'Skeleton',
    path: MONSTER_IMAGE_PATH + 'skeleton.webp',
    scale: 1.05,
    x: -130,
    y: -26,
    max_health: 30,
    health: 30,
    attack: 5,
  },

  SLIME_SKULL: {
    label: 'Slime Skull',
    path: MONSTER_IMAGE_PATH + 'slime-skull.webp',
    scale: 1.2,
    x: -65,
    y: 0,
    max_health: 20,
    health: 20,
    attack: 5,
  },

  SLIME_ZOMBIE: {
    label: 'Slime Zombie',
    path: MONSTER_IMAGE_PATH + 'slime-zombie.webp',
    scale: 1.15,
    x: 5,
    y: -7,
    max_health: 40,
    health: 40,
    attack: 10,
  },

  SPIDER: {
    label: 'Spider',
    path: MONSTER_IMAGE_PATH + 'spider.webp',
    scale: 1.2,
    x: -119,
    y: -24,
    max_health: 8,
    health: 8,
    attack: 2,
  },

  TIGER_SPIDER: {
    label: 'Tiger Spider',
    path: MONSTER_IMAGE_PATH + 'tiger-spider.webp',
    scale: 1.2,
    x: -128,
    y: -25,
    max_health: 30,
    health: 30,
    attack: 8,
  },

  WERERAT: {
    label: 'Wererat',
    path: MONSTER_IMAGE_PATH + 'were-rat.webp',
    scale: 1.1,
    x: -95,
    y: 2,
    max_health: 80,
    health: 80,
    attack: 15,
  },
}

export { MONSTERS }