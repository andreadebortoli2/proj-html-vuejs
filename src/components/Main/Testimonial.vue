<script>
import SectionCardHeader from './SectionCardHeader.vue';
import TestimonialCard from './TestimonialCard.vue';
import { store } from '../../store';

export default {
    name: 'Testimonial',
    components: {
        SectionCardHeader,
        TestimonialCard,
    },
    data() {
        return {
            store,
            testimonialHeader: {
                id: 'testimonial',
                section: 'Testimonial',
                title: 'What People Say',
                subTitle: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface.',
            }
        }
    }
}
</script>

<template>
    <div>
        <SectionCardHeader class="header" :header="testimonialHeader" />
        <div class="grid">
            <template v-for="card in store.testimonials">
                <TestimonialCard :card="card" />
            </template>
        </div>
    </div>
</template>

<style scoped>
.header {
    text-align: center;
}

.grid {
    display: flex;
    justify-content: space-between;
}
</style>