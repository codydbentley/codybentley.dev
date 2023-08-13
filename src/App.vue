<template>
  <div id="main">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer id="footer" />
  </div>
  <Sidenav />
</template>

<script>
import Sidenav from '@/components/Sidenav.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Footer, Sidenav },
  setup() {
    document.title = 'Cody Bentley'
    return {}
  }
}
</script>

<style lang="scss" scoped>
#main {
  padding-left: 100px;
  margin-right: 25px;
  max-width: 800px;
  @media (min-width: 768px) {
    margin-left: 280px;
  }
  @media (min-width: 1300px) {
    margin-left: 450px;
  }
}
</style>
