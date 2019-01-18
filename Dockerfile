FROM mhart/alpine-node:11
RUN mkdir /app

WORKDIR /app

ADD package.json /app/

RUN npm config set unsafe-perm true

RUN npm install --global @adonisjs/cli@4.0.10

RUN cd /app && \
    npm i

ADD . /app
