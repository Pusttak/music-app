export const ShuffleIcon = ({ size = 20, strokeWidth = 2, color = 'currentColor', ...props }) => (
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
    <path d="m18 4 3 3-3 3" />
    <path d="m18 20 3-3-3-3" />
    <path d="M3 7h3a5 5 0 0 1 5 5 5 5 0 0 0 5 5h5" />
    <path d="M9 16.001c-.865.65-1.918 1-3 .999H3" />
    <path d="M21 7h-5a4.978 4.978 0 0 0-2.998.998" />
  </svg>
);
