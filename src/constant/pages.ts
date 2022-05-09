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
    path: '/base64',
    pageName: 'Base64',
  },
  {
    path: '/rsa',
    pageName: 'RSA',
  },
  {
    path: '/qrcode',
    pageName: 'QRcode',
  },
];

export default pages;
