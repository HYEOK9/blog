import { useEffect, useState } from "react";
import Container from "@component/UI/Container";

function SetDisplay() {
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    document.body.style.opacity = `${opacity * 0.01 || 0.01}`;
  }, [opacity]);

  return (
    <div className="absolute top-7 right-0 w-72">
      <Container>
        <div className="flex flex-col p-3">
          <span className="text-white">디스플레이</span>
          <span className="text-xs text-gray-400 pb-3">
            Apple XDR Display (P3-1600 nits)
          </span>
          <div>
            <input
              type="range"
              value={opacity}
              className="w-full range"
              onChange={({ target: { value } }) => setOpacity(Number(value))}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SetDisplay;
