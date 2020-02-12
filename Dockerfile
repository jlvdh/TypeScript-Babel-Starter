FROM node:12.15.0
WORKDIR /app
EXPOSE 4000
CMD ["npm", "run", "start:dev"]