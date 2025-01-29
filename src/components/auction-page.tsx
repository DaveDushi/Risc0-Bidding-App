import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AuctionPage() {
  const [currentBid, setCurrentBid] = useState(10)
  const [bidAmount, setBidAmount] = useState("")
  const [error, setError] = useState("")

  const handleBid = (e: React.FormEvent) => {
    e.preventDefault()
    const amount = Number.parseFloat(bidAmount)

    if (isNaN(amount)) {
      setError("Please enter a valid number")
      return
    }

    if (amount <= currentBid) {
      setError("Bid must be higher than current bid")
      return
    }

    setCurrentBid(amount)
    setBidAmount("")
    setError("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100">
          <Image src="/placeholder.svg" alt="Item for sale" fill className="object-cover" />
        </div>

        <div className="space-y-2">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="font-medium">Current Bid: ${currentBid.toFixed(2)}</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="font-medium">Time left: 2 days</p>
          </div>
        </div>

        <form onSubmit={handleBid} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="bid" className="block text-sm font-medium">
              Enter Bid:
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
              <Input
                id="bid"
                type="number"
                step="0.01"
                min={currentBid + 0.01}
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                className="pl-6"
                placeholder="Enter your bid amount"
              />
            </div>
            {error && (
              <p className="text-sm text-red-500" role="alert">
                {error}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Place Bid
          </Button>
        </form>
      </Card>
    </div>
  )
}

