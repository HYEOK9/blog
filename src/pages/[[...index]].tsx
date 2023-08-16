import { useState } from "react";
// style
import WallPaper from "public/wall-paper.jpg";
// components
import HomeLoading from "@src/layout/loading/HomeLoading";
import Home from "@src/layout/Home";
import Background from "@src/layout/background/Background";

export default function App() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <HomeLoading setLoading={setLoading} />
  ) : (
    <>
      <Home />
      <Background image={WallPaper} />
    </>
  );
}
