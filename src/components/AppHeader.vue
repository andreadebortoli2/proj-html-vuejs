<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div id="site_header">
        <img src="/public/images/white-logo-2.png" alt="">
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
</template>

<style scoped>
#site_header {
    background-color: paleturquoise;
    display: flex;
    justify-content: space-between;

    .right_side {
        display: flex;

        .nav_bar {
            display: flex;
            justify-content: space-around;
            list-style: none;

            li {
                padding: 0 1rem;
            }
        }
    }
}
</style>