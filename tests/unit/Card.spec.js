import { shallowMount } from '@vue/test-utils';
import Card from '@/components/Card.vue';

describe('Card.vue', () => {
  const wrapper = shallowMount(Card, {
    propsData: {
      firstUuid: null,
      name: 'ace of spades',
      isMatched: false,
      secondUuid: null,
      showAll: false,
      slug: 'ace-of-spades',
      uuid: 'unique-string-1234',
    },
  });

  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true);
  });

  it('render the back of the card', () => {
    expect(wrapper.contains('.back img')).toBe(true);
  });

  it('render the front of the card', () => {
    expect(wrapper.contains('.front img')).toBe(true);
  });
});
