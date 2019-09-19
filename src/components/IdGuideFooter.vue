<template>
  <div
    class="idguide-footer"
    @click="selectOption"
  >
    <h1>Footer</h1>
  </div>
</template>

<script>
export default {
  methods: {
    selectOption: function () {
      this.$emit('selectOption')
    }
  }
}
</script>

<style scoped lang="scss">
.idguide-footer {
  background: rgba(200,255,200,0.3);
}
</style>
