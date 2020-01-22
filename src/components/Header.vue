<template>
  <header class="py-2">
    <h1
      class="text-2xl font-semibold leading-tight tracking-wide text-center text-gray-800 uppercase"
    >
      Memory Game
    </h1>
    <div class="text-center">
      <button
        class="px-2 py-1 text-xs font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
        type="button"
        @click="$emit('cheat')"
      >
        Cheat 😉
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
