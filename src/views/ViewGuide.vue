<template>
  <div class="view-wrapper">
    <Header />
    <Guide
      :dataset="dataset"
      class="flex-grow"
    />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Guide from '../components/Guide.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Guide,
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
