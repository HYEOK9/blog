const getImgSrcFromCf = (name: string) =>
  `${process.env.AWS_CLOUDFRONT_URL}/${name}.webp`;

export const backgroundList = [
  {
    name: "Big Sur",
    src: getImgSrcFromCf("BigSur"),
  },
  {
    name: "Ventura",
    src: getImgSrcFromCf("Ventura"),
  },
  {
    name: "Catalina",
    src: getImgSrcFromCf("Catalina"),
  },
  {
    name: "Yosemite",
    src: getImgSrcFromCf("Yosemite"),
  },
  {
    name: "Lake",
    src: getImgSrcFromCf("Lake"),
  },
  {
    name: "Jaguar",
    src: getImgSrcFromCf("Jaguar"),
  },
  {
    name: "Leopard",
    src: getImgSrcFromCf("Leopard"),
  },
  {
    name: "Lion",
    src: getImgSrcFromCf("Lion"),
  },
  {
    name: "Leopard Server",
    src: getImgSrcFromCf("Leopard-Server"),
  },
  {
    name: "Sierra",
    src: getImgSrcFromCf("Sierra"),
  },
  {
    name: "Mojave",
    src: getImgSrcFromCf("Mojave"),
  },
  {
    name: "Aurora",
    src: getImgSrcFromCf("Aurora"),
  },
] as const;
