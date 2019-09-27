<template>
  <div>
    <h1>{{ answer.name }}</h1>
    <lazy-img
      :src="imgUrl"
      :placeholder="placeholderImgUrl"
    />
    <p>{{ answer.description ? answer.description : `Placeholder for some really exciting description of ${answer.name}` }}</p>
    <router-link to="/guide/start">
      <button>
        Start again
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
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
    answer () {
      return this.dataset.answers.find(el => {
        return el.id === this.$route.params.answer
      })
    },

    imgUrl () {
      const filename = `${this.answer.img}`
      return `../../assets/content-imgs/${filename}.jpg`
    },

    placeholderImgUrl () {
      if (this.answer.img) {
        const filename = `${this.answer.img}`
        console.log(`../../assets/content-imgs/${filename}.20px.jpg`)
        return `../../assets/content-imgs/${filename}.20px.jpg`
      } else {
        return ''
      }
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
