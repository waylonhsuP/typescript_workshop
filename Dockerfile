FROM node:18 AS nodebuild
FROM lscr.io/linuxserver/code-server:latest AS dev-env

# 安裝 node, npm, core libraries
COPY --from=nodebuild /usr/local /usr/local
COPY . /config
RUN sudo chown -R 1000:1000 /config/workspace


FROM dev-env AS prod-env

ENV PUID=1000
ENV PGID=1000
ENV TZ=Etc/UTC
ENV HASHED_PASSWORD=
ENV SUDO_PASSWORD=password
ENV SUDO_PASSWORD_HASH= 
ENV DEFAULT_WORKSPACE=/config/workspace
ENV PASSWORD=1234

EXPOSE 8443