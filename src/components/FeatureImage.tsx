'use client'
import Image from 'next/image'
import { useEffect} from 'react'

type FeatureImageProps = {
  id: string
  src: string
  title: string
  description: string
  className?: string
  activeCardId: string | null
  setActiveCardId: (id: string | null) => void
  isMobile: boolean
}

export default function FeatureImage({
  id,
  src,
  title,
  description,
  className = '',
  activeCardId,
  setActiveCardId,
  isMobile
}: FeatureImageProps) {
  const isActive = activeCardId === id

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.stopPropagation()
      setActiveCardId(isActive ? null : id)
    }
  }

  // Close card if clicking anywhere else on mobile
  useEffect(() => {
    if (!isMobile) return
    const close = () => setActiveCardId(null)
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [isMobile])

  return (
    <div
      className={`relative overflow-hidden ${className} w-full h-full group`}
      onClick={handleClick}
    >
      {/* Image */}
      <Image
        src={src}
        alt={title}
        fill
        className={`object-cover w-full h-full transition-transform duration-500 ${!isMobile ? 'group-hover:scale-105' : ''}`}
      />

      {/* Overlay */}
      <div
        className={`
          absolute inset-0 bg-neutral-800 bg-opacity-60
          transition-transform duration-500 ease-in-out
          ${isMobile ? (isActive ? 'translate-x-0' : 'translate-x-full') : 'group-hover:translate-x-0 translate-x-full'}
        `}
      />

      <div className="absolute inset-0 flex items-center justify-center px-4 transition-all duration-500 pointer-events-none">
  <div className="flex flex-col items-center justify-center text-center">
    <h3
  className={`
    text-3xl md:text-5xl font-extrabold z-10
    transition-all duration-500 ease-in-out
    ${isMobile ? (isActive ? '-translate-y-15 text-profil' : 'translate-y-0') : 'group-hover:-translate-y-20 group-hover:text-profil text-white'}
  `}
>
  {title}
</h3>

<p
  className={`
    text-sm md:text-lg font-bold z-10 mt-4 px-4
    absolute left-0 right-0 mx-auto text-center
    transition-opacity duration-500 ease-in-out
    ${isMobile ? (isActive ? 'opacity-100 text-white' : 'opacity-0') : 'group-hover:opacity-100 opacity-0 text-white'}
  `}
>
  {description}
</p>

  </div>
</div>
    </div>
  )
}
