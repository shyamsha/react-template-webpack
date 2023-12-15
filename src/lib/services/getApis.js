import config from "src/config/app";
import requestConfig from "src/config/request";
import * as API from "src/lib/utils/api-helper";

const isProd = config.isProd;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.staging.api_endpoint;

export const test = () => {
  const url = `${API_ENDPOINT}/test`;
  return API.get(url);
};
