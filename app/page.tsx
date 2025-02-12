import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock user data - replace with actual data fetching logic
const userStats = {
  totalUsers: 100,
  onlineUsers: 25,
  offlineUsers: 75,
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to My Portfolio Business
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Showcasing my work, events, and connecting with clients.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/photos">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* User Statistics */}
      <section className="w-full py-12 bg-gray-100 dark:bg-gray-800 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8">User Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{userStats.totalUsers}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Online Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{userStats.onlineUsers}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Offline Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{userStats.offlineUsers}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="w-full py-12 md:py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8">Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative w-full aspect-square rounded-full overflow-hidden">
              <Image src="/placeholder.svg" alt="Gallery Image 1" layout="fill" objectFit="cover" />
            </div>
            <div className="relative w-full aspect-square rounded-full overflow-hidden">
              <Image src="/placeholder.svg" alt="Gallery Image 2" layout="fill" objectFit="cover" />
            </div>
            <div className="relative w-full aspect-square rounded-full overflow-hidden">
              <Image src="/placeholder.svg" alt="Gallery Image 3" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/photos">View All Photos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8">Upcoming Events</h2>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
              <div className="flex-shrink-0 w-24 h-24 relative rounded-full overflow-hidden">
                <Image src="/placeholder.svg" alt="Event 1" layout="fill" objectFit="cover" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold">Event Title</h3>
                <p className="text-gray-500 dark:text-gray-400">Date: June 15, 2023</p>
                <p className="text-gray-500 dark:text-gray-400">Location: City, Country</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="w-full py-12 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="relative w-64 h-64 mx-auto lg:w-80 lg:h-80 rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0070.JPG-MvIEhBEVlYYXNpYRFWnHT5tlBUjwB9.jpeg"
                alt="রিদুওয়ান মীর"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">About Me</h2>
              <p className="text-gray-500 dark:text-gray-400">
                I'm a passionate photographer and event organizer with over 10 years of experience. My work focuses on
                capturing the beauty of nature and the essence of human emotions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/bio">Read Full Bio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Map */}
      <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8">Contact Me</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  ></textarea>
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
            <div className="h-[300px] lg:h-[400px] rounded-lg overflow-hidden mt-6 lg:mt-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59097.60762291621!2d92.00915713124998!3d22.16249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad6a188414e62b%3A0x8e64c326121d9753!2sChandanaish!5e0!3m2!1sen!2sbd!4v1686594120037!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

