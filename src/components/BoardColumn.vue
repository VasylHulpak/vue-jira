<template>
  <div class="flex flex-col gap-5px bg-[#edeae9] p-20px">
    <div class="flex justify-between">
      <h3 class="font-bold font-mono">{{ title }}</h3>
      <el-button @click="addTask(state)">
        <el-icon><Plus/></el-icon>
      </el-button>
    </div>
    <VueDraggableNext handle=".list-group-item" class="list-group grid gap-10px cursor-pointer" :list="tasks" group="people" @change="change">
        <div v-for="task in tasks" :key="task.order" class="list-group-item p-20px rounded-5px border-1px border-[#409eff] bg-white font-display text-left h-100px">
          <div v-if="task.id !== 0" class="pb-10px"> {{ task.name }}</div>
          <el-input v-else class="pb-10px" v-model="task.name" placeholder="Task title"/>
          <div class="flex justify-between">
            <span>{{ task.date }}</span>
            <el-icon class="border-1px border-[#409eff]" v-if="task.id === 0" @click="save(task)">
              <Check/>
            </el-icon>
          </div>
        </div>
    </VueDraggableNext>
  </div>
</template>
<script setup lang="ts">
import { VueDraggableNext } from 'vue-draggable-next'
import { Plus, Check } from '@element-plus/icons-vue'
import { CardState } from '../models/CardState'
import { ref } from 'vue'

const props = defineProps<{
  title: String,
  tasks: any[],
  state: CardState
}>()

const list = ref(props.tasks)

function save(l: any) {
  l.id = list.value.length + 1
}

function addTask(state: CardState) {
  list.value.push({ name: '', id: 0, state: state, date: new Date().toDateString() })
}

function change() {
  list.value.forEach((item: any, index: number) => (item.order = index))
}
</script>

<style>
.list-group-item:hover,
.sortable-chosen {
  border: 1px solid #409eff;
  outline: 0;
  color: #409eff;
  background-color: #ecf5ff;
}
</style>
