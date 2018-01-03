FROM hub.c.163.com/nce2/nodejs:0.12.2

WORKDIR /pangination-plugin
RUN echo $(pwd)
RUN echo $(ls)
ADD . /work_file
WORKDIR /work_file
RUN npm install
RUN npm run deploy

COPY ./dist /data/