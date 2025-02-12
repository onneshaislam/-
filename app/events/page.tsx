import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
      <div className="grid gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="flex-shrink-0">
              <Image src="/placeholder.svg" alt={`Event ${i}`} width={100} height={100} className="rounded-lg" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Event Title {i}</h3>
              <p className="text-gray-500 dark:text-gray-400">Date: June {15 + i}, 2023</p>
              <p className="text-gray-500 dark:text-gray-400">Location: City, Country</p>
              <Button className="mt-2">Register</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

