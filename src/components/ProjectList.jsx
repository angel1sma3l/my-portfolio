import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  width: 60vw;
  min-height: 300px;
  padding: 0;
  margin: 0;
  text-align: center;
  position: relative;
  overflow-x: hidden;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-x: scroll;
  }

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    text-decoration: none;
    margin: 0 50px;
    img {
      border-radius: 25px;
      height: 150px;
      background-color: black;
      box-shadow: 0px 0px 20px gray;
      margin: 10px 0;
    }
  }

  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

const ProjectList = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link
            to={{ pathname: "/projects", hash: "eyesky_platform" }}
            className="link"
          >
            <img
              src="https://dmicano.s3.us-east-2.amazonaws.com/eyesky/logo.png"
              alt="eyesky logo"
            />
            Eyesky
          </Link>
        </li>

        <li>
          <Link
            to={{ pathname: "/projects", hash: "domino_apunte" }}
            className="link"
          >
            <img
              src="https://dmicano.s3.us-east-2.amazonaws.com/domino1024.png"
              alt="Domino Apunte"
            />
            Domino Apunte
          </Link>
        </li>

        <li>
          <Link
            to={{ pathname: "/projects", hash: "e_commerce" }}
            className="link"
          >
            <img
              src="https://dmicano.s3.us-east-2.amazonaws.com/dmicano-logo.png"
              alt="Dmicano"
            />
            E-commerce
          </Link>
        </li>

        <li>
          <Link to={{ pathname: "/projects", hash: "h_team" }} className="link">
            <img
              src="https://dmicano.s3.us-east-2.amazonaws.com/H-team-icon.png"
              alt="H team logo"
            />
            H-team
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default ProjectList;
