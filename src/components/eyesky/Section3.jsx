import styled from "styled-components";
import Slider from "../Slider";

const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: radial-gradient(darkblue, black 50%);
  color: white;
  flex-direction: column;
  height: 100%;
  min-width: 95vw;
  margin: 0;
  box-shadow: 0px 0px 20px gray;
  padding: 0 20px;
  scroll-snap-align: start;
  h1 {
    margin: 20px 0 10px;
  }

  section {
    display: flex;
    max-width: 1200px;
    h1 {
      margin: 0;
    }
    h2 {
      font-weight: 400;
    }
    @media (max-width: 800px) {
      width: 95%;
    }
  }
`;

const Slideshow = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  padding: 10px 0;
  background-color: white;
`;

const images = [
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/maintenance.png" },
  {
    url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Maint-details.PNG",
  },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Property.png" },
  {
    url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Property+details.png",
  },
  {
    url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Pmt+management.png",
  },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Message.png" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Chat.png" },
  {
    url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Announcement.png",
  },
  {
    url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Tenant-maint-request.png",
  },
  {
    url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Make-request.png",
  },
  {
    url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Tenant-announcement.png",
  },
  {
    url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Tenant+pmt.png",
  },
  {
    url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Pmt+methods.png",
  },
  {
    url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Confirm-pmt.png",
  },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/maintenance.png" }, // clone first img
];

const Sectionn3 = () => {
  return (
    <Container>
      <h1>Mobile | Eyesky</h1>
      <Slideshow>
        <Slider
          data={images}
          width="350px"
          height="400px"
          auto={true}
          bgColor="white"
        />
      </Slideshow>

      <h2>
        Created with React Native (Expo). It has 3 version, Manager, Owner and
        Tenant.
      </h2>

      <section>
        <ul type="circle">
          <li>
            Post screen to upload maintenance request which includes: 3 photos,
            1 video, title, description and category.
          </li>
          <li>
            Register and Login screen created using Formik and Joi to validate
            inputs.
          </li>
          <li>Feed screens: Maintenance request and announcements.</li>
          <li>Details screen for each item in the Feed list.</li>
          <li>
            Payment screen with history, make payments and manage payment
            methods
          </li>
        </ul>
        <ul>
          <li>Payment management to edit payments. For managers only.</li>
          <li>Chat.</li>
          <li>
            API calls handle with Axios. handle errors with response
            interceptors.
          </li>
          <li>Json Web Token to handle authentication.</li>
          <li>React Router for navigation.</li>
        </ul>
      </section>
    </Container>
  );
};

export default Sectionn3;
