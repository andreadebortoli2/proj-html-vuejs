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
        <div class="stars"><span v-for="full in card.rating"><i class="fa-solid fa-star"></i></span><span
                v-for="empty in 5 - card.rating"><i class="fa-regular fa-star"></i></span>
        </div>
        <p>{{ card.text }}</p>
        <h4 class="name">{{ card.name }}</h4>
        <p class="position">{{ card.position }}</p>
    </div>
</template>

<style scoped></style>