#!/bin/bash
read -p "Enter migration name: " MIGRATION_NAME
npx typeorm migration:create ./src/migrations/${MIGRATION_NAME}