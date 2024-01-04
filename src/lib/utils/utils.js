import axios from "axios";

export const ErrorMessages = {
  FORBIDDEN: "Forbidden",
  INTERNAL_SERVER_ERROR: "Internal Server Error",
};

export const get500ErrorMessage = (err) => {
  if (err.response && err.response && err.response.status === 500) {
    return (err.message = ErrorMessages.INTERNAL_SERVER_ERROR);
  } else {
    return err;
  }
};

// export const getErrorMessage = (err) => {
//   if (
//     err.response &&
//     err.response.data &&
//     err.response.data &&
//     err.response.status !== 500
//   ) {
//     return err.response.data;
//   } else {
//     return err;
//   }
// };

// export const getErrorMessageForUploadDocument = (err) => {
//   if (err.response && err.response.status === 400) {
//     return "File type not supported";
//   } else {
//     return getErrorMessage(err);
//   }
// };

export const errorMessageHandler = (err) => {
  if (!err.response) return err;
  switch (err.response.status) {
    case 401:
      err.message = ErrorMessages.FORBIDDEN;
      return err;
    default:
      return err;
  }
};

// export const getDownloadedFileNameFromContentDispositionHeader = (header) => {
//   const contentArray = header.split("=");
//   if (contentArray.length > 1) {
//     return contentArray[contentArray.length - 1];
//   } else {
//     return "";
//   }
// };

// export const unknownError = (message) => {
//   let err = {
//     message: "An unknown error occurred.",
//     code: "500",
//     toJSON: () => {},
//     response: {
//       data: {},
//       status: 500,
//       statusText: "Error",
//       headers: {},
//       config: {},
//     },
//     config: {},
//     name: "Error",
//     isAxiosError: false,
//   };

//   return err;
// };

export const getFromLocalStorage = async (key) => {
  try {
    const serializedState = await localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveToLocalStorage = async (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    await localStorage.setItem(key, serializedState);
  } catch (err) {
    // Ignoring write error as of now
  }
};

export const clearFromLocalStorage = async (key) => {
  try {
    await localStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
};

// async function getRequestConfig(apiConfig) {
//   let config = Object.assign({}, requestConfig);
//   const session = await localStorage.getItem("user");
//   if (apiConfig) {
//     config = Object.assign({}, requestConfig, apiConfig);
//   }
//   if (session) {
//     config.params.token = JSON.parse(session).id;
//   }
//   return config;
// }

// async function getUrlWithToken(url) {
//   const userToken = await localStorage.getItem("accessToken");
//   if (!userToken) return url;
//   return `${url}${
//     url.indexOf("?") !== -1
//       ? `&access_token=${userToken}`
//       : `?access_token=${userToken}`
//   }`;
// }

// export const get = async (url, params, apiConfig) => {
//   const config = await getRequestConfig(apiConfig);
//   config.params = params;
//   const request = axios.get(await getUrlWithToken(url), config);
//   return request;
// };

// export const post = async (url, data, apiConfig) => {
//   const config = await getRequestConfig(apiConfig);
//   let postData = {};
//   if (
//     apiConfig &&
//     apiConfig.headers &&
//     apiConfig.headers["Content-Type"] &&
//     apiConfig.headers["Content-Type"] !== "application/json"
//   ) {
//     postData = data;
//     axios.defaults.headers.post["Content-Type"] =
//       apiConfig.headers["Content-Type"];
//   } else {
//     postData = JSON.stringify(data);
//     axios.defaults.headers.post["Content-Type"] = "application/json";
//   }
//   const request = axios.post(await getUrlWithToken(url), postData, config);
//   return request;
// };

// export const put = async (url, data) => {
//   const config = await getRequestConfig();
//   config.headers["Content-Type"] = "application/json";
//   const request = axios.put(
//     await getUrlWithToken(url),
//     JSON.stringify(data),
//     config
//   );
//   return request;
// };

// export const patch = async (url, data) => {
//   const config = await getRequestConfig();
//   config.headers["Content-Type"] = "application/json";
//   const request = axios.patch(
//     await getUrlWithToken(url),
//     JSON.stringify(data),
//     config
//   );
//   return request;
// };

// export const deleteResource = async (url) => {
//   const config = await getRequestConfig();
//   const request = axios.delete(await getUrlWithToken(url), config);
//   return request;
// };
