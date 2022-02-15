export type WorkData = {
  id: number
  title: string
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
  title?: string
  order_by?: string
}

export type ReviewData = {
  id: string
  created_at: string
  liked: boolean
  work_id: number
}

export type ReviewFormData = Omit<ReviewData, 'created_at' | 'id'>

export type AuthMode = 'login' | 'register'
