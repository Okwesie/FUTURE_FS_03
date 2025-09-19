export function NikeLogo({ className = "w-12 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Nike Swoosh">
      <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.456 0-2.679-.616-2.679-2.463 0-.924.617-1.848 1.456-2.156L24 7.8z" />
    </svg>
  )
}
