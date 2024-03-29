import { ITEM_KEYS } from './Constants'
import { MONSTERS } from './Monsters'

const FLOOR_ITEMS = {
  HEALTH_POTION: {
    type: ITEM_KEYS.HEALTH_POTION,
    name: 'Health Potion',
    description: 'Restores 20 health points.',
    value: 20,
  },
  TREASURE_CHEST: {
    type: ITEM_KEYS.TREASURE_CHEST,
    name: 'Treasure Chest',
    description: 'Treasure chest containing gold coins.',
    value: 10,
  },
  KEY: {
    type: ITEM_KEYS.KEY,
    name: 'Key',
    description: 'Opens floor boss room.'
  }
}

const FLOOR_TEMPLATE = {
  index: null,
  items: [FLOOR_ITEMS.KEY, FLOOR_ITEMS.HEALTH_POTION, FLOOR_ITEMS.TREASURE_CHEST],
  monsters: [MONSTERS.DEATH_KNIGHT],
  boss: MONSTERS.DEATH_KNIGHT,
  boss_item: FLOOR_ITEMS.HEALTH_POTION
}

const FLOOR_MAX = 30

const FLOOR_DATA = new Array(FLOOR_MAX)
  .fill({ ...FLOOR_TEMPLATE })
  .map((floor, index) => {
    const new_floor = { ...floor }

    new_floor.index = index

    switch (index) {
      case 0:
        new_floor.items = [FLOOR_ITEMS.KEY]
        new_floor.monsters = [MONSTERS.BLUE_SLIME]
        new_floor.boss = MONSTERS.SPIDER
        break

      case 1:
        new_floor.items = [FLOOR_ITEMS.HEALTH_POTION, FLOOR_ITEMS.KEY]
        new_floor.monsters = [MONSTERS.BLUE_SLIME, MONSTERS.SPIDER]
        new_floor.boss = MONSTERS.GREEN_SLIME
        break

      case 2:
        new_floor.items = [FLOOR_ITEMS.TREASURE_CHEST, FLOOR_ITEMS.KEY]
        new_floor.monsters = [MONSTERS.BLUE_SLIME, MONSTERS.GREEN_SLIME, MONSTERS.SPIDER]
        new_floor.boss = MONSTERS.RAT
        break

      case 3:
        new_floor.items = [FLOOR_ITEMS.HEALTH_POTION, FLOOR_ITEMS.KEY]
        new_floor.monsters = [MONSTERS.BLUE_SLIME, MONSTERS.GREEN_SLIME, MONSTERS.RAT]
        new_floor.boss = MONSTERS.RAT
        break

      case 4:
        new_floor.items = [FLOOR_ITEMS.HEALTH_POTION, FLOOR_ITEMS.KEY]
        new_floor.monsters = [MONSTERS.BLUE_SLIME, MONSTERS.GREEN_SLIME]
        new_floor.boss = MONSTERS.SLIME_SKULL
        break

      case 5:
        new_floor.monsters = [MONSTERS.BLUE_SLIME, MONSTERS.GREEN_SLIME, MONSTERS.SLIME_SKULL]
        new_floor.boss = MONSTERS.SLIME_SKULL
        break

      case 6:
        new_floor.monsters = [MONSTERS.RAT]
        new_floor.boss = MONSTERS.GOBLIN
        break

      case 7:
        new_floor.monsters = [MONSTERS.RAT, MONSTERS.GOBLIN]
        new_floor.boss = MONSTERS.GOBLIN
        break

      case 8:
        new_floor.monsters = [MONSTERS.RAT, MONSTERS.GOBLIN]
        new_floor.boss = MONSTERS.KOBOLD
        break

      case 9:
        new_floor.monsters = [MONSTERS.KOBOLD, MONSTERS.GOBLIN, MONSTERS.SLIME_SKULL]
        new_floor.boss = MONSTERS.SKELETON
        break

      case 10:
        new_floor.monsters = [MONSTERS.SKELETON, MONSTERS.SLIME_SKULL, MONSTERS.BLUE_SLIME, MONSTERS.GREEN_SLIME]
        new_floor.boss = MONSTERS.SKELETON

        new_floor.boss_item = {
          ...FLOOR_ITEMS.TREASURE_CHEST,
          value: 50
        }

        break

      case 11:
        new_floor.monsters = [MONSTERS.SKELETON, MONSTERS.SLIME_SKULL]
        new_floor.boss = MONSTERS.SLIME_ZOMBIE
        break

      case 12:
        new_floor.monsters = [MONSTERS.KOBOLD, MONSTERS.GOBLIN]
        new_floor.boss = MONSTERS.PYTHON
        break

      case 13:
        new_floor.monsters = [MONSTERS.SKELETON, MONSTERS.SLIME_SKULL]
        new_floor.boss = MONSTERS.SLIME_ZOMBIE
        break

      case 14:
        new_floor.monsters = [MONSTERS.RAT]
        new_floor.boss = MONSTERS.GIANT_RAT
        break

      case 15:
        new_floor.monsters = [MONSTERS.KOBOLD, MONSTERS.PYTHON, MONSTERS.TIGER_SPIDER]
        new_floor.boss = MONSTERS.LIZARDMAN
        break

      case 16:
        new_floor.monsters = [MONSTERS.LIZARDMAN, MONSTERS.PYTHON, MONSTERS.TIGER_SPIDER]
        new_floor.boss = MONSTERS.ORC
        break

      case 17:
        new_floor.monsters = [MONSTERS.SLIME_SKULL, MONSTERS.SLIME_ZOMBIE, MONSTERS.SKELETON]
        new_floor.boss = MONSTERS.SLIME_ZOMBIE
        break

      case 18:
        new_floor.monsters = [MONSTERS.SLIME_SKULL, MONSTERS.SLIME_ZOMBIE, MONSTERS.SKELETON]
        new_floor.boss = MONSTERS.SLIME_ZOMBIE
        break

      case 19:
        new_floor.monsters = [MONSTERS.RAT, MONSTERS.GIANT_RAT]
        new_floor.boss = MONSTERS.WERERAT
        break

      case 20:
        new_floor.monsters = [MONSTERS.RAT, MONSTERS.GIANT_RAT, MONSTERS.MIMIC]
        new_floor.boss = MONSTERS.WERERAT

        new_floor.boss_item = {
          ...FLOOR_ITEMS.TREASURE_CHEST,
          value: 200
        }

        break

      case 21:
        new_floor.monsters = [MONSTERS.GOBLIN, MONSTERS.KOBOLD, MONSTERS.ORC]
        new_floor.boss = MONSTERS.HOBGOBLIN
        break

      case 22:
        new_floor.monsters = [MONSTERS.GOBLIN, MONSTERS.KOBOLD, MONSTERS.ORC, MONSTERS.HOBGOBLIN]
        new_floor.boss = MONSTERS.HOBGOBLIN
        break

      case 23:
        new_floor.monsters = [MONSTERS.ORC, MONSTERS.HOBGOBLIN]
        new_floor.boss = MONSTERS.HOBGOBLIN
        break

      case 24:
        new_floor.monsters = [MONSTERS.ORC, MONSTERS.HOBGOBLIN, MONSTERS.WERERAT]
        new_floor.boss = MONSTERS.MINOTAUR
        break

      case 25:
        new_floor.monsters = [MONSTERS.SLIME_SKULL, MONSTERS.SLIME_ZOMBIE, MONSTERS.SKELETON]
        new_floor.boss = MONSTERS.SLIME_ZOMBIE
        break

      case 26:
        new_floor.monsters = [MONSTERS.SLIME_SKULL, MONSTERS.SLIME_ZOMBIE, MONSTERS.SKELETON]
        new_floor.boss = MONSTERS.GRIM_REAPER
        break

      case 27:
        new_floor.monsters = [MONSTERS.SLIME_SKULL, MONSTERS.SLIME_ZOMBIE, MONSTERS.SKELETON]
        new_floor.boss = MONSTERS.GRIM_REAPER
        break

      case 28:
        new_floor.monsters = [MONSTERS.MINOTAUR, MONSTERS.MIMIC]
        new_floor.boss = MONSTERS.GRIM_REAPER
        break

      case 29:
        new_floor.monsters = [MONSTERS.GRIM_REAPER, MONSTERS.SKELETON, MONSTERS.SLIME_ZOMBIE]
        new_floor.boss = MONSTERS.DEATH_KNIGHT

        new_floor.boss_item = {
          ...FLOOR_ITEMS.TREASURE_CHEST,
          value: 1000
        }
    }

    return new_floor
  })

