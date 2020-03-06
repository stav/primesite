.PHONY: init test clean deploy

REPO_NAME    = dev.primesite
REPO_URI    := stav@cowboy:/srv/git/$(REPO_NAME).git
REPO_REMOTE := $(shell git remote)
RENDER_DIR  := cowboy:/srv/dev.primesite/doc

init:
	@echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	@echo ~Initializing
ifeq ($(strip $(REPO_REMOTE)),)
	@echo Remote is empty
else
	-git remote rm origin
endif
	git remote add origin $(REPO_URI)
	git fetch
	git push --set-upstream origin master
# 	git branch --set-upstream-to=origin/master master

test:
	@echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	@echo ~Testing
	@echo Tests passed

clean:
	@echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	@echo ~Cleaning

deploy:
	@echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	@echo ~Deploying
	@make test
	@make clean
	scp -r ./src/* $(RENDER_DIR)
	git push origin master
