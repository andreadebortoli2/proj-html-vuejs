<script>
import SectionCardHeader from './Cards/SectionCardHeader.vue';
import PortfolioCarouselCard from './Cards/PortfolioCarouselCard.vue'

export default {
    name: 'Portfolio',
    components: {
        SectionCardHeader,
        PortfolioCarouselCard,
    },
    data() {
        return {
            portfolioHeader: {
                id: 'Portfolio',
                section: 'Portfolio',
                title: 'latest work',
            },
            portfolioSlides: [
                {
                    image: '/public/images/8wa60okr-1-790x576.jpg',
                    name: 'Basket of Flower on table',
                    comment: 'Branding Strategy',
                },
                {
                    image: '/public/images/DRY-1-790x576.jpg',
                    name: 'Purinky Products',
                    comment: 'Digital Experience',
                },
                {
                    image: '/public/images/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
                    name: 'Satisfy Poster',
                    comment: 'Branding Strategy',
                },
                {
                    image: '/public/images/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg',
                    name: 'Mock-up',
                    comment: 'Experience',
                },
                {
                    image: '/public/images/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
                    name: 'Satisfy Poster',
                    comment: 'Branding Strategy',
                },

            ],
            activeSlide: 1,
        }
    },
}
</script>

<template>
    <div class="portfolio">

        <div class="header">
            <SectionCardHeader :header="portfolioHeader" />
        </div>

        <PortfolioCarouselCard :slidesList="portfolioSlides" />

    </div>
</template>

<style scoped></style>