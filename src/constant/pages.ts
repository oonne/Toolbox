interface Page {
  path: string;
  pageName: string;
}

/* 路由页面 */
const pages: Page[] = [
  {
    path: '/',
    pageName: 'Index',
  },
  {
    path: '/2',
    pageName: 'Index2',
  },
];

export default pages;
