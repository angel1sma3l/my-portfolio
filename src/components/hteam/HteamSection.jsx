import { forwardRef } from "react";
import styled from "styled-components";
import Slider from "../Slider";
import DownloadApp from "./DownloadApp";

const images = [
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/hteam/welcome.PNG" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/hteam/login.PNG" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/hteam/register.PNG" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/hteam/register2.png" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/hteam/Pro-feed.png" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/hteam/Pro-detail.png" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/hteam/jobs.PNG" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/hteam/Job-detail.PNG" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/hteam/browse.PNG" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/hteam/job-post.PNG" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/hteam/Post-problem.png" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/hteam/message.PNG" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/hteam/account.PNG" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/hteam/welcome.PNG" },
];
const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, black, darkred 70%, black);
  justify-content: center;
  color: white;
  width: 100vw;
  padding: 100px 5px;

  h1 {
    max-width: max-content;
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    padding: 10px 0;
    background-color: black;
  }
`;

const HteamSection = forwardRef((props, ref) => {
  return (
    <Article ref={ref} id="h_team">
      <h1>H-team | React Native</h1>

      <figure>
        <Slider
          data={images}
          auto
          height="500px"
          width="350px"
          bgColor="black"
        />
      </figure>

      <ul>
        <h2>
          An app in which professionals can show their work and find clients.
        </h2>
        <li>
          Clients can post a problem and all pro can see and send an estimate.
        </li>
        <li>
          Professionals can post their work to show off, get clients attention
          and hired.
        </li>
        <li>Available in Apple and Google Store. Free</li>
      </ul>

      <DownloadApp />
    </Article>
  );
});

export default HteamSection;
