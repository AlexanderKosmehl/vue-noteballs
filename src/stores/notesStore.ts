import type { Note } from '@/types/Note'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNoteStore = defineStore('notes', () => {
  const notes = ref<Note[]>([])

  function getNote(id: string) {
    return notes.value.find((note) => note.id === id)
  }

  function addNote(newNoteContent: string) {
    notes.value.unshift({
      id: new Date().getTime().toString(),
      content: newNoteContent
    })
  }

  function deleteNote(id: string) {
    notes.value = notes.value.filter((note) => note.id !== id)
  }

  function editNote(id: string, updatedContent: string) {
    const oldNote = notes.value.find((note) => note.id === id)
    if (!oldNote) return

    oldNote.content = updatedContent
  }

  function getTotalNotes() {
    return notes.value.length
  }

  function getTotalCharacters() {
    return notes.value.reduce((sum, currentElement) => sum + currentElement.content.length, 0)
  }

  return { notes, getNote, addNote, deleteNote, editNote, getTotalNotes, getTotalCharacters }
})
