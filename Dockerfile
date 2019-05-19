ARG NODE_VERSION
FROM node:${NODE_VERSION}

WORKDIR /app

COPY ./entrypoint.sh /
RUN chmod +x /entrypoint.sh

RUN npm install pm2 -g

ENTRYPOINT ["/entrypoint.sh"]

# CMD ["pm2-runtime", "app.js"]