<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'PortfolioCarouselCard',
    components: {
        Carousel,
        Slide,
        Navigation,
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
    <div>
        <button @click="prev">Prev</button>

        <button @click="next">Next</button>
    </div>
    <Carousel ref="carousel" snapAlign="start" :items-to-show="3.5" :wrap-around="true">
        <Slide v-for="slide in slidesList" :key="slide">
            <div class="carousel__item">
                <img width="100%" :src="slide.image" alt="">
                <div class="card_details">
                    <span>{{ slide.name }}</span>-<span>{{ slide.comment }}</span>
                </div>
            </div>
        </Slide>
    </Carousel>

</template>
<style scoped>
/* .carousel__prev,
.carousel__next {} */

/* .carousel__slide:hover {
    border: 2px solid orange;
} */
</style>