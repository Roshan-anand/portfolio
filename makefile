# to run build docker compose
build:
	@clear && \
	docker compose build

# to run production test docker compose
up :
	@clear && \
	docker compose up -d

# to stop and remove containers
down :
	@clear && \
	docker compose down

# to deploy stack
deploy :
	@clear && \
	docker stack deploy -c compose.yaml portfolio
