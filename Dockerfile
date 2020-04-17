# Start from the latest node base image
FROM node:alpine as builder

# Add Maintainer Info
LABEL maintainer="shyn <thaison.coderstokyo@gmail.com>"

# Set the Current Working Directory inside the container
WORKDIR '/app'

# Copy package.json first, for caching deps
COPY ./package.json ./
RUN npm install

# Copy data to working dir
COPY . .

# Set env vars
ENV REACT_APP_SERVER_URL=https://netjs.herokuapp.com/
ENV REACT_APP_GOOGLE_MAP_KEY=AIzaSyDGZOhb6qWmy1PLYJrLmtBho18Vasw0C_U
ENV REACT_APP_API_UPLOAD_IMAGE=https://upload.cashbagmain.com
ENV SKIP_PREFLIGHT_CHECK=true
ENV GENERATE_SOURCEMAP=false

# Build
RUN npm run build

# Add to nginx
FROM nginx

# Expose port
EXPOSE 6001

# Copy file
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html