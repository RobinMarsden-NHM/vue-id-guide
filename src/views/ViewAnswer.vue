<template>
  <div class="view-wrapper">
    <Header />
    <Answer
      :dataset="dataset"
      class="flex-grow"
    />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Answer from '../components/Answer.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Answer,
    Footer
  },

  props: {
    dataset: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
