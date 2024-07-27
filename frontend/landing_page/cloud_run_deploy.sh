#!/bin/sh

# This command submits a build to Google Cloud Build using the specified tag.
gcloud builds submit --tag asia-southeast1-docker.pkg.dev/x-object-425917-m2/test-repo/ainbox_landing_page .

# This command deploys the specified image to Google Cloud Run.
# The deployed service will be named "ainbox" and will use the specified image.
# It will run on the managed platform in the "asia-southeast1" region.
# The service will allow unauthenticated access.
gcloud run deploy landingpage --image asia-southeast1-docker.pkg.dev/x-object-425917-m2/test-repo/ainbox_landing_page --platform managed --region asia-southeast1 --allow-unauthenticated --port 3000 --memory 2Gi

