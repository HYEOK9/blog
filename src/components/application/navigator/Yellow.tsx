interface YellowProps {
  showIcon: boolean;
  onClick: () => void;
}

export default function Yellow({ showIcon = false, onClick }: YellowProps) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-2 mr-[7px]"
      onClick={onClick}
    >
      <circle cx="8.10392" cy="8.05195" r="8.05195" fill="#DE9F34" />
      <circle cx="8.05195" cy="8.00001" r="7.37663" fill="#FDBC40" />
      {showIcon && (
        <rect
          x="3.58441"
          y="7.48053"
          width="9.03896"
          height="1.14286"
          fill="#985712"
        />
      )}
    </svg>
  );
}
