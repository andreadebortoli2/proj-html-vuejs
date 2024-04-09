<script>
export default {
    name: 'Service',
    props: {
        header: Object,
    },
}
</script>

<template>
    <div :id="header.id">
        <h5>{{ header.section }}</h5>
        <h3>{{ header.title }}</h3>
        <p>{{ header.subTitle }}</p>
    </div>
</template>

<style scoped></style>