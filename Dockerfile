FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "my-app/src/index.js"]
