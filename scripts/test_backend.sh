#!/bin/bash

################
# Author : Abhay
# Date   : 01/10/25
#
# This script installs dependencies from requirements.txt
# and runs pytest to test the backend endpoints.
################

set -x  # Debug mode: print each command
set -e  # Exit immediately if a command exits with a non-zero status

# Navigate to backend folder (always relative to script location)
cd "$(dirname "$0")/../backend"


pip install --no-cache-dir -r requirements.txt

# Run pytest with verbose output
pytest -v
