'use client'

import Image from 'next/image'

export interface GalleryItem {
  id: string
  src: string
  alt: string
  width: number
  height: number
  title?: string
}

interface GalleryGridProps {
  items: GalleryItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative overflow-hidden rounded-lg bg-muted cursor-pointer flex items-center justify-center"
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="transition-transform duration-300 group-hover:scale-105"
            style={{ maxWidth: '100%', height: 'auto' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
            priority
          />
          {item.title && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
              <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
