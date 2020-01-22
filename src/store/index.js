import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: null,
    firstCard: null,
    secondCard: null,
    status: 'idle',
  },
  mutations: {
    updateCards(state, payload) {
      state.cards = payload;
    },
    updateFirstCard(state, payload) {
      state.firstCard = payload;
    },
    updateSecondCard(state, payload) {
      state.secondCard = payload;
    },
    updateStatus(state, payload) {
      state.status = payload;
    },
  },
  actions: {
    compareCards({ commit, getters, state }) {
      const { cards, firstCard, secondCard } = state;

      commit('updateStatus', 'compare');

      if (firstCard.name === secondCard.name) {
        // Update cards
        const copy = [...cards];
        const firstIndex = cards.findIndex(card => card.uuid === firstCard.uuid);
        const secondIndex = cards.findIndex(card => card.uuid === secondCard.uuid);

        copy[firstIndex].isMatched = true;
        copy[secondIndex].isMatched = true;

        commit('updateCards', copy);
      }

      // Reset selected cards
      commit('updateFirstCard', null);
      commit('updateSecondCard', null);

      if (getters.getUnMatchedCards && getters.getUnMatchedCards.length === 0) {
        commit('updateStatus', 'won');
      } else {
        commit('updateStatus', 'idle');
      }
    },
    async newDeck({ dispatch }) {
      await dispatch('fetchDeck');
      await dispatch('shuffleDeck');
    },
    fetchDeck({ commit }) {
      commit('updateStatus', 'fetchDeck');

      return new Promise((resolve, reject) => {
        fetch('http://localhost:8080/data.json')
          .then(response => response.json())
          .then((json) => {
            commit('updateCards', json);
            commit('updateStatus', 'idle');
            resolve(json);
          })
          .catch((error) => {
            commit('updateStatus', 'error');
            return reject(error);
          });
      });
    },
    setCard({ commit, dispatch, state }, card) {
      // Eject if both cards are already selected
      if (state.firstCard && state.secondCard) {
        return;
      }

      if (!state.firstCard) {
        commit('updateFirstCard', card);
        commit('updateStatus', 'first');
      } else if (state.firstCard && !state.secondCard) {
        // Eject if selecting the same card twice
        if (state.firstCard.uuid === card.uuid) {
          return;
        }

        commit('updateSecondCard', card);
        commit('updateStatus', 'wait');

        setTimeout(() => {
          dispatch('compareCards');
        }, 600);
      }
    },
    shuffleDeck({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (!state.cards) {
          reject();
          return;
        }

        const copyCards = [...state.cards];

        // TODO: improve randomness
        copyCards.sort(() => Math.random() - 0.5);

        commit('updateCards', copyCards);
        commit('updateStatus', 'idle');
        resolve(copyCards);
      });
    },
  },
  getters: {
    getCards(state) {
      return state.cards;
    },
    getFirstCard(state) {
      return state.firstCard;
    },
    getSecondCard(state) {
      return state.secondCard;
    },
    getStatus(state) {
      return state.status;
    },
    getUnMatchedCards(state) {
      return state.cards && state.cards.filter(card => card.isMatched === false);
    },
  },
});
