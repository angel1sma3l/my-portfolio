import styled from "styled-components";

const Text = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  font-family: ${(props) => props.fm};
  font-weight: ${(props) => props.fw ?? "var(--font-weight)"};
  max-width: ${(props) => props.width ?? "95%"};
  text-align: ${(props) => props.ta};

  @media (max-width: 800px) {
    max-width: 95%;
    transform: scale(0.8);
  }
`;

const AppText = ({ children, color, lh, fs, fm, fw, ta, width }) => {
  return (
    <Text width={width} fs={fs} fw={fw} fm={fm} lh={lh} color={color} ta={ta}>
      {children}
    </Text>
  );
};

export default AppText;
