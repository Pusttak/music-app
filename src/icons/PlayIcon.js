export const PlayIcon = ({ size = 20, strokeWidth = 3.5, color = 'currentColor', ...props }) => (
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
    <path d="M6 4v16" />
    <path d="M20 12 6 20" />
    <path d="M20 12 6 4" />
  </svg>
);
