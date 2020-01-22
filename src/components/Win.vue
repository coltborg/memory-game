<template>
  <main
    class="p-6 my-4 text-center bg-gray-400 rounded"
  >
    <p class="text-2xl">
      Winner! 🎊
    </p>
    <button
      type="button"
      class="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
      @click="$emit('play-again')"
    >
      Play again
    </button>
  </main>
</template>

<script>
export default {
  name: 'Win',
};
</script>
