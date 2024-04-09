<script>
import SectionCardHeader from './Cards/SectionCardHeader.vue';
import PriceCard from './Cards/PriceCard.vue';

export default {
    name: 'PriceList',
    components: {
        SectionCardHeader,
        PriceCard,
    },
    data() {
        return {
            priceListHeader: {
                id: 'Price_List',
                section: 'Price List',
                title: 'Our Pricing',
                subTitle: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface.',
            },
            offers: [
                {
                    title: 'Design',
                    subTitle: 'process',
                    price: 40,
                    features: [
                        {
                            name: 'Creative',
                            trait: 'Design Enabled',
                        },
                        {
                            name: 'Vibrant',
                            trait: 'Color Usage',
                        },
                        {
                            name: 'Eye',
                            trait: 'Catching Design',
                        },
                        {
                            name: 'Extreme',
                            trait: 'Typography',
                        },
                        {
                            name: 'Exceptional',
                            trait: 'Design',
                        },
                    ],
                },
                {
                    title: 'Developing',
                    subTitle: 'product',
                    price: 60,
                    features: [
                        {
                            name: 'Creative',
                            trait: 'Design Enabled',
                        },
                        {
                            name: 'Vibrant',
                            trait: 'Color Usage',
                        },
                        {
                            name: 'Eye',
                            trait: 'Catching Design',
                        },
                        {
                            name: 'Extreme',
                            trait: 'Typography',
                        },
                        {
                            name: 'Exceptional',
                            trait: 'Design',
                        },
                    ],
                },
                {
                    title: 'Supporting',
                    subTitle: 'clients',
                    price: 80,
                    features: [
                        {
                            name: 'Creative',
                            trait: 'Design Enabled',
                        },
                        {
                            name: 'Vibrant',
                            trait: 'Color Usage',
                        },
                        {
                            name: 'Eye',
                            trait: 'Catching Design',
                        },
                        {
                            name: 'Extreme',
                            trait: 'Typography',
                        },
                        {
                            name: 'Exceptional',
                            trait: 'Design',
                        },
                    ],
                },
            ],
        }
    }
}
</script>

<template>
    <div>
        <SectionCardHeader class="header" :header="priceListHeader" />
        <div class="prices">
            <template v-for="offer in offers">
                <PriceCard :card="offer" />
            </template>
        </div>
    </div>
</template>

<style scoped>
.header {
    text-align: center;
}

.prices {
    display: flex;
    justify-content: space-between;
}
</style>