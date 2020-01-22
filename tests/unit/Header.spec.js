import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue', () => {
  it('renders the page title', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.find('h1').text()).toMatch('Memory Game');
  });
});
