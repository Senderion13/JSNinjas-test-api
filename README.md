Superhero Nest.js Api

run these commands in prefered folder(in terminal):

```
git clone https://github.com/Senderion13/JSNinjas-test-api.git
cd JSNinjas-test-api
```

create .env file with these parameters:

```
NODE_ENV = development
DATABASE_URL=postgresql://root:root@postgres:5432/supers
TEST_DATABASE_URL=postgresql://user:password@host:port/database
```

after creation run these command(in terminal):

```
yarn
docker compose up
```
Attention: if api can't connect to database just restart api (in Docker)

open Docker Desktop or VS Code extension "Docker", open exec and run:

```
yarn migrate:dev
yarn seeds
```

After all of these steps you can go to web page
