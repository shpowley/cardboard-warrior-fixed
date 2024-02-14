import { useEffect } from 'react'
import { button, useControls } from 'leva'

import D20 from './D20'
import D20Enemy from './D20Enemy'
import { LEVA_SORT_ORDER } from '../../../common/Constants'
import { DICE_STATE, useStateDice } from '../../../stores/useStateDice'

const Dice = () => {
  const
    setDiceStatePlayer = useStateDice(state => state.setDiceStatePlayer),
    setDiceStateEnemy = useStateDice(state => state.setDiceStateEnemy)

  useControls(
    'dice rolling',

    {
      'roll d20 (player)': button(() => {
        setDiceStatePlayer(DICE_STATE.ROLLING)
      }),

      'roll d20 (enemy)': button(() => {
        setDiceStateEnemy(DICE_STATE.ROLLING)
      })
    },

    {
      collapsed: true,
      order: LEVA_SORT_ORDER.DICE_ROLL
    }
  )

  useEffect(() => {
    // DICE SUBSCRIPTION (ZUSTAND)
    const
      subscribePlayerDice = useStateDice.subscribe(
        // SELECTOR
        state => state.dice_value_player,

        // CALLBACK
        dice_value => {
          console.log('D20 PLAYER ROLL: ', dice_value)
        }
      ),

      subscribeEnemyDice = useStateDice.subscribe(
        // SELECTOR
        state => state.dice_value_enemy,

        // CALLBACK
        dice_value => {
          console.log('D20 ENEMY ROLL: ', dice_value)
        }
      )

    // CLEANUP
    return () => {
      subscribePlayerDice()
      subscribeEnemyDice()
    }
  }, [])

  return <group dispose={null}>
    <D20 castShadow />
    <D20Enemy castShadow />
  </group>
}

export default Dice