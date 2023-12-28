import config from "src/config/app";
import requestConfig from "src/config/request";
import * as API from "src/lib/utils/api-helper";

const isProd = config.isProd;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.development.api_endpoint;

export const test = () => {
  const url = `${API_ENDPOINT}/test`;
  return API.get(url);
};
export const login = (params) => {
  const url = `${API_ENDPOINT}/auth/login/`;

  return API.post(url, params);
};

export const exportSpreadSheet = (params) => {
  const url = `${API_ENDPOINT}/exportSpreadsheet?${params.id}`;
  const config = { ...requestConfig };
  config.responseType = "arraybuffer";
  return API.post(url, params.data, config);
};
