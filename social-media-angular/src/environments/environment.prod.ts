export const environment = {
  production: false,
  withCredentials: true,
  baseUrl: "http://ec2-34-207-112-90.compute-1.amazonaws.com:9090",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  },
};
