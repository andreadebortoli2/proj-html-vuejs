<script>
import SectionCardHeader from './Cards/SectionCardHeader.vue';
import PostCard from './Cards/PostCard.vue';

export default {
    name: 'Blog',
    components: {
        SectionCardHeader,
        PostCard,
    },
    data() {
        return {
            blogHeader: {
                id: 'Blog',
                section: 'Blog',
                title: 'Latest Posts',
                subTitle: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface.',
            },
            posts: [
                {
                    image: 'headway-537308-unsplash-1380x703.jpg',
                    date: 'April 21, 2019',
                    author: 'Paul',
                    title: 'Amazon gets CCI no to acquire 49% stake in',
                    text: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface. ofthe impenetrable foliage of my trees, and but a few stray gleams steal into the inner scanctuary,',
                },
                {
                    image: 'studio-republic-644339-unsplash-1380x703.jpg',
                    date: 'April 21, 2019',
                    author: 'Paul',
                    title: 'Clearing Corporation get SEBI nod to invest in overnight funds',
                    text: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface. ofthe impenetrable foliage of my trees, and but a few stray gleams steal into the inner scanctuary,',
                },
                {
                    image: 'timon-studler-63413-unsplash-1380x703.jpg',
                    date: 'April 21, 2019',
                    author: 'Paul',
                    title: 'Shabnam Dhillion, wife of RSSB chief Gurinder Dhillon, passes away in London',
                    text: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface. ofthe impenetrable foliage of my trees, and but a few stray gleams steal into the inner scanctuary,',
                },
            ],
            highlighted: 0,
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="blog">
            <SectionCardHeader class="header" :header="blogHeader" />
            <div class="posts">
                <template v-for="(post, index) in posts">
                    <PostCard :post="post" :class="highlighted === index ? 'highlight' : ''"
                        @click=" highlighted = index" />
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped></style>