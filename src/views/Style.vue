<template>
  <div id="style_page">
    <PageHeader title="Style" subtitle="codybentley.dev styles" />
    <div style="border-left: 1px solid black">
      <p>headers</p>
      <br />
      <h1>Headline1</h1>
      <br />
      <h2>Headline2</h2>
      <br />
      <h3>Headline3.txt</h3>
      <br />
      <h4>Headline4</h4>
      <br />
      <h5>Headline5</h5>
      <br />
      <h6>Headline6</h6>
      <br />
    </div>
    <br />
    <hr />
    <p>paragraphs</p>
    <br />
    <div>
      <p>
        Lorem ipsum dolor sit amet, <em>consectetur adipiscing elit</em>. Morbi velit ipsum, malesuada in vehicula vel,
        sodales vitae risus. Aenean dignissim quis enim vitae sollicitudin. Phasellus non elit augue. Nam eu orci
        sagittis, cursus nisi ut, lobortis lacus. Praesent elementum ipsum ac pretium tempus. Ut pellentesque luctus
        velit, a blandit purus rhoncus eu. Duis scelerisque est pretium mauris sollicitudin fringilla at ut urna. Donec
        eget lectus nisl. Donec vel urna gravida, aliquet turpis id, vehicula mi. Etiam in nunc egestas, egestas nibh a,
        laoreet enim. Cras efficitur, libero ac lobortis fermentum, ligula elit venenatis massa, et bibendum odio eros
        quis magna. Duis dapibus, <strong>tellus non scelerisque dictum</strong>, augue metus tempus est, nec bibendum
        nulla felis sit amet felis. Pellentesque et odio lacus. Donec rutrum non quam rutrum rutrum. Nullam a purus
        mattis, semper ex nec, feugiat metus. Proin a erat fringilla, gravida nisl at, vulputate ipsum.
      </p>
      <br />
      <p>
        Ut eleifend lacinia mi, ac suscipit eros interdum at. Phasellus malesuada sodales ante, vel tincidunt nisi
        pretium nec. Duis non ornare neque. Donec lacus lorem, sodales et lacus et, semper convallis lacus. Praesent at
        nunc auctor, laoreet tortor vitae, feugiat odio. Sed elementum facilisis odio, ut fermentum velit molestie nec.
        Donec commodo pellentesque felis varius tincidunt. Donec molestie rutrum ex, vitae ornare dolor tristique et.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/PageHeader.vue'

export default defineComponent({
  name: 'Style',
  components: { PageHeader }
})
</script>

<style lang="scss" scoped></style>
