import { createApp } from 'vue'
import App from './App.vue';
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
    components
});

createApp(App).use(vuetify).mount("#app");