<template>
  <section id="projects" class="grid min-h-screen place-items-center bg-background px-4 py-14 sm:px-6 sm:py-20 md:py-24 lg:min-h-0 lg:py-16">
    <div class="mx-auto w-full max-w-6xl">
      <div class="max-w-2xl">
        <h2 ref="heading" tabindex="-1" class="scroll-mt-24 text-3xl font-bold text-foreground sm:text-4xl">{{ title }}</h2>
        <p class="mt-4 text-sm leading-6 text-muted sm:text-base">
          {{ subtitle }}
        </p>
      </div>

      <SearchInput
        v-model="query"
        class="mt-8"
        label="Pesquisar projetos"
        placeholder="Título, descrição ou tecnologia"
      />
      <StableSearchResults :active="Boolean(query.trim())" class="mt-8">
        <p role="status" aria-live="polite" class="text-sm text-muted">
          <span v-if="projects.length && !filteredItems.length" class="block px-4 py-8 text-center">Nenhum resultado encontrado para “{{ query.trim() }}”.</span>
        </p>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            v-for="project in paginatedItems"
            :key="project.slug"
            :project="project"
          />
        </div>
        <Pagination
          class="mt-8"
          :page="currentPage"
          :total-pages="totalPages"
          label="Paginação dos projetos"
          @update:page="changePage"
        />
        <p v-if="totalPages > 1" class="sr-only" role="status">Página {{ currentPage }} de {{ totalPages }}</p>
      </StableSearchResults>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import SearchInput from '~/components/ui/SearchInput.vue'
import StableSearchResults from '~/components/ui/StableSearchResults.vue'
import { useSearch } from '~/composables/useSearch'
import { getProjectSearchFields } from '~/utils/searchFields'
import Pagination from '~/components/ui/Pagination.vue'
import { usePagination } from '~/composables/usePagination'
import ProjectCard from '~/components/projects/ProjectCard.vue'
import type { Project } from '~/types/portfolio'

const props = defineProps<{
  projects: Project[]
  subtitle: string
  title: string
}>()

const heading = ref<HTMLElement | null>(null)
const { query, filteredItems } = useSearch(() => props.projects, getProjectSearchFields)
const { currentPage, totalPages, paginatedItems, setPage } = usePagination(filteredItems, 6)
watch(query, () => setPage(1), { flush: 'sync' })

const changePage = async (page: number) => {
  setPage(page)
  await nextTick()
  heading.value?.focus({ preventScroll: true })
  heading.value?.scrollIntoView({ block: 'start', behavior: 'instant' })
}
</script>
