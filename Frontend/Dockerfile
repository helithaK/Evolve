# Use a Node.js image
FROM node:18 AS development

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Expose the React development server port
EXPOSE 5173

# Start the React development server
CMD ["npm", "run", "dev"]
