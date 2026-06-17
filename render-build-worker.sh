#!/bin/bash
set -e

echo "Installing root dependencies..."
npm install

echo "Generating Prisma client..."
npx prisma generate

echo "Installing worker dependencies..."
cd worker
npm install

echo "Building worker..."
npm run build