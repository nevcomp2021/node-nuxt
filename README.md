#Node Sever:

npm i

npm start

#Nuxt:

npm i

npm run dev

#Postgres:

Create table:

CREATE TABLE public.users ( id integer NOT NULL, name character varying COLLATE pg_catalog."default" NOT NULL, CONSTRAINT users_pkey PRIMARY KEY (id) )

Insert sample data: INSERT INTO users(id, name) VALUES(1, 'Test1');

Open the Nuxt url to see the project
