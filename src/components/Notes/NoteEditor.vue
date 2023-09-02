<template>
    <div class="card has-background-success-dark p-4 mb-5">
        <div class="field">
            <div class="control">
                <textarea class="textarea" placeholder="Add a new note" ref="noteInputRef" v-model="noteText"
                    v-autofocus></textarea>
            </div>
        </div>
        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <button @click="buttonHandler" :disabled="!noteText" class="button is-link has-background-success">{{
                    buttonText }}</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ buttonText: string; initialText?: string }>()

const emits = defineEmits<{ (e: 'submit', content: string): void }>()

const noteText = ref(props.initialText ?? '')
const noteInputRef = ref()

const buttonHandler = () => {
    emits('submit', noteText.value)
    noteText.value = ''
    noteInputRef.value.focus()
}

const vAutofocus = {
    mounted: (el: HTMLElement) => {
        el.focus()
    }
}
</script>

