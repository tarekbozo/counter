import styled from 'styled-components';

const Skeleton1 = styled.div`
  display: inline-block;
  margin-top: 40px;
  height: 20px;
  width: 100%;
  background: linear-gradient(-90deg, #f5f5f5 5%, #f0f0f0 20%, #e8e8e8 80%);
  background-size: 85% 85%;
  border-radius: 4px;
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
export const Skeleton = styled(Skeleton1)`
  width: 5.5em;
  border-radius: 5px;
  &::before {
    content: '\00a0';
  }
`;
