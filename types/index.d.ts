import type { ParsedContent } from '@nuxt/content'
import type { Badge } from '#ui/types'

export interface BlogPost extends ParsedContent {
  title: string
  description: string
  date: string
  image?: HTMLImageElement
  badge?: Badge
  links?: Link[]
}

export interface Member extends ParsedContent {
  name: string
  description: string
  image?: HTMLImageElement
  links?: Link[]
}