export const PersonIcon = ({ size = 18, strokeWidth = 2, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 12a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Zm2.4-3.6a2.4 2.4 0 1 1-4.801 0 2.4 2.4 0 0 1 4.8 0Zm4.8 9.6c0 1.2-1.2 1.2-1.2 1.2H6s-1.2 0-1.2-1.2S6 13.2 12 13.2s7.2 3.6 7.2 4.8Zm-1.2-.005c-.001-.295-.185-1.183-.999-1.997C16.22 15.216 14.747 14.4 12 14.4c-2.748 0-4.22.816-5.002 1.598-.813.814-.996 1.702-.998 1.997h12Z" />
  </svg>
);
