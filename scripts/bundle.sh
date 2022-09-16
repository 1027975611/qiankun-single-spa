#!/bin/bash

rm -rf ./dist

mkdir ./dist
mkdir ./dist/subapp

# sub-angular子应用
cp -r ./sub-angular/dist/ ./dist/subapp/sub-angular/

# sub-react子应用
cp -r ./sub-react/build/ ./dist/subapp/sub-react/

# sub-vue子应用
cp -r ./sub-vue3/dist/ ./dist/subapp/sub-vue3/

# sub-html子应用
cp -r ./sub-html/dist/ ./dist/subapp/sub-html/

# main基座
cp -r ./main/dist/ ./dist/main

# cd ./dist
# zip -r mp$(date +%Y%m%d%H%M%S).zip *
# cd ..
echo 'bundle.sh execute success.'
