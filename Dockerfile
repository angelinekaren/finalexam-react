# pull official base image
FROM node:14.16.1-alpine

# set working directory
WORKDIR /my-final-exam

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /loginpage-project/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 

# add app
COPY . ./

# start app
CMD ["npm", "start"]