import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 20px;
`;

export const ListItems = styled.ul`
  list-style: none;
  font-size: 16px;
  font-weight: 300;
  margin-right: 10px;
`;

export const LisItem = styled.li`
  padding: 20px;
  color: black;
  font-size: 20px;
  border-bottom: 0.5px solid gray;
  line-height: 1.5;
`;
export const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
  margin-right: 15px;
`;
