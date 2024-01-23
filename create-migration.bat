@echo off
set /p MIGRATION_NAME=Enter migration name:
npx typeorm migration:create ./src/migrations/%MIGRATION_NAME%
