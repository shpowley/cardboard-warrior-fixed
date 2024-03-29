import * as THREE from 'three'
import { Text } from '@react-three/drei'

import { FILES } from '../../common/Constants'
import { memo, useEffect, useRef } from 'react'
import { useStateGame } from '../../stores/useStateGame'
import { useStatePlayer } from '../../stores/useStatePlayer'
import { ANIMATION_STATE, useStateAnimation } from '../../stores/useStateAnimation'
import HUDImages from '../../common/HUDImages'

/** PURE FUNCTIONS + GLOBALS */
const CANVAS = {
  size: {
    w: 256,
    h: 256
  },

  start: {
    x: 13,
    y: 13
  },

  room: {
    w: 50,
    h: 50
  },

  player: {
    w: 30,
    h: 30
  },

  door: {
    w: 16,
    h: 10
  },

  spacing: 10
}

const CTX = document.createElement('canvas').getContext('2d')
CTX.canvas.width = CANVAS.size.w
CTX.canvas.height = CANVAS.size.h

// LOAD MINI-MAP ICONS EARLY
const
  image_skull = new Image(),
  image_star = new Image()

image_skull.src = HUDImages.SKULL.path
image_star.src = HUDImages.STAR.path

const door_data = {
  north_south: new Array(20),
  east_west: new Array(20)
}

// DOORS REFERENCE DESIGN DOC https://docs.google.com/drawings/d/1HuJxtY-n_d_3A1jeMOfFPoDAuFGfjTaGAsPFqcbh6o4
const drawDoors = () => {
  CTX.fillStyle = '#5481d6'

  // DRAW THE NORTH-SOUTH DOORS
  door_data.north_south.forEach((door, i) => {
    if (door) {
      const
        room_x = CANVAS.start.x + (i % 4) * (CANVAS.room.w + CANVAS.spacing) + (CANVAS.room.w - CANVAS.door.w) / 2,
        room_y = CANVAS.start.y + Math.floor(i / 4) * (CANVAS.room.h + CANVAS.spacing) - CANVAS.door.h

      CTX.fillRect(
        room_x,
        room_y,
        CANVAS.door.w,
        CANVAS.door.h
      )
    }
  })

  // DRAW THE EAST-WEST DOORS (DOOR WIDTH AND HEIGHT ARE SWAPPED)
  door_data.east_west.forEach((door, i) => {
    if (door) {
      const
        room_x = CANVAS.start.x + (i % 5) * (CANVAS.room.w + CANVAS.spacing) - CANVAS.door.h,
        room_y = CANVAS.start.y + Math.floor(i / 5) * (CANVAS.room.h + CANVAS.spacing) + (CANVAS.room.h - CANVAS.door.w) / 2

      CTX.fillRect(
        room_x,
        room_y,
        CANVAS.door.h,
        CANVAS.door.w
      )
    }
  })
}

const getDoorData = room => {
  door_data.north_south[room.index] = room.doors.N
  door_data.north_south[room.index + 4] = room.doors.S

  const
    row = Math.floor(room.index / 4),
    row_start_index = row * 5,
    row_offset = room.index % 4,
    room_west_index = row_start_index + row_offset

  door_data.east_west[room_west_index] = room.doors.W
  door_data.east_west[room_west_index + 1] = room.doors.E
}

const drawVisitedRoom = (i, current_room) => {
  const
    room_x = CANVAS.start.x + (i % 4) * (CANVAS.room.w + CANVAS.spacing),
    room_y = CANVAS.start.y + Math.floor(i / 4) * (CANVAS.room.h + CANVAS.spacing)

  CTX.fillStyle = '#5481d6'
  CTX.fillRect(room_x, room_y, CANVAS.room.w, CANVAS.room.h)

  // DRAW THE PLAYER ON THE MINI-MAP
  if (current_room && current_room.index === i) {
    CTX.fillStyle = '#f02626'
    CTX.fillRect(
      room_x + (CANVAS.room.w - CANVAS.player.w) / 2,
      room_y + (CANVAS.room.h - CANVAS.player.h) / 2,
      CANVAS.player.w,
      CANVAS.player.h
    )
  }
}

const drawBossRoomIcon = (i) => {
  let
    scale = 0.55,
    image_width = Math.round(image_skull.width * scale),
    image_height = Math.round(image_skull.height * scale),
    room_x = CANVAS.start.x + (i % 4) * (CANVAS.room.w + CANVAS.spacing),
    room_y = CANVAS.start.y + Math.floor(i / 4) * (CANVAS.room.h + CANVAS.spacing),
    offset_x = room_x + Math.round((CANVAS.room.w - image_width) / 2),
    offset_y = room_y + Math.round((CANVAS.room.h - image_height) / 2)

  CTX.drawImage(
    image_skull,
    offset_x,
    offset_y,
    image_width,
    image_height
  )
}

const drawStarIcon = (i) => {
  let
    scale = 0.6,
    image_width = Math.round(image_star.width * scale),
    image_height = Math.round(image_star.height * scale),
    room_x = CANVAS.start.x + (i % 4) * (CANVAS.room.w + CANVAS.spacing),
    room_y = CANVAS.start.y + Math.floor(i / 4) * (CANVAS.room.h + CANVAS.spacing),
    offset_x = room_x + Math.round((CANVAS.room.w - image_width) / 2),
    offset_y = room_y + Math.round((CANVAS.room.h - image_height) / 2)

  CTX.drawImage(
    image_star,
    offset_x,
    offset_y,
    image_width,
    image_height
  )
}

const drawMap = (level_data, current_room) => {
  // CLEAR CANVAS
  CTX.fillStyle = 'white'
  CTX.fillRect(0, 0, CANVAS.size.w, CANVAS.size.h)

  for (let i = 0; i < level_data.rooms.length; i++) {
    const room = level_data.rooms[i]

    // DRAW THE VISITED ROOMS
    if (room.is_room && room.visited) {
      getDoorData(room)
      drawVisitedRoom(i, current_room)
    }

    // DRAW THE BOSS ROOM ICON
    else if (room.index === level_data.room_end.index) {
      drawBossRoomIcon(i)
    }

    // DRAW THE STAR ICON
    if (i === level_data.room_start.index && current_room && current_room.index !== i) {
      drawStarIcon(i)
    }
  }

  drawDoors()
}

/** REACT */
const MiniMap = ({ forward_ref, aspect_ratio = 1, material_text }) => {
  const ref_minimap = {
    floor: useRef(),
    map_material: useRef()
  }

  useEffect(() => {

    // INITIAL VISIBILITY
    forward_ref.current.traverse(child => {
      if (child.isMesh) {
        child.material.opacity = 0
      }
    })

    forward_ref.current.visible = true

    // STATE DATA SUBSCRIPTION (ZUSTAND)
    const subscribe_level = useStateGame.subscribe(
      // SELECTOR
      state => state.level,

      // CALLBACK
      level_data => {
        if (level_data) {
          // RESET DOOR DATA ARRAYS
          door_data.north_south.fill(false)
          door_data.east_west.fill(false)

          ref_minimap.floor.current.text = `FLOOR: ${level_data.floor_number}`
        }
      }
    )

    const subscribe_room_animation = useStateAnimation.subscribe(
      // SELECTOR
      state => state.room_animation_state,

      // CALLBACK
      animation_state => {
        if (animation_state === ANIMATION_STATE.ANIMATING_TO_VISIBLE) {
          const
            active_room = useStatePlayer.getState().room,
            level_data = useStateGame.getState().level

          if (active_room && level_data) {
            drawMap(level_data, active_room)
            ref_minimap.map_material.current.map = new THREE.CanvasTexture(CTX.canvas)
            ref_minimap.map_material.current.needsUpdate = true
          }
        }
      }
    )

    // CLEANUP
    return () => {
      subscribe_level()
      subscribe_room_animation()
    }
  }, [])

  return <group
    ref={forward_ref}
    position={[0.405 * aspect_ratio, 0.39, 0]}
    scale={0.021}
    anchorX='right'
    anchorY='top'
    opacity={0}
    visible={false}
    dispose={null}
  >
    {/* FLOOR NUMBER */}
    <Text
      ref={ref_minimap.floor}
      font={FILES.FONT_BEBAS_NEUE}
      material={material_text}
      anchorX='right'
      text='FLOOR: -'
    />

    {/* MINI-MAP */}
    <mesh position={[-2, -2.8, 0]}>
      <planeGeometry args={[4, 4]} />
      <meshBasicMaterial
        ref={ref_minimap.map_material}
        color='white'
        toneMapped={false}
        transparent
      />
    </mesh>
  </group>
}

export default memo(MiniMap)