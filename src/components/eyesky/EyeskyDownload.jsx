import styled from "styled-components";
import logo from "../../assets/eyesky-logo.png";
import apple from "../../assets/appstore.png";
import google from "../../assets/googleplay.png";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Logo = styled.img`
  display: flex;
  background-color: black;
  box-shadow: 0px 0px 20px royalblue;
  border-radius: 15px;
  width: 100px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

const Div = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const EyeskyDownload = () => {
  return (
    <Main>
      Mobile
      <Logo src={logo} alt="eyesky logo" />
      <Row>
        <Div
          onClick={() =>
            window.open(
              "https://apps.apple.com/us/app/eyesky/id1565245484",
              "_blank"
            )
          }
        >
          <img src={apple} alt="appstore" height="40px" />
        </Div>
        <Div
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.capitolgroup.eyesky&hl=en_US&gl=US",
              "_blank"
            )
          }
        >
          <img src={google} alt="googleplay" height="50px" />
        </Div>
      </Row>
    </Main>
  );
};

export default EyeskyDownload;
