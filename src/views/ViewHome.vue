<template>
  <div class="view-wrapper">
    <Header />
    <Home
      class="flex-grow"
    />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Home from '../components/Home.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Home,
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
