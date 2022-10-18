export const environment = {
  production: false,
  withCredentials: true,
  baseUrl: "http://ec2-54-226-181-182.compute-1.amazonaws.com:5555",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  },
};
