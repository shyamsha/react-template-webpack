import Axios from "axios";

const API_BASE_URL = "https://api.escuelajs.co/api/v1";
const axios = Axios.create({ baseURL: API_BASE_URL });

const getRequestConfig = (args) => {
  if (typeof args === "string") {
    return { url: args };
  }

  return args;
};

const axiosBaseQuery = ({ prepareHeaders, meta, transformResponse } = {}) => {
  return async (args, api, extraOptions) => {
    try {
      const requestConfig = getRequestConfig(args);
      const result = await axios({
        ...requestConfig,
        headers: prepareHeaders
          ? prepareHeaders(requestConfig.headers || {}, api)
          : requestConfig.headers,
        signal: api.signal,
        ...extraOptions,
      });
      return {
        data: transformResponse ? transformResponse(result) : result,
      };
    } catch (err) {
      if (!Axios.isAxiosError(err)) {
        return {
          error: err,
          meta,
        };
      }

      return {
        error: {
          status: err.response?.status,
          statusText: err.response?.statusText,
          data: err.response?.data || err.message,
        },
        meta,
      };
    }
  };
};

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // You can modify the request config here, e.g., add authentication headers
    // config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // You can modify the response data here, e.g., handling pagination
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // TODO: clear session data from localStorage
      // clearFromLocalStorage("x-session-id");
    }
    return Promise.reject(error);
  }
);

export default axiosBaseQuery;
