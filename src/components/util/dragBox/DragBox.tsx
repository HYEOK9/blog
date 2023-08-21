import { useState, useEffect, useCallback, memo } from "react";
// style
import { zIndex } from "@constants/zIndex";
// store
import { cursorStore, position } from "@store/cursorStore";
// types
import { IStyleObject } from "@@types/style";
// lib
import { setVertex } from "@lib/setDragBoxVertex";

type Tquadrant = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
} | null;

const styles: IStyleObject = {
  dragBox: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.1)",
    border: "0.5px solid white",
  },
};

function DragBox() {
  const [size, setSize] = useState<{ width: number; height: number } | null>({
    width: 0,
    height: 0,
  });
  const [startPosition, setStartPosition] = useState<position>(null);
  const [quadrant, setQuadrant] = useState<Tquadrant>(null);

  const {
    cursorPosition,
    draggable,
    isDragging,
    setIsDragging,
    rightClicked,
    setRightClicked,
  } = cursorStore();

  const startDragging = useCallback(
    (e: MouseEvent) => {
      if (!draggable || e.button === 2) {
        if (rightClicked) setRightClicked(false);
        return;
      }

      setStartPosition({ x: e.clientX, y: e.clientY });
      setIsDragging(true);
    },
    [draggable, rightClicked, setIsDragging, setRightClicked]
  );

  const drag = useCallback(() => {
    if (!isDragging || !cursorPosition || !startPosition) {
      return;
    }
    if (rightClicked) {
      setRightClicked(false);
      return;
    }
    const width = cursorPosition.x - startPosition.x;
    const height = cursorPosition.y - startPosition.y;

    setQuadrant(setVertex(width, height, startPosition.x, startPosition.y));
    setSize({ width: Math.abs(width), height: Math.abs(height) });
  }, [
    isDragging,
    cursorPosition,
    startPosition,
    rightClicked,
    setRightClicked,
  ]);

  const endDragging = useCallback(() => {
    setIsDragging(false);
    setSize(null);
    setStartPosition(null);
  }, [setIsDragging]);

  useEffect(() => {
    window.addEventListener("mousedown", startDragging);

    return () => {
      window.removeEventListener("mousedown", startDragging);
    };
  }, [startDragging]);

  useEffect(() => {
    window.addEventListener("mouseup", endDragging);

    return () => {
      window.removeEventListener("mouseup", endDragging);
    };
  }, [endDragging]);

  useEffect(() => {
    drag();
  }, [drag]);

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
        hidden={!size?.width}
      />
    )
  );
}

export default memo(DragBox);
