import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface PortfolioItem {
  title: string
  image: string
  company: string
  description: string
}

interface PortfolioItemModalProps {
  item: PortfolioItem | null
  onClose: () => void
}

export default function PortfolioItemModal({ item, onClose }: PortfolioItemModalProps) {
  if (!item) return null

  return (
    <Dialog open={!!item} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] bg-gray-800 border-none pixelated-border">
        <DialogHeader>
          <DialogTitle className="font-pixel text-xl text-green-400">{item.title}</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-lg pixelated-border"
          />
          <div className="mt-4">
            <p className="font-mono text-sm text-muted-foreground mb-2">{item.company}</p>
            <p className="font-mono text-muted-foreground">{item.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

