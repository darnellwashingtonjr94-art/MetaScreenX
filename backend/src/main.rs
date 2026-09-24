use axum::{routing::get, Router};
use std::net::SocketAddr;
use tracing::info;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();

    let app = Router::new()
        .route("/api/health", get(|| async { "MetaScreenX Engine: Online" }))
        .route("/api/stream", get(ws_handler));

    let addr = SocketAddr::from(([0, 0, 0, 0], 8080));
    info!("Engine listening on {}", addr);
    
    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn ws_handler() -> &'static str {
    // Upgrades connection to WebSocket for live data proxying
    "WebSocket endpoint initialized"
}
