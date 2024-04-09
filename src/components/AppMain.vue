<script>
import Hero from './Main/Hero.vue';
import Service from './Main/Service.vue';
import StartProject from './Main/StartProject.vue';
import Portfolio from './Main/Portfolio.vue';
import PriceList from './Main/PriceList.vue';
import Blog from './Main/Blog.vue';
import Testimonial from './Main/Testimonial.vue';
import Subscribe from './Main/Subscribe.vue';

export default {
    name: 'AppMain',
    components: {
        Hero,
        Service,
        StartProject,
        Portfolio,
        PriceList,
        Blog,
        Testimonial,
        Subscribe,
    },
    data() {
        return {
            partners: [
                {
                    image: '/public/images/client-1.png',
                },
                {
                    image: '/public/images/client-2.png',
                },
                {
                    image: '/public/images/client-4.png',
                },
                {
                    image: '/public/images/client-5.png',
                },
                {
                    image: '/public/images/client-3.png',
                },
            ],
        }
    }
}
</script>

<template>
    <Hero />
    <Service />
    <StartProject />
    <Portfolio />
    <PriceList />
    <Blog />
    <Testimonial />
    <div class="partners">
        <template v-for="partner in partners">
            <img :src="partner.image" alt="">
        </template>
    </div>
    <Subscribe />
</template>

<style scoped>
.partners {

    img {
        padding: 0 2rem;
    }
}
</style>