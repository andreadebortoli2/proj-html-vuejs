<script>
export default {
    name: 'PriceCard',
    props: {
        card: Object,
    },
}
</script>

<template>
    <div class="card" :class="card.title">
        <h3>{{ card.title }}</h3>
        <h4>{{ card.subTitle }}</h4>
        <div class="price">
            $
            <div>{{ card.price }}</div>
            Per Month
        </div>
        <ul class="features" v-for="feature in card.features">
            <li>{{ feature.name }} {{ feature.trait }}</li>
        </ul>
        <button>
            <div>Order Now</div><i class="fa-solid fa-arrow-right"></i>
        </button>
    </div>
</template>

<style scoped>
ul {
    list-style: none;
}
</style>