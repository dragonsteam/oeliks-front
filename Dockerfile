# Step 1: build stage
FROM node:18-alpine

WORKDIR /app

COPY package*json .

RUN npm install

COPY . .

CMD npm run build

# CMD echo finished
# ENTRYPOINT [ "echo", "finished" ]

# Step 2: production stage
# FROM nginx:1.25-alpine

# COPY --from=build-stage /app/dist /usr/share/nginx/html
# EXPOSE 80
# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]