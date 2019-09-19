<template>
  <div class="idguide-main">
    <div class="idguide-content-wrapper">
      <IdGuideOption
        v-for="(option, index) in state.step.options"
        :key="index"
        :option="option"
        :state="state"
        :index="index"
        @selectOption="selectOption($event)"
      />
      <IdGuideAnswer
        :state="state"
      />
    </div>
  </div>
</template>

<script>
import IdGuideOption from './IdGuideOption.vue'
import IdGuideAnswer from './IdGuideAnswer.vue'

export default {
  components: {
    IdGuideOption,
    IdGuideAnswer
  },
  props: {
    state: {
      type: Object,
      required: true,
      default: () => ({
        title: undefined
      })
    }
  },
  methods: {
    selectOption: function (e) {
      console.log(e)
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
}
.idguide-content-wrapper {
  display: inline-block;
  position: relative;
  max-height: 100%;
  width: 100%;
  overflow: auto;
}

</style>
