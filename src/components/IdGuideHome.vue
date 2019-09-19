<template>
  <div class="idguide-home">
    <h1>Tree ID guide</h1>
    <button
      @click="gotoGuide"
    >
      Tap to start
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    gotoGuide: function () {
      this.$emit('gotoGuide')
    }
  }
}
</script>

<style scoped lang="scss">
.idguide-home {
  flex-grow: 1;
  background: rgba(155,220,155,0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
h1 {
  font-size: 3rem;
}
button {
  padding: 0.5rem 2rem;
  font-size: 1rem;
  font-family: "elysio-regular";
}
</style>
