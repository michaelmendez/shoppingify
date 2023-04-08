import { FunctionComponent } from 'react';
import {
  MdOutlineFormatListBulleted,
  MdReplay,
  MdOutlinePoll,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import Logo from '@/public/logo.svg';
import Button from './Button';
import { useRouter } from 'next/router';

interface SidebarProps {}

const buttons = [
  { tooltip: 'Items', href: '/', icon: <MdOutlineFormatListBulleted /> },
  { tooltip: 'History', href: '/history', icon: <MdReplay /> },
  { tooltip: 'Statistics', href: '/statistics', icon: <MdOutlinePoll /> },
];

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const router = useRouter();

  return (
    <div className="grid grid-rows-3 w-20 md:w-28 bg-white py-16 [&>svg]:justify-self-center text-3xl">
      <Logo />
      <div className="grid auto-cols-max">
        {buttons.map(({ href, icon, tooltip }, index: number) => (
          <Button
            key={index}
            tooltipTitle={tooltip}
            href={href}
            icon={icon}
            isActive={router.pathname === href}
          />
        ))}
      </div>
      <MdOutlineShoppingCart className="self-end bg-orange text-white rounded-full text-6xl p-3" />
    </div>
  );
};

export default Sidebar;
