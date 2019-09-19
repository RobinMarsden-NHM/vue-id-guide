<template>
  <div class="idguide-answer">
    {{ state.answer.name }}
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: Object,
      required: true,
      default: () => ({
        title: undefined
      })
    }
  },
  computed: {
    optionImg () {
      const filename = `${this.state.keyId}-${this.state.step.step}-${this.index}.png`
      return require(`../../assets/content-imgs/${filename}`)
    }
  }
}
</script>

<style scoped lang="scss">
.idguide-answer {
  background: rgba(255,255,150,0.4);
}
</style>
