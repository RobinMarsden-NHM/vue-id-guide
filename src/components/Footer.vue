<template>
  <div class="idguide-footer">
    <router-link to="/">
      <font-awesome-icon
        size="2x"
        icon="home"
        class="navButton"
      />
    </router-link>

    <router-link to="/about">
      <font-awesome-icon
        size="2x"
        icon="info-circle"
        class="navButton"
      />
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.idguide-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
@supports (display:-ms-grid) {
  .idguide-footer {
    justify-content: space-around;
  }
}
</style>
