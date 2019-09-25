<template>
  <div class="idguide-options">
    <h1>{{ state.title }}</h1>
    <IdGuideOption
      v-for="(option, index) in currentStateObj.options"
      :key="index"
      :option="option"
      :state="state"
      :current-state-obj="currentStateObj"
      :index="index"
      @selectOption="selectOption($event)"
    />
  </div>
</template>

<script>
import IdGuideOption from './IdGuideOption.vue'

export default {
  components: {
    IdGuideOption
  },

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

  methods: {
    selectOption: function (e) {
      this.$emit('selectOption', e)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
