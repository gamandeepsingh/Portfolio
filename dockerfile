FROM node:18 AS build
WORKDIR /build
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:18 AS production
WORKDIR /app
COPY --from=build /build/package*.json ./

RUN npm install --only=production
COPY --from=build /build/dist ./dist

EXPOSE 5173

CMD ["node", "dist/main.js"]
