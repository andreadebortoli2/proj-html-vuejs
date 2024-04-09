<script>
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'PortfolioCarouselCard',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  props: {
    slidesList: Array,
  },
  methods: {
    next() {
      this.$refs.carousel.next()
    },
    prev() {
      this.$refs.carousel.prev()
    },
  },
})
</script>

<template>
  <div class="carousel">
    <div class="commands">
      <button class="prev" @click="prev"><i class="fa-solid fa-arrow-left"></i></button>

      <button class="next" @click="next"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
    <Carousel ref="carousel" snapAlign="start" :items-to-show="3.8" :wrap-around="true" :transition="500">
      <Slide v-for="slide in slidesList" :key="slide">
        <div class="carousel__item">
          <img width="100%" :src="slide.image" alt="">
          <div class="card_details">
            <div class="title">{{ slide.name }}</div>
            <div class="comment">{{ slide.comment }}</div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style scoped></style>