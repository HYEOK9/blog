interface RedProps {
  showIcon: boolean;
  onClick: () => void;
}

export default function Red({ showIcon = false, onClick }: RedProps) {
  return (
    <button className="ml-1.5" onClick={onClick} type="button">
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8.05195" cy="8.05195" r="8.05195" fill="#DF4744" />
        <circle cx="8.00001" cy="8.00001" r="7.37663" fill="#FC5753" />
        {showIcon && (
          <>
            <rect
              x="4.35013"
              y="10.7417"
              width="9.03896"
              height="1.14286"
              transform="rotate(-45 4.35013 10.7417)"
              fill="#7E0508"
            />
            <rect
              x="4.35013"
              y="5.15826"
              width="1.14286"
              height="9.03896"
              transform="rotate(-45 4.35013 5.15826)"
              fill="#7E0508"
            />
          </>
        )}
      </svg>
    </button>
  );
}
