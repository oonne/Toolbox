import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import pages from './constant/pages';
import App from './App.vue';

import HeaderBar from './components/HeaderBar.vue';
import ContentCard from './components/ContentCard.vue';
import TabsNav from './components/TabsNav.vue';
import ConfirmButton from './components/ConfirmButton.vue';
import TextInput from './components/TextInput.vue';

const app = createApp(App);

/* 路由 */
// 懒加载
const getPage = (paggName: string) => import(`./pages/${paggName}/IndexPage.vue`);
const routes: RouteRecordRaw[] = pages.map((route) => ({
  path: route.path,
  name: route.pageName,
  component: getPage.bind(this, route.pageName),
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
app.component('ContentCard', ContentCard);
app.component('TabsNav', TabsNav);
app.component('ConfirmButton', ConfirmButton);
app.component('TextInput', TextInput);
