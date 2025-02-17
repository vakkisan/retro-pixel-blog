import { Github, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import BlinkingCursor from "./BlinkingCursor"

export default function Contact() {
  return (
    <section className="py-16">
      <Card className="bg-gray-800 border-none pixelated-border">
        <CardContent className="p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-pixel mb-4">Have an idea?</h2>
            <Link
              href="/contact"
              className="text-3xl font-pixel text-green-400 hover:text-green-300 flex items-center justify-center gap-2"
            >
              Let's talk about it <BlinkingCursor />
            </Link>
            <div className="mt-12">
              <div className="mb-4">
                <a href="mailto:vniredi@gmail.com" className="font-mono text-muted-foreground hover:text-green-400">
                vniredi@gmail.com
                </a>
              </div>
              <div className="font-mono text-sm text-muted-foreground">
                10490 Little Patuxent Pkwy
                <br />
                Columbia, MD 21046
              </div>
              <div className="flex justify-center gap-6 mt-8">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ivinny/" },
                  { icon: Github, href: "https://github.com/vakkisan" },
                  { icon: Instagram, href: "https://www.instagram.com/i.vinny_/" },
                  { icon: Youtube, href: "#" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="p-2 bg-gray-700 rounded pixelated-border hover:bg-gray-600 transition-colors"
                  >
                    <social.icon className="w-6 h-6 text-green-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

