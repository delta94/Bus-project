#!/bin/bash
echo "Good Day Friend, building all submodules while checking out from DEVELOP branch."

git submodule update
git submodule foreach git checkout develop
git submodule foreach git pull origin develop

