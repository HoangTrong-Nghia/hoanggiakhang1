import React from 'react';
import companyLogo from '../assets/images/company_logo_1779270867181.png';

interface LogoProps {
  layout?: 'horizontal' | 'vertical';
  className?: string;
  iconSize?: number;
}

export const Logo: React.FC<LogoProps> = ({ 
  layout = 'horizontal', 
  className = '', 
  iconSize = 48 
}) => {
  // Use a slightly larger size for footer or vertical layouts to ensure readability 
  // of the baked-in brand text.
  const widthVal = layout === 'vertical' ? iconSize * 2.8 : iconSize * 2.2;
  const heightVal = layout === 'vertical' ? iconSize * 2.8 : iconSize * 2.2;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={companyLogo} 
        alt="Hoàng Gia Khang Logo" 
        style={{ width: `${widthVal}px`, height: `${heightVal}px` }}
        className="object-contain rounded-sm select-none hover:brightness-110 transition-all duration-300"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
