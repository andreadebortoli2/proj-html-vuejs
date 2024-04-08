<script>
import SectionCardHeader from "./SectionCardHeader.vue";
import ServiceCard from './ServiceCard.vue'
import { store } from "../../store.js";

export default {
    name: 'Service',
    components: {
        SectionCardHeader,
        ServiceCard,
    },
    data() {
        return {
            store,
            serviceHeader: {
                id: 'Services',
                section: 'Our Services',
                title: 'What We Do',
                subTitle: 'When, while the lovelly valley teems vapour around me and the',
            }
        }
    }
}
</script>

<template>
    <div>
        <SectionCardHeader class="header" :header="serviceHeader" />
        <div class="grid">
            <template v-for="card in store.ourServices">
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