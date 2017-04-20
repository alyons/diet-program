FROM node:6.10.2

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY package.json npm-shrinkwrap.json $HOME/diet-program/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/diet-program
RUN npm install

CMD ["npm", "run", "dev"]
