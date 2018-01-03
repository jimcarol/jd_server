FROM hub.c.163.com/nce2/nodejs:0.12.2

ADD ../ /work_file
WORKDIR /work_file
RUN npm run deploy

COPY ./dist /data/