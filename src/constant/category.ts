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
    cn: '编码·解码',
    en: 'Encode',
  },
  {
    cn: '哈希',
    en: 'Hash',
  },
];

export default categoryList;
