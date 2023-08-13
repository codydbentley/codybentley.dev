<template>
  <nav id="nav" :class="activeClass('')">
    <div :class="activeClass('nav-back')" @click="toggleNav()"></div>
    <div class="nav-container">
      <div :class="activeClass('nav-head')">
        <img src="@/assets/img/cody.jpg" alt="Cody Bentley" :class="activeClass('nav-headshot')" />
        <h1 :class="activeClass('nav-title')">
          <a href="#main">Cody Bentley</a>
        </h1>
      </div>
      <div :class="activeClass('nav-menu')">
        <ul v-for="section in menu" :key="section.href">
          <li>
            <a :href="section.href">
              <i class="material-icons">{{ section.icon }}</i>
              {{ section.name }}
            </a>
          </li>
          <li v-if="section.links.length">
            <ul>
              <li v-for="link in section.links" :key="link.href">
                <a :href="link.href">
                  <i class="material-icons">{{ link.icon }}</i>
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="nav-control">
        <button class="nav-toggle" @click="toggleNav">
          <transition name="fade" mode="out-in">
            <i class="material-icons" v-if="!active">menu</i>
            <i class="material-icons" v-else>close</i>
          </transition>
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Menu } from '@/data'

export default defineComponent({
  name: 'Sidenav',
  setup() {
    // state
    const active = ref(false)
    // methods
    const activeClass = (className: string) => ({ [className]: true, active: active.value })
    const toggleNav = () => {
      active.value = !active.value
    }
    return {
      menu: Menu,
      active,
      activeClass,
      toggleNav
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/css/variables';
$breakpoint: 767px;
$speed: 350ms;
#nav {
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  padding-right: 20px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 75px;
  z-index: 1000;
  background: $dark-primary-4;
  color: lighten($color-primary-1, 10%);
  transition: width $speed ease;
  @media (max-width: $breakpoint) {
    &.active {
      width: 280px;
    }
  }
  @media (min-width: $breakpoint) {
    width: 280px;
  }
  @media (min-width: 1300px) {
    width: 450px;
  }
}
.nav-back {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 280px;
  @media (max-width: $breakpoint) {
    &.active {
      display: block;
    }
  }
}
.nav-container {
  display: flex;
  flex-direction: column;
  width: 250px;
}
.nav-head {
  text-align: center;
  .nav-headshot {
    margin: 40px 0 20px 0;
    max-width: 96px;
    border-radius: 1000px;
    border: 2px solid lighten($color-primary-1, 10%);
    transition:
      max-width $speed ease,
      margin-right $speed ease;
    @media (max-width: $breakpoint) {
      max-width: 60px;
      margin-right: -105px;
      &.active {
        margin-right: 0;
        max-width: 96px;
      }
    }
  }
  .nav-title {
    margin: 20px 0;
    transition: transform $speed ease;
    @media (max-width: $breakpoint) {
      transform: translateX(-300px);
      opacity: 0;
      &.active {
        transform: translateX(0);
        opacity: 1;
      }
    }
    a {
      color: white;
    }
  }
}
.nav-menu {
  width: 100%;
  align-self: center;
  flex-grow: 1;
  font-size: 0.9rem;
  overflow-y: auto;
  transition: transform $speed ease;
  @media (max-width: $breakpoint) {
    transform: translateX(-300px);
    opacity: 0;
    &.active {
      transform: translateX(0);
      opacity: 1;
    }
  }
  a {
    display: block;
    color: $color-primary-1;
    &:hover {
      color: white;
      transform: scale(1.2);
      transition:
        transform 250ms ease,
        color 250ms ease-out;
    }
  }
  ul {
    padding-left: 20px;
    list-style: none;
    li {
      margin: 10px 0;
      i {
        margin-right: 8px;
        font-size: 1rem;
        color: $color-primary-0;
        transform: translateY(2px);
      }
    }
  }
}
.nav-control {
  align-self: flex-end;
  margin: 10px 0;
  @media (min-width: 768px) {
    display: none;
  }
  button {
    display: block;
    width: 40px;
    height: 40px;
  }
}
</style>
