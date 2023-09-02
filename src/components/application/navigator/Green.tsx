interface GreenProps {
  showIcon: boolean;
  onClick: () => void;
}

export default function Green({ showIcon = false, onClick }: GreenProps) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <circle cx="8.94805" cy="8.05195" r="8.05195" fill="#27AA35" />
      <circle cx="8.89613" cy="8.00001" r="7.37663" fill="#36C84B" />
      {showIcon && (
        <>
          <path
            d="M11.8642 4.0424C12.4188 4.04082 12.8687 4.49073 12.8671 5.04524L12.8599 7.56885C12.8574 8.45838 11.7818 8.90211 11.1528 8.27311L8.63638 5.75668C8.00738 5.12769 8.45111 4.05211 9.34064 4.04958L11.8642 4.0424Z"
            fill="#0B650D"
          />
          <path
            d="M5.94136 11.971C5.38685 11.9726 4.93694 11.5227 4.93851 10.9682L4.9457 8.44455C4.94823 7.55502 6.0238 7.11129 6.6528 7.74029L9.16923 10.2567C9.79822 10.8857 9.3545 11.9613 8.46497 11.9638L5.94136 11.971Z"
            fill="#0B650D"
          />
        </>
      )}
    </svg>
  );
}
