import { useState } from "react";
// components
import CircularProgress from "@components/util/progress/CircularProgress";
import ErrorIcon from "/public/icon/ErrorIcon.svg";

interface IframeProps {
  src: string;
}

export default function Iframe({ src }: IframeProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="w-full h-full">
      {loading && !error && <CircularProgress fullScreen />}
      {error && (
        <div className="flex flex-col w-full h-full justify-center items-center text-gray-300 bold">
          <ErrorIcon />
          <span className="mt-3">Network Error</span>
        </div>
      )}

      <iframe
        className={`w-full h-full rounded-b-xl pointer-events-none ${
          loading || error ? "invisible" : "visible"
        }`}
        src={src}
        onLoad={() => setLoading(false)}
        onError={() => setError(true)}
        title="iframe"
      />
    </div>
  );
}
