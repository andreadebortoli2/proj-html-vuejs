<script>
export default {
    name: 'Hero',
}
</script>

<template>
    <div id="hero">
        <div class="left">
            <h2>Businnes Planning</h2>
            <h2>Digital Technology</h2>
            <h2>Modern Solution!</h2>
            <p>
                When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface.
            </p>
            <button class="try_it">Try It Now</button>
            <button class="explore">Explore More</button>
        </div>
        <div class="right">
            <img src="/public/images/header.png" alt="">
        </div>
    </div>
</template>

<style scoped>
#hero {
    background-color: paleturquoise;
    display: flex;
    justify-content: space-between;

    .left {
        width: 200px;
    }

    .right {
        width: 400px;

        img {
            width: 100%;
        }
    }
}
</style>