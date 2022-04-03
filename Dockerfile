FROM node:16.4.2-buster-slim
ARG  DEBIAN_FRONTEND=noninteractive
COPY ../gamedeals-ui /content
WORKDIR content
RUN mkdir /out
RUN yarn
RUN yarn build
