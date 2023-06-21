/* 功能清单 */
interface Features {
  name: string;
  label: string;
}

const featuresList: Features[] = [
  {
    name: 'PBKDF2',
    label: 'PBKDF2',
  },
  {
    name: 'Base64',
    label: 'Base64',
  },
  {
    name: 'AES',
    label: 'AES',
  },
  {
    name: 'RSA',
    label: 'RSA',
  },
  {
    name: 'MD5',
    label: 'MD5',
  },
  {
    name: 'SHA',
    label: 'SHA',
  },
  {
    name: 'QRcode',
    label: '二维码',
  },
  {
    name: 'Password',
    label: '口令生成器',
  },
];

export default featuresList;
