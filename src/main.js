import {createApp} from 'vue'
import {configure} from "vee-validate";
import { setLocale } from "yup";
import { fr} from "yup-locales";
import './style.css'
import App from './App.vue'
import router from './router'
import './validators/min-max.validator.js'


const app = createApp(App)
// configuer la validation
configure({
    validateOnInput: true,
    validateOnBlur: true,
    validateOnChange: true
})
// personnaliser la langue des messages d'erreur
setLocale(fr);
app.config.globalProperties.BASE_URL = "http://localhost:5555";
app
    .use(router)
    //.component('HelloWorld', HelloWorld);
    .mount('#app')