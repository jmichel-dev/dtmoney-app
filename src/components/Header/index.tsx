import logoImg from "../../assets/img/logo.svg";
import { Container, Content } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money app logo" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
};
