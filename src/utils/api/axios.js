import axios from "axios";
const client = axios.create({ baseURL: "http://localhost:3500" });

const tokenJSON = window.localStorage.getItem("token");

if (tokenJSON) {
  const token = JSON.parse(tokenJSON);
  const tokenData = token.data.accessToken;
  client.defaults.headers.common.Authorization = `Bearer ${tokenData}`;
  console.log(tokenData);
}

export const request = ({ ...options }) => {
  const onSuccess = (response) => response;
  const onError = (error) => {
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
