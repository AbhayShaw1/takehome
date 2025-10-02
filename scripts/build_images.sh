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

cd "$(dirname "$0")/.."

################
# Build backend
################
docker build -t "${REGISTRY}-staging:latest" -t "${REGISTRY}-prod:stable" ./backend


################
# Build frontend
################
docker build -t "${REGISTRY}-frontend-staging:latest" -t "${REGISTRY}-frontend-prod:stable" ./frontend


echo "✅ Backend and frontend images built successfully"
