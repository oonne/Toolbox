import { RouteRecordRaw } from 'vue-router';

interface Route {
  path: string;
  pageName: string;
}

/* 路由页面 */
const pages: Route[] = [
  {
    path: '/',
    pageName: 'Index',
  },
  {
    path: '/2',
    pageName: 'Index2',
  },
];

/* 路由懒加载 */
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

export default routes;
