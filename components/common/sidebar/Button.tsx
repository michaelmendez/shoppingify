import IconButton from '@/components/common/iconButton/IconButton';
import { FunctionComponent, ReactNode } from 'react';
import { MdReplay } from 'react-icons/md';

interface ButtonProps {
  tooltipTitle: string;
  href: string;
  icon: ReactNode;
  isActive?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  tooltipTitle,
  href,
  icon,
  isActive = false,
}) => {
  return (
    <div className="grid grid-cols-2 self-center">
      <div className={`bg-orange w-1.5 h-12 rounded-e-xl self-center ${isActive ? 'visible' : 'invisible'}`} />
      <IconButton tooltipTitle={tooltipTitle} href={href}>
        {icon}
      </IconButton>
    </div>
  );
};

export default Button;
