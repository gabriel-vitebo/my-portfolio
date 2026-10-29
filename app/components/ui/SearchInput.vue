<script setup lang="ts">
import { ref, useId } from 'vue'

defineProps<{ label: string, placeholder?: string }>()
const model = defineModel<string>({ required: true })
const inputId = useId()
const input = ref<HTMLInputElement | null>(null)

const clear = () => {
  model.value = ''
  input.value?.focus()
}
</script>

<template>
  <div class="w-full sm:max-w-md">
    <label :for="inputId" class="mb-2 block text-sm font-medium text-foreground">{{ label }}</label>
    <div class="flex items-center gap-2">
      <input
        :id="inputId"
        ref="input"
        v-model="model"
        type="search"
        :placeholder="placeholder"
        class="min-h-11 w-full min-w-0 rounded-sm border border-border bg-surface px-3 py-2 text-foreground placeholder:text-muted focus-visible:border-primary"
        @keydown.esc.prevent="clear"
      >
      <button
        v-if="model"
        type="button"
        class="min-h-11 shrink-0 rounded-sm border border-border px-3 py-2 text-sm text-muted hover:border-primary hover:text-foreground"
        aria-label="Limpar pesquisa"
        @click="clear"
      >
        Limpar
      </button>
    </div>
  </div>
</template>
