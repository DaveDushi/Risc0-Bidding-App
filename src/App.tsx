import './App.css'
import { invoke } from '@tauri-apps/api/core';
import { useState } from 'react'
import AuctionPage from './components/auction-page'
import { Button } from './components/ui/button';

function App() {
const [message, setMessage] = useState("")

const callRust = async () => {
	const date = new Date()

	const cert = {
		balance: 1000,
		date: date.toLocaleString(), 
		public_key: "02a34c4f1c58b34ed0b2568b2e3eb9d1d50faeef97b307d5a9f27b69f28d91b37d" //ensure that the public_key field contains a valid SEC1-encoded point for the secp256k1 curve
	}
	
	const details = {
		bid: 100,
		cert,
		bank_sig: "" // hexadecimal string representation of the DER-encoded ECDSA signature
	}
	
	setMessage(await invoke('handle_bid_details', { details }))
}


  return (
    <>
      <Button onClick={callRust}>Click me</Button>
	  <p>{message}</p>
    </>
  )
}

export default App
