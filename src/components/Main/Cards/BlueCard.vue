<script>
export default {
    name: 'BlueCard',
    props: {
        card: Object,
    }
}
</script>

<template>
    <div class="card">
        <h5 v-if="card.section">{{ card.section }}</h5>
        <div class="title" v-for="title in card.titles">
            <h2>{{ title }}</h2>
        </div>
        <p>{{ card.text }}</p>
        <button class="try">Try It Now</button>
        <button class="explore">Explore More</button>
    </div>
</template>

<style scoped></style>