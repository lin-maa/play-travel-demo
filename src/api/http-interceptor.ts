import axios from 'axios';
const { REACT_APP_UNSPLASH_VERSION, REACT_APP_UNSPLASH_ACCESS_KEY } =
  process.env;

const instance = axios.create();

instance.interceptors.request.use(
  function (config) {
    config.headers['Accept-Version'] = REACT_APP_UNSPLASH_VERSION;
    config.headers['Authorization'] =
      'Client-ID ' + REACT_APP_UNSPLASH_ACCESS_KEY;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
