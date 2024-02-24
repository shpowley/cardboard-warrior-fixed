import { ScreenSpace } from '@react-three/drei'

import { GAME_PHASE, useStateGame } from '../../stores/useStateGame'
import TitleScreen from './TitleScreen'
import HUDScreen from './HUDScreen'

const ScreenOverlay = () => {
  // ZUSTAND GAME STATE
  const phase = useStateGame(state => state.phase)

  // DETERMINE COMPONENTS TO RENDER
  const
    show_title = [
      GAME_PHASE.GAME_INIT,
      GAME_PHASE.TITLE_SHOWING,
      GAME_PHASE.TITLE_VISIBLE,
      GAME_PHASE.TITLE_HIDING
    ].includes(phase),

    show_hud = [
      GAME_PHASE.TITLE_HIDING, // REQUIRED! ALLOWS GAME PHASE SUBSCRIPTION & REFS TO BE CREATED AND BE VALID PRIOR TO GAME_PHASE.ROOM_SHOWING
      GAME_PHASE.GAME_START,
      GAME_PHASE.HUD_SHOWING,
      GAME_PHASE.ROOM_SHOWING,
      GAME_PHASE.ROOM_HIDING,
      GAME_PHASE.PLAYER_MOVEMENT,
      GAME_PHASE.PLAYER_COMBAT,
      GAME_PHASE.MONSTER_DEFEATED,
      GAME_PHASE.GAME_OVER
    ].includes(phase)

  return <ScreenSpace depth={1}>
    {show_title && <TitleScreen />}
    {show_hud && <HUDScreen />}
  </ScreenSpace>
}

export default ScreenOverlay