const DIRECTION = {
  N: 'N',
  E: 'E',
  S: 'S',
  W: 'W'
}

const BLOCK_TEMPLATE = {
  index: null,
  is_room: false,
  adjacent_blocks: null,
}

// monsters and items added as needed
const ROOM_TEMPLATE = {
  visited: false,
  doors: {
    N: false,
    E: false,
    S: false,
    W: false,
  },
}

const VALID_PERIMETER_ROOMS = {
  0: [3, 7, 11, 12, 13, 14, 15],
  1: [12, 13, 14, 15],
  2: [12, 13, 14, 15],
  3: [0, 4, 8, 12, 13, 14, 15],
  4: [3, 7, 11, 15],
  7: [0, 4, 8, 12],
  8: [3, 7, 11, 15],
  11: [0, 4, 8, 12],
  12: [0, 1, 2, 3, 7, 11, 15],
  13: [0, 1, 2, 3],
  14: [0, 1, 2, 3],
  15: [0, 1, 2, 3, 4, 8, 12]
}

const PERIMETER_ROOMS = [
  { index: 0, walls: [DIRECTION.N, DIRECTION.W] },   // top left corner
  { index: 1, walls: [DIRECTION.N] },                // top row
  { index: 2, walls: [DIRECTION.N] },                // top row
  { index: 3, walls: [DIRECTION.N, DIRECTION.E] },   // top right corner
  { index: 4, walls: [DIRECTION.W] },                // left column
  { index: 7, walls: [DIRECTION.E] },                // right column
  { index: 8, walls: [DIRECTION.W] },                // left column
  { index: 11, walls: [DIRECTION.E] },               // right column
  { index: 12, walls: [DIRECTION.S, DIRECTION.W] },  // bottom left corner
  { index: 13, walls: [DIRECTION.S] },               // bottom row
  { index: 14, walls: [DIRECTION.S] },               // bottom row
  { index: 15, walls: [DIRECTION.S, DIRECTION.E] }   // bottom right corner
]

const LEVEL_TEMPLATE = new Array(16)
  .fill({ ...BLOCK_TEMPLATE })
  .map((block, index) => {
    const new_block = { ...block }

    new_block.index = index

    switch (index) {
      case 0:
        new_block.adjacent_blocks = [
          { index: 1, direction: DIRECTION.E },
          { index: 4, direction: DIRECTION.S }
        ]
        break

      case 1:
        new_block.adjacent_blocks = [
          { index: 0, direction: DIRECTION.W },
          { index: 2, direction: DIRECTION.E },
          { index: 5, direction: DIRECTION.S }
        ]
        break

      case 2:
        new_block.adjacent_blocks = [
          { index: 1, direction: DIRECTION.W },
          { index: 3, direction: DIRECTION.E },
          { index: 6, direction: DIRECTION.S }
        ]
        break

      case 3:
        new_block.adjacent_blocks = [
          { index: 2, direction: DIRECTION.W },
          { index: 7, direction: DIRECTION.S }
        ]
        break

      case 4:
        new_block.adjacent_blocks = [
          { index: 0, direction: DIRECTION.N },
          { index: 5, direction: DIRECTION.E },
          { index: 8, direction: DIRECTION.S }
        ]
        break

      case 5:
        new_block.adjacent_blocks = [
          { index: 1, direction: DIRECTION.N },
          { index: 4, direction: DIRECTION.W },
          { index: 6, direction: DIRECTION.E },
          { index: 9, direction: DIRECTION.S }
        ]
        break

      case 6:
        new_block.adjacent_blocks = [
          { index: 2, direction: DIRECTION.N },
          { index: 5, direction: DIRECTION.W },
          { index: 7, direction: DIRECTION.E },
          { index: 10, direction: DIRECTION.S }
        ]
        break

      case 7:
        new_block.adjacent_blocks = [
          { index: 3, direction: DIRECTION.N },
          { index: 6, direction: DIRECTION.W },
          { index: 11, direction: DIRECTION.S }
        ]
        break

      case 8:
        new_block.adjacent_blocks = [
          { index: 4, direction: DIRECTION.N },
          { index: 9, direction: DIRECTION.E },
          { index: 12, direction: DIRECTION.S }
        ]
        break

      case 9:
        new_block.adjacent_blocks = [
          { index: 5, direction: DIRECTION.N },
          { index: 8, direction: DIRECTION.W },
          { index: 10, direction: DIRECTION.E },
          { index: 13, direction: DIRECTION.S }
        ]
        break

      case 10:
        new_block.adjacent_blocks = [
          { index: 6, direction: DIRECTION.N },
          { index: 9, direction: DIRECTION.W },
          { index: 11, direction: DIRECTION.E },
          { index: 14, direction: DIRECTION.S }
        ]
        break

      case 11:
        new_block.adjacent_blocks = [
          { index: 7, direction: DIRECTION.N },
          { index: 10, direction: DIRECTION.W },
          { index: 15, direction: DIRECTION.S }
        ]
        break

      case 12:
        new_block.adjacent_blocks = [
          { index: 8, direction: DIRECTION.N },
          { index: 13, direction: DIRECTION.E },
        ]
        break

      case 13:
        new_block.adjacent_blocks = [
          { index: 9, direction: DIRECTION.N },
          { index: 12, direction: DIRECTION.W },
          { index: 14, direction: DIRECTION.E },
        ]
        break

      case 14:
        new_block.adjacent_blocks = [
          { index: 10, direction: DIRECTION.N },
          { index: 13, direction: DIRECTION.W },
          { index: 15, direction: DIRECTION.E },
        ]
        break

      case 15:
        new_block.adjacent_blocks = [
          { index: 11, direction: DIRECTION.N },
          { index: 14, direction: DIRECTION.W },
        ]
    }

    return new_block
  })

