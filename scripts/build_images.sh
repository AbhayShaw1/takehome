#!/bin/bash

################
# Author : Abhay
# Date   : 01/10/25
#
# This script builds backend and frontend Docker images
# with staging and production tags.
################

set -x
set -e

REGISTRY="abhayshaw0301"
BACKEND_IMAGE="$REGISTRY/takehome-backend"
FRONTEND_IMAGE="$REGISTRY/takehome-frontend"

cd "$(dirname "$0")/.."

################
# Build backend
################
docker build \
  -t "$BACKEND_IMAGE-staging:latest" \
  -t "$BACKEND_IMAGE-prod:stable" \
  ./backend

################
# Build frontend
################
docker build \
  -t "$FRONTEND_IMAGE-staging:latest" \
  -t "$FRONTEND_IMAGE-prod:stable" \
  ./frontend

echo "✅ Backend and frontend images built successfully"
