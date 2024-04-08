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
    <Subscribe />
</template>

<style scoped></style>