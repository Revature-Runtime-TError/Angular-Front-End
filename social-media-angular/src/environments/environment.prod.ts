export const environment = {
  production: true,
  withCredentials: true,
  baseUrl: "http://ec2-54-226-181-182.compute-1.amazonaws.com:5555",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://ec2-54-226-181-182.compute-1.amazonaws.com:9090',
  },
};
