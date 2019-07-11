import Vue from "vue";
import Router from "vue-router";
import movieRouter from "./movie";
import mineRouter from "./mine";
import cinemaRouter from "./cinema";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,//这个是根目录的访问路径
  //设置文件名为访问路径
  // base:'miao',
  routes: [
     movieRouter,
     mineRouter,
     cinemaRouter,
     {
       path:'/*',
       redirect:'/movie'
     }
  ]
});
