import styled from "styled-components";
import AppText from "../AppText";
import FooterNav from "./FooterNav";
import SocialMedia from "./SocialMedia";

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 20vh;
  width: 100vw;
  padding: 20px 0px;
  margin-top: auto;
  margin-bottom: 0;
`;

const Col = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Col>
        <FooterNav />
        <SocialMedia />
        <AppText fs="0.9rem">
          Copyright &copy; {new Date().getFullYear()} Dmicano LLC. All rights
          reserved
        </AppText>
      </Col>
    </FooterStyled>
  );
};

export default Footer;
