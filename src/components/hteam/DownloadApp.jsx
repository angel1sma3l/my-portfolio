import styled from "styled-components";
import apple from "../../assets/appstore.png";
import google from "../../assets/googleplay.png";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
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

const DownloadApp = () => {
  return (
    <Main>
      Download
      <Row>
        <Div
          onClick={() =>
            window.open(
              "https://apps.apple.com/us/app/h-team/id1544701290",
              "_blank"
            )
          }
        >
          <img src={apple} alt="appstore" height="40px" />
        </Div>
        <Div
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.capitolgroup.hteam&hl=en_US&gl=US",
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

export default DownloadApp;
