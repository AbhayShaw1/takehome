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

docker push "${REGISTRY}-staging:latest"
docker push "${REGISTRY}-prod:stable"
docker push "${REGISTRY}-frontend-staging:latest"
docker push "${REGISTRY}-frontend-prod:stable"

echo "✅ All Docker images pushed successfully to Docker Hub"
