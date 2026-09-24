# --- Stage 1: Frontend Build ---
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# --- Stage 2: Backend Build (Rust) ---
FROM rust:1.75 AS backend-builder
WORKDIR /app/backend
COPY backend/Cargo.toml ./
COPY backend/src ./src
RUN cargo build --release

# --- Stage 3: Production Runner ---
FROM debian:bookworm-slim
WORKDIR /app
COPY --from=backend-builder /app/backend/target/release/metascreenx-engine ./engine
COPY --from=frontend-builder /app/frontend/dist ./public
EXPOSE 8080
CMD ["./engine"]
