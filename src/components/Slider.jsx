import styled, { keyframes } from "styled-components";

const sliding = keyframes`
0% {
    left: 0;
}
10% {
    left: 0;
}

20% {
    left: -100%;
}
60% {
    left: -100%;
}

70% {
    left: -200%;
}
100% {
    left: -200%;
}
`;

const Main = styled.main`
  width: ${({ width }) => width + "px"};
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: ${({ hoverOn }) => (hoverOn ? "0px 0px 20px gray" : "none")};
  }
  figure {
    width: ${({ width, qty }) => width * qty + "px"};
    position: relative;
    margin: 0;
    padding: 0;
    left: 0;
    animation: 10s ease-in-out infinite ${({ auto }) => (auto ? sliding : null)};
    &:hover {
      animation: 10s ease-in-out 0s infinite
        ${({ hoverOn }) => (hoverOn ? sliding : null)};
    }

    img {
      width: ${({ width }) => width + "px"};
      float: left;
      height: auto;
    }
  }
`;

const Slider = ({ width = 150, data = [], auto, hoverOn }) => {
  const imgQty = data?.length;
  return (
    <Main width={width} qty={imgQty} hoverOn={hoverOn} auto={auto}>
      <figure>
        {data.map((item, index) => (
          <img key={index} src={item.url} alt="web slides" />
        ))}
      </figure>
    </Main>
  );
};

export default Slider;
