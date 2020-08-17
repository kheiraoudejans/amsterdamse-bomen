#!/usr/bin/env bash

# Usage: deploy.sh branchname
# this script performs the following tasks:

# update git repo
# install dependencies
# create production build
# deploy the build to the web/ directory

set -e

echo ""
echo "----------------------------------"
echo "Performing git pull"
echo "----------------------------------"
git pull

if [ -f yarn.lock ]; then
    echo ""
    echo "----------------------------------"
    echo "Performing yarn install"
    echo "----------------------------------"
    yarn install --pure-lockfile;

else
    echo ""
    echo "----------------------------------"
    echo "Performing npm ci"
    echo "----------------------------------"
    npm ci;
fi

echo ""
    echo "----------------------------------"
    echo "Performing build"
    echo "----------------------------------"
    npm run build;

if [ $? == 0 ]; then
    echo ""
        echo "----------------------------------"
        echo "Deploying build output to web dir"
        echo "----------------------------------"

        # make sure there's an empty web dir
        if [ ! -d web ]; then
            mkdir web
        else
            rm -rf web/* web/.[^.]*
        fi

        # simply move all contents to web dir
        mv build/* web/
        if [ -f build/.[^.]* ]; then
            mv build/.[^.]* web/
        fi

        echo "Deploy completed"

else
    echo ""
    echo "----------------------------------"
    echo "Build failed, aborting"
    echo "----------------------------------"
    exit 1
fi
