<script setup lang="ts">
import { getGameContext } from '../entities/game/context/game-context.ts'

const { phrase } = getGameContext()
</script>

<template>
<h2>{{phrase}}</h2>
</template>
