FROM node:21

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . /app

ENV PORT=3002
ENV DATABASE=AI_Chat
ENV PASSWORD=mNTv4yxxXfekI5xe
ENV JWT_SECRET=EEYnagfbEDpB1axwhdqxtE6bBn3spUe1n4TbJn5IcDQuelBEb3EnwvCDDpf8dxQU
ENV JWT_REFRESH_SECRET=eyJhbGciOiJIUzI1NiJ9.ew0KICAic3ViIjogIjEyMzQ1Njc4OTAiLA0KICAibmFtZSI6ICJBbmlzaCBOYX
ENV JWT_EXPIRATION=1h
ENV JWT_REFRESH_EXPIRATION=7d
ENV FRONTEND_URL=https://protal-ke5m6qbmkq-as.a.run.app
ENV AI_SERVER_URL=https://ainbox-ke5m6qbmkq-as.a.run.app

EXPOSE 3002

CMD ["yarn", "dev"]