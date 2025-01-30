use bidding_core::{BidDetails};
use host::run_zkvm;
use serde_json;


#[tauri::command]
fn handle_bid_details(details: BidDetails) -> String {
    let bid_details: String = run_zkvm(details);
    // let bid_details_string = serde_json::to_string(&bid_details).unwrap();
    format!("The bid from the zkvm is, {}", bid_details)
}



#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .setup(|app| {
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![handle_bid_details])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
