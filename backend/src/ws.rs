use axum::{
    extract::ws::{Message, WebSocket, WebSocketUpgrade},
    response::IntoResponse,
};
use tokio::time::{sleep, Duration};
use tracing::info;

pub async fn ws_handler(ws: WebSocketUpgrade) -> IntoResponse {
    ws.on_upgrade(handle_socket)
}

async fn handle_socket(mut socket: WebSocket) {
    info!("Client connected to MetaScreenX live stream proxy");

    let mut tick: u64 = 0;
    loop {
        tick += 1;
        let payload = format!(r#"{{"type":"telemetry","tick":{},"lat":37.7749,"lng":-122.4194}}"#, tick);
        
        if socket.send(Message::Text(payload)).await.is_err() {
            info!("Client disconnected from stream");
            break;
        }

        sleep(Duration::from_millis(1000)).await;
    }
}
