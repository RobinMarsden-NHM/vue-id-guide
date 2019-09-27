<template>
  <div class="container">
    <router-view :dataset="dataset" />
  </div>
</template>

<script>
import dataset from './tree-id.json'

export default {
  data: () => {
    return {
      dataset
    }
  }
}
</script>
