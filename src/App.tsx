import './App.css'
import { invoke } from '@tauri-apps/api/core';
import { useState } from 'react'
import AuctionPage from './components/auction-page'

function App() {
const [message, setMessage] = useState("")

const callRust = async () => {
	const cert = {
		balance: 1000,
		date: "today"
	}
	
	const details = {
		bid: 100,
		cert
	}
	
	setMessage(await invoke('handle_bid_details', { details }))
}


  return (
    <>
      <AuctionPage />
    </>
  )
}

export default App
