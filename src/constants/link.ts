import {
  FaHome,
  FaUser,
  FaMusic,
  FaAtlas,
  FaAccessibleIcon,
  FaGamepad,
} from 'react-icons/fa';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

export interface LinkItem {
  title: string;
  url?: string;
  icon: React.ElementType;
  description: string;
}

export const linkItems: LinkItem[] = [
  {
    title: 'Home',
    url: '/',
    icon: FaHome,
    description: '初期地点にテレポートするよ',
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: FaUser,
    description: '鈴木翔という勇者の歴史',
  },
  {
    title: 'Music',
    url: '/music',
    icon: FaMusic,
    description: '勇者が好きだったといわれている音楽',
  },
  {
    title: 'game',
    url: '/game',
    icon: FaGamepad,
    description:
      '伝記にはこう綴られている[ゲームがない時代の人々はいったい何をして暮らしていたんだろう?] Suzuki Kakeru: 2005~',
  },
  {
    title: 'Product',
    url: '/product',
    icon: FaAtlas,
    description: '勇者が世界に変化を加えたもの',
  },
  {
    title: 'Contact',
    url: '/contact',
    icon: FaAccessibleIcon,
    description: '意味深なカギが落ちている',
  },
  {
    title: 'hiddenStory',
    url: '/hiddenStory',
    icon: GiPerspectiveDiceSixFacesRandom,
    description: 'この文書は削除されました',
  },
];
