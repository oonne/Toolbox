import { RouteRecordRaw } from 'vue-router';

interface Route {
  path: string;
  pageName: string;
}

/* 匹配页面 */
const pages: Route[] = [
  {
    path: '/',
    pageName: 'PageIndex',
  },
  {
    path: '/2',
    pageName: 'PageIndex2',
  },
];

/* 路由懒加载 */
const getPage = (paggName: string) => import(`../pages/${paggName}.vue`);
const routes: RouteRecordRaw[] = pages.map((route) => ({
  path: route.path,
  component: getPage(route.pageName),
}));

/* 404重定向到首页 */
routes.push({
  path: '/:pathMatch(.*)*',
  redirect: '/',
});

export default routes;
