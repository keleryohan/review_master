export type WorkData = {
  id: number
  name: string
  created_at: string
  published_at: string
  description: string
  gender: string
  plataforms?: string[]
  game_mode?: string
  origin_country: string
}

export type WorkFilters = {
  gender: string
  name?: string
  order_by?: string
}

export type ReviewData = {
  id: string
  created_at: string
  note: number
  title: string
  description: string
  author: string
  work_id: number
}

export type ReviewFormData = Omit<ReviewData, 'created_at' | 'id'>
