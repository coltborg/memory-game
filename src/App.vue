<template>
  <div
    class="min-h-screen mx-auto"
    style="max-width: 42.5rem;"
  >
    <Header
      v-if="status !== 'won'"
      @cheat="showAll = !showAll"
    />
    <Win
      v-if="status === 'won'"
      @play-again="$store.dispatch('newDeck')"
    />
    <main
      v-else
      class="grid"
    >
      <div
        v-for="card in cards"
        :key="card.uuid"
      >
        <Card
          :first-uuid="firstCard && firstCard.uuid"
          :is-matched="card.isMatched"
          :name="card.name"
          :second-uuid="secondCard && secondCard.uuid"
          :show-all="showAll"
          :slug="kebabCase(card.name)"
          :uuid="card.uuid"
          @activate-card="$store.dispatch('setCard', card)"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '@/components/Card.vue';
import Header from '@/components/Header.vue';
import Win from '@/components/Win.vue';

export default {
  name: 'App',
  components: {
    Card,
    Header,
    Win,
  },
  data() {
    return {
      showAll: false,
    };
  },
  computed: {
    ...mapGetters({
      cards: 'getCards',
      firstCard: 'getFirstCard',
      secondCard: 'getSecondCard',
      status: 'getStatus',
      unMatchedcards: 'getUnMatchedCards',
    }),
  },
  created() {
    this.$store.dispatch('newDeck');
  },
  methods: {
    kebabCase(value) {
      if (!value) {
        return '';
      }

      return value.replace(/\s/g, '-');
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px 100px;
  grid-template-rows: repeat(4, 150px);
  grid-gap: 1rem;
}
</style>
