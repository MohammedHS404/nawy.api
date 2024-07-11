# Stage 1: Build the application
FROM node:18 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate the Prisma client with Alpine binaries
RUN npx prisma generate

# Build the NestJS application
RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the build output and node_modules from the previous stage
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/prisma ./prisma

# Inform Docker that the container listens on port 3000
EXPOSE 5000

# Run the application
CMD ["node", "dist/src/main"]
