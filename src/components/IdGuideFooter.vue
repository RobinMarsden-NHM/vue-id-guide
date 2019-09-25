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
      :disabled="backBtnDisabled"
      :class="{ disabled: backBtnDisabled }"
      @click="goBack"
    >
      <img
        class="navIcon"
        src="../img/arrow-outline-left.svg"
        alt="Back button"
      >
    </button>

    <button
      class="navButton"
      :disabled="forwardBtnDisabled"
      :class="{ disabled: forwardBtnDisabled }"
      @click="goForward"
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
  props: {
    historyIndex: {
      type: Number,
      required: true,
      default: () => 0
    },
    stateHistory: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },

  computed: {
    backBtnDisabled: function () {
      return this.historyIndex < 1
    },

    forwardBtnDisabled: function () {
      return this.historyIndex >= this.stateHistory.length - 1
    }
  },

  methods: {
    gotoHome: function () {
      this.$emit('gotoHome')
    },
    goBack: function () {
      this.$emit('goBack')
    },
    goForward: function () {
      this.$emit('goForward')
    }
  }
}
</script>

<style scoped lang="scss">
.idguide-footer {
  background: rgba(150,150,150,0.3);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
@supports (display:-ms-grid) {
  .idguide-footer {
    justify-content: space-around;
  }
}
.navButton {
  padding: 1rem;
  height: 4rem;
  width: 4rem;
  border: none;
  background: none;

  &:active:not(.disabled) {
    transform: scale(0.9);
  }

  &:active,
  &:focus {
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
  }
}

</style>
