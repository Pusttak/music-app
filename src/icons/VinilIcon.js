export const VinilIcon = ({ size = 20, color = 'currentColor', strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.004 3.94A9 9 0 1 0 21 12.003" />
    <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M20 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="m20 4-3.5 10-2.5 2" />
  </svg>
);
