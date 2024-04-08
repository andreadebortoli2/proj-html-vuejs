<script>
import SectionCardHeader from './SectionCardHeader.vue';
import PostCard from './Cards/PostCard.vue';
import { store } from '../../store';

export default {
    name: 'Blog',
    components: {
        SectionCardHeader,
        PostCard,
    },
    data() {
        return {
            store,
            blogHeader: {
                id: 'Blog',
                section: 'Blog',
                title: 'Latest Posts',
                subTitle: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface.',
            }
        }
    }
}
</script>

<template>
    <div>
        <SectionCardHeader class="header" :header="blogHeader" />
        <div class="posts">
            <template v-for="post in store.posts">
                <PostCard :post="post" />
            </template>
        </div>
    </div>
</template>

<style scoped>
.header {
    text-align: center;
}

.posts {
    display: flex;
    justify-content: space-between;
}
</style>