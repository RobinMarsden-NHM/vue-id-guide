<template>
  <div
    class="idguide-options"
  >
    <!-- <div
      v-images-loaded:on.done="imgsLoaded"
      class="idguide-options"
    > -->
    <h1>{{ state.title }}</h1>
    <transition-group name="list">
      <IdGuideOption
        v-for="(option, index) in currentStateObj.options"
        :key="`${state.keyId}-${state.stepId}-${index}`"
        :option="option"
        :state="state"
        :current-state-obj="currentStateObj"
        :index="index"
        @selectOption="selectOption($event)"
      />
    </transition-group>
  </div>
</template>

<script>
import IdGuideOption from './IdGuideOption.vue'
// import ImagesLoaded from 'vue-images-loaded'

export default {
  components: {
    IdGuideOption
  },

  // directives: {
  //   ImagesLoaded
  // },

  props: {
    state: {
      type: Object,
      required: true,
      default: () => ({
        title: undefined
      })
    },

    currentStateObj: {
      type: Object,
      required: true,
      default: () => ({
        description: ''
      })
    }
  },

  data: function () {
    return {
      loaded: true
    }
  },

  beforeUpdate () {
    console.log('before update')
    this.loaded = false
  },

  methods: {
    selectOption: function (e) {
      this.$emit('selectOption', e)
      // },

    // imgsLoaded: function () {
    //   console.log('images loaded')
    //   this.loaded = true
    }
  }
}
</script>

<style scoped lang="scss">
.list-enter-active, .list-enter-leave {
  transition: all 0.2s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  // transform: translateY(5px);
}
</style>
