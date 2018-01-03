FROM hub.c.163.com/nce2/nodejs:0.12.2

WORKDIR /pangination-plugin
ADD . /work_file
WORKDIR /work_file
RUN echo .
RUN npm install
RUN npm run deploy

COPY ./dist /data/