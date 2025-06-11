<script setup lang="ts">
import { provide } from 'vue'
import GameInput from './widgets/game-input.vue'
import { GAME_KEY, gameContext } from './entities/game/context/game-context.ts'
import Clue from './widgets/clue.vue'
import HistoryList from './widgets/history-list/index.vue'

provide(GAME_KEY, gameContext)
</script>

<template>
  <div class="container">
    <clue />
    <history-list />
    <game-input />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 32rem;
  width: 100%;
  margin: 1rem auto;
}
</style>
