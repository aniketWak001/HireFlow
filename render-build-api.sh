#!/bin/bash
set -e

echo "Installing root dependencies..."
npm install

echo "Generating Prisma client..."
npx prisma generate

echo "Installing API dependencies..."
cd api
npm install

echo "Building API..."
npm run build