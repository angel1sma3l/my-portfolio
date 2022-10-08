import styled from "styled-components";

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

const Webcard = () => {
  return (
    <Div onClick={() => window.open("https://eyesky.org", "_blank")}>
      Web
      <img
        src="https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Home-web.png"
        alt="eyesky.org home"
        width="200"
      />
      eyesky.org
    </Div>
  );
};

export default Webcard;
