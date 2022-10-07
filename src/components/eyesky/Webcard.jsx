import styled from "styled-components";
import Slider from "../Slider";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(2) translateX(-33%);
  }
`;

const images = [
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Home-web.png" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/property-web.png" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Home-web.png" }, // clone first img
];

const Webcard = () => {
  return (
    <Div onClick={() => window.open("https://eyesky.org", "_blank")}>
      Web
      <Slider data={images} width="150px" height="100px" hoverOn={true} />
      eyesky.org
    </Div>
  );
};

export default Webcard;
