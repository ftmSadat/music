import {createApp} from "vue";
import {createPinia} from "pinia";

import App from "./App.vue";
import router from "./router";
import VeeValidatePlugin from "./includes/validation";
import i18n from "./includes/i18n.js"
import {auth} from "./includes/firebase";
import {registerSW} from "virtual:pwa-register";
import GlobalComponents from "./includes/_globals.js"
import progressBar from "./includes/progress-bar";

import "./assets/base.css";
import "./assets/main.css";
import "nprogress/nprogress.css"

let app;
registerSW({immediate: true})
progressBar(router)

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        app.use(createPinia());
        app.use(router);
        app.use(VeeValidatePlugin);
        app.use(i18n)
        app.use(GlobalComponents)

        app.mount("#app");
    }
});
