import { defineComponent } from 'vue';

export type Timer = ReturnType<typeof setTimeout> | null;
export type Interval = ReturnType<typeof setInterval> | null;
export interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

/* 导航栏 */
export interface Tab {
  key: string;
  name: string;
  component: ReturnType<typeof defineComponent>;
}

/* 链接 */
export interface Link {
  href: string;
  text: string;
}

/* 下拉框 */
export interface SelectOption {
  value: string | number;
  name: string;
  selected?: boolean;
}
