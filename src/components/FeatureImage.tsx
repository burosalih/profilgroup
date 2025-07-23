'use client'
import Image from 'next/image'

type FeatureImageProps = {
  src: string
  title: string
  description: string
  className?: string
}

export default function FeatureImage({ src, title, description, className = '' }: FeatureImageProps) {
  return (
    <div className={`relative group overflow-hidden ${className} w-full h-full`}>
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-neutral-800 bg-opacity-60 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h3 className="text-3xl md:text-5xl font-extrabold text-white z-10 text-center px-4 group-hover:text-profil transition-colors duration-600">
          {title}
        </h3>
        <h2 className='text-lg md:text-xl font-bold text-white z-10 text-center mt-2 px-4'>
          {description}
        </h2>
      </div>
    </div>
  )
}
