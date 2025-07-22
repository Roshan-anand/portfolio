VAR ?= 0.1.0
# to run build docker compose
build:
	@clear && \
	( docker image inspect portfolio >/dev/null 2>&1 && docker rmi portfolio || true ) && \
	docker build -t portfolio:$(VAR) .

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
