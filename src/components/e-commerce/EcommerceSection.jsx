import { forwardRef } from "react";
import styled from "styled-components";
import Slider from "../Slider";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 800px;
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 100px 0px;
  background: linear-gradient(to bottom, black 50%, darkred, black);
  color: white;

  figure {
    border: thin darkred solid;
    display: flex;
    flex-flow: column;
    padding: 5px;
    max-width: 1200px;
    height: min-content;
    margin: 0;
  }

  figcaption {
    background-color: #000;
    color: #fff;
    font-size: 1.3rem;
    padding: 10px 50px;
    text-align: center;

    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

const images = [
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/e-commerce/home.png" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/e-commerce/products.png" },
  {
    url: "https://dmicano.s3.us-east-2.amazonaws.com/e-commerce/product-detail.png",
  },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/e-commerce/cart.png" },
  {
    url: "https://dmicano.s3.us-east-2.amazonaws.com/e-commerce/add-to-cart.png",
  },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/e-commerce/checkout.png" },
  { url: "https://dmicano.s3.us-east-2.amazonaws.com/e-commerce/home.png" },
];

const EcommerceSection = forwardRef((props, ref) => {
  return (
    <Article ref={ref} id="e_commerce">
      <h1>E-commerce</h1>
      <figure>
        <Slider data={images} auto width="100%" height="auto" delay={5000} />
        <figcaption>
          User friendly, modern, very fast and beautiful React e-commerce
          platform. Dynamic shooping experience. it work in any device, mobile
          or desktop. This is a React prototype that I create to show clients a
          starting point. Customized according to client's desire.{" "}
          <a href="https://github.com/angel1sma3l/e-commerce">
            GitHub code {">"}
          </a>
        </figcaption>
      </figure>
    </Article>
  );
});

export default EcommerceSection;
