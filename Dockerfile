# Start from the latest Node.js image
FROM node:latest

COPY package*.json /app/awesome-women/package.json

# Set the working directory
WORKDIR /app/awesome-women

RUN npm install -g http-server

# Install create-react-app
RUN npm install -g create-react-app

#Install the required packages
RUN npm install materialize-css@next tailwindcss @googlemaps/markerclusterer

# Expose the port
EXPOSE 8080

# Command to create a new React application
CMD ["http-server", ".", "8080"]

#ENTRYPOINT [ "", "npm st}art" ]