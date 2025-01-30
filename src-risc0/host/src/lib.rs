use methods::{
    BIDDING_GUEST_ELF, BIDDING_GUEST_ID
};
use risc0_zkvm::{default_prover, ExecutorEnv};
use bidding_core::{Cert, BidDetails};
use k256::{
    ecdsa::{SigningKey, Signature, signature::Signer, VerifyingKey}, 
    EncodedPoint
};

pub fn run_zkvm(details: BidDetails) -> String {
    // For example:
    let input: BidDetails = details;
    let env = ExecutorEnv::builder()
        .write(&input)
        .unwrap()
        .build()
        .unwrap();

    // Obtain the default prover.
    let prover = default_prover();

    // Proof information by proving the specified ELF binary.
    // This struct contains the receipt along with statistics about execution of the guest
    let prove_info = prover
        .prove(env, BIDDING_GUEST_ELF)
        .unwrap();

    // extract the receipt.
    let receipt = prove_info.receipt;

    // TODO: Implement code for retrieving receipt journal here.

    // For example:
    let output: String = receipt.journal.decode().unwrap();
    
    output
}
