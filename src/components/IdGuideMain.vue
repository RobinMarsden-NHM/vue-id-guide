<template>
  <div class="idguide-main">
    <IdGuideHome
      v-if="state.displayMode === 'home'"
      @gotoGuide="gotoGuide()"
    />
    <div
      v-if="state.displayMode === 'guide'"
      class="idguide-content-wrapper"
    >
      <h1>{{ state.title }}</h1>
      <IdGuideOption
        v-for="(option, index) in state.step.options"
        :key="index"
        :option="option"
        :state="state"
        :index="index"
        @selectOption="selectOption($event)"
      />
    </div>
    <IdGuideAnswer
      v-if="state.displayMode === 'answer'"
      :state="state"
      @gotoGuide="gotoGuide()"
    />
  </div>
</template>

<script>
import IdGuideHome from './IdGuideHome.vue'
import IdGuideOption from './IdGuideOption.vue'
import IdGuideAnswer from './IdGuideAnswer.vue'

export default {
  components: {
    IdGuideHome,
    IdGuideOption,
    IdGuideAnswer
  },
  props: {
    state: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    gotoGuide: function () {
      console.log('Start')
      this.$emit('gotoGuide')
    },
    selectOption: function (e) {
      console.log('Home')
      this.$emit('selectOption', e)
    }
  }
}
</script>

<style scoped lang="scss">
$transition-time: 0.5s;

.idguide-main {
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.idguide-content-wrapper {
  display: inline-block;
  position: relative;
  max-height: 100%;
  width: 100%;
  overflow: auto;
}

</style>
