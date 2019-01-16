#!/usr/bin/env bash
echo "Generating mongo credentials... (:"
mongo admin --eval "db.createUser({user: '${DB_USER}', pwd: '${DB_PASSWORD}', roles: [ 'readWrite', 'dbAdmin' ]}); db.grantRolesToUser('${DB_USER}', [{ role: 'dbAdmin', db: '${DB_DATABASE}' }]);"