let visited_blocks = []
let next_blocks = []

const getUnconnectedAdjacentBlocks = (block) => {
  return [...block.adjacent_blocks]
    .filter(adjacent_block => !block.doors[adjacent_block.direction] && !visited_blocks.includes(adjacent_block.index))
}

// create a random door for a room based on adjacent blocks
const generateDoor = (block, record_block = true) => {

  // create a list of adjacent blocks that don't already have a door connected to it
  const unconnected_adjacent_blocks = getUnconnectedAdjacentBlocks(block)

  if (unconnected_adjacent_blocks.length === 0) {
    return
  }

  // randomly choose an adjacent block to create a door to it
  const adjacent_index = unconnected_adjacent_blocks.length > 1
    ? Math.floor(Math.random() * unconnected_adjacent_blocks.length)
    : 0

  const adjacent_block = unconnected_adjacent_blocks[adjacent_index]
  block.doors[adjacent_block.direction] = true

  if (record_block && !visited_blocks.includes(adjacent_block.index)) {
    next_blocks.push(adjacent_block.index)
  }
}

const createStartRoom = (level, index, prior_room) => {
  level[index] = {
    ...level[index],
    ...ROOM_TEMPLATE,
    doors: { ...ROOM_TEMPLATE.doors },
    is_room: true,
    start_room: true
  }

  // level door placement from previous level
  if (prior_room) {
    level[index].doors[prior_room.level_door] = true
    level[index].level_door = prior_room.level_door
  }

  // creat a door to a random adjacent block
  generateDoor(level[index])
}

