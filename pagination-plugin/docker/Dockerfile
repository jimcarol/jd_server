FROM hub.c.163.com/nce2/nodejs:0.12.2
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
WORKDIR /workspace/jd_server
ADD . /work_file

WORKDIR /work_file
RUN cnpm install
RUN cnpm run deploy

COPY ./dist /data/