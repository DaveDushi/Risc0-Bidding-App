use risc0_zkvm::guest::env;
use bidding_core::{Cert, BankDetails, BidDetails};
use k256::{ecdsa::{signature::Verifier, Signature, VerifyingKey}, EncodedPoint,};
use serde_json;

fn main() {
    // TODO: Implement your guest code here

    // read the input
    let input: BidDetails  = env::read();

    // check balance is greater than bid

    // verify banks sig on cert
    let verifying_key = VerifyingKey::from_encoded_point(&input.bank_details.bank_public_key).unwrap();

    let cert_string = serde_json::to_string(&input.bank_details.cert).unwrap();
    let cert_bytes: Vec<u8> = cert_string.into_bytes();

    let result = match verifying_key.verify(&cert_bytes, &input.bank_details.bank_sig) {
            Ok(()) => format!("The signature is authentic."),
            Err(e) => format!("The signature is not authentic: {:?}", e),
    };

    // verify signed challenge on challenge

    // verify date is today (maybe)

    // output: challenge, date, bid, banks publick key

    // write public output to the journal
    env::commit(&result);
}
