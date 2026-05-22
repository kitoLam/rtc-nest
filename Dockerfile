FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the server
CMD [ "npm", "run", "start:prod" ]