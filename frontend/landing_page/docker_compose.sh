#!/bin/sh

# Build the Docker images
docker-compose build

# Start the Docker containers
docker-compose up
