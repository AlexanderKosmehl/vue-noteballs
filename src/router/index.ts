import ViewEditNote from '@/views/ViewEditNote.vue'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  },
  {
    path: '/editNote/:id',
    name: 'edit-note',
    component: ViewEditNote
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