const createEndRoom = (level, index, floor_number) => {
  level[index] = {
    ...level[index],
    ...ROOM_TEMPLATE,
    doors: { ...ROOM_TEMPLATE.doors },
    is_room: true,
    end_room: true,
    locked: true
  }

  if (floor_number < 30) { // no door placement for next floor on level 30 as it's the last level

    // door placement to next level
    const perimeter_walls = PERIMETER_ROOMS.find(room => room.index === index)?.walls

    if (perimeter_walls) {
      let level_door

      // if more than one wall, randomly choose one
      if (perimeter_walls.length > 1) {
        level_door = perimeter_walls[Math.floor(Math.random() * perimeter_walls.length)]
      }

      // if only one wall, use that one
      else {
        level_door = perimeter_walls[0]
      }

      level[index].doors[level_door] = true
      level[index].level_door = level_door
    }
  }

  // creat a door to a random adjacent block
  generateDoor(level[index], false)
}

const createRoom = (level, index) => {
  if (level[index] && !level[index].is_room) {
    // determine if there are any adjacent rooms with doors connected to this block
    // - if so, then
    //   a) this block must be a room
    //   b) designated a door to those adjacent rooms
    const adjacent_blocks_info = level[index].adjacent_blocks

    for (let i = 0; i < adjacent_blocks_info.length; i++) {
      const block_info = adjacent_blocks_info[i]
      const adjacent_block = level[block_info.index]

      if (adjacent_block.is_room) {

        const
          self_info = adjacent_block.adjacent_blocks.find(block => block.index === index),
          connected_door = adjacent_block.doors[self_info.direction]

        if (connected_door) {
          // create a room on this block if it's not already a room
          if (!level[index].is_room) {
            level[index] = {
              ...level[index],
              ...ROOM_TEMPLATE,
              doors: { ...ROOM_TEMPLATE.doors },
              is_room: true
            }
          }

          // create a door to the adjacent room
          level[index].doors[block_info.direction] = true
        }
      }
    }

    // if this block is now a room, create additional doors
    if (level[index].is_room) {

      // add random # of doors
      const max_unconnected = getUnconnectedAdjacentBlocks(level[index]).length
      const random_number_of_doors = Math.floor(Math.random() * max_unconnected) + 1

      for (let i = 0; i < random_number_of_doors; i++) {
        generateDoor(level[index])
      }
    }
  }
}

