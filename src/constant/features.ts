/* 功能清单 */
interface Features {
  name: string;
  label: string;
  category: string[];
}

const featuresList: Features[] = [
  {
    name: 'Base64',
    label: 'Base64',
    category: ['All', 'Encode'],
  },
  {
    name: 'QRcode',
    label: '二维码',
    category: ['All', 'Encode'],
  },
  {
    name: 'MD5',
    label: 'MD5',
    category: ['All', 'Hash'],
  },
  {
    name: 'SHA',
    label: 'SHA',
    category: ['All', 'Hash'],
  },
  {
    name: 'AES',
    label: 'AES',
    category: ['All', 'Symmetrical'],
  },
  {
    name: 'RSA',
    label: 'RSA',
    category: ['All', 'Asymmetric'],
  },
];

export default featuresList;
