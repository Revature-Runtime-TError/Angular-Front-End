# Takes care of step 2 of CI/CD which is installing npm and building the project
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm cache clear --force
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/social-media-angular /usr/share/nginx/html
