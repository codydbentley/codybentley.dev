<template>
  <div class="page-header">
    <h1 class="title">{{ title }}</h1>
    <hr />
    <p class="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHeader',
  props: ['title', 'subtitle']
})
</script>

<style lang="scss" scoped>
@import '../assets/css/variables';
.page-header {
  margin: 60px 0;
}
.title {
  margin-bottom: 10px;
}
.subtitle {
  color: $dark-primary-1;
  font-style: italic;
}
</style>
