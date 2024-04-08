<script>
export default {
    name: 'TestimonialCard',
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
    <div class="testimonial">
        <img :src="imageSrc" alt="">
        <div class="stars">{{ card.rating }}</div>
        <p>{{ card.text }}</p>
        <h4>{{ card.name }}</h4>
        <div>{{ card.position }}</div>
    </div>
</template>

<style scoped>
.testimonial {
    text-align: center;
    width: 300px;

    img {
        width: 100px;
    }
}
</style>