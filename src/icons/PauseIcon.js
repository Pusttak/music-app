export const PauseIcon = ({ size = 18, strokeWidth = 5, color = 'currentColor', ...props }) => (
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
    <path d="M8 6v12" />
    <path d="M16 6v12" />
  </svg>
);
