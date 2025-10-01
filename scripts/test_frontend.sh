#!/bin/bash

################
# Author : Abhay
# Date   : 01/10/25
#
# This script installs dependencies and builds the frontend
################
#!/bin/bash
set -x
set -e

cd "$(dirname "$0")/../frontend"

npm ci

# Run lint if defined
if [ "$(npm pkg get scripts.lint)" != "{}" ]; then
  npm run lint
fi

# Run tests if defined
if [ "$(npm pkg get scripts.test)" != "{}" ]; then
  npm test -- --watchAll=false
fi

npm run build

echo "✅ Frontend build  passed"
