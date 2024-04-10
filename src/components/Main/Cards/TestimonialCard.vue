<script>
export default {
    name: 'TestimonialCard',
    props: {
        card: Object,
    },
    data() {
        return {
            imageSrc: `/public/images/${this.card.image}`
        }
    },
}
</script>

<template>
    <div class="testimonial">
        <img :src="imageSrc" alt="">
        <div class="stars"><span v-for="full in card.rating"><i class="fa-solid fa-star"></i></span><span
                v-for="empty in 5 - card.rating"><i class="fa-regular fa-star"></i></span>
        </div>
        <div class="stars_background">
            <svg width="50" xmlns="http://www.w3.org/2000/svg" height="58"
                id="screenshot-9e7d8e67-6dbe-80b9-8004-2d2124a7ac97" viewBox="-1352 3019 50 58"
                style="-webkit-print-color-adjust::exact" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"
                version="1.1">
                <g id="shape-9e7d8e67-6dbe-80b9-8004-2d2124a7ac97">
                    <g class="fills" id="fills-9e7d8e67-6dbe-80b9-8004-2d2124a7ac97">
                        <path
                            d="M-1352.000,3077.000L-1319.000,3077.000L-1302.000,3019.000L-1327.000,3020.000L-1352.000,3077.000Z"
                            style="fill:#aaaaaa;fill-opacity:1">
                        </path>
                    </g>
                    <g id="strokes-9e7d8e67-6dbe-80b9-8004-2d2124a7ac97" class="strokes">
                        <g class="inner-stroke-shape">
                            <defs>
                                <clipPath id="inner-stroke-render-65-9e7d8e67-6dbe-80b9-8004-2d2124a7ac97-0">
                                    <use href="#stroke-shape-render-65-9e7d8e67-6dbe-80b9-8004-2d2124a7ac97-0">
                                    </use>
                                </clipPath>
                                <path
                                    d="M-1352.000,3077.000L-1319.000,3077.000L-1302.000,3019.000L-1327.000,3020.000L-1352.000,3077.000Z"
                                    style="fill:none;fill-opacity:none;stroke-width:4;stroke:#aaaaaa;stroke-opacity:1"
                                    id="stroke-shape-render-65-9e7d8e67-6dbe-80b9-8004-2d2124a7ac97-0">
                                </path>
                            </defs>
                            <use href="#stroke-shape-render-65-9e7d8e67-6dbe-80b9-8004-2d2124a7ac97-0"
                                clip-path="url(&#x27;#inner-stroke-render-65-9e7d8e67-6dbe-80b9-8004-2d2124a7ac97-0&#x27;)">
                            </use>
                        </g>
                    </g>
                </g>
            </svg>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" height="58"
                id="screenshot-9e7d8e67-6dbe-80b9-8004-2d221f2e7add" viewBox="-1302 3019 50 58"
                style="-webkit-print-color-adjust::exact" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"
                version="1.1">
                <g id="shape-9e7d8e67-6dbe-80b9-8004-2d221f2e7add">
                    <g class="fills" id="fills-9e7d8e67-6dbe-80b9-8004-2d221f2e7add">
                        <path
                            d="M-1302.000,3077.000L-1269.000,3077.000L-1252.000,3019.000L-1277.000,3020.000L-1302.000,3077.000Z"
                            style="fill:#aaaaaa;fill-opacity:1">
                        </path>
                    </g>
                    <g id="strokes-9e7d8e67-6dbe-80b9-8004-2d221f2e7add" class="strokes">
                        <g class="inner-stroke-shape">
                            <defs>
                                <clipPath id="inner-stroke-render-66-9e7d8e67-6dbe-80b9-8004-2d221f2e7add-0">
                                    <use href="#stroke-shape-render-66-9e7d8e67-6dbe-80b9-8004-2d221f2e7add-0">
                                    </use>
                                </clipPath>
                                <path
                                    d="M-1302.000,3077.000L-1269.000,3077.000L-1252.000,3019.000L-1277.000,3020.000L-1302.000,3077.000Z"
                                    style="fill:none;fill-opacity:none;stroke-width:4;stroke:#aaaaaa;stroke-opacity:1"
                                    id="stroke-shape-render-66-9e7d8e67-6dbe-80b9-8004-2d221f2e7add-0">
                                </path>
                            </defs>
                            <use href="#stroke-shape-render-66-9e7d8e67-6dbe-80b9-8004-2d221f2e7add-0"
                                clip-path="url(&#x27;#inner-stroke-render-66-9e7d8e67-6dbe-80b9-8004-2d221f2e7add-0&#x27;)">
                            </use>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <p>{{ card.text }}</p>
        <h4 class="name">{{ card.name }}</h4>
        <p class="position">{{ card.position }}</p>
    </div>
</template>

<style scoped></style>