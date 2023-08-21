export const setVertex = (
  width: number,
  height: number,
  vertexX: number,
  vertexY: number
) => {
  let X = {};
  let Y = {};

  0 <= width
    ? (X = { left: vertexX })
    : (X = { right: window.innerWidth - vertexX });

  0 <= height
    ? (Y = { top: vertexY })
    : (Y = { bottom: window.innerHeight - vertexY });

  return { ...X, ...Y };
};
