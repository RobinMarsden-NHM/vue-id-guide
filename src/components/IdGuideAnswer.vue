<template>
  <div class="idguide-answer">
    <img :src="answerImg">
    <p>{{ state.answer.description }}</p>
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
    answerImg () {
      const filename = `${this.state.answer.img}.png`
      return require(`../../assets/content-imgs/${filename}`)
    }
  }
}
</script>

<style scoped lang="scss">
.idguide-answer {
  background: rgba(255,255,150,0.4);
}
img {
  width: 100%;
}
</style>
