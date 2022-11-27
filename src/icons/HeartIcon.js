export const HeartIcon = ({ size = 22, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      d="M12 4.457c5.326-5.475 18.64 4.105 0 16.423C-6.64 8.563 6.675-1.018 12 4.457Z"
      clipRule="evenodd"
    />
  </svg>
);

export const HeartEmptyIcon = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m12 6.178-.86-.885c-2.02-2.076-5.723-1.36-7.06 1.25-.627 1.228-.769 3 .377 5.263 1.104 2.178 3.4 4.786 7.543 7.628 4.143-2.842 6.438-5.45 7.544-7.628 1.145-2.264 1.005-4.035.376-5.262-1.337-2.61-5.04-3.328-7.06-1.252l-.86.886Zm0 14.702C-6.4 8.722 6.335-.768 11.79 4.252c.071.066.142.134.21.205.068-.071.138-.14.211-.204C17.665-.77 30.4 8.72 12.001 20.88Z" />
  </svg>
);
