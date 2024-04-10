<script>
export default {
    name: 'PriceCard',
    props: {
        card: Object,
        index: Number,
    },
    methods: {
        evenIndex() {
            let className = '';
            if (this.index % 2 !== 0) {
                className = 'even'
            } else {
                className = 'odd'
            }

            return className
        }
    }
}
</script>

<template>
    <div class="card" :class="evenIndex()">
        <h3>{{ card.title }}</h3>
        <div>{{ card.subTitle }}</div>
        <div class="background_price">{{ card.price }}</div>
        <div class="price">
            <div class="price_value">$</div>
            <div class="price_tag">{{ card.price }}</div>
            Per Month
        </div>
        <ul class="features">
            <li v-for="feature in card.features"><span class="bold">{{ feature.name }}</span> {{ feature.trait }}</li>
        </ul>
        <div class="order">
            <button>
                <div>
                    <span>Order Now</span><i class="fa-solid fa-arrow-right"></i>
                </div>
            </button>
        </div>
    </div>
</template>

<style scoped></style>