import { reactive } from "vue";

export const store = reactive({
    quickLinks: ['Services', 'Blog', 'Contact', 'Portfolio'],
    resources: ['Art Design', 'Computer', 'II News', 'Networking', 'Web Security'],
    contacts: {
        Address: 'Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX /6051',
        Phone: '+99 (0) 101 0000 558',
        Email: 'info@yourdomain.com',
    }
})