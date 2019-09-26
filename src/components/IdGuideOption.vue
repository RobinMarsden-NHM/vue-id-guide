<template>
  <div class="idguide-option-wrapper">
    <div
      class="idguide-option"
      @click="selectOption"
    >
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
  </div>
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
      if (typeof this.option.img !== 'undefined') {
        filename += `${this.option.img}.jpg`
      } else {
        filename += `${this.state.keyId}-${this.currentStateObj.step}-${this.index}.jpg`
      }
      return `../../assets/content-imgs/${filename}`
    },

    placeholderImgUrl () {
      let filename = ''
      if (typeof this.option.img !== 'undefined') {
        filename += `${this.option.img}.20px.jpg`
      } else {
        filename += `${this.state.keyId}-${this.currentStateObj.step}-${this.index}.20px.jpg`
      }
      return `../../assets/content-imgs/${filename}`
    }

  },

  methods: {
    selectOption: function () {
      this.$emit('selectOption', this.option)
    }
  }
}
</script>

<style scoped lang="scss">
.idguide-option-wrapper {
  width: 100%;
  display: inline-block;
}
.idguide-option {
  background: rgba(150,255,150,0.4);
  display: flex;
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
