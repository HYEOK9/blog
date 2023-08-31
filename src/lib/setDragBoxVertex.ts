export const setVertex = (
  width: number,
  height: number,
  vertexX: number,
  vertexY: number
) => {
  let X = {};
  let Y = {};

  if (width >= 0) {
    X = { left: vertexX };
  } else {
    X = { right: window.innerWidth - vertexX };
  }

  if (height >= 0) {
    Y = { top: vertexY };
  } else {
    Y = { bottom: window.innerHeight - vertexY };
  }

  return { ...X, ...Y };
};
