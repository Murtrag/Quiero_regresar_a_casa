# pull official base image
FROM node:14.21.1-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY main/package.json ./
COPY main/package-lock.json ./
RUN npm install

# add app
COPY main/ ./

# start app
CMD ["npm", "start"]

