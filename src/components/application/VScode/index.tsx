import { useState } from "react";
// constants
import { IFRAME_VSCODE_URL } from "@constants/Link";
import CircularProgress from "@components/util/progress/CircularProgress";

export default function Vscode() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full h-full">
      {loading && <CircularProgress fullScreen />}

      <iframe
        className={`w-full h-full rounded-b-xl pointer-events-none ${
          loading ? "invisible" : ""
        }`}
        src={IFRAME_VSCODE_URL}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
