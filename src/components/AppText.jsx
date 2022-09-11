import styled from "styled-components";

const Text = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  font-weight: ${(props) => props.fw};
  max-width: ${(props) => props.width ?? "95%"};
`;

const AppText = ({ children, color, lh, fs, fw, width }) => {
  return (
    <Text width={width} fs={fs} fw={fw} lh={lh} color={color}>
      {children}
    </Text>
  );
};

export default AppText;
