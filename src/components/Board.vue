<template>
  <div class="grid grid-cols-3 gap-20px w-100">
    <BoardColumn :tasks="list1" title="ToDo" :state="CardState.Todo"/>
    <BoardColumn :tasks="list2" title="InProgress" :state="CardState.InProgress"/>
    <BoardColumn :tasks="list3" title="Done" :state="CardState.Done"/>
  </div>
</template>

<script setup lang="ts">
import BoardColumn from '../components/BoardColumn.vue'
import { CardState } from '../models/CardState'
import { ref } from 'vue'

const list1 = ref(new Array(3).fill(null).map((_, i) => ({
    name: 'Task' + (i + 1),
    id: i + 1,
    order: i + 1,
    state: CardState.Todo,
    date: new Date().toLocaleString()
  })))

const list2 = ref(new Array(4).fill(null).map((_, i) => ({
    name: 'Task' + (3 + i + 1),
    id: 3 + i + 1,
    order: 3 + i + 1,
    state: CardState.InProgress,
    date: new Date().toLocaleString()
  })))

const list3 = ref(new Array(5).fill(null).map((_, i) => ({
    name: 'Task' + (7 + i + 1),
    id: 7 + i + 1,
    order: 7 + i + 1,
    state: CardState.Done,
    date: new Date().toLocaleString()
  })))
</script>
