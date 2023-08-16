import { useState, useEffect, useCallback, memo, CSSProperties } from "react";
// store
import { cursorStore, position } from "@src/store/cursorStore";

const styles: { [key: string]: CSSProperties } = {
  dragBox: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.1)",
    border: "0.5px solid white",
    userSelect: "none",
  },
};

interface DragBoxProps {
  draggable: boolean;
}

function DragBox({ draggable }: DragBoxProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [size, setSize] = useState<{ width: number; height: number } | null>({
    width: 0,
    height: 0,
  });
  const [startPosition, setStartPosition] = useState<position>(null);

  const { cursorPosition } = cursorStore();

  const startDragging = useCallback((e: any) => {
    if (!draggable) return;

    setStartPosition({ x: e.clientX, y: e.clientY });
    setIsDragging(true);
  }, []);

  const endDragging = useCallback(() => {
    setStartPosition(null);
    setSize(null);
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (draggable) {
      window.addEventListener("mousedown", startDragging);
      window.addEventListener("mouseup", endDragging);
    } else {
      window.removeEventListener("mousedown", startDragging);
      window.removeEventListener("mouseup", endDragging);
    }

    return () => {
      window.removeEventListener("mousedown", startDragging);
      window.removeEventListener("mouseup", endDragging);
    };
  }, [draggable]);

  useEffect(() => {
    if (!draggable || !cursorPosition || !startPosition) {
      return;
    }
    const width = cursorPosition.x - startPosition.x;
    const height = cursorPosition.y - startPosition.y;

    setSize({ width, height });
  }, [startPosition, cursorPosition]);

  return (
    isDragging && (
      <div
        style={{
          ...styles.dragBox,
          left: startPosition?.x,
          top: startPosition?.y,
          width: size?.width + "px",
          height: size?.height + "px",
        }}
      />
    )
  );
}

export default memo(DragBox);
