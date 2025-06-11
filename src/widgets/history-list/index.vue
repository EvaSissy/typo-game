<script setup lang="ts">
import HistoryItem from './ui/history-item.vue'
import { getGameContext } from '../../entities/game/context/game-context.ts'
import { computed, h } from 'vue'

const { historyList, phrase } = getGameContext()

const slicedHistoryList = computed(() => {
  return historyList.value.slice(-3).map((item, index, array) => {
    return {
      render: () => {
        return item.split('').map((char, index) => {
          return phrase.value[index] === char ? char: h('span', { style: {color: 'red'} }, [char])
        })
      },
      scale: 1 + (index - array.length + 1) * 0.25
    }
  })
})
</script>

<template>
<div class="history-container">
  <history-item
      v-for="({render, scale}) in slicedHistoryList"
      :scale
  >
    <component :is="render" />
  </history-item>
</div>
</template>

<style scoped>
.history-container {
  display: flex;
  flex-direction: column;
}
</style>