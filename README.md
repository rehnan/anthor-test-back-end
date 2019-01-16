# Anthor Test - Back-end

1. Before starting the project, create a github repo and make an initial commit only with
a Readme file, answering the following questions:
2. How do you intend to approach this project? What technologies have you
decided to use for each part?
3. Do you find this to be particularly challenging in any of its requirements?
4. If you had a lot of time to do this, what would you do differently?

### Required dependencies
  - Npm v6.4.1
  - Node v10.11.0 or latest - Obs: you can to use nvm to control it (:
  - Docker v18.09.1
  - Docker-compose v1.17

### Framework node
This project uses Adonis (v4.1.0) api scaffold as backend framework.

### Application configuration  steps

1. `$ git clone https://github.com/rehnan/anthor-test-back-end.git && cd anthor-test-back-end` to download the app

1. `$ cp .env.example .env` to create application environment variables

1. `Modify only below variables in .env file (if necessary):`

        DB_PORT=<PORT>
        DB_USER=<USERNAME>
        DB_PASSWORD=<PASSWORD>
        DB_DATABASE=<DATABASE>
        
1. Run `npm install` to install all app dependencies

1. Run `docker volume create --name=anthor-data` to create app external volumes

1. Run `docker-compose up` to start a virtual machine in a docker containerized environment

1. Run seed database with docker command: `docker exec -it anthor_app_1 adonis seed`

1. So, you can then access the app in **localhost:3223**


### Tests
1. You can run tests with npm command: `npm run test`
