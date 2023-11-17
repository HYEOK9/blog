interface TrafficButtonProps {
  showIcon: boolean;
  onClick: () => void;
}

function Red({ showIcon, onClick }: TrafficButtonProps) {
  return (
    <button className="ml-1.5 mr-2 group" onClick={onClick} type="button">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="6.75789"
          cy="6.75789"
          r="6.75789"
          fill="#DF4744"
          className="group-active:fill-rose-300"
        />
        <circle
          cx="6.71429"
          cy="6.71429"
          r="6.1911"
          fill="#FC5753"
          className="group-active:fill-rose-300"
        />
        {showIcon && (
          <>
            <rect
              x="3.651"
              y="9.01532"
              width="7.58627"
              height="0.959184"
              transform="rotate(-45 3.651 9.01532)"
              fill="#7E0508"
            />
            <rect
              x="3.651"
              y="4.32925"
              width="0.959184"
              height="7.58627"
              transform="rotate(-45 3.651 4.32925)"
              fill="#7E0508"
            />
          </>
        )}
      </svg>
    </button>
  );
}

function Yellow({ showIcon = false, onClick }: TrafficButtonProps) {
  return (
    <button className="mr-[7px] group" onClick={onClick} type="button">
      <svg
        width="15"
        height="14"
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="7.58723"
          cy="6.75789"
          r="6.75789"
          fill="#DE9F34"
          className="group-active:fill-yellow-300"
        />
        <circle
          cx="7.54361"
          cy="6.71429"
          r="6.1911"
          fill="#FDBC40"
          className="group-active:fill-yellow-300"
        />
        {showIcon && (
          <rect
            x="3.79407"
            y="6.27829"
            width="7.58627"
            height="0.959184"
            fill="#985712"
          />
        )}
      </svg>
    </button>
  );
}

function Green({ showIcon = false, onClick }: TrafficButtonProps) {
  return (
    <button onClick={onClick} type="button" className="group">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="7.24211"
          cy="6.75789"
          r="6.75789"
          fill="#27AA35"
          className="group-active:fill-green-400"
        />
        <circle
          cx="7.19853"
          cy="6.71429"
          r="6.1911"
          fill="#36C84B"
          className="group-active:fill-green-400"
        />
        {showIcon && (
          <>
            <path
              d="M9.52801 3.39318C10.0825 3.39161 10.5324 3.84152 10.5308 4.39602L10.5264 5.96598C10.5238 6.85551 9.44827 7.29924 8.81928 6.67024L7.25379 5.10475C6.62479 4.47576 7.06852 3.40018 7.95805 3.39765L9.52801 3.39318Z"
              fill="#0B650D"
            />
            <path
              d="M4.88027 10.0466C4.32577 10.0482 3.87585 9.5983 3.87743 9.04379L3.8819 7.47384C3.88443 6.58431 4.96001 6.14058 5.589 6.76958L7.15449 8.33507C7.78349 8.96406 7.33976 10.0396 6.45023 10.0422L4.88027 10.0466Z"
              fill="#0B650D"
            />
          </>
        )}
      </svg>
    </button>
  );
}

export { Red, Yellow, Green };
