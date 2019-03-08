FROM nginx:1.14-alpine

RUN rm -rf /usr/share/nginx/html

COPY app /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]