import { dateStore } from "@src/store/dateStore";

export default function Date() {
  const { now } = dateStore();

  return <div className="text-white">{now}</div>;
}
