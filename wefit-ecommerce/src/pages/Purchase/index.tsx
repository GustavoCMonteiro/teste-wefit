import { useNavigate } from "react-router-dom";
import { Title, Wrapper } from "./style";
import PurchaseImg from "../../assets/purchase.svg";
import Button from "../../components/Button";

const Purchase = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <Wrapper>
      <Title>Compra realizada com sucesso!</Title>
      <img src={PurchaseImg} alt="" />
      <Button onClick={handleClick} text="Voltar" size="small" />
    </Wrapper>
  );
};

export default Purchase;
