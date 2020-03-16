FROM node:12.14.1 as build-stage
COPY . /workspace
WORKDIR /workspace
RUN npm install
RUN npm run build

FROM nginx:1.15-alpine
COPY --from=build-stage /workspace/build/ /var/www
COPY --from=build-stage /workspace/nginx.conf /etc/nginx/nginx.conf