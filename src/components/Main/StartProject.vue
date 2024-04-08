<script>
export default {
    name: 'StartProject',
}
</script>

<template>
    <div id="start_project">
        <div class="left">
            <img src="/public/images/nemoodar.png" alt="">
            <img class="top_image" src="/public/images/men-data.png" alt="">
        </div>
        <div class="right">
            <h4>Start Your Project</h4>
            <h2>Grow Your Business</h2>
            <h2>With Our Strategy</h2>
            <p>
                When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface. of
                the impenetrable foliage of my trees, and but a few stray gleams steal into the inner scanctuary,
            </p>
            <button class="try_it">Try It Now</button>
            <button class="explore">Explore More</button>
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