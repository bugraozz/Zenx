"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Star, Users, Play } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { motion } from "framer-motion"
import { useState } from "react"

export function HeroSection() {
  const [open, setOpen] = useState(false)

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center relative overflow-hidden z-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/white.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
         
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}   
            animate={{ opacity: 1, x: 0 }}      
            transition={{ duration: 1, ease: "easeOut" }} 
          >
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="text-primary font-semibold px-6 py-3 text-sm bg-primary/10 border-primary/20 shadow-lg"
              >
                <Star className="w-4 h-4 mr-2 fill-amber-400 text-yellow-500" />
                Premium Fitness Experience
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold font-sans leading-tight drop-shadow-lg">
                <span className="text-primary bg-gradient-to-r from-primary to-primary/100 bg-clip-text text-transparent">
                  GÜÇLÜ
                </span>
                <br />
                <span className="text-accent bg-gradient-to-r from-primary to-primary/10 bg-clip-text text-transparent">
                  YAŞAM
                </span>
                <br />
                <span className="text-foreground">BAŞLAR</span>
              </h1>

              <p className="text-lg text-white font-serif leading-relaxed max-w-lg bg-black/40 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                ZENX GYM Life Club'da modern ekipmanlar, uzman antrenörler ve motivasyonel ortamla fitness hedeflerinize
                ulaşın.
              </p>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 text-lg bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Turu İzle
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-black border-0 shadow-2xl">
                <VisuallyHidden>
                  <DialogTitle>Tanıtım Videosu</DialogTitle>
                </VisuallyHidden>
                <div className="relative w-full h-0 pb-[60.25%]">
                  <video
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="/gym_video.mp4"
                    controls
                    autoPlay
                  />
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
