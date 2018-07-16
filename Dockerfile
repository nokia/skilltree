FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Copy the project file
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run bundle

EXPOSE 80
EXPOSE 443

CMD [ "npm", "start" ]