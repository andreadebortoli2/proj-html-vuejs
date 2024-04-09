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
        <div class="title" :class="{ bold: index % 2 === 0 }" v-for="(title, index) in card.titles">
            {{ title }}
        </div>
        <p>{{ card.text }}</p>
        <button class="try">Try It Now</button>
        <button class="explore">Explore More</button>
    </div>
</template>

<style scoped></style>