<template>
  <div class="h-full">
    <button
      v-if="isMatched === false"
      type="button"
      class="flip-container"
      :class="{
        first:
          firstUuid && uuid === firstUuid,
        second:
          secondUuid && uuid === secondUuid,
        all:
          showAll,
      }"
      @click="$emit('activate-card')"
    >
      <div class="flipper">
        <div class="back">
          <img
            :aria-hidden="toggleCardName"
            src="svg/back.svg"
            alt="back of card"
          >
        </div>
        <div class="front">
          <img
            :aria-hidden="!toggleCardName"
            :src="`svg/${slug}.svg`"
            :alt="name"
          >
        </div>
      </div>
    </button>
    <div
      v-else
      class="h-full bg-gray-200 rounded"
    />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    firstUuid: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    isMatched: {
      type: Boolean,
      required: true,
    },
    secondUuid: {
      type: String,
      default: '',
    },
    showAll: {
      type: Boolean,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    uuid: {
      type: String,
      required: true,
    },
  },
  computed: {
    toggleCardName() {
      return (this.firstUuid && this.uuid === this.firstUuid)
        || (this.secondUuid && this.uuid === this.secondUuid)
        || this.showAll;
    },
  },
};
</script>

<style scoped>
.flip-container {
  perspective: 1000px;
  position: relative;
}

.flip-container:hover .flipper,
.flip-container:focus .flipper {
  transform: scale(1.1);
}

.flip-container.first .flipper,
.flip-container.second .flipper,
.flip-container.all .flipper {
  transform: rotateY(180deg);
}

.flip-container,
.front,
.back {
  width: 100px;
  height: 150px;
}

.flipper {
  width: 100%;
  height: 100%;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.flipper img {
  object-fit: contain;
  height: 9.375rem;
  width: 6.25rem;
}

.front,
.back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}

.front {
  z-index: 2;
  transform: rotateY(180deg);
}

.back {
  transform: rotateY(0deg);
}
</style>
