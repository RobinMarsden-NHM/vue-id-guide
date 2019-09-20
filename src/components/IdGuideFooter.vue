<template>
  <div class="idguide-footer">
    <button
      class="navButton"
      @click="gotoHome"
    >
      <img
        class="navIcon"
        src="../img/home.svg"
        alt="Home button"
      >
    </button>
    <button
      class="navButton"
      @click="gotoHome"
    >
      <img
        class="navIcon"
        src="../img/arrow-outline-left.svg"
        alt="Back button"
      >
    </button>
    <button
      class="navButton"
      @click="gotoHome"
    >
      <img
        class="navIcon"
        src="../img/arrow-outline-right.svg"
        alt="Forward button"
      >
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    gotoHome: function () {
      this.$emit('gotoHome')
    }
  }
}
</script>

<style scoped lang="scss">
.idguide-footer {
  background: rgba(200,255,200,0.3);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.navButton {
  padding: 1rem;
  height: 4rem;
  width: 4rem;
  border: none;
  background: none;

  &:active {
    transform: scale(0.9);
  }

  &:active,
  &:focus {
    outline: none;
  }
}

</style>
