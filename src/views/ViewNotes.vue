<template>
    <div class="notes">
        <NoteEditor :button-text="'Add new Note'" @submit="addNote" />
        <NoteItem v-for="note in noteStore.notes" :key="note.id" :note="note" @delete-clicked="deleteNote" />
    </div>
</template>


<script setup lang="ts">
import NoteEditor from '@/components/Notes/NoteEditor.vue';
import NoteItem from '@/components/Notes/NoteItem.vue';
import { useNoteStore } from '@/stores/notesStore';

const noteStore = useNoteStore()

const addNote = (newNoteText: string) => {
    noteStore.addNote(newNoteText)
}

const deleteNote = (id: string) => {
    noteStore.deleteNote(id)
}

</script>