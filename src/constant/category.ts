/* 功能分类 */
interface Category {
  cn: string;
  en: string;
}

const categoryList: Category[] = [
  {
    cn: '全部',
    en: 'All',
  },
  {
    cn: '编码解码',
    en: 'Encode',
  },
  {
    cn: '散列函数',
    en: 'Hash',
  },
  // {
  //   cn: '对称加密',
  //   en: 'Symmetrical',
  // },
  {
    cn: '非对称加密',
    en: 'Asymmetric',
  },
];

export default categoryList;
