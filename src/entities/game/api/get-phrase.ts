import { phrase } from '../config.ts'
import type { GameContext } from '../context/game-context.ts'

export const getPhrase = (): Pick<GameContext, 'phrase' | 'target'> => {
  return {
    phrase,
    target: 10,
  }
}
