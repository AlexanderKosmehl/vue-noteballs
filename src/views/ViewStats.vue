<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ noteStore.getTotalNotes() }}</td>
                </tr>
                <tr>
                    <td>Number of total characters</td>
                    <td>{{ noteStore.getTotalCharacters() }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script setup lang="ts">
import { useNoteStore } from '@/stores/notesStore';

const noteStore = useNoteStore()
</script>