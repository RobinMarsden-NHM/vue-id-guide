<template>
  <router-link :to="targetPath">
    <div class="idguide-option">
      <div class="img-wrapper">
        <lazy-img
          :src="imgUrl"
          :placeholder="placeholderImgUrl"
        />
      </div>

      <div class="txt-wrapper">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true,
      default: () => ({
        title: undefined
      })
    },

    index: {
      type: Number,
      required: true
    }
  },

  computed: {
    imgUrl () {
      let filename = ''
      typeof this.option.img !== 'undefined'
        ? filename += `${this.option.img}.jpg`
        : filename += `${this.$route.params.section}-${this.$route.params.step}-${this.index}.jpg`
      return `../../assets/content-imgs/${filename}`
    },

    placeholderImgUrl () {
      let filename = ''
      typeof this.option.img !== 'undefined'
        ? filename += `${this.option.img}.20px.jpg`
        : filename += `${this.$route.params.section}-${this.$route.params.step}-${this.index}.20px.jpg`
      return `../../assets/content-imgs/${filename}`
    },

    targetPath () {
      let path = ''
      if (typeof this.option.answerId !== 'undefined') {
        path += `/answer/${this.option.answerId}`
      } else if (typeof this.option.section !== 'undefined') {
        path += `/guide/${this.option.section}/1`
      } else if (typeof this.option.step !== 'undefined') {
        path += `/guide/${this.$route.params.section}/${this.option.step}`
      }
      return path
    }
  }
}
</script>

<style scoped lang="scss">
a {
  color: inherit;
  text-decoration: none;
}
.idguide-option {
  background: rgba(150,255,150,0.4);
  display: flex;
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  margin-bottom: 1rem;
}
.img-wrapper {
  flex-basis: 40%;
  font-size: 0;
  display: flex;
  align-items: center;
}
img {
  width: 100%;
}
.txt-wrapper {
  box-sizing: border-box;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-basis: 60%;
  display: flex;
  align-items: center;
}
p {
  text-align: left;
}
</style>
