<template>
  <footer>
    <hr />
    <p>&copy; Cody Bentley {{ new Date().getFullYear() }}</p>
    <a href="https://gitlab.com/codydbentley" target="_blank">
      <img src="@/assets/img/brands/gitlab.svg" alt="Gitlab" />
    </a>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
})
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
  margin: 60px 0 30px 0;
  p {
    margin: 20px;
  }
  img {
    max-width: 50px;
  }
}
</style>
