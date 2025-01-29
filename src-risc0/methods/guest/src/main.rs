use risc0_zkvm::guest::env;
use bidding_core::{Cert, BidDetails};


fn main() {
    // TODO: Implement your guest code here

    // read the input
    let input: BidDetails  = env::read();

    // TODO: do something with the input

    // write public output to the journal
    env::commit(&input);
}
