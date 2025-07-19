import BoltIcon from './bolt.svg';
import ForwardIcon from './forward.svg';
import MenuIcon from './menu.svg';
import NotificationIcon from './notification.svg';

export const icons = {
  bolt: BoltIcon,
  forward: ForwardIcon,
  menu: MenuIcon,
  notification: NotificationIcon,
} as const;

export type IconName = keyof typeof icons;

export { BoltIcon, ForwardIcon, MenuIcon, NotificationIcon };
