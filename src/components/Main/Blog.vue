<script>
import SectionCardHeader from './SectionCardHeader.vue';

export default {
    name: 'Blog',
    components: {
        SectionCardHeader,
    },
    data() {
        return {
            blogHeader: {
                id: 'Blog',
                section: 'Blog',
                title: 'Latest Posts',
                subTitle: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface.',
            }
        }
    }
}
</script>

<template>
    <div>
        <SectionCardHeader class="header" :header="blogHeader" />
        <div class="card">PLACEHOLDER</div>
    </div>
</template>

<style scoped>
.header {
    text-align: center;
}
</style>