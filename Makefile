all: clean build

clean:
	rm -rf public/index.css
	rm -rf public/index.js

build: clean
	npm run build
