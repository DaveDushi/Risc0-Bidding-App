use serde::{Deserialize, Serialize};
use k256::{
    ecdsa::{Signature}, 
    EncodedPoint
};


#[derive(Clone, Debug, Deserialize, Eq, PartialEq, Serialize)]
pub struct Cert {
    pub balance: u32,
    pub date: String, // Keep as String maybe change later prob not
    pub public_key: EncodedPoint,
}

#[derive(Clone, Debug, Deserialize, Eq, PartialEq, Serialize)]
pub struct BidDetails {
    pub bid: u32,
    pub cert: Cert,
    // pub bank_sig: Signature,
}
