import React, { useState, useEffect, useContext } from 'react';
import { API_URL } from './apiUrl';
import { CounterContext } from '../context/CounterContextProvider';
import { Message } from '../components/ui/Message';
import Star from './../components/ui/Star';
import { ListItems, List, LisItem, Title } from './infoStyle';
import { Skeleton } from './../components/ui/Skeleton';
import API_Service from './service/API_Service';

export const Info = () => {
  const [count, setCount] = useContext(CounterContext);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchDataFromAPI = async () => {
    setLoading(true);
    try {
      const response = await API_Service.getData(API_URL[count]);
      setResponse(response.data);
      setLoading(false);
    } catch (error) {
      setHasError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, [count]);

  const { full_name, description, stargazers_count } = response;
  return (
    <>
      {loading ? (
        <Skeleton>Loading...</Skeleton> //TODO
      ) : hasError ? (
        <Message />
      ) : (
        <List>
          <ListItems>
            <LisItem>
              <Title>Full name:</Title> {full_name}
            </LisItem>
            <LisItem>
              {' '}
              <Title>Description:</Title> {description}
            </LisItem>
            <LisItem>
              <Title>Stars:</Title> {stargazers_count} <Star />
            </LisItem>
          </ListItems>
        </List>
      )}
      <button onClick={() => console.log(count)}>Count</button>
    </>
  );
};
