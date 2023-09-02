<template>
    <NoteEditor :button-text="'Edit note'" :initial-text="noteStore.getNote($route.params.id as string)?.content ?? ''"
        @submit="handleEdit" />
</template>

<script setup lang="ts">
import NoteEditor from '@/components/Notes/NoteEditor.vue';
import { useNoteStore } from '@/stores/notesStore';
import { useRoute, useRouter } from 'vue-router';

const noteStore = useNoteStore()
const route = useRoute()
const router = useRouter()

const handleEdit = (updatedNoteText: string) => {
    noteStore.editNote(route.params.id as string, updatedNoteText)
    router.push('/')
}
</script>