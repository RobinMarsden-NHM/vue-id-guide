<template>
  <div
    class="idguide-main"
  >
    <transition
      name="fade"
      mode="out-in"
    >
      <IdGuideHome
        v-if="state.displayMode === 'home'"
        class="idguide-content-screen"
        @startGuide="startGuide()"
      />

      <IdGuideOptions
        v-if="state.displayMode === 'guide'"
        class="idguide-content-screen"
        :state="state"
        :current-state-obj="currentStateObj"
        @selectOption="selectOption($event)"
      />

      <IdGuideAnswer
        v-if="state.displayMode === 'answer'"
        class="idguide-content-screen"
        :state="state"
        :current-state-obj="currentStateObj"
        @startGuide="startGuide()"
      />
    </transition>
  </div>
</template>

<script>
import IdGuideHome from './IdGuideHome.vue'
import IdGuideOptions from './IdGuideOptions.vue'
import IdGuideAnswer from './IdGuideAnswer.vue'

export default {
  components: {
    IdGuideHome,
    IdGuideOptions,
    IdGuideAnswer
  },

  props: {
    state: {
      type: Object,
      required: true,
      default: () => ({})
    },
    currentStateObj: {
      type: Object,
      required: true,
      default: () => ({
        options: []
      })
    }
  },

  beforeUpdate () {
    this.imagesLoaded = false
  },

  methods: {
    startGuide: function () {
      this.$emit('startGuide')
    },

    selectOption: function (e) {
      this.$emit('selectOption', e)
    }
  }
}
</script>

<style scoped lang="scss">
$transition-time: 0.5s;

.idguide-main {
  position: relative;
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.idguide-content-screen {
  position: absolute;
  top: 0;
  height: 100%;
  max-height: 100%;
  width: 100%;
  overflow: auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity $transition-time;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
