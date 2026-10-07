import { defineComponent, ref } from 'vue'
import { describe, expect, it } from 'vitest'
import StableSearchResults from '../StableSearchResults.vue'
import { mountForSnapshot } from '../../../../tests/support/mount'

const Fixture = defineComponent({
  components: { StableSearchResults },
  setup() {
    const active = ref(false)
    const items = ref([1, 2, 3])
    return { active, items }
  },
  template: `
    <StableSearchResults :active="active">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="item in items" :key="item">
          <h2 :id="'item-' + item">Item {{ item }}</h2>
          <a :href="'/items/' + item">Abrir</a>
        </article>
      </div>
      <p role="status">{{ items.length ? '' : 'Nenhum resultado' }}</p>
    </StableSearchResults>
  `,
})

describe('StableSearchResults', () => {
  it('renders normally without retaining an extra list', () => {
    const wrapper = mountForSnapshot(Fixture)
    expect(wrapper.get('[data-search-results-baseline]').element.childElementCount).toBe(0)
    expect(wrapper.findAll('article')).toHaveLength(3)
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.unmount()
  })

  it('retains the pre-filter layout for partial and empty results, then releases it on clear', async () => {
    const wrapper = mountForSnapshot(Fixture)
    // Change active and results in the same render, just as search + pagination do.
    Object.assign(wrapper.vm, { active: true, items: [2] })
    await wrapper.vm.$nextTick()
    const baseline = wrapper.get('[data-search-results-baseline]')
    const content = wrapper.get('[data-search-results-content]')
    expect(baseline.findAll('article')).toHaveLength(3)
    expect(content.findAll('article')).toHaveLength(1)
    expect(baseline.attributes('aria-hidden')).toBe('true')
    expect(baseline.attributes('inert')).toBeDefined()
    expect(baseline.classes()).toContain('invisible')
    expect(baseline.findAll('[id]')).toHaveLength(0)
    expect(content.get('h2').attributes('id')).toBe('item-2')
    expect(content.attributes('aria-hidden')).toBeUndefined()
    // Responsive classes and real content, not desktop pixel heights, form the baseline.
    expect(baseline.find('.grid').classes()).toContain('sm:grid-cols-2')
    expect(baseline.find('.grid').classes()).toContain('lg:grid-cols-3')
    expect(wrapper.findAll('[style]')).toHaveLength(0)
    expect(wrapper.html()).toMatchSnapshot()

    Object.assign(wrapper.vm, { items: [] })
    await wrapper.vm.$nextTick()
    expect(baseline.findAll('article')).toHaveLength(3)
    expect(content.findAll('article')).toHaveLength(0)
    expect(content.get('[role="status"]').text()).toBe('Nenhum resultado')
    expect(wrapper.html()).toMatchSnapshot()

    Object.assign(wrapper.vm, { active: false, items: [1, 2, 3] })
    await wrapper.vm.$nextTick()
    expect(baseline.element.childElementCount).toBe(0)
    expect(content.findAll('article')).toHaveLength(3)
    wrapper.unmount()
  })

  it('uses the newly rendered page as the next baseline and disposes with its owner', async () => {
    const wrapper = mountForSnapshot(Fixture)
    Object.assign(wrapper.vm, { items: [4, 5] })
    await wrapper.vm.$nextTick()
    Object.assign(wrapper.vm, { active: true, items: [] })
    await wrapper.vm.$nextTick()
    expect(wrapper.get('[data-search-results-baseline]').findAll('article')).toHaveLength(2)
    expect(wrapper.get('[data-search-results-baseline]').text()).toContain('Item 4')
    wrapper.unmount()
    expect(wrapper.element.parentElement).toBeNull()
  })
})
