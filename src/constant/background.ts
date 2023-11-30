const getS3Src = (name: string) =>
  `${process.env.AWS_CLOUDFRONT_URL}/${name}.webp`;

export const backgroundList = [
  {
    name: "Big Sur",
    src: getS3Src("BigSur"),
  },
  {
    name: "Ventura",
    src: getS3Src("Ventura"),
  },
  {
    name: "Catalina",
    src: getS3Src("Catalina"),
  },
  {
    name: "Yosemite",
    src: getS3Src("Yosemite"),
  },
  {
    name: "Lake",
    src: getS3Src("Lake"),
  },
  {
    name: "Jaguar",
    src: getS3Src("Jaguar"),
  },
  {
    name: "Leopard",
    src: getS3Src("Leopard"),
  },
  {
    name: "Lion",
    src: getS3Src("Lion"),
  },
  {
    name: "Leopard Server",
    src: getS3Src("Leopard-Server"),
  },
  {
    name: "Sierra",
    src: getS3Src("Sierra"),
  },
  {
    name: "Mojave",
    src: getS3Src("Mojave"),
  },
  {
    name: "Aurora",
    src: getS3Src("Aurora"),
  },
] as const;
