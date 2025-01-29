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
		// public_key: "04a34c4f1c58b34ed0b2568b2e3eb9d1d50faeef97b307d5a9f27b69f28d91b37dd0b4d3b2e5782fb699c2d5ad1bc4f47d04846ff6f0033b9a4d96eb3927fd42c3"
		
	}
	
	const details = {
		bid: 100,
		cert,
		// bank_sig: "fa3b2c4e9b8a6f7d2d5a8e3c6b9f4e1d7c3a2b1f0d9e8c7b6a5d4c3b2a190876d1e2f3c4b5a697887766554433221100ffeeccbb99887766554433221100ffdd"
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
