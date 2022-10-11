import styled from "styled-components";
import Slider from "../Slider";

const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 95vw;
  flex-direction: column;
  height: 100%;
  margin: 0;
  box-shadow: 0px 0px 20px gray;
  background: radial-gradient(darkblue, black 50%);
  color: white;
  scroll-snap-align: start;
  h1 {
    margin: 20px 0 10px;
  }

  section {
    display: flex;
    width: 60%;
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
  width: 90%;
`;

const images = [
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Home-web.png" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/property-web.png" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/eyesky/Home-web.png" }, // clone first img
];

const Sectionn2 = () => {
  return (
    <Container>
      <h1>Web | eyesky.org</h1>
      <Slideshow>
        <Slider data={images} width="100%" height="400px" auto={true} />
      </Slideshow>
      <section>
        <ul type="circle">
          <h2>
            Created with React. this web has all the features found in the
            Mobile app.
          </h2>
          <li>
            Post page to upload maintenance request which includes: 3 photos, 1
            video, title, description and category.
          </li>
          <li>
            Register and Login Page created using Formik and Joi to validate
            inputs.
          </li>
          <li>
            Feed pages: Maintenance request, properties and owners and
            announcements.
          </li>
          <li>Details page for each item in the Feed list.</li>
          <li>
            Payment page with history, make payments and manage payment methods
          </li>
          <li>Payment management to edit payments. For managers only.</li>
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

export default Sectionn2;
