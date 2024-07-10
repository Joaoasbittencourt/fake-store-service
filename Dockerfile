FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

ENV PORT=8080
ENV NODE_ENV=production
ENV FAKE_STORE_API_URL=https://fakestoreapi.com
EXPOSE 8080
CMD ["npm", "run", "start"]
