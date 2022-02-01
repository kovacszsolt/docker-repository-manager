FROM nginx:alpine
ARG REGISTRY_NAME="docker_registry"
ARG REGISTRY_URL_BASE="http://base"
ARG REGISTRY_URL_CATALOG="catalog"
ARG REGISTRY_URL_TAGLIST="taglist"
ARG REGISTRY_URL_TAGIINFO="taglistinfo"
ARG REGISTRY_URL_TAGIINFOLAYERS="taglistinfolayers"


RUN echo "server {" > /etc/nginx/conf.d/default.conf
RUN echo "listen       80;" >> /etc/nginx/conf.d/default.conf
RUN echo "server_name  localhost;" >> /etc/nginx/conf.d/default.conf
RUN echo "location / {" >> /etc/nginx/conf.d/default.conf
RUN echo "root   /usr/share/nginx/html;" >> /etc/nginx/conf.d/default.conf
RUN echo "index  index.html index.htm;" >> /etc/nginx/conf.d/default.conf
RUN echo "try_files "'$'"uri /index.html;" >> /etc/nginx/conf.d/default.conf
RUN echo "}" >> /etc/nginx/conf.d/default.conf
RUN echo "error_page   500 502 503 504  /50x.html;" >> /etc/nginx/conf.d/default.conf
RUN echo "location = /50x.html {" >> /etc/nginx/conf.d/default.conf
RUN echo "root   /usr/share/nginx/html;" >> /etc/nginx/conf.d/default.conf
RUN echo "}" >> /etc/nginx/conf.d/default.conf
RUN echo "}" >> /etc/nginx/conf.d/default.conf


COPY ./dist/repolist/ /usr/share/nginx/html/
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/bin/sh","/entrypoint.sh"]
EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]
