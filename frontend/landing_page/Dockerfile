FROM node:21

WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of your code
COPY . .

ENV NEXT_PUBLIC_FRONTEND_URL=https://protal-ke5m6qbmkq-as.a.run.app

# Build the application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
