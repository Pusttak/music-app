export const ArrowMaximizeIcon = ({ size = 18, color = 'currentColor', strokeWidth = 2, ...props }) => (
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
    <path d="M16 4h4v4" />
    <path d="m14 10 6-6" />
    <path d="M8 20H4v-4" />
    <path d="m4 20 6-6" />
    <path d="M16 20h4v-4" />
    <path d="m14 14 6 6" />
    <path d="M8 4H4v4" />
    <path d="m4 4 6 6" />
  </svg>
);
