import { shallowMount } from '@vue/test-utils';
import Win from '@/components/Win.vue';

describe('Win.vue', () => {
  it('renders the win message', () => {
    const wrapper = shallowMount(Win);
    expect(wrapper.find('p').text()).toMatch('Winner! 🎊');
  });
});
