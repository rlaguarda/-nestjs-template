FROM node as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:slim

ENV NODE_ENV production
USER node

# Create app directory
WORKDIR /usr/src/app

COPY .env ./
# Install app dependencies
COPY package*.json ./

RUN npm ci --production

COPY --from=builder /usr/src/app/dist/src ./dist

# Expone el puerto en el cual la aplicación va a ejecutarse (ajusta según sea necesario)
EXPOSE 3000
EXPOSE 80
CMD [ "node", "dist/main.js" ]