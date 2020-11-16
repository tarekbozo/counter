import styled from 'styled-components';

export const Icon = styled.span`
  display: block;
  width: 14px;
  height: 2px;
  position: absolute;
  left: 17px;
  top: 48%;
  background: black;
`;
export const Button = styled.button`
  position: relative;
  margin: 0 21px;
  background: ${(props) =>
    props.primary
      ? ({ theme: { colors } }) => colors.hotpink
      : ({ theme: { colors } }) => colors.white};
  border: ${(props) => (props.primary ? 'none' : '1.5px solid black')};
  font-size: 16px;
  border-radius: 24px;
  outline-style: none;
  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);

  color: ${(props) =>
    props.primary
      ? ({ theme: { colors } }) => colors.white
      : ({ theme: { colors } }) => colors.black};
  height: 48px;
  text-transform: uppercase;
  padding: 0 40px;

  :hover& {
    background: ${(props) =>
      props.primary
        ? ({ theme: { colors } }) => colors.rebeccapurple
        : ({ theme: { colors } }) => colors.black};

    color: ${(props) =>
      props.primary ? props.primary : ({ theme: { colors } }) => colors.white};
  }
  &:hover ${Icon} {
    background: white;
  }
`;
