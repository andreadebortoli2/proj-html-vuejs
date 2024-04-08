<script>
import SectionCardHeader from './SectionCardHeader.vue';

export default {
    name: 'PriceList',
    components: {
        SectionCardHeader,
    },
    data() {
        return {
            priceListHeader: {
                id: 'Price_List',
                section: 'Price List',
                title: 'Our Pricing',
                subTitle: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface.',
            }
        }
    }
}
</script>

<template>
    <div>
        <SectionCardHeader class="header" :header="priceListHeader" />
    </div>
</template>

<style scoped>
.header {
    text-align: center;
}
</style>