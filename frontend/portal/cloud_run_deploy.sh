#!/bin/sh

# This command submits a build to Google Cloud Build using the specified tag.
gcloud builds submit --tag asia-southeast1-docker.pkg.dev/x-object-425917-m2/test-repo/ainbox_portal .

# This command deploys the specified image to Google Cloud Run.
# The deployed service will be named "protal" and will use the specified image.
# It will run on the managed platform in the "asia-southeast1" region.
# The service will allow unauthenticated access and run on port 3000.
gcloud run deploy protal \
  --image asia-southeast1-docker.pkg.dev/x-object-425917-m2/test-repo/ainbox_portal \
  --platform managed \
  --region asia-southeast1 \
  --allow-unauthenticated \
  --port 3001 \
  --memory 2Gi