.PHONY: build deploy

VERSION=$(shell grep version package.json | cut -d ':' -f2 | sed 's/[", ]//g')

MAJOR      = $(shell echo $(VERSION) | sed "s/^\([0-9]*\).*/\1/")
MINOR      = $(shell echo $(VERSION) | sed "s/[0-9]*\.\([0-9]*\).*/\1/")

BUILD      = $(shell git log --oneline | wc -l | sed -e "s/[ \t]*//g")
NEXT_MAJOR_VERSION = $(shell expr $(MAJOR) + 1).0.0-b$(BUILD)
NEXT_MINOR_VERSION = $(MAJOR).$(shell expr $(MINOR) + 1).0-b$(BUILD)
NEXT_PATCH_VERSION = $(MAJOR).$(MINOR).$(BUILD)

cleanup:
	find client -name *.css -exec rm -f {} \;

compile:
	yarn install
	yarn build-css
	CI=false yarn build

build:
	docker build --pull -f ./Dockerfile -t cbaus/bitcoind-api-fe:$(NEXT_PATCH_VERSION) ./
	docker push cbaus/bitcoind-api-fe:$(NEXT_PATCH_VERSION)
	docker tag cbaus/bitcoind-api-fe:$(NEXT_PATCH_VERSION) cbaus/bitcoind-api-fe:latest
	docker push cbaus/bitcoind-api-fe:latest

deploy:
	make cleanup
	make compile
	make build
