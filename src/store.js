import { reactive } from "vue";

export const store = reactive({
    quickLinks: ['Services', 'Blog', 'Contact', 'Portfolio'],
    ourServices: [
        {
            title: 'Data Analysis',
            image: 'Group-247.png',
        },
        {
            title: 'SEO Optimization',
            image: 'Group-567.png',
        },
        {
            title: 'Security Data',
            image: 'Group-538.png',
        },
        {
            title: 'Branding Strategy',
            image: 'Group-566.png',
        },
    ],
    testimonials: [
        {
            image: 'szabo-viktor-1266895-unsplash-1024x1024.png',
            rating: 3,
            text: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface. of the impenetrable foliage of my trees, and but a thousand.',
            name: 'Michkel Angel',
            position: 'Marketing Management',
        },
        {
            image: 'philipe-cavalcante-539505-unsplash-1024x1024.png',
            rating: 3,
            text: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface. of the impenetrable foliage of my trees, and but a thousand.',
            name: 'Michkel Angel',
            position: 'Marketing Management',
        },
        {
            image: 'fabio-spinelli-695744-unsplash-1024x1024.png',
            rating: 3,
            text: 'When, while the lovelly valley teems vapour around me and the meridian sun strikes the upper surface. of the impenetrable foliage of my trees, and but a thousand.',
            name: 'Michkel Angel',
            position: 'Marketing Management',
        },
    ],
    partners: [
        {
            image: '/public/images/client-1.png',
        },
        {
            image: '/public/images/client-2.png',
        },
        {
            image: '/public/images/client-4.png',
        },
        {
            image: '/public/images/client-5.png',
        },
        {
            image: '/public/images/client-3.png',
        },
    ],
    resources: ['Art Design', 'Computer', 'II News', 'Networking', 'Web Security'],
    contacts: {
        Address: 'Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX /6051',
        Phone: '+99 (0) 101 0000 558',
        Email: 'info@yourdomain.com',
    }
})