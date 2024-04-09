<script>
import BlueCard from './Cards/BlueCard.vue'

export default {
    name: 'Hero',
    components: {
        BlueCard,
    },
    data() {
        return {
            card: {
                titles: ['Business Planning', 'Digital Technology', 'Modern Solution!'],
                text: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface.',
            },
        }
    }
}
</script>

<template>
    <div class="container" id="hero">
        <div class="left">
            <BlueCard :card="card" />
        </div>
        <div class="right">
            <img src="/public/images/header.png" alt="">
        </div>
    </div>
</template>

<style scoped></style>