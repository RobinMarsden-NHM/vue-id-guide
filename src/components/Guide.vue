<template>
  <transition name="fade">
    <div class="flex-grow">
      <h1>{{ currentTitle }}</h1>
      <Option
        v-for="(option, index) in currentStepObj.options"
        :key="`${$route.params.section}-${$route.params.step}-${index}`"
        :option="option"
        :index="index"
      />
    </div>
  </transition>
</template>

<script>
import Option from './Option.vue'

export default {
  components: {
    Option
  },

  props: {
    dataset: {
      type: Object,
      required: true,
      default: () => ({
        title: undefined
      })
    }
  },

  computed: {
    currentSectionIndex: function () {
      return this.dataset.data.findIndex(el => {
        return el.section === this.$route.params.section
      })
    },

    currentStepObj: function () {
      return this.dataset.data[this.currentSectionIndex].steps.find(el => {
        return el.step === this.$route.params.step
      })
    },

    currentTitle: function () {
      console.log(this.$route)
      return this.dataset.data[this.currentSectionIndex].description
    }
  }
}
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-enter-leave {
  transition: all 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  // transform: translateY(15px);
}
</style>
