import Container from "@component/UI/Container";
import { CONTEXT_MENU } from "@constant/menu";

export default function ContextMenu() {
  return (
    <Container>
      {CONTEXT_MENU.map(({ title }, idx) => (
        <span key={`${title + idx}`}>{title}</span>
      ))}
    </Container>
  );
}
