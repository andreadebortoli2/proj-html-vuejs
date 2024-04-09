<script>
import SectionCardHeader from './Cards/SectionCardHeader.vue';
import TestimonialCard from './Cards/TestimonialCard.vue';

export default {
    name: 'Testimonial',
    components: {
        SectionCardHeader,
        TestimonialCard,
    },
    data() {
        return {
            testimonialHeader: {
                id: 'testimonial',
                section: 'Testimonial',
                title: 'What People Say',
                subTitle: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface.',
            },
            testimonials: [
                {
                    image: 'szabo-viktor-1266895-unsplash-1024x1024.png',
                    rating: 3,
                    text: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface. of the impenetrable foliage of my trees, and but a thousand.',
                    name: 'Michkel Angel',
                    position: 'Marketing Management',
                },
                {
                    image: 'philipe-cavalcante-539505-unsplash-1024x1024.png',
                    rating: 3,
                    text: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface. of the impenetrable foliage of my trees, and but a thousand.',
                    name: 'Michkel Angel',
                    position: 'Marketing Management',
                },
                {
                    image: 'fabio-spinelli-695744-unsplash-1024x1024.png',
                    rating: 3,
                    text: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface. of the impenetrable foliage of my trees, and but a thousand.',
                    name: 'Michkel Angel',
                    position: 'Marketing Management',
                },
            ],
        }
    }
}
</script>

<template>
    <div class="testimonials">
        <div class="container">
            <SectionCardHeader class="header" :header="testimonialHeader" />
            <div class="grid">
                <template v-for="card in testimonials">
                    <TestimonialCard :card="card" />
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped></style>