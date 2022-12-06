# INFO:
#		- Ensure docker demon is up and running
#		- Check which env vars are used

include .env
export


#
# db
#
postgres:
	docker run \
    	--name ${MANDS_DB_CONTAINER_NAME} \
    	-e POSTGRES_USER=${MANDS_DB_CONTAINER_USER} \
    	-e POSTGRES_PASSWORD=${MANDS_DB_CONTAINER_PASSWORD} \
    	-p ${MANDS_DB_PORT}:5432 \
    	-d postgres:15.0-alpine

postgresrm:
	docker container stop ${MANDS_DB_CONTAINER_NAME}
	docker container rm ${MANDS_DB_CONTAINER_NAME}

createdb:
	docker exec -it ${MANDS_DB_CONTAINER_NAME} createdb --username=${MANDS_DB_CONTAINER_USER} --owner=${MANDS_DB_CONTAINER_USER} ${MANDS_DB_NAME}

dropdb:
	docker exec -it ${MANDS_DB_CONTAINER_NAME} dropdb --username=${MANDS_DB_CONTAINER_USER} ${MANDS_DB_NAME}

migrateup:
	migrate -path ./server/src/db/migration -database "$(MANDS_DB_URL)" -verbose up

migratedown:
	migrate -path ./server/src/db/migration -database "$(MANDS_DB_URL)" -verbose down

#
# server
#
server-run:
	deno fmt server/ \
	&& deno check server/index.ts \
	&& deno run server/index.ts
