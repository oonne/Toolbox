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
    name: 'RSA',
    label: 'RSA',
    category: ['All', 'Asymmetric'],
  },
  {
    name: 'QRcode',
    label: '二维码',
    category: ['All', 'Encode'],
  },
];

export default featuresList;
