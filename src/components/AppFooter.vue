<script>
import { store } from '../store';

export default {
    name: 'AppFooter',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div id="site_footer">
        <div class="footer_utilities">
            <div class="logo">
                <img src="/public/images/white-logo-2.png" alt="">
                <div>
                    When, while lovelly valley teems vapour around me and meridian sun strikes the upper impenetrable
                </div>
            </div>
            <div class="quick_links">
                <h6>Quick Links</h6>
                <ul v-for="link in store.quickLinks">
                    <li>{{ link }}</li>
                </ul>
            </div>
            <div class="resources">
                <h6>Resources</h6>
                <ul v-for="link in store.resources">
                    <li>{{ link }}</li>
                </ul>
            </div>
            <div class="contact_us">
                <h6>Contacts Us</h6>
                <div v-for="(contact, key) in store.contacts">
                    <span>{{ key }}:</span> {{ contact }}
                </div>
            </div>
        </div>
        <div class="footer_end">
            <div class="copyrights">
                <i class="fa-regular fa-copyright"></i>
                2020 Phlox. ALL Rights Reserved.
            </div>
            <div class="socials">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
#site_footer {
    background-color: paleturquoise;

    .footer_utilities {
        display: flex;
        justify-content: space-between;

        div {
            width: 200px;
        }
    }

    .footer_end {
        display: flex;
        justify-content: space-between;

        i {
            padding: 0 0.5rem;
        }
    }
}
</style>