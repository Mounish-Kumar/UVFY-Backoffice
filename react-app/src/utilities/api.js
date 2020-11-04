import fetch from "isomorphic-fetch";

const request = ({ endpoint, method, body, headers } = {}) => {
  if (!endpoint || !endpoint.trim())
    throw new Error("You need to pass an endpoint");
  if (!method) method = "POST";
  if (!headers) headers = { "Content-Type": "application/json" };
  else if (!("Content-Type" in headers)) {
    headers["Content-Type"] = "application/json";
  }

  const apiRequest = {
    method,
    headers,
    body: body && JSON.stringify(body),
  };

  const apiUrl = getBaseUrl() + endpoint;

  return fetch(apiUrl, apiRequest)
    .then((res) => {
      if (
        res.headers.get("Content-Type").indexOf("application/json") > -1 ||
        res.headers.get("Content-Type").indexOf("text/plain") > -1
      ) {
        return res.json();
      }
      return res;
    })
    .catch((res) => {});
};

const getBaseUrl = () => {
  let baseDomain = "";
  let basePath = "/api/";
  switch (process.env.NODE_ENV) {
    case "production":
      baseDomain = "https://<base-domain>";
      break;
    case "development":
      baseDomain = "http://localhost:8080";
      break;
  }
  return baseDomain + basePath;
};

const Method = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};
