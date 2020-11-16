import http from '../Github_API';

const getData = (url) => {
  return http.get(`/${url}`);
};
export default { getData };
