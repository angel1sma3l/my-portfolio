import styled from "styled-components";
import AppText from "./AppText";
import Button from "./Button";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000033;
  z-index: 3;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  min-height: 30%;
  max-height: 80%;
  background-color: white;
  color: black;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 0px 100px var(--accent);
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 883ms ease;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const BtnRow = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: auto;
`;

const Modal = ({
  visible,
  onOkClick,
  message = "Hello the message goes here. Great work. The best or nothing!",
  title = "Hi.",
  btnTitle = "OK",
  onClose,
}) => {
  if (!visible) return null;

  return (
    <Main>
      <Div visible={visible}>
        <div style={{ alignSelf: "end" }}>
          <Button title="X" onClick={onClose} color="inherit" width="40px" />
        </div>
        <AppText fw={500} lh="0rem">
          {title}
        </AppText>
        <AppText width="80%">{message}</AppText>
        <BtnRow>
          <Button
            title={btnTitle}
            onClick={onOkClick}
            bgColor="var(--accent-color)"
          />
        </BtnRow>
      </Div>
    </Main>
  );
};

export default Modal;
