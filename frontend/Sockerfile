FROM node:14.21.1-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY main/ ./app
COPY main/package.json ./
COPY main/package-lock.json ./
RUN npm config set timeout 6000000
RUN npm install --no-audit
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true

