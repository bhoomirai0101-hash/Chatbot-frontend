# --- Stage 1: Build Stage ---
# Use a Node.js image to build the React application.
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first 
# to leverage Docker's caching, which speeds up rebuilds if dependencies don't change.
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the React application. This command creates the 'build' or 'dist' folder.
# Ensure 'npm run build' is correctly configured in your package.json.
RUN npm run build


# --- Stage 2: Production/Runtime Stage ---
# Use a lightweight Nginx image to serve the static assets (the built React app).
FROM nginx:alpine AS production

# Copy the built application files from the 'build' stage 
# into the Nginx default web root directory.
# Adjust /app/build to match the output directory of 'npm run build'.
COPY --from=build /app/dist  /usr/share/nginx/html

# Optional: Copy a custom Nginx configuration file if you need specific routing 
# (e.g., for supporting client-side routing like React Router).
# If you use React Router, you will need a custom nginx.conf to rewrite all unknown paths to index.html.
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# The default Nginx port is 80, which is exposed by the base image.
EXPOSE 80

# Command to start Nginx, which is the default for the nginx:alpine image
CMD ["nginx", "-g", "daemon off;"]
