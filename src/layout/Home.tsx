import { useState, useEffect } from "react";
import Header from "@src/layout/header/Header";
import WallPaper from "public/wall-paper.jpg";

const styles = {
  background: (imageLoaded: boolean) => ({
    backgroundImage: `url(${WallPaper.src})`,
    opacity: imageLoaded ? 1 : 0,
    transition: "opacity 0.3s linear",
    backgroundSize: "cover",
  }),
};

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = WallPaper.src;

    img.onload = () => {
      setImageLoaded(true);
    };

    img.onerror = () => {
      setImageLoaded(false);
      console.log("Image fetching failed");
    };
  }, []);

  return (
    <div className="w-screen h-screen" style={styles.background(imageLoaded)}>
      <Header />
    </div>
  );
}
