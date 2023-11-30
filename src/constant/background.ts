const getS3Src = (name: string) => `${process.env.AWS_S3_BASE_URL}/${name}`;

export const backgroundList = [
  {
    name: "Big Sur",
    src: getS3Src("BigSur.avif"),
  },
  {
    name: "Ventura",
    src: getS3Src("Ventura.avif"),
  },
  {
    name: "Catalina",
    src: getS3Src("Catalina.avif"),
  },
  {
    name: "Yosemite",
    src: getS3Src("Yosemite.avif"),
  },
  {
    name: "Lake",
    src: getS3Src("Lake.avif"),
  },
  {
    name: "Jaguar",
    src: getS3Src("Jaguar.avif"),
  },
  {
    name: "Leopard",
    src: getS3Src("Leopard.avif"),
  },
  {
    name: "Lion",
    src: getS3Src("Lion.avif"),
  },
  {
    name: "Leopard Server",
    src: getS3Src("Leopard-Server.avif"),
  },
  {
    name: "Sierra",
    src: getS3Src("Sierra.avif"),
  },
  {
    name: "Mojave",
    src: getS3Src("Mojave.avif"),
  },
  {
    name: "Aurora",
    src: getS3Src("Aurora.avif"),
  },
] as const;