// randomly generates rooms
const generateRooms = (floor_number, prior_room) => {
  let
    start_room_index,
    end_room_index,
    rooms,
    is_end_room_connected = false,
    map_attempts = 1

  while (!is_end_room_connected) {
    // reset visited blocks and next blocks
    visited_blocks = []
    next_blocks = []

    // copy the level starter template
    rooms = [...LEVEL_TEMPLATE]

    // randomly determine the start room, unless it's the first level
    start_room_index = prior_room
      ? prior_room.index
      : PERIMETER_ROOMS[Math.floor(Math.random() * PERIMETER_ROOMS.length)].index

    // pick a random room from the list of valid perimeter rooms
    end_room_index = VALID_PERIMETER_ROOMS[start_room_index][Math.floor(Math.random() * VALID_PERIMETER_ROOMS[start_room_index].length)]

    createStartRoom(rooms, start_room_index, prior_room)
    visited_blocks.push(start_room_index)

    createEndRoom(rooms, end_room_index, floor_number)
    visited_blocks.push(end_room_index)

    // create rooms
    while (next_blocks.length > 0) {
      const block_index = next_blocks.shift()

      if (visited_blocks.includes(block_index)) {
        continue
      }

      visited_blocks.push(block_index)
      createRoom(rooms, block_index)
    }

    // BUG FIX? -- make sure the end room has a room connected to it
    let required_block = null

    const
      end_room = rooms[end_room_index],
      adjacent_rooms = end_room.adjacent_blocks

    for (let i = 0; i < end_room.adjacent_blocks.length; i++) {
      required_block = rooms[adjacent_rooms[i].index]

      if (end_room.doors[adjacent_rooms[i].direction]) {
        if (required_block.is_room) {
          is_end_room_connected = true
        }
      }
    }

    if (!is_end_room_connected) {
      console.warn(`end room (index: ${end_room_index}) NOT CONNECTED to required block (index: ${required_block.index}) - re-calculating..`)
      map_attempts++
    }
  }

  if (map_attempts > 1) {
    console.warn(`map calculation attempts: ${map_attempts}`)
  }

  return {
    room_start: {
      index: start_room_index,
      level_door: rooms[start_room_index]?.level_door
    },

    room_end: {
      index: end_room_index,
      level_door: rooms[end_room_index]?.level_door
    },

    floor_number,

    rooms
  }
}

// retrieve floor data used to populate the level with monsters and items
const getFloorData = (floor_number) => {
  const actual_floor_number = (floor_number > FLOOR_MAX ? FLOOR_MAX : floor_number) - 1

  console.log('FLOOR DATA:', FLOOR_DATA)

  return FLOOR_DATA[actual_floor_number]
}

// generate a level - combines rooms with monsters and items
// - level_number: the level number (1-30)
// - prior_room: the room from the previous level (null if first level)
//   - index: the index of the room (0-15)
//   - level_door: the direction of the door to the next level ('N', 'S', 'E', 'W')
const generateLevel = (level_number, prior_room) => {
  let
    level = null,
    room_count = 0,
    min_room_count = 10,
    attempts = 1,
    max_attempts = 20

  while (room_count <= min_room_count) {
    level = generateRooms(level_number, prior_room)

    room_count = level.rooms.filter(block => block.is_room).length

    if (room_count <= min_room_count && attempts > max_attempts) {
      console.warn(`TOO FEW ROOMS - ATTEMPT # ${attempts++}`)

      break
    }
  }

  const
    floor_data = getFloorData(level.floor_number),
    items_copy = floor_data.items.map(item => ({ ...item }))

  // 1) pick 3-5 random rooms (not including the start and end rooms)
  // 2) pick a random monster from the level's monster list and place it in the room
  // 3) pick a random item from the level's item list and place it in the room with the monster
  level.rooms
    .filter(block => block.is_room && !block.start_room && !block.end_room)
    .sort(() => Math.random() - 0.5) // shuffle
    .slice(0, Math.floor(Math.random() * 3) + 3)
    .forEach(room => {
      const available_floor_monster_count = floor_data.monsters.length

      if (available_floor_monster_count > 0) {
        room.monster = available_floor_monster_count === 1
          ? { ...floor_data.monsters[0] }
          : { ...floor_data.monsters[Math.floor(Math.random() * floor_data.monsters.length)] }

        if (items_copy.length > 0) {
          room.item = items_copy.pop()

          // DEBUG
          console.log(`ROOM ID: ${room.index} | MONSTER: ${room.monster.label} | ITEM: ${room.item.name}`)
        }
      }
    })

  // place the boss in the end room
  const boss_room = level.rooms[level.room_end.index]
  boss_room.monster = { ...floor_data.boss }
  boss_room.item = { ...floor_data.boss_item }

  // DEBUG
  console.log(`BOSS ROOM ID: ${boss_room.index} | MONSTER: ${boss_room.monster.label} | ITEM: ${boss_room.item.name}`)
  console.log('LEVEL:', level)

  return level
}

export { DIRECTION, FLOOR_ITEMS, generateLevel }