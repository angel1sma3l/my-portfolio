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

const Main = styled.div`
  width: ${({ width }) => width};
  padding: 0;
  margin: 0;
  transition: all 0.3s ease;
  overflow: hidden;
  &:hover {
    box-shadow: ${({ hoverOn }) => (hoverOn ? "0px 0px 20px gray" : "none")};
  }
  figure {
    background-color: black;
    position: relative;
    width: ${({ qty }) => qty * 100}%;
    gap: 0px;
    left: 0;
    background-color: ${({ bgColor }) => bgColor};
    padding: 0;
    margin: 0;
    animation: ${({ duration }) => duration} ease-in-out infinite
      ${({ auto, keyframe }) => (auto ? (keyframe ? keyframe : sliding) : null)};

    img {
      width: ${({ qty }) => 100 / qty}%;
      float: left;
      height: ${({ height }) => height};
      object-fit: contain;
      padding: 0;
      margin: 0;
    }

    &:hover {
      animation: 10s ease-in-out 0s infinite
        ${({ hoverOn }) => (hoverOn ? sliding : null)};
    }
  }
`;

const Slider = ({
  width = "150%",
  height = "150px",
  data = [],
  auto,
  duration = "10s",
  hoverOn,
  bgColor,
  keyframe = null,
}) => {
  const imgQty = data?.length;

  return (
    <Main
      auto={auto}
      duration={duration}
      hoverOn={hoverOn}
      height={height}
      bgColor={bgColor}
      keyframe={keyframe}
      qty={imgQty}
      width={width}
    >
      <figure onScroll={(e) => console.log(e)}>
        {data.map((item, index) => (
          <img key={index} src={item.url} alt="web slides" />
        ))}
      </figure>
    </Main>
  );
};

export default Slider;
