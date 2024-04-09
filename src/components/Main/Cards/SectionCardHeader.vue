<script>
export default {
    name: 'Service',
    props: {
        header: Object,
    },
    methods: {
        firtsWord() {
            // console.log(this.header.title)
            const words = this.header.title.split(' ');
            // console.log(words);
            const firtsWord = words[0];
            // console.log(firtsWord);
            return firtsWord
        },
        restWords() {
            const words = this.header.title.split(' ');
            const rest = words.slice(1);
            // console.log(rest);
            // console.log(rest.join(' '));
            return rest.join(' ')
        },
    },
}
</script>

<template>
    <div :id="header.id">
        <div class="section_name">{{ header.section }}</div>
        <div class="section_title"><span>{{ firtsWord() }}</span> {{ restWords() }}</div>
        <p class="section_comment">{{ header.subTitle }}</p>
    </div>
</template>

<style scoped></style>