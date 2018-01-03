FROM debian:jessie
RUN sudo apt-get update \  
  && apt-get install wget 
RUN wget http://curl.haxx.se/download/curl-7.49.0.tar.gz \
  && tar -xvf curl-7.49.0.tar.gz \
  && cd curl-7.49.0/./configure \
  && make \
  && make install

RUN curl -sL https://deb.nodesource.com/setup_9.x | -E bash - \
  && apt-get install -y nodejs

ADD ../ /work_file
WORKDIR /work_file
RUN npm run deploy

COPY ./dist /data/