import logoImg from "../../assets/img/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewModalTransaction: () => void
}

export const Header: React.FC<HeaderProps> = (props) => {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money app logo" />
        <button type="button" onClick={props.onOpenNewModalTransaction}>Nova transação</button>
      </Content>
    </Container>
  );
};
