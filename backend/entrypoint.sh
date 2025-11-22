set -e

mkdir -p /app/certs
echo "$AIVEN_CA_CERT" > /app/certs/ca.pem
export NODE_EXTRA_CA_CERTS=/app/certs/ca.pem

bunx prisma migrate deploy
bunx prisma generate
bun run dev






