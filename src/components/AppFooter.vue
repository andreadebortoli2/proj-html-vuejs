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
        <div class="container">
            <div class="footer_utilities">
                <div class="logo">
                    <img src="/public/images/white-logo-2.png" alt="">
                    <div>
                        When, while lovelly valley teems vapour around me and meridian sun strikes the upper
                        impenetrable
                    </div>
                </div>
                <div class="quick_links">
                    <h4>Quick Links</h4>
                    <ul v-for="link in store.quickLinks">
                        <li>{{ link }}</li>
                    </ul>
                </div>
                <div class="resources">
                    <h4>Resources</h4>
                    <ul v-for="link in store.resources">
                        <li>{{ link }}</li>
                    </ul>
                </div>
                <div class="contact_us" id="Contact">
                    <h4>Contacts Us</h4>
                    <div class="contact" v-for="(contact, key) in store.contacts">
                        <span class="contact_type">{{ key }}:</span> {{ contact }}
                    </div>
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

<style scoped></style>