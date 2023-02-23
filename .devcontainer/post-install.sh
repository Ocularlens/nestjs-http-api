#!/bin/sh 

npm install

docker-compose up -d

npx prisma migrate dev --name "init"

npx prisma generate

npm run sls-local