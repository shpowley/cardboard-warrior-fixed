const
  HUD_IMAGE_PATH = './images/hud/',
  SCALE_DEFAULT = [1, 1],
  SCALE_DICE = [2, 2.32],
  SCALE_DIRECTION = [1.5, 2.16],
  SCALE_POTION = [1.2, 1],
  SCALE_ROLL = [3.24, 1]

const HUDImages = {
  BLOCK: {
    path: HUD_IMAGE_PATH + 'block.webp',
    scale: SCALE_DEFAULT
  },

  COINS: {
    path: HUD_IMAGE_PATH + 'coins.webp',
    scale: [1.62, 1]
  },

  COPYRIGHT: {
    path: HUD_IMAGE_PATH + 'copyright.webp',
    scale: SCALE_DEFAULT
  },

  DICE_ENEMY: {
    path: HUD_IMAGE_PATH + 'd20-black.webp',
    scale: SCALE_DICE
  },

  DICE_PLAYER: {
    path: HUD_IMAGE_PATH + 'd20-red.webp',
    scale: SCALE_DICE
  },

  DIRECTION_EAST: {
    path: HUD_IMAGE_PATH + 'direction-east.webp',
    scale: SCALE_DIRECTION
  },

  DIRECTION_NORTH: {
    path: HUD_IMAGE_PATH + 'direction-north.webp',
    scale: SCALE_DIRECTION
  },

  DIRECTION_SOUTH: {
    path: HUD_IMAGE_PATH + 'direction-south.webp',
    scale: SCALE_DIRECTION
  },

  DIRECTION_WEST: {
    path: HUD_IMAGE_PATH + 'direction-west.webp',
    scale: SCALE_DIRECTION
  },

  DISABLED_KEY_EAST: {
    path: HUD_IMAGE_PATH + 'disabled-east.webp',
    scale: SCALE_DEFAULT
  },

  DISABLED_KEY_NORTH: {
    path: HUD_IMAGE_PATH + 'disabled-north.webp',
    scale: SCALE_DEFAULT
  },

  DISABLED_KEY_SOUTH: {
    path: HUD_IMAGE_PATH + 'disabled-south.webp',
    scale: SCALE_DEFAULT
  },

  DISABLED_KEY_WEST: {
    path: HUD_IMAGE_PATH + 'disabled-west.webp',
    scale: SCALE_DEFAULT
  },

  DISABLED_POTION: {
    path: HUD_IMAGE_PATH + 'disabled-potion.webp',
    scale: SCALE_POTION
  },

  DISABLED_ROLL: {
    path: HUD_IMAGE_PATH + 'disabled-roll.webp',
    scale: SCALE_ROLL
  },

  EXIT: {
    path: HUD_IMAGE_PATH + 'exit.webp',
    scale: [1.6, 1.6]
  },

  HEART: {
    path: HUD_IMAGE_PATH + 'heart.webp',
    scale: [1, 1.02]
  },

  KEY: {
    path: HUD_IMAGE_PATH + 'key.webp',
    scale: [1.65, 0.8]
  },

  KEY_EAST: {
    path: HUD_IMAGE_PATH + 'key-east.webp',
    scale: SCALE_DEFAULT
  },

  KEY_NORTH: {
    path: HUD_IMAGE_PATH + 'key-north.webp',
    scale: SCALE_DEFAULT
  },

  KEY_SOUTH: {
    path: HUD_IMAGE_PATH + 'key-south.webp',
    scale: SCALE_DEFAULT
  },

  KEY_WEST: {
    path: HUD_IMAGE_PATH + 'key-west.webp',
    scale: SCALE_DEFAULT
  },

  KEY_POTION: {
    path: HUD_IMAGE_PATH + 'key-potion.webp',
    scale: SCALE_POTION
  },

  KEY_ROLL: {
    path: HUD_IMAGE_PATH + 'key-roll.webp',
    scale: SCALE_ROLL
  },

  LOCK: {
    path: HUD_IMAGE_PATH + 'lock.webp',
    scale: SCALE_DEFAULT
  },

  MONSTER: {
    path: HUD_IMAGE_PATH + 'monster.webp',
    scale: [1.3, 1.48]
  },

  POTIONS: {
    path: HUD_IMAGE_PATH + 'potions.webp',
    scale: [1.36, 1]
  },

  RED_X: {
    path: HUD_IMAGE_PATH + 'red-x.webp',
    scale: SCALE_DEFAULT
  },

  SKULL: {
    path: HUD_IMAGE_PATH + 'skull.webp',
    scale: SCALE_DEFAULT
  },

  STAR: {
    path: HUD_IMAGE_PATH + 'star.webp',
    scale: SCALE_DEFAULT
  },

  SWORD: {
    path: HUD_IMAGE_PATH + 'sword.webp',
    scale: [1, 1.16]
  },
}

export default HUDImages