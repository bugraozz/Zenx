export function BackgroundWatermark() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12 animate-pulse">
        <div className="text-[20rem] font-bold font-sans text-muted-foreground/5 select-none whitespace-nowrap">
          ZENX GYM
        </div>
      </div>
      <div className="absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 -rotate-12 animate-pulse delay-1000">
        <div className="text-[12rem] font-bold font-sans text-muted-foreground/5 select-none whitespace-nowrap">
          LIFE CLUB
        </div>
      </div>
     

      {/* Sol üst SVG */}
<img
        src="/dumbell.svg"
        alt="Dumbbell Icon"
        className="absolute top-20 left-10 w-16 h-16 animate-bounce  delay-500"
      />

      {/* Sağ üst */}
      <img
        src="/running.svg"
        alt="Running Icon"
        className="absolute top-40 right-20 w-16 h-16 animate-bounce delay-1000"
      />


      {/* Sağ alt */}
      <img
        src="/mens.svg"
        alt="Boxing Icon"
        className="absolute bottom-20 right-10 w-18 h-18 animate-bounce delay-300"
      />

    </div>
  )
}
