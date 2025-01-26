use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Deserialize, Eq, PartialEq, Serialize)]
pub struct Cert {
    pub balance: u32,
    pub date: String, // Assuming date is a string; you can change this to a date type if needed
}

#[derive(Clone, Debug, Deserialize, Eq, PartialEq, Serialize)]
pub struct BidDetails {
    pub bid: u32,
    pub cert: Cert,
}

