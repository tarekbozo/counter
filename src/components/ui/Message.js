import React, { useState } from 'react';
import styled from 'styled-components';
import { SmalltBtn } from './SmallButton';

const Warning = styled.div`
  background-color: #e44d4d;
  padding: 20px;
  margin: 20px;
  border: 2px solid #bb1932;
  border-radius: 15px;
`;

export const Message = () => {
  const [dismiss, setDismiss] = useState(false);

  return (
    <>
      {!dismiss ? (
        <Warning visible>
          <strong>404</strong> Whoops! Page Not Found.
          <SmalltBtn onClick={() => setDismiss(true)}>Dismiss</SmalltBtn>
        </Warning>
      ) : (
        ''
      )}
    </>
  );
};
