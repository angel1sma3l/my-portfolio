import { useEffect, useMemo } from "react";
import { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  width: ${({ width }) => width};
  padding: 0;
  margin: 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  position: relative;
  &:hover {
    box-shadow: ${({ hoverOn }) => (hoverOn ? "0px 0px 20px gray" : "none")};
  }

  .wrapper {
    display: flex;
    background-color: ${({ bgColor }) => bgColor};
    gap: 5px;
    transition: ${({ slideNum }) =>
      slideNum === 0 ? "none" : "transform 1s ease-out"};
    transform: ${({ slideNum, qty }) =>
      // divide 100% into qty of images to find the width of each slide then
      // multiply it by slide number. all negative to translate to the left.
      "translateX(-" + ((100 / qty) * slideNum + "%)")};
    width: ${({ qty }) => qty * 100}%;

    .slide {
      height: ${({ height }) => height};
      width: ${({ qty }) => 100 / qty}%;
    }

    img {
      height: 100%;
      object-fit: contain;
      width: 100%;
    }
  }
`;

const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: absolute;
  bottom: 20px;
  width: 100%;
`;

const Dot = styled.div`
  display: flex;
  gap: 5px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ active }) => (active ? "white" : "gray")};
  transition: all 0.3s ease-in;
`;

const Slider = ({
  width = "150px",
  height = "150px",
  data = [],
  auto,
  delay = 3000,
  hoverOn,
  bgColor,
}) => {
  const imgQty = data?.length;
  const [slideNum, setSlideNum] = useState(0);
  const dots = useMemo(
    () => [
      ...data.map((_, index) => {
        return { id: index };
      }),
    ],
    [data]
  );

  useEffect(() => {
    let index = 0;
    let interv = null;

    if (auto) {
      interv = setInterval(() => {
        index = index < imgQty - 1 ? (index += 1) : 0;
        setSlideNum(index);
      }, delay);
    }

    return () => {
      clearInterval(interv);
    };
  }, [auto, delay, imgQty]);

  return (
    <Main
      bgColor={bgColor}
      hoverOn={hoverOn}
      height={height}
      slideNum={slideNum}
      qty={imgQty}
      width={width}
    >
      <div className="wrapper">
        {data.map((item, index) => (
          <div className="slide" key={index}>
            <img src={item.url} alt="eyesky mobile app slides" />
          </div>
        ))}
      </div>

      <DotsContainer>
        {dots.map((item) => (
          <Dot
            itemNum={item.id}
            active={slideNum === item.id}
            key={item.id}
          ></Dot>
        ))}
      </DotsContainer>
    </Main>
  );
};

export default Slider;
