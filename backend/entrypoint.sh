#!/bin/sh
set -e

mkdir -p /app/backend/certs
echo "$AIVEN_CA_CERT" > /app/backend/certs/ca.pem
export NODE_EXTRA_CA_CERTS=/app/backend/certs/ca.pem

bunx prisma migrate deploy
bunx prisma generate
bun run dev






