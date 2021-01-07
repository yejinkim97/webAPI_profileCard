#!/usr/bin/env bash

git checkout gh-pages
npm run build
git add dist -f
git commit -m "Update gh-pages with new build"
git push origin master
git checkout master
