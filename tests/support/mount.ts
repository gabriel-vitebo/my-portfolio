import { mount, type ComponentMountingOptions } from '@vue/test-utils'
import type { Component } from 'vue'

const UBadgeStub = {
  inheritAttrs: false,
  props: ['as'],
  template: '<component :is="as || `span`" v-bind="$attrs"><slot /></component>',
}

const UButtonStub = {
  inheritAttrs: false,
  props: ['href', 'to'],
  template: '<a v-if="href || to" v-bind="$attrs" :href="href || to"><slot /></a><button v-else v-bind="$attrs"><slot /></button>',
}

const UCardStub = {
  inheritAttrs: false,
  props: ['as', 'href'],
  template: '<component :is="as || `div`" v-bind="$attrs" :href="href"><slot /></component>',
}

export function mountForSnapshot(component: Component, options: ComponentMountingOptions<Component> = {}) {
  return mount(component, {
    ...options,
    global: {
      ...options.global,
      stubs: {
        NuxtImg: {
          props: ['src', 'alt'],
          template: '<img v-bind="$attrs" :src="src" :alt="alt">',
        },
        NuxtIcon: {
          props: ['name', 'size', 'mode'],
          template: '<span v-bind="$attrs" :data-icon="name" :data-size="size" :data-mode="mode" />',
        },
        NuxtLink: {
          props: ['to'],
          template: '<a v-bind="$attrs" :href="to"><slot /></a>',
        },
        Teleport: true,
        UBadge: UBadgeStub,
        UButton: UButtonStub,
        UCard: UCardStub,
        ...options.global?.stubs,
      },
    },
  })
}
