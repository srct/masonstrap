# Grab the node image from the store
FROM node:latest

# Define a working directory to place things in
WORKDIR /usr/masonstrap

# Copy over everything
COPY . .

# Install all dependecies
RUN yarn
