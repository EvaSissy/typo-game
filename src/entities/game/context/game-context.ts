import { inject, ref } from 'vue'
import { getPhrase } from '../api/get-phrase.ts'

export interface GameContext {
  phrase: string
  historyList: string[]
  target: number
  current: number
}

export const GAME_KEY = 'game'

export const gameContext = {
  phrase: ref(''),
  historyList: ref<string[]>([]),
  target: ref(0),
  current: ref(0)
}

const response = getPhrase()

console.log(response)

gameContext.phrase.value = response.phrase
gameContext.target.value = response.target

export const getGameContext = () => {
  return inject(GAME_KEY, gameContext)
}