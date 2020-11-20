require('./bootstrap');

window.Vue = require('vue');

Vue.component('home', require('./components/Home.vue').default);
Vue.component('portfolio', require('./components/Portfolio.vue').default);
Vue.component('about', require('./components/About.vue').default);
Vue.component('contact', require('./components/Contact.vue').default);

const app = new Vue({
    el: '#app',
});
