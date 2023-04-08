import { FunctionComponent, ReactNode } from 'react';

interface TooltipProps {
  title: string;
  className?: string;
  children: ReactNode;
}

const Tooltip: FunctionComponent<TooltipProps> = ({
  title,
  children,
  className = '',
}) => {
  return (
    <div className={`relative group ${className}`}>
      {children}
      <div id="tooltip-right" role="tooltip" className="tooltip">
        {title}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
};

export default Tooltip;
