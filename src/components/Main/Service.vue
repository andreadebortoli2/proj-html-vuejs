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
    <div>
        <SectionCardHeader class="header" :header="serviceHeader" />
        <div class="grid">
            <template v-for="card in ourServices">
                <ServiceCard :card="card" />
            </template>
        </div>
        <button>View All Services</button>
    </div>
</template>

<style scoped>
.header {
    text-align: center;
}

.grid {
    display: flex;
}
</style>