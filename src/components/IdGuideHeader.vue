<template>
  <div class="idguide-header">
    <img
      class="logo"
      src="../img/logo.png"
      alt="NHM logo"
    >
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
    }
  }
}
</script>

<style scoped lang="scss">
.idguide-header {

}
h1 {
  margin-top: 0;
  margin-bottom: 1rem;
  width: 100%;
  display: inline-block;
}
.logo {
  padding: 1rem;
  box-sizing: border-box;
  max-width: 100%;
}
</style>
