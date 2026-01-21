export function Logo({ className = "", sizeClass = "h-10 md:h-12" }: { className?: string; sizeClass?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/NexoraRojoPNG.png"
        alt="Nexora"
        className={`${sizeClass} w-auto object-contain`}
      />
    </div>
  )
}
