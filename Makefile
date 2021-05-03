.PHONY: init test clean build deploy

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

serve:
	cd src && ../node_modules/.bin/nodemon --watch ./ --exec node index.js  -e "html css js handlebars"

test:
	@echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	@echo ~Testing
	@echo Tests passed

clean:
	@echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	@echo ~Cleaning
	rm -rf ./dist/*

build:
	@echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	@echo ~Building
	@make clean
	mkdir -p ./dist
	# Generate CSS
	npm run css-build
	# Generate HTML
	npm run build
	# Move HTML
	mv ./index.html ./airchain.html ./dist/
	# Copy Font Awesome
	mkdir -p ./dist/fontawesome/css ./dist/fontawesome/webfonts
	cp ./node_modules/@fortawesome/fontawesome-free/css/fontawesome.css          ./dist/fontawesome/css
	cp ./node_modules/@fortawesome/fontawesome-free/css/brands.css               ./dist/fontawesome/css
	cp ./node_modules/@fortawesome/fontawesome-free/css/solid.css                ./dist/fontawesome/css
	cp ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2  ./dist/fontawesome/webfonts
	cp ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2 ./dist/fontawesome/webfonts
	# Copy static files to distribution directory
	cp -r ./src/static/* ./dist

deploy:
	@echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	@echo ~Deploying
	@make test
	@make clean
	@make build
	scp -r ./dist/* $(RENDER_DIR)
	git push origin master
