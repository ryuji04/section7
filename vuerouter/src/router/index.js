import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookList from "../views/BookList.vue";
import BookDetail from "../components/BookDetail.vue";
import top from "../views/top.vue";
import ApplyCard from "../components/ApplyCard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/book",
    name: "BookList",
    component: BookList,
  },
  {
    path: "/book/:id",
    name: "Book",
    component: BookDetail,
    props: (route) => ({
      id: route.params.id,
      title: route.params.title,
      content: route.params.content,
    }),
  },
  {
    path: "/top",
    name: "top",
    component: top,
    props: (route) => ({
      id: route.params.id,
      cardName: route.params.cardName,
    }),
  },
  {
    path: "/ApplyCard",
    name: "ApplyCard",
    component: ApplyCard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
