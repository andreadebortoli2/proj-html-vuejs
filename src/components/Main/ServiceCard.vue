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
    <div>
        <img :src="imageSrc" alt="">
        <h4>{{ card.title }}</h4>
        <p>When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface.</p>
    </div>
</template>

<style scoped></style>