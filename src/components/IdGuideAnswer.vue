<template>
  <div class="idguide-answer">
    <h1>{{ state.title }}</h1>
    <img :src="answerImg">
    <p>{{ currentStateObj.description }}</p>
    <button
      @click="startGuide"
    >
      Start again
    </button>
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
    },
    currentStateObj: {
      type: Object,
      required: true,
      default: () => ({
        description: ''
      })
    }
  },

  computed: {
    answerImg () {
      console.log(this)
      if (this.currentStateObj.img) {
        const filename = `${this.currentStateObj.img}.png`
        return require(`../../assets/content-imgs/${filename}`)
      } else {
        return ''
      }
    }
  },

  methods: {
    startGuide: function () {
      this.$emit('startGuide')
    }
  }
}
</script>

<style scoped lang="scss">
.idguide-answer {
  // background: rgba(255,255,150,0.4);
}
img {
  width: 100%;
}
</style>
