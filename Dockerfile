FROM node:11-alpine

# Create folder node_modules and add ownership permissions to our node user 
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set working directory
WORKDIR /home/node/app

# Copy package.json & package-lock.json
COPY package*.json ./

# Switch to user *node* before installing the libraries to ensure that the application files
# are owned by the non-root node user
USER node

RUN npm install

# Copy application code
COPY --chown=node:node . .

EXPOSE 3000

CMD [ "npm", "start" ]
