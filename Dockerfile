FROM node:15.6.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm ci --silent
RUN npm install react-scripts@4.0.1 -g --silent

COPY . ./

CMD npm run build 

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY cfg/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]