import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import pages from './constant/pages';
import HeaderBar from './components/HeaderBar.vue';
import App from './App.vue';

const app = createApp(App);

/* 路由 */
// 懒加载
const getPage = (paggName: string) => import(`./pages/${paggName}/PageIndex.vue`);
const routes: RouteRecordRaw[] = pages.map((route) => ({
  path: route.path,
  name: route.pageName,
  component: getPage(route.pageName),
}));

// 404重定向到首页
routes.push({
  path: '/:pathMatch(.*)*',
  redirect: '/',
});

// 绑定页面
const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router).mount('#app');

/* 全局组件 */
app.component('HeaderBar', HeaderBar);
