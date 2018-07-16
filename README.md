# Skill Tree

## Getting started on SSH: Clone this repository

```sh
git clone git@gitlabe1.ext.net.nokia.com:OTAS_TDT/SkillTree.git
```

## Getting started on HTTPS: Clone this repository

```sh
git clone https://gitlabe1.ext.net.nokia.com/OTAS_TDT/SkillTree.git
```

## Configure the project

### Fields

* **ORM** : This one is the all ORM configuartion, in default we use SQLite 3 database, you find more info right [here](https://github.com/typeorm/typeorm/blob/master/docs/using-ormconfig.md)

* **local** : This one is our authentication system configuration, you find more info right [here](https://github.com/jaredhanson/passport-local#parameters)

* **webserver** : This one is just contain our webserver's port

* **test** : This one is for the tests, so this is optional, for production and developemtn build, only required for test build.

* **sessionstore** : This one is our session storage settings, in default we use in-memory database, but you can find more options [here](https://github.com/adrai/sessionstore)

## Before you build the project, you need SSL key and SSL Cert

### If you not have SSL Key and Cert and you not have a public domain for this system

```sh
./genkey.sh
```

### If you not have SSL Key and Cert but you have a public domain for this system

[Generate a key with Let's Encrypt](https://letsencrypt.org/getting-started)

### If you have SSL Key and Cert

```sh
cp {originalKeyPath} ${PWD}/ssl.key
cp {originalCertPath} ${PWD}/ssl.crt
```

## Before you build any code, you have to install all the packages with yarn or npm

```sh
yarn
```

OR

```sh
npm install
```

## Build project [DEVELOPMENT]

### 1. Step: Compile TSX code (skill tree drawer code)

```sh
yarn bundle:debug
```

OR

```sh
npm run bundle:debug
```

### 2. Step: Modify Profile content EJS to dev mod

```html
<div id="skilltree"></div>
<!-- Production Dependencies -->
<!-- <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script> -->
<!-- <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script> -->

<!-- Development Dependencies -->
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

<!-- Main -->
<script src="static/bundle.js"></script>
```

### 3. Step: Compile Typescript to Javascript in debug mode

```sh
npm run build
```

### 4. Step: Open a new terminal or a new command prompt and run the debug/index.js

```sh
npm run debug
```

## Build project [TEST]

### 1. Step: Host a selenium server for the test

### If you use docker, but you should because this is the recommend way

```sh
sudo docker run -d -p 4444:4444 --net=host -h 127.0.0.1 --shm-size=2g selenium/standalone-chrome:3.12.0-cobalt
```

### If you not use docker, you can find the jar file [here](http://selenium-release.storage.googleapis.com/index.html), and also you have to install the chrome driver

```sh
java -jar selenium-server-standalone-x.x.x.jar
```

### 2. Step: Modify Profile content EJS to dev mod

```html
<div id="skilltree"></div>
<!-- Production Dependencies -->
<!-- <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script> -->
<!-- <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script> -->

<!-- Development Dependencies -->
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

<!-- Main -->
<script src="static/bundle.js"></script>
```

### 3. Step: Open a new terminal or a new command prompt and run tests

```sh
npm test
```

## Build project [PRODUCTION]

### 1. Step: Build docker image

```sh
docker build -t skilltree_image_v103 .
```

### 2. Step: Run docker image with exposed port

```sh
docker run -d -p 443:443 -p 80:80 -v ${PWD}/db:/usr/src/app/db --name skilltree_container_v103 skilltree_image_v103
```