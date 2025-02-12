"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ThumbsUp, MessageCircle, Download } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function PhotoGalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [comment, setComment] = useState("")

  // Mock data - replace with actual data from your database
  const images = [
    {
      id: 1,
      url: "/placeholder.svg",
      title: "Event Photo 1",
      uploadedBy: "John Doe",
      uploadDate: "2024-02-12",
      downloads: 15,
      likes: 32,
      comments: [
        { id: 1, user: "Alice", text: "Great photo!" },
        { id: 2, user: "Bob", text: "Love the composition!" },
      ],
    },
    // Add more mock images
  ]

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setIsDialogOpen(true)
  }

  const handleLike = (imageId) => {
    // Implement like functionality
    console.log(`Liking image with id: ${imageId}`)
  }

  const handleDownload = (imageId) => {
    // Implement download functionality
    console.log(`Downloading image with id: ${imageId}`)
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    // Implement comment submission
    console.log(`Submitting comment for image ${selectedImage.id}: ${comment}`)
    setComment("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Photo Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <Card key={image.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="relative group aspect-square rounded-full overflow-hidden mb-4">
                <Image
                  src={image.url || "/placeholder.svg"}
                  alt={image.title}
                  layout="fill"
                  objectFit="cover"
                  className="cursor-pointer transition-transform duration-300 group-hover:scale-110"
                  onClick={() => handleImageClick(image)}
                />
              </div>
              <h3 className="font-semibold truncate">{image.title}</h3>
              <p className="text-sm text-muted-foreground truncate">By {image.uploadedBy}</p>
              <div className="flex items-center justify-between mt-2">
                <Button variant="ghost" size="sm" onClick={() => handleLike(image.id)}>
                  <ThumbsUp className="h-4 w-4 mr-1" /> {image.likes}
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleImageClick(image)}>
                  <MessageCircle className="h-4 w-4 mr-1" /> {image.comments.length}
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDownload(image.id)}>
                  <Download className="h-4 w-4 mr-1" /> {image.downloads}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedImage && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedImage.title}</DialogTitle>
              <DialogDescription>
                By {selectedImage.uploadedBy} on {selectedImage.uploadDate}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.url || "/placeholder.svg"}
                  alt={selectedImage.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-wrap justify-between items-center gap-2">
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" onClick={() => handleLike(selectedImage.id)}>
                    <ThumbsUp className="h-4 w-4 mr-1" /> {selectedImage.likes} Likes
                  </Button>
                  <Button variant="outline" onClick={() => handleDownload(selectedImage.id)}>
                    <Download className="h-4 w-4 mr-1" /> {selectedImage.downloads} Downloads
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Comments</h4>
                <div className="max-h-[200px] overflow-y-auto space-y-2">
                  {selectedImage.comments.map((comment) => (
                    <div key={comment.id} className="bg-muted p-2 rounded-md">
                      <p className="font-semibold">{comment.user}</p>
                      <p>{comment.text}</p>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleCommentSubmit} className="flex flex-col sm:flex-row gap-2">
                  <Input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-grow"
                  />
                  <Button type="submit">Post</Button>
                </form>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

