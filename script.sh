#!/bin/bash
aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 007555096130.dkr.ecr.eu-west-1.amazonaws.com
docker build -t test .
docker tag test:latest 007555096130.dkr.ecr.eu-west-1.amazonaws.com/test:testing
docker push 007555096130.dkr.ecr.eu-west-1.amazonaws.com/test:testing