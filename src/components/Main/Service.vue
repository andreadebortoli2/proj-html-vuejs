<script>
import SectionCardHeader from "./Cards/SectionCardHeader.vue";
import ServiceCard from './Cards/ServiceCard.vue'

export default {
    name: 'Service',
    components: {
        SectionCardHeader,
        ServiceCard,
    },
    data() {
        return {
            serviceHeader: {
                id: 'Services',
                section: 'Our Services',
                title: 'What We Do',
                subTitle: 'When, while the lovelly valley teems vapour around me and the',
            },
            ourServices: [
                {
                    title: 'Data Analysis',
                    image: 'Group-247.png',
                },
                {
                    title: 'SEO Optimization',
                    image: 'Group-567.png',
                },
                {
                    title: 'Security Data',
                    image: 'Group-538.png',
                },
                {
                    title: 'Branding Strategy',
                    image: 'Group-566.png',
                },
            ],
        }
    }
}
</script>

<template>
    <div class="services">
        <div class="container">
            <SectionCardHeader class="header" :header="serviceHeader" />
            <div class="grid">
                <template v-for="card in ourServices">
                    <ServiceCard :card="card" />
                </template>
            </div>
            <div class="btn">
                <button>View All Services</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>