#!/bin/bash

################
# Author : Abhay
# Date   : 01/10/25
#
# This script pushes backend and frontend Docker images
# to Docker Hub with staging and production tags.
################

set -x  # Debug mode: print each command
set -e  # Exit on first error

REGISTRY="abhayshaw0301"


BACKEND_IMAGE="$REGISTRY/takehome-backend"
FRONTEND_IMAGE="$REGISTRY/takehome-frontend"

################
# Push backend images
################
docker push "$BACKEND_IMAGE-staging:latest"
docker push "$BACKEND_IMAGE-prod:stable"

################
# Push frontend images
################
docker push "$FRONTEND_IMAGE-staging:latest"
docker push "$FRONTEND_IMAGE-prod:stable"

echo "✅ All Docker images pushed successfully to Docker Hub"
