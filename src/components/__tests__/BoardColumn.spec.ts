import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BoardColumn from '../BoardColumn.vue'

describe('BoardColumn', () => {
  it('renders property', () => {
    const wrapper = mount(BoardColumn, { props: { title: 'BoardColumn Vitest' } })
    expect(wrapper.text()).toContain('BoardColumn Vitest')
  })
})
