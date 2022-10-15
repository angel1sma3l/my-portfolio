import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Button from "./Button";

const textAnimation = keyframes`
0% {
  transform: scale(0);
}

95% {
  transform: scale(1.3);
}


100% {
  transform: scale(1);
  
}
`;

const Main = styled.header`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 900px;
  color: #fff;
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow: hidden;
  position: relative;

  div {
    width: 90vw;
    max-width: 800px;
    line-height: 1.5rem;
    padding: 0;
    margin: 0;
    position: absolute;
    animation: 5s ease-in 0s 1 ${textAnimation};

    h1 {
      font-size: 5rem;
      font-weight: 200;
      margin: 0px auto;
    }
    span {
      font-size: 2rem;
      font-weight: 300;
    }
  }

  .name {
    font-family: Snell Roundhand, cursive;
    font-size: 1.5em;
    color: white;
    font-weight: 700;
  }

  .mylink {
    color: white;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 33px;
    margin: 50px 0px;
    width: 100%;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <video loop="true" autoPlay="true" muted height="900">
        <source
          src="https://dmicano.s3.us-east-2.amazonaws.com/video.mp4"
          type="video/mp4"
        />
        <p>your browser doens't support this video format</p>
      </video>
      <div>
        <h1>
          Greetings,{" "}
          <span>
            <span className="name">Ismael </span> here. A Front-end developer
            who's priority is the user's experience, building stunning, fast and
            responsive Web and Mobile apps with React | React Native.
          </span>
        </h1>
        <div className="row">
          <Button
            title="See my art"
            onClick={() => navigate("/projects")}
            borderColor="#fff"
          />
          <Link className="mylink" to="/about">
            Learn more
          </Link>
        </div>
      </div>
    </Main>
  );
};

export default Header;
