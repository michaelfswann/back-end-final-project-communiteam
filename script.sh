#!/bin/bash

# usage bash script.sh -a AWS_ACC_NUM -b APP_NAME

print_usage() {
  printf "Usage: ..."
}

while getopts 'a' flag; do
  case "${flag}" in
    a) AWS_ACC_NUM="${OPTARG}" ;;
    b) APP_NAME="${OPTARG}" ;;
    *) print_usage
       exit 1 ;;
  esac
done

aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin ${AWS_ACC_NUM}.dkr.ecr.eu-west-1.amazonaws.com
docker build -t ${APP_NAME} .
docker tag ${APP_NAME}:latest ${AWS_ACC_NUM}.dkr.ecr.eu-west-1.amazonaws.com/${APP_NAME}:testing
docker push ${AWS_ACC_NUM}.dkr.ecr.eu-west-1.amazonaws.com/${APP_NAME}:testing