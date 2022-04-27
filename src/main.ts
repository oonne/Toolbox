import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routes from './config/routes';

// 路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 应用
createApp(App).use(router).mount('#app');
