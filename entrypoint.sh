#!/bin/bash

cd /app;
cp -f .env.example .env;
npm install;

pm2-runtime app.js;