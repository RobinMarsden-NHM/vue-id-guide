<template>
  <div class="idguide-home">
    <h1>Tree ID guide</h1>
    <router-link to="/guide/start">
      <button>
        Tap to start
      </button>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
$color-lightgreen: #d8f3d8;

.idguide-home {
  flex-grow: 1;
  background: $color-lightgreen;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
@supports (display:-ms-grid) {
  .idguide-home {
    justify-content: space-around;
  }
}
h1 {
  font-size: 3rem;
}
</style>
