import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '@/App.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'App';
    const wrapper = shallowMount(App, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
