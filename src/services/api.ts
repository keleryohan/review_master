import axios from 'axios'
import { WorkData, WorkGender, ReviewData, ReviewFormData } from '~/types'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 5000,
})

const getWorks = async (workGender: WorkGender): Promise<WorkData[]> => {
  return axiosInstance
    .get<WorkData[]>(`works/?gender=${workGender}`)
    .then(res => res.data)
    .catch(error => {
      if (error.response) window.alert('Erro ao obter os dados da obra!')
      return undefined
    })
}

const getWork = async (workId: number): Promise<WorkData> => {
  return axiosInstance
    .get<WorkData>(`works/${workId}`)
    .then(res => res.data)
    .catch(error => {
      if (error.response) window.alert('Erro ao obter a obra de ID ' + workId + '!')
      return undefined
    })
}

const getReviews = async (workId: number): Promise<ReviewData[]> => {
  return axiosInstance
    .get<ReviewData[]>(`reviews/?work_id=${workId}`)
    .then(res => res.data)
    .catch(error => {
      if (error.response) window.alert('Erro ao obter as reviews!')
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
      if (error.response) window.alert('Erro ao enviar a review!')
    })
}

export const api = {
  getWorks,
  getWork,
  getReviews,
  sendReview,
}

export default api
