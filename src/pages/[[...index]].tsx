import { useState } from "react";
import HomeLoading from "@src/layout/loading/HomeLoading";
import Home from "@src/layout/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  return loading ? <HomeLoading setLoading={setLoading} /> : <Home />;
}
