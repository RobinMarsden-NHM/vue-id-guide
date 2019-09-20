<template>
  <div class="idguide-option-wrapper">
    <div
      class="idguide-option"
      @click="selectOption"
    >
      <div class="img-wrapper">
        <img :src="optionImg">
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
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    optionImg () {
      const filename = `${this.state.keyId}-${this.state.step.step}-${this.index}.png`
      return require(`../../assets/content-imgs/${filename}`)
    }
  },
  methods: {
    selectOption: function () {
      console.log(`********* ${JSON.stringify(this.option)}`)
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
}
img {
  width: 100%;
}
.txt-wrapper {
  box-sizing: border-box;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-basis: 60%;
}
p {
  text-align: left;
}
</style>
