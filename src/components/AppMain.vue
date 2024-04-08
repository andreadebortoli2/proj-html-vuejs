<script>
import Hero from './Hero.vue';
import Service from './Service.vue';
import StartProject from './StartProject.vue';
import Portfolio from './Portfolio.vue';
import PriceList from './PriceList.vue';
import Blog from './Blog.vue';
import Testimonial from './Testimonial.vue';
import Subscribe from './Subscribe.vue';

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
    <div>
        * Main:
    </div>
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