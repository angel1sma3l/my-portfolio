import AppLink from "../AppLink";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-around;
`;

const FooterNav = () => {
  return (
    <Div>
      <AppLink color="var(--text-color)" title="Home" to="/" /> |
      <AppLink color="var(--text-color)" title="Projects" to="/projects" /> |
      <AppLink color="var(--text-color)" title="About" to="/about" /> |
      <AppLink color="var(--text-color)" title="Contact" to="/contact" />
    </Div>
  );
};

export default FooterNav;
