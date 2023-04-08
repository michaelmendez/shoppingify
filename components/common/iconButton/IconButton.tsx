import Link from 'next/link';
import Tooltip from '@/components/common/tooltip/Tooltip';
import { FunctionComponent, ReactNode } from 'react';

interface IconButtonProps {
  children: ReactNode;
  tooltipTitle?: string;
  href?: string;
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  tooltipTitle = "",
  href = "",
  children,
}) => {
  return (
    <div className="grid items-center h-20">
      <Tooltip title={tooltipTitle}>
        <Link href={href}>{children}</Link>
      </Tooltip>
    </div>
  );
};

export default IconButton;
