FROM node:21

WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of your code
COPY . .

# Set environment variables
ENV NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAX_kTt6CcPMP9tlW1oZFQouh0jfj3P8Rs
ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=ainbox-680a1.firebaseapp.com
ENV NEXT_PUBLIC_FIREBASE_PROJECT_ID=ainbox-680a1
ENV NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=ainbox-680a1.appspot.com
ENV NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=847900714222
ENV NEXT_PUBLIC_FIREBASE_APP_ID=1:847900714222:web:c71b5bdceef37a29ec7fff
ENV NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-EVFY34JNGS
ENV NEXT_PUBLIC_FRONTEND_URL=https://protal-ke5m6qbmkq-as.a.run.app
ENV NEXT_PUBLIC_BACKEND_URL=https://backend-ke5m6qbmkq-as.a.run.app

# Build the application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3001

# Start the application
CMD ["yarn", "start"]