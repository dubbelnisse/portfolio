FROM iteamdev/node-webpack:node-4.2

COPY package.json /app/
WORKDIR /app

RUN npm install --production

COPY .babelrc ./
COPY gulpfile.js ./

COPY webpack.config.prod.js ./
COPY index.html ./
COPY server.js ./

COPY ./src ./src
RUN npm run -s build

EXPOSE 3000
CMD npm run -s start
