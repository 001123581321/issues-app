import { shallowMount } from '@vue/test-utils'
import LabelItem from '@/components/_componentsLib/LabelItem'
const labelName = 'Test label'
const factory = () => {
  return shallowMount(LabelItem, {
    propsData: {
      name: labelName,
      backgroundColor: '000',
      isLightColor: true,
      url: 'http://localhost',
    },
  })
}

describe('LabelItem', () => {
  test('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders the label name', () => {
    const wrapper = factory()
    expect(wrapper.html()).toContain(labelName)
  })
})
