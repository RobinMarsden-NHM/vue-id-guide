<template>
  <div class="view-wrapper">
    <Header />
    <div class="flex-grow">
      <h1>About the tree ID guide</h1>
      <p>Some thrilling stuff about the ID guide etc...</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped lang="scss">
p {
  padding: 1rem;
}
</style>
