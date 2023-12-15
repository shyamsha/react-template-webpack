import config from "src/config/app";
import requestConfig from "src/config/request";
import * as API from "src/lib/utils/api-helper";

const isProd = config.isProd;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.staging.api_endpoint;

export const login = (params) => {
  const url = `${API_ENDPOINT}/login`;
  const config = { ...requestConfig };

  config.headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  };

  return API.post(url, params, config);
};

export const exportSpreadSheet = (params) => {
  const url = `${API_ENDPOINT}/exportSpreadsheet?${params.id}`;
  const config = { ...requestConfig };
  config.responseType = "arraybuffer";
  return API.post(url, params.data, config);
};
