import type { Review } from "./review"

export interface Project {
  name: string
  description: string
  images: string[]
  banner?: string
  url?: string
  reviews?: Review[]
}

