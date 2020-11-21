import { mount, shallowMount } from '@vue/test-utils'
import IssueItem from '@/components/IssueList/IssueItem'

describe('IssueItem', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(IssueItem, {
      propsData: {
        issue: {
          state: 'open',
          number: 1,
          comments: {},
          user: {},
          labels: []
        }
      },
      stubs: ['router-link']
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
