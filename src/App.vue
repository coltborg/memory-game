<template>
  <div>
    <header>
      <h1>App - {{ status }}</h1>
    </header>
    <main>
      <h2>Unmatched Cards</h2>
      <article
        v-for="card in unMatchedcards"
        :key="card.uuid"
      >
        <button
          type="button"
          :class="{
            isFirst:
              firstCard && card.uuid === firstCard.uuid,
            isSecond:
              secondCard && card.uuid === secondCard.uuid
          }"
          @click="$store.dispatch('setCard', card)"
        >
          {{ card.name }}
        </button>
      </article>
      <h2>Matched cards</h2>
      <article
        v-for="card in matchedCards"
        :key="card.uuid"
      >
        <button type="button">
          {{ card.name }}
        </button>
      </article>
      <div>
        <img
          src="svg/back.svg"
          alt="back of card"
        >
        <img
          src="svg/ace-of-clubs.svg"
          alt=""
        >
        <img
          src="svg/ace-of-diamonds.svg"
          alt=""
        >
        <img
          src="svg/ace-of-hearts.svg"
          alt=""
        >
        <img
          src="svg/ace-of-spades.svg"
          alt=""
        >
        <img
          src="svg/king-of-clubs.svg"
          alt=""
        >
        <img
          src="svg/king-of-diamonds.svg"
          alt=""
        >
        <img
          src="svg/king-of-hearts.svg"
          alt=""
        >
        <img
          src="svg/king-of-spades.svg"
          alt=""
        >
        <img
          src="svg/queen-of-clubs.svg"
          alt=""
        >
        <img
          src="svg/queen-of-diamonds.svg"
          alt=""
        >
        <img
          src="svg/queen-of-hearts.svg"
          alt=""
        >
        <img
          src="svg/queen-of-spades.svg"
          alt=""
        >
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      firstCard: 'getFirstCard',
      matchedCards: 'getMatchedCards',
      secondCard: 'getSecondCard',
      status: 'getStatus',
      unMatchedcards: 'getUnMatchedCards',
    }),
  },
  created() {
    this.$store.dispatch('newDeck');
  },
};
</script>

<style scoped>
.isFirst {
  color: red;
  background-color: yellow;
  font-size: 2rem;
}

.isSecond {
  color: blue;
  background-color: green;
  font-size: 2rem;
}
</style>
