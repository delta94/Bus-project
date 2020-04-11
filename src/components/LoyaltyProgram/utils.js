import { ReactComponent as SilverCup } from 'assets/svg/silver_cup.svg';
import { ReactComponent as GoldCup } from 'assets/svg/gold_cup.svg';
import { ReactComponent as PlatinumCup } from 'assets/svg/platinum_cup.svg';
import { ReactComponent as MemberCup } from 'assets/svg/member_cup.svg';

export const MILESTONE_LIST = {
  member: {
    icon: MemberCup,
    title: 'Thành viên',
  },
  silver: {
    icon: SilverCup,
    title: 'Bạc',
  },
  gold: {
    icon: GoldCup,
    title: 'Vàng',
  },
  platinum: {
    icon: PlatinumCup,
    title: 'Bạch kim',
  },
};

export const CASHBACK_TYPE = {
  percent: '%',
  fixedCash: 'đ',
};
