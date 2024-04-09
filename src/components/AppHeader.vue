<script>
import Hero from './Main/Hero.vue';
import { store } from '../store';

export default {
    name: 'AppHeader',
    components: {
        Hero,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div id="site_header">
        <div class="container">
            <img class="logo" src="/public/images/white-logo-2.png" alt="">
            <div class="right_side">
                <ul class="nav_bar">
                    <li class="home">Home</li>
                    <li>About</li>
                    <template v-for="link in store.quickLinks">
                        <li><a :href="`#${link}`">{{ link }}</a>
                        </li>
                    </template>
                </ul>
                <button class="sign_in">Sign In</button>
            </div>
        </div>
        <Hero />
    </div>
</template>

<style scoped></style>