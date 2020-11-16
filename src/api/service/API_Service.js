import http from '../Github_API';

const getData = (url) => {
  return http.get(`/${url}`);
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { getData };
