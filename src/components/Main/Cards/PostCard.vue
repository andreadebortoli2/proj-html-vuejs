<script>
export default {
    name: 'PostCard',
    props: {
        post: Object,
    },
    data() {
        return {
            backgroundImageUrl: `/public/images/${this.post.image}`,
        }
    }
}
</script>

<template>
    <div class="card">
        <img :src="backgroundImageUrl" alt="">
        <div class="post_text">
            <div class="details">
                <div>{{ post.date }} &#x2022; {{ post.author }}</div>
                <h4>{{ post.title }}</h4>
                <p>{{ post.text }}</p>
            </div>
            <div class="link">
                <a href="">Read More</a>
            </div>
        </div>
    </div>
</template>

<style scoped></style>