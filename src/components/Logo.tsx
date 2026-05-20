import React from 'react';

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
  return (
    <div className={`flex ${layout === 'vertical' ? 'flex-col items-center text-center' : 'items-center gap-3'} ${className}`}>
      {/* Golden Phoenix + GK Icon SVG */}
      <svg 
        width={iconSize} 
        height={iconSize} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFEAA7" />
            <stop offset="30%" stopColor="#F5CD79" />
            <stop offset="70%" stopColor="#ECCC68" />
            <stop offset="100%" stopColor="#C8963E" />
          </linearGradient>
          <linearGradient id="gkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FFEAA7" />
            <stop offset="100%" stopColor="#C8963E" />
          </linearGradient>
        </defs>

        {/* Elegant Stylized Golden Phoenix/Bird Path */}
        <path 
          d="M 52,29 
             C 53,27 50,21 45,23 
             C 41,25 43,29 40,32 
             C 38,34 35,35 34,38 
             C 33,40 35,42 36,41 
             C 38,40 39,37 41,36 
             C 42,39 40,41 39,44 
             C 36,50 31,54 29,61 
             C 27,67 29,74 33,78 
             C 36,81 41,83 45,83 
             C 41,81 37,79 36,75 
             C 35,72 37,69 39,67 
             C 41,65 44,65 46,67 
             C 48,69 48,72 47,75 
             C 45,78 41,80 44,81 
             C 48,82 53,81 57,79 
             C 60,78 61,77 58,76 
             C 54,75 50,75 48,71 
             C 46,67 49,63 53,62 
             C 54,62 55,63 55,64 
             C 54,66 52,68 52,70 
             C 52,72 55,73 57,71 
             C 61,68 62,64 61,59 
             C 59,52 54,49 52,42 
             C 50,35 51,31 52,29 Z" 
          fill="url(#goldGradient)" 
        />
        
        {/* Swirling Tail/Wings Layer 2 */}
        <path 
          d="M 39,47 
             C 35,53 31,60 30,68 
             C 29,75 32,83 37,87 
             C 34,84 32,80 32,74 
             C 32,67 36,60 40,54 
             C 41,52 42,49 41,47 Z"
          fill="url(#goldGradient)"
          opacity="0.8"
        />

        {/* Dynamic crest strokes */}
        <path 
          d="M 52,29 
             C 55,27 58,23 57,19 
             C 56,18 55,18 54,19 
             C 53,21 53,24 51,26 Z" 
          fill="url(#goldGradient)" 
        />

        {/* Elegant "G" and "K" Letters positioned next to the wing */}
        <g transform="translate(48, 42)">
          {/* Letter G */}
          <path 
            d="M 12,18 
               C 5,18 1,14 1,8 
               C 1,2 5,-2 12,-2 
               C 16,-2 19,0 21,3 
               L 17,6 
               C 16,5 14,4 12,4 
               C 9,4 6,6 6,8 
               C 6,10 9,12 12,12 
               C 15,12 16,11 16,9 
               L 12,9 
               L 12,6 
               L 20,6 
               L 20,13 
               C 18,16 16,18 12,18 Z" 
            fill="url(#gkGradient)" 
            stroke="url(#goldGradient)"
            strokeWidth="0.5"
          />
          {/* Letter K */}
          <path 
            d="M 23,-2 
               L 28,-2 
               L 28,6 
               L 37,-2 
               L 43,-2 
               L 34,5 
               L 44,18 
               L 38,18 
               L 31,8 
               L 28,11 
               L 28,18 
               L 23,18 
               Z" 
            fill="url(#gkGradient)" 
            stroke="url(#goldGradient)"
            strokeWidth="0.5"
          />
        </g>
      </svg>

      {/* Corporate Name Block */}
      {layout === 'vertical' ? (
        <div className="mt-4">
          <h2 className="text-2xl font-bold tracking-tight text-gold font-sans leading-none">
            HOÀNG GIA KHANG
          </h2>
          <p className="text-[10px] text-white/60 font-medium uppercase tracking-[0.25em] mt-2">
            SẢN XUẤT & THƯƠNG MẠI
          </p>
        </div>
      ) : (
        <div>
          <h1 className="text-sm font-black uppercase tracking-tight text-white leading-none mb-1">
            HOÀNG GIA KHANG
          </h1>
          <p className="text-[9px] text-gold font-bold uppercase tracking-[0.2em] leading-none">
            SẢN XUẤT & THƯƠNG MẠI
          </p>
        </div>
      )}
    </div>
  );
};
