import axios from 'axios'
import { WorkData, ReviewData, ReviewFormData, WorkFilters } from '~/types'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 5000,
})

const getWorks = async (props: WorkFilters): Promise<WorkData[]> => {
  let link = `works/?gender=${props.gender}`

  if (props.order_by) link += `&&order_by=${props.order_by}`
  if (props.name) link += `&&name=${props.name}`

  return axiosInstance
    .get<WorkData[]>(link)
    .then(res => res.data)
    .catch(error => {
      if (error.response) {
        window.alert(error.response.data.message)
      } else {
        window.alert('Erro ao obter as obras!')
      }
      return []
    })
}

const getWork = async (workId: number): Promise<WorkData> => {
  return axiosInstance
    .get<WorkData>(`works/${workId}`)
    .then(res => res.data)
    .catch(error => {
      if (error.response) {
        window.alert(error.response.data.message)
      } else {
        window.alert('Erro ao obter a obra de ID ' + workId + '!')
      }
      return undefined
    })
}

const getReviews = async (workId: number): Promise<ReviewData[]> => {
  return axiosInstance
    .get<ReviewData[]>(`reviews/?work_id=${workId}`)
    .then(res => res.data)
    .catch(error => {
      if (error.response) {
        window.alert(error.response.data.message)
      } else {
        window.alert('Erro ao obter as reviews!')
      }
      return undefined
    })
}

const sendReview = async (reviewFormData: ReviewFormData) => {
  return axiosInstance
    .post('reviews', reviewFormData)
    .then(res => {
      window.alert('Review enviada!')
      return res.data
    })
    .catch(error => {
      if (error.response) {
        window.alert(error.response.data.message)
      } else {
        window.alert('Erro ao enviar a review!')
      }
    })
}

const deleteReview = async (reviewId: number) => {
  return axiosInstance
    .delete(`reviews/${reviewId}`)
    .then(res => {
      window.alert('Review deletada!')
      return res.data
    })
    .catch(error => {
      if (error.response) {
        window.alert(error.response.data.message)
      } else {
        window.alert('Erro ao deletar review!')
      }
    })
}

const createUser = async (name: string, email: string, password: string) => {
  return axiosInstance
    .post(`users`, { name, email, password })
    .then(res => res.data)
    .catch(error => {
      if (error.response) {
        window.alert(error.response.data.message)
      } else {
        window.alert('Erro ao criar usuário!')
      }
    })
}

const loginUser = async (email: string, password: string) => {
  return axiosInstance
    .post(`users/session`, { email, password })
    .then(res => {
      localStorage.setItems('token', res.data.token)
      return res.status
    })
    .catch(error => {
      if (error.response) {
        window.alert(error.response.data.message)
      } else {
        window.alert('Erro ao fazer login!')
      }
      return null
    })
}

export const api = {
  getWorks,
  getWork,
  getReviews,
  sendReview,
  deleteReview,
  createUser,
  loginUser,
}

export default api
