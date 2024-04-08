<script>
import SectionCardHeader from './SectionCardHeader.vue';

export default {
    name: 'Portfolio',
    components: {
        SectionCardHeader,
    },
    data() {
        return {
            portfolioHeader: {
                id: 'Portfolio',
                section: 'Portfolio',
                title: 'latest work',
            }
        }
    }
}
</script>

<template>
    <div>
        <SectionCardHeader :header="portfolioHeader" />
    </div>
</template>

<style scoped></style>