<template>
    <div class="card mb-4">
        <header class="card-header">
            <p class="card-header-title">
                Component
            </p>
            <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </header>
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light">
                    <small>{{ characterLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="`/editNote/${note.id}`" class="card-footer-item">Edit</RouterLink>
            <a href="#" class="card-footer-item" @click.prevent="handleDeleteClick">Delete</a>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { type Note } from '@/types/Note';
import { computed } from 'vue';

const props = defineProps<{ note: Note }>()

const emit = defineEmits<{ (e: 'deleteClicked', id: string): void }>()

const characterLength = computed(() => {
    const length = props.note.content.length
    const description = length > 1 ? 'characters' : 'character'
    return `${length} ${description}`
})

const handleDeleteClick = () => {
    emit('deleteClicked', props.note.id)
}

</script>