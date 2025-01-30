use risc0_zkvm::guest::env;
use bidding_core::{Cert, BidDetails};
use k256::{ecdsa::{signature::Verifier, Signature, VerifyingKey}, EncodedPoint,};

fn main() {
    // TODO: Implement your guest code here

    // read the input
    let input: BidDetails  = env::read();

    let verifying_key = VerifyingKey::from_encoded_point(&input.cert.public_key).unwrap();
    
    let result = verifying_key.verify(&input.cert, &input.bank_sig) {
            Ok(()) => format!("The signature is authentic."),
            Err(e) => format!("The signature is not authentic: {:?}", e),
    };

    // TODO: do something with the input

    // write public output to the journal
    env::commit(&result);
}
