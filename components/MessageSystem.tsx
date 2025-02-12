"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function MessageSystem() {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    // Set up WebSocket connection here
    // Listen for incoming messages and update the messages state
  }, [])

  const sendMessage = () => {
    // Send message via WebSocket
    console.log("Sending message:", newMessage)
    setNewMessage("")
  }

  return (
    <div className="border rounded-lg p-4">
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow mr-2"
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  )
}

