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
            showBtt: false,
        }
    },
    methods: {
        showScrollToTopButton() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                // console.log('scrolling');
                this.showBtt = true;
            } else {
                // console.log('top');
                this.showBtt = false;
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.showScrollToTopButton);
    },
}
</script>

<template>
    <Service />
    <StartProject />
    <Portfolio />
    <PriceList />
    <Blog />
    <Testimonial />
    <div class="partners">
        <div class="container">
            <template v-for="partner in partners">
                <img class="partner" :src="partner.image" alt="">
            </template>
        </div>
    </div>
    <Subscribe />
    <button class="back_to_top" :class="{ show_btt: showBtt }">
        <a href="#site_header"><i class="fa-solid fa-arrow-up"></i></a>
    </button>
    <button class="chatbot"><i class="fa-regular fa-comment fa-flip-horizontal"></i></button>
</template>

<style scoped></style>