<script>
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
    <Service />
    <StartProject />
    <Portfolio />
    <PriceList />
    <Blog />
    <Testimonial />
    <div class="partners container">
        <template v-for="partner in partners">
            <img class="partner" :src="partner.image" alt="">
        </template>
    </div>
    <Subscribe />
</template>

<style scoped></style>