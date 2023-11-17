export const addNightShift = () => {
  const backdrop = document.createElement("div");
  backdrop.id = "nightShift";
  backdrop.style.backgroundColor = "rgba(255, 163, 57, 0.2)";
  backdrop.className =
    "fixed w-screen h-screen z-50 duration-1000 pointer-events-none content-none z-50 animate-night-shift";

  const rootElement = document.getElementById("content");
  const backdropElement = document.getElementById("nightShift");

  if (rootElement && !backdropElement) {
    rootElement.insertBefore(backdrop, null);
  }
};

export const removeNightShift = () => {
  const rootElement = document.getElementById("content");
  const backdropElement = document.getElementById("nightShift");

  if (rootElement && backdropElement) {
    rootElement.removeChild(backdropElement);
  }
};

export const addTrueTone = () => {
  const backdrop = document.createElement("div");
  backdrop.id = "trueTone";
  backdrop.style.backgroundColor = "rgba(255, 163, 57, 0.05)";
  backdrop.className =
    "fixed w-screen h-screen z-50 duration-1000 pointer-events-none content-none z-50 animate-true-tone";

  const rootElement = document.getElementById("content");
  const backdropElement = document.getElementById("trueTone");

  if (rootElement && !backdropElement) {
    rootElement.insertBefore(backdrop, null);
  }
};

export const removeTrueTone = () => {
  const rootElement = document.getElementById("content");
  const backdropElement = document.getElementById("trueTone");

  if (rootElement && backdropElement) {
    rootElement.removeChild(backdropElement);
  }
};
