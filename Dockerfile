# Start from the latest Node.js image
FROM node:latest

# Set the working directory
WORKDIR /app

RUN npm install -g http-server
# Install create-react-app
RUN npm install -g create-react-app

#Install the required packages
RUN npm install three react-bootstrap bootstrap tailwindcss d3

# Expose the port
EXPOSE 3000

# Command to create a new React application
CMD ["http-server", ".", "8000"]

#ENTRYPOINT [ "", "npm start" ]