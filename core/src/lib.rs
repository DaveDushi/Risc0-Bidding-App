use serde::{Deserialize, Serialize};
use k256::{
    ecdsa::{SigningKey, Signature, signature::Signer, VerifyingKey}, 
    EncodedPoint
};
use hex::{encode, decode};

#[derive(Clone, Debug, Deserialize, Eq, PartialEq, Serialize)]
pub struct Cert {
    pub balance: u32,
    pub date: String, // Keep as String or use chrono::NaiveDate
    // #[serde(serialize_with = "encoded_point_to_hex", deserialize_with = "hex_to_encoded_point")]
    // pub public_key: EncodedPoint,
}

#[derive(Clone, Debug, Deserialize, Eq, PartialEq, Serialize)]
pub struct BidDetails {
    pub bid: u32,
    pub cert: Cert, // Fixed: Changed from Cert to BankCert
    // #[serde(serialize_with = "signature_to_hex", deserialize_with = "hex_to_signature")]
    // pub bank_sig: Signature,
}

// /// Helper functions for `EncodedPoint`
// fn encoded_point_to_hex<S>(point: &EncodedPoint, serializer: S) -> Result<S::Ok, S::Error>
// where
//     S: serde::Serializer,
// {
//     serializer.serialize_str(&encode(point.as_bytes()))
// }

// fn hex_to_encoded_point<'de, D>(deserializer: D) -> Result<EncodedPoint, D::Error>
// where
//     D: serde::Deserializer<'de>,
// {
//     let s: String = Deserialize::deserialize(deserializer)?;
//     let bytes = decode(s).map_err(serde::de::Error::custom)?;
//     EncodedPoint::from_bytes(&bytes).map_err(serde::de::Error::custom)
// }

// /// Helper functions for `Signature`
// fn signature_to_hex<S>(sig: &Signature, serializer: S) -> Result<S::Ok, S::Error>
// where
//     S: serde::Serializer,
// {
//     serializer.serialize_str(&encode(sig.to_der().as_bytes()))
// }

// fn hex_to_signature<'de, D>(deserializer: D) -> Result<Signature, D::Error>
// where
//     D: serde::Deserializer<'de>,
// {
//     let s: String = Deserialize::deserialize(deserializer)?;
//     let bytes = decode(s).map_err(serde::de::Error::custom)?;
//     Signature::from_der(&bytes).map_err(serde::de::Error::custom)
// }
