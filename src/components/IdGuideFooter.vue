<template>
  <div
    class="idguide-footer"
    @click="gotoHome"
  >
    <h1>Footer</h1>
  </div>
</template>

<script>
export default {
  methods: {
    gotoHome: function () {
      this.$emit('gotoHome')
    }
  }
}
</script>

<style scoped lang="scss">
.idguide-footer {
  background: rgba(200,255,200,0.3);
}
</style>
