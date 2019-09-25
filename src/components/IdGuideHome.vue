<template>
  <div class="idguide-home">
    <h1>Tree ID guide</h1>
    <button
      @click="startGuide"
    >
      Tap to start
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    startGuide: function () {
      this.$emit('startGuide')
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
@supports (display:-ms-grid) {
  .idguide-home {
    justify-content: space-around;
  }
}
h1 {
  font-size: 3rem;
}
</style>
