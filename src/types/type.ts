import { defineComponent } from 'vue';

/* 导航栏 */
export interface Tab {
  name: string;
  component: ReturnType<typeof defineComponent>;
}

/* 链接 */
export interface Link {
  href: string;
  text: string;
}
