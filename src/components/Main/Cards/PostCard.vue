<script>
export default {
    name: 'PostCard',
    props: {
        post: Object,
    },
    data() {
        return {
            backgroundImageUrl: `/public/images/${this.post.image}`
        }
    }
}
</script>

<template>
    <div class="card">
        <img :src="backgroundImageUrl" alt="">
        <div class="post_text">
            <div>{{ post.date }} <i class="fa-solid fa-circle"></i> {{ post.author }}</div>
            <h4>{{ post.title }}</h4>
            <p>{{ post.text }}</p>
            <button>Read More</button>
        </div>
    </div>
</template>

<style scoped>
.card {
    position: relative;
    background-color: purple;
    height: 200px;
    width: 200px;

    img {
        display: none;
        width: 100%;
    }

    &:hover {
        width: 400px;

        img {
            display: block;
        }
    }

    .post_text {
        position: absolute;
        top: 0;
        left: 0;

        p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
        }
    }
}
</style>