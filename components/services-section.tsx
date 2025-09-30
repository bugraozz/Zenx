

"use client"
import { useRef, useState, useEffect } from "react"
import type React from "react"

import { BackgroundText } from "./BackgroundText"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

export function ServicesSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showControls, setShowControls] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const pos = (e.clientX - rect.left) / rect.width
      videoRef.current.currentTime = pos * videoRef.current.duration
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100
      setProgress(progress)
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener("timeupdate", updateProgress)
    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)

    return () => {
      video.removeEventListener("timeupdate", updateProgress)
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
    }
  }, [])

  return (
    <section
      id="services"
      className="relative h-screen w-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center "
    >
      <BackgroundText text="LIFE" size="text-[50rem]" className="top-0/4" />
      <BackgroundText text="CLUB" size="text-[50rem]" className="top-2/4" />

      {/* Başlık */}
      <div className="text-center pt-4 pb-18 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-lora)] mb-6">ZENX GYM İLE ÖZEL ÇÖZÜMLER</h1>
      </div>

      {/* Video Card */}
      <div className="relative z-10 w-full max-w-6xl px-2">
        {/* Metalik Border */}
        <div className="relative rounded-2xl p-[2px] overflow-hidden">
          {/* Dönen border efekti */}
          <div className="absolute inset-0 animate-spin-slow bg-[conic-gradient(from_0deg,white,gray,white)]" />

          {/* İç kısım (video) */}
          <div
            className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-xl"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(isPlaying ? false : true)}
          >
            <video
              ref={videoRef}
              src="/gym_video.mp4"
              className="w-full h-[500px] object-cover object-center cursor-pointer"
              onClick={togglePlay}
            />

            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group z-20"
                aria-label="Videoyu oynat"
              >
                <Play className="w-10 h-10 text-white fill-white ml-1" />
              </button>
            )}

            <div
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
                showControls ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Progress Bar */}
              <div
                className="w-full h-1 bg-white/30 rounded-full mb-3 cursor-pointer group"
                onClick={handleProgressClick}
              >
                <div
                  className="h-full bg-white rounded-full transition-all group-hover:h-1.5"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
                    aria-label={isPlaying ? "Duraklat" : "Oynat"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white fill-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    )}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
                    aria-label={isMuted ? "Sesi aç" : "Sesi kapat"}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                  </button>
                </div>

                <button
                  onClick={toggleFullscreen}
                  className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-white/60 transition-all"
                  aria-label="Tam ekran"
                >
                  <Maximize className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
