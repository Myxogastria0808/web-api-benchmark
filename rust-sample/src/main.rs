use axum::{extract::Path, http::Method, routing::get, Json, Router};
use tower_http::cors::{Any, CorsLayer};

#[tokio::main(flavor = "current_thread")]
async fn main() {
    let _ = api().await;
}

async fn api() -> Result<(), Box<dyn std::error::Error>> {
    //CORS
    let cors: CorsLayer = CorsLayer::new()
        .allow_methods([Method::GET])
        .allow_origin(Any);
    //Router
    let app = Router::new().route("/:init", get(my_handler)).layer(cors);
    //Server
    let listener = tokio::net::TcpListener::bind("127.0.0.1:5000")
        .await
        .unwrap();
    println!("listening on {}", listener.local_addr().unwrap());
    axum::serve(listener, app).await.unwrap();
    Ok(())
}

//handler
async fn my_handler(Path(init): Path<i64>) -> Json<serde_json::Value> {
    let mut result: i64 = init;
    for i in 1..100000001 {
        result += i;
    }
    Json(serde_json::json!(vec![result.to_string()]))
}
