export const zIndex = {
  header: 1001,
  dock: 1001,
  dragBox: 10,
  subMenu: 1000,
  background: -10,
  loading: 9999,
} as const;

export const MIN_HEIGHT = 62;
export const MAX_HEIGHT = MIN_HEIGHT * 1.5;
export const STEP = (MAX_HEIGHT - MIN_HEIGHT) * 0.05;
