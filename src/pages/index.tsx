import { useState } from "react";
import HomeLoading from "@src/app.layout/loading/HomeLoading";
import Home from "@src/app.layout/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  return loading ? <HomeLoading setLoading={setLoading} /> : <Home />;
}
