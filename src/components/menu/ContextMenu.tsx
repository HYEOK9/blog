import Container from "@components/UI/Container";
import { CONTEXT_MENU } from "@constants/Menu";

export default function ContextMenu() {
  return (
    <Container>
      {CONTEXT_MENU.map(({ title }, idx) => (
        <span key={`${title}${idx}`}>{title}</span>
      ))}
    </Container>
  );
}
