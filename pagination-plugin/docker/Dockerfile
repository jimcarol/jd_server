FROM debian:jessie

RUN curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash - \
  && apt-get install -y nodejs

ADD ../ /work_file
WORKDIR /work_file
RUN npm run deploy

COPY ./dist /data/