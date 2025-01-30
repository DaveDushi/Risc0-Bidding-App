import './App.css'
import { invoke } from '@tauri-apps/api/core';
import { useState } from 'react'
import AuctionPage from './components/auction-page'
import { Button } from './components/ui/button';


// mock data
const date = new Date()

const bankCert = {
	balance: 1000,
	date: "2025-01-30", 
	client_public_key: "04d3a0b0c7207006c2f258e4ed59230a530e6fbecb687bf629d1d074701ad24ab2ca13e7749be39d1a8b3812cdae94520c92c40b0c68445ec103fe99e47f73e2a5"
}

const bankDetails = {
	cert: bankCert,
	bank_sig: "437496313c2182d9b1c37471e2394d9254a753c705b353801c39f0f5a922c4af0a0ac0d8e19041afff9dfeb1c639906d9199329633e49e88c5702b6e4a8883b3",
	bank_public_key: "044e3b81af9c2234cad09d679ce6035ed1392347ce64ce405f5dcd36228a25de6e47fd35c4215d1edf53e6f83de344615ce719bdb0fd878f6ed76f06dd277956de"
}

const bidDetails = {
	bank_details: bankDetails,
	bid: 100,
	challenge: "",
	signed_challenge: "BD13AC123219902DAC8154CF560A4DF5F990242EC040BC34E60FB5C96B1E776A72159ED282BD9B1B8F609DC58E8AD2E90352240FF53A9FBC448D22D67086B157"
}

function App() {
const [message, setMessage] = useState("")

const callRust = async () => {
	

	// const cert = {
	// 	balance: 1000,
	// 	date: date.toLocaleString(), 
	// 	public_key: "02a34c4f1c58b34ed0b2568b2e3eb9d1d50faeef97b307d5a9f27b69f28d91b37d" //ensure that the public_key field contains a valid SEC1-encoded point for the secp256k1 curve
	// }
	
	// const details = {
	// 	bid: 100,
	// 	cert,
	// 	bank_sig: "BD13AC123219902DAC8154CF560A4DF5F990242EC040BC34E60FB5C96B1E776A72159ED282BD9B1B8F609DC58E8AD2E90352240FF53A9FBC448D22D67086B157" // hexadecimal string representation of the DER-encoded ECDSA signature
	// }
	
	setMessage(await invoke('handle_bid_details', { details: bidDetails }))
}


  return (
    <>
      <Button onClick={callRust}>Click me</Button>
	  <p>{message}</p>
    </>
  )
}

export default App
