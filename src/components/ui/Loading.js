import styled from 'styled-components';

const SkeletonPulse = styled.div`
  display: inline-block;
  margin-top: 40px;
  height: 5vh;
  width: 100%;
  background: linear-gradient(-90deg, #c0392b 5%, #8e44ad 20%, #c0392b 80%);
  background-size: 85% 85%;
  border-radius: 24px;
  animation: pulse 0.5s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    80% {
      background-position: -135% 0%;
    }
  }
`;

export const Loading = styled(SkeletonPulse)`
  width: 5.5em;
  border-radius: 5px;
  &::before {
    content: '\00a0';
  }
`;
