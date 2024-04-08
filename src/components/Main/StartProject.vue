<script>
import BlueCard from './Cards/BlueCard.vue'

export default {
    name: 'StartProject',
    components: {
        BlueCard,
    },
    data() {
        return {
            card: {
                section: 'Start Your Project',
                titles: ['Grow Your Business', 'With Our Strategy'],
                text: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface. ofthe impenetrable foliage of my trees, and but a few stray gleams steal into the inner scanctuary,',
            },
        }
    }
}
</script>

<template>
    <div id="start_project">
        <div class="left">
            <img src="/public/images/nemoodar.png" alt="">
            <img class="top_image" src="/public/images/men-data.png" alt="">
        </div>
        <div class="right">
            <BlueCard :card="card" />
        </div>
    </div>
</template>

<style scoped>
#start_project {
    background-color: paleturquoise;
    display: flex;
    justify-content: space-between;

    .left {
        width: 200px;
        position: relative;

        img {
            width: 300px;
        }

        .top_image {
            position: absolute;
            top: 30px;
            left: 35px;
        }
    }

    .right {
        width: 200px;
    }
}
</style>