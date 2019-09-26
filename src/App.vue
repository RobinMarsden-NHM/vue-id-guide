<template>
  <div class="container">
    <IdGuide
      :dataset="dataset"
    />
  </div>
</template>

<script>
import IdGuide from './components/IdGuide.vue'
import dataset from './tree-id.json'

export default {
  components: {
    IdGuide
  },
  data: () => {
    return {
      dataset
    }
  }
}
</script>
