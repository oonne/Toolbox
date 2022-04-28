import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import pages from './constant/pages';
import App from './App.vue';

/* 懒加载 */
const getPage = (paggName: string) => import(`../pages/${paggName}/PageIndex.vue`);
const routes: RouteRecordRaw[] = pages.map((route) => ({
  path: route.path,
  name: route.pageName,
  component: getPage(route.pageName),
}));

/* 404重定向到首页 */
routes.push({
  path: '/:pathMatch(.*)*',
  redirect: '/',
});

/* 路由 */
const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount('#app');
