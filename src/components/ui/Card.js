import React from 'react';
import { Counter } from '../Counter/Counter';
import styled from 'styled-components';
import { Info } from './../../api/Info';

const Mine = styled.div`
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 600px;
  background: #fdfeff;
  box-shadow: 0 12px 13px rgba(0, 0, 0, 0.16), 0 12px 13px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  padding: 40px;
`;

export const Card = () => {
  return (
    <>
      <Mine>
        <Counter />
        <Info />
      </Mine>
    </>
  );
};
