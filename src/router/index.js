/*
 * @Author: Evita
 * @Date: 2021-05-24 18:17:12
 * @LastEditTime: 2021-05-25 20:41:38
 * @Description: Do not edit
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
}];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;