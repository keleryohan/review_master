import { useRouter } from 'next/router'
import React from 'react'
import api from '~/services/api'
import { ReviewData } from '~/types'
import styles from './styles.module.css'

const WorkReviews = ({ reviews }: { reviews: ReviewData[] }) => {
  const router = useRouter()

  const handleDeleteReview = React.useCallback(
    (id: number) => {
      api.deleteReview(id)
      router.reload()
    },
    [router]
  )

  return (
    <div className={styles.mainContainer}>
      {reviews.map((review, i) => {
        return (
          <div key={i} className={styles.review}>
            <div className={styles.reviewHeader}>
              <p>Título: {review.title}</p>
              <p>{review.author}</p>
            </div>
            <div>
              <p>Description: {review.description}</p>
            </div>
            <div>
              <p>Nota: {review.note}</p>
            </div>
            <div className={styles.delete} onClick={() => handleDeleteReview(parseInt(review.id))}>
              <p>Excluir</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default WorkReviews
