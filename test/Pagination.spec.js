import { shallowMount } from '@vue/test-utils'
import Pagination from '@/components/_componentsLib/Pagination'

const factory = (linksQuantity = 10, activeLinkIndex = 1) => {
  const links = []
  for (let i = 0; i < linksQuantity; i++) {
    links.push({
      query: i
    })
  }
  return shallowMount(Pagination, {
    propsData: {
      links,
      activeLinkIndex
    },
    stubs: ['router-link']
  })
}

describe('First test', () => {

  it('should match snapshot', () => {
    const wrapper = factory()
    expect(wrapper).toMatchSnapshot()
  })

  it('basic rendered', () => {
    const linksQuantity = 10
    const activeLinkIndex = 1
    const wrapper = factory(linksQuantity, activeLinkIndex)

    expect(wrapper.findAll('.linkPageNumber').length).toEqual(linksQuantity)

    expect(wrapper.findAll('.linkStep').length).toEqual(2)

    expect(wrapper.findAll('.linkStep').length).toEqual(2)

    expect(wrapper.find('.link:nth-child(2)').html()).toContain('1')

  })
})
