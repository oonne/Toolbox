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
    path: '/qrcode',
    pageName: 'QRcode',
  },
  {
    path: '/md5',
    pageName: 'MD5',
  },
  {
    path: '/sha2',
    pageName: 'SHA2',
  },
  {
    path: '/rsa',
    pageName: 'RSA',
  },
];

export default pages;
