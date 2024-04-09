<script>
export default {
    name: 'ServiceCard',
    props: {
        card: Object,
    },
    data() {
        return {
            imageSrc: `/public/images/${this.card.image}`
        }
    },
}
</script>

<template>
    <div class="card">
        <img :src="imageSrc" alt="">
        <h2>{{ card.title }}</h2>
        <p>When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface.</p>
    </div>
</template>

<style scoped></style>