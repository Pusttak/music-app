export const ArrowMinimizeIcon = ({ size = 18, color = 'currentColor', strokeWidth = 2, ...props }) => (
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
    <path d="M5 9h4V5" />
    <path d="m3 3 6 6" />
    <path d="M5 15h4v4" />
    <path d="m3 21 6-6" />
    <path d="M19 9h-4V5" />
    <path d="m15 9 6-6" />
    <path d="M19 15h-4v4" />
    <path d="m15 15 6 6" />
  </svg>
);
