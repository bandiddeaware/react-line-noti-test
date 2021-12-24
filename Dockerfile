####################### OLD ################################################
# # build environment
# FROM node:16.13.0-alpine AS build
# WORKDIR /app
# COPY . .
# RUN yarn
# RUN yarn build
# # production environment
# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]



####################### NEW ################################################
FROM node:14.17.0 as build

WORKDIR /app

COPY /package.json /app/package.json

COPY . /app

RUN yarn
RUN yarn build

FROM nginx:1.19.10-alpine

COPY --from=build /app/build /usr/share/nginx/html 

COPY /nginx/default.conf /etc/nginx/conf.d/default.conf 

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 