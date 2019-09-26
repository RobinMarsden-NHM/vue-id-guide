<template>
  <div class="idguide-answer">
    <h1>{{ state.title }}</h1>
    <lazy-img
      :src="imgUrl"
      :placeholder="placeholderImgUrl"
    />
    <p>{{ currentStateObj.description ? currentStateObj.description : `Placeholder for some really exciting description of ${state.title}` }}</p>
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
    imgUrl () {
      if (this.currentStateObj.img) {
        const filename = `${this.currentStateObj.img}`
        return `../../assets/content-imgs/${filename}.jpg`
      } else {
        return ''
      }
    },

    placeholderImgUrl () {
      if (this.currentStateObj.img) {
        const filename = `${this.currentStateObj.img}`
        console.log(`../../assets/content-imgs/${filename}.20px.jpg`)
        return `../../assets/content-imgs/${filename}.20px.jpg`
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
$color-lightgreen: #d8f3d8;
p {
  padding: 1rem;
}
img {
  width: 100%;
}
button {
  background: $color-lightgreen;
}
</style>
