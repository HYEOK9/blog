import { useState, useEffect, useCallback, CSSProperties } from "react";
// style
import { zIndex } from "@constants/zIndex";
// store
import { cursorStore, position } from "@store/cursorStore";
// util
import { setVertex } from "./setVertex";

type Tquadrant = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
} | null;

const styles: { [key: string]: CSSProperties } = {
  dragBox: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.1)",
    border: "0.5px solid white",
  },
};

export default function DragBox() {
  const [size, setSize] = useState<{ width: number; height: number } | null>({
    width: 0,
    height: 0,
  });
  const [startPosition, setStartPosition] = useState<position>(null);
  const [quadrant, setQuadrant] = useState<Tquadrant>(null);

  const { cursorPosition, draggable, isDragging, setIsDragging } =
    cursorStore();

  const startDragging = useCallback(
    (e: MouseEvent) => {
      if (!draggable) return;
      setStartPosition({ x: e.clientX, y: e.clientY });
      setIsDragging(true);
    },
    [draggable, setIsDragging]
  );

  const endDragging = useCallback(() => {
    setIsDragging(false);
    setSize(null);
    setStartPosition(null);
  }, [setIsDragging]);

  useEffect(() => {
    if (draggable) {
      window.addEventListener("mousedown", startDragging);
    } else {
      window.removeEventListener("mousedown", startDragging);
    }

    return () => {
      window.removeEventListener("mousedown", startDragging);
    };
  }, [draggable]);

  useEffect(() => {
    window.addEventListener("mouseup", endDragging);

    return () => {
      window.removeEventListener("mouseup", endDragging);
    };
  }, []);

  useEffect(() => {
    if (!isDragging || !cursorPosition || !startPosition) {
      return;
    }

    const width = cursorPosition.x - startPosition.x;
    const height = cursorPosition.y - startPosition.y;

    setQuadrant(setVertex(width, height, startPosition.x, startPosition.y));
    setSize({ width: Math.abs(width), height: Math.abs(height) });
  }, [isDragging, cursorPosition, startPosition]);

  return (
    isDragging && (
      <div
        style={{
          ...styles.dragBox,
          ...quadrant,
          width: size?.width,
          height: size?.height,
          zIndex: zIndex.dragBox,
        }}
      />
    )
  );
}
