import './App.css'
import { Button } from './components/ui/button'
import { invoke } from '@tauri-apps/api/core';
import { useState } from 'react'

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
      <Button onClick={callRust}>Click me </Button>
      <p>{message}</p>
    </>
  )
}

export default App
