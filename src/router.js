
import Vue from 'vue';
import Router from 'vue-router';

import Home from  "./views/Home.vue";
import About from  "./views/About.vue";
import Resource from  "./views/Resource.vue";
import Resources from  "./views/Resources.vue";
import FAQ from  "./views/FAQ.vue";
import Report from  "./views/Report.vue";
import Version from  "./views/Version.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    { path: "/", name: "home", component: Home },

    { path: "/about", name: "about", component: About },

    { path: "/resources/:id", component: Resource },

    { path: "/resources", name: "Resources", component: Resources },

    { path: "/faq", name: "faq", component: FAQ },

    { path: "/version", name: "version", component: Version },

    { path: "/report", name: "report", component: Report }

  ]
});
