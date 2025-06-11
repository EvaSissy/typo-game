<script setup lang="ts">
import { ref } from 'vue'
import { getGameContext } from '../entities/game/context/game-context.ts'

const value = ref('')

const { historyList } = getGameContext()

const handleInput = (e) => {
  if(e.target.value.length > value.value.length) {
    value.value = e.target.value
  } else {
    e.target.value = value.value
  }
}

const handleSubmit = () => {
  historyList.value.push(value.value)
  value.value = ''
}
</script>

<template>
<form @submit.prevent="handleSubmit">
  <input
      class="game-input"
      :value
      @input="handleInput"
      @paste.prevent
      autocomplete="off"
  />
</form>
</template>

<style scoped>
form {
  width: 100%;
}

.game-input {
  width: 100%;
  padding: 0 0.5rem;
  border: 1px solid wheat;
  border-radius: 0.5rem;
  height: 2rem;
}
</style>