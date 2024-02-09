import * as THREE from 'three'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

import { ROOM_COLLIDER, ROOM_EXTENTS, THICKNESS_EXTENT } from './Constants'
import Door from './Door'
import { memo } from 'react'

const geometry_wall = new THREE.PlaneGeometry(
  ROOM_COLLIDER.wall_extents[0] * 2,
  ROOM_COLLIDER.wall_extents[1]
)

const material_wall = new THREE.MeshStandardMaterial({ color: '#dbd7d2' })

const Wall = ({ forward_ref, position, rotation, visible = true }) => {
  console.log('RENDER: Wall')

  return <>
    <RigidBody
      type='fixed'
      restitution={0.5}
      friction={0}
      colliders={false}
    >
      <CuboidCollider
        args={ROOM_COLLIDER.wall_extents}
        position={position}
        rotation={rotation}
      />
    </RigidBody>
    <group
      ref={forward_ref}
      position={position}
      rotation={rotation}
      visible={visible}
    >
      <Door
        position={[0, -ROOM_EXTENTS.height, 0.35]}
        scale={[1.5, 1.5, 1.5]}
      />
      <mesh
        receiveShadow
        position={[0, -ROOM_COLLIDER.wall_extents[1] * 0.5, THICKNESS_EXTENT]}
        geometry={geometry_wall}
        material={material_wall}
      />
    </group>
  </>
}

export default memo(Wall